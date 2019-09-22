import React, {useEffect} from 'react';
import UserInput from './UserInput';
import RequestButton from './RequestButton';
import RemainingWords from './RemainingWords';


export default function MainPage(props) {
    const [words, setWords] = React.useState([]);
    const [rack, setRack] = React.useState([]);
    
    return (
        <>
            <RequestButton setWords={setWords} setRack={setRack} />
            <UserInput 
                words={words}
                setWords={setWords}
                rack={rack}
                setRack={setRack}
            />
            <RemainingWords 
                words={words}
            />
        </>
    )
}