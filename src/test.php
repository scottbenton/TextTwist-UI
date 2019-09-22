<?php
    if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    //this is the basic way of getting a database handler from PDO, PHP's built in quasi-ORM
    $dbhandle = new PDO("sqlite:scrabble.sqlite") or die("Failed to open DB");
    if (!$dbhandle) die ($error);
 
    //this is a sample query which gets some data, the order by part shuffles the results
    //the limit 0, 10 takes the first 10 results.
    // you might want to consider taking more results, implementing "pagination", 
    // ordering by rank, etc.
    $query = "SELECT rack FROM racks WHERE length=7 and weight <= 10 order by random() limit 1";
    
    //this next line could actually be used to provide user_given input to the query to 
    //avoid SQL injection attacks
    $statement = $dbhandle->prepare($query);
    $statement->execute();
    
    //The results of the query are typically many rows of data
    //there are several ways of getting the data out, iterating row by row,
    //I chose to get associative arrays inside of a big array
    //this will naturally create a pleasant array of JSON data when I echo in a couple lines
    $rack = $statement->fetchAll(PDO::FETCH_ASSOC);
    
    $rack = $rack[0];
    $rack = $rack['rack'];
    
    $words = array();
    
    // Get all combinations of the letters in the rack, and grab their words
    for($x = 1; $x < pow(2, 7); $x++ ){
        $bin = decbin($x);
        $subRack = '';
        for($y = 1; $y <= strlen($bin); $y++){
            if($bin[strlen($bin)-$y] == '1'){
                $subRack = $rack[strlen($rack) - $y] . $subRack;
            }
        }
        $subrackQuery = "SELECT words FROM racks WHERE rack=\"" . $subRack . "\"";
        $subRackStatement = $dbhandle->prepare($subrackQuery);
        $subRackStatement->execute();
        
        $subRackWords = $subRackStatement->fetch(PDO::FETCH_ASSOC)["words"];
        // If it found words for a particular subrack, add them to the words array
        if($subRackWords !== null){
            $subRackWordArray = explode("@@", $subRackWords);
            array_push($words, ...$subRackWordArray);
        }
    }
    
    $words = array_unique($words);

    $returnObj->rack = $rack;
    $returnObj->words = $words;
    
    //this part is perhaps overkill but I wanted to set the HTTP headers and status code
    //making to this line means everything was great with this request
    header('HTTP/1.1 200 OK');
    //this lets the browser know to expect json
    header('Content-Type: application/json');

    //this creates json and gives it back to the browser
    echo json_encode($returnObj);
    }
else {
  $file = '/tmp/sample-app.log';
  $message = file_get_contents('php://input');
  file_put_contents($file, date('Y-m-d H:i:s') . " Received message: " . $message . "\n", FILE_APPEND);
}
?>