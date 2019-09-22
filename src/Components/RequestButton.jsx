import React from 'react';
import Button from 'react-bootstrap/Button';

import axios from 'axios';

const CORS_API = 'https://cors-anywhere.herokuapp.com/'
const PHP_URL = 'http://texttwistbackend-env.u2wnmj8hvu.us-east-2.elasticbeanstalk.com./';

export default function RequestButton(props) {
    const {setWords, setRack} = props; 

    const makeCall = (evt) => {
        evt.preventDefault();

        axios({
            method: 'get',
            url: CORS_API + PHP_URL,
        }).then((results) => {
            console.log(results.data);
            setRack(results.data.rack);
            var wordsObject = Object.keys(results.data.words);
            
            var wordsArray = []; 
            Object.keys(wordsObject).forEach((key) => {
                var wordObj = {
                    word: results.data.words[key],
                    found: false,
                }
                wordsArray.push(wordObj);
            });
            console.log(wordsArray);
            setWords(wordsArray);
        });
    }

    return (
        <Button variant='outline-primary' onClick={makeCall}>
            Get New Rack
        </Button>
    );
}