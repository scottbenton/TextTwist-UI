import React from 'react';
import UserInput from './UserInput';
import RequestButton from './RequestButton';
import RemainingWords from './RemainingWords';
import Instructions from './Instructions';


export default function MainPage(props) {
    const [words, setWords] = React.useState([]);
    const [rack, setRack] = React.useState([]);
    const [score, setScore] = React.useState([]);

    return (
        <>
            {rack.length === 0 && <Instructions />}
            <RequestButton
                setWords={setWords}
                setRack={setRack}
                setScore={setScore}
            />
            <UserInput
                words={words}
                setWords={setWords}
                rack={rack}
                setRack={setRack}
                score={score}
                setScore={setScore}
            />
            <RemainingWords
                words={words}
            />
        </>
    )
}