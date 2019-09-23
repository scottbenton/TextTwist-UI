import React from 'react';
import UserInput from './UserInput';
import RequestButton from './RequestButton';
import RemainingWords from './RemainingWords';
import Instructions from './Instructions';


export default function MainPage(props) {
    const [words, setWords] = React.useState([]);
    const [rack, setRack] = React.useState([]);

    return (
        <>
            {rack.length === 0 && <Instructions />}
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