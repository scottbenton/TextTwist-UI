import React from 'react';
import UserInput from './UserInput';
import RequestButton from './RequestButton';
import RemainingWords from './RemainingWords';
import Instructions from './Instructions';
import Score from './Score';

import Jumbotron from 'react-bootstrap/Jumbotron';

export default function MainPage(props) {
    const [words, setWords] = React.useState([]);
    const [rack, setRack] = React.useState([]);
    const [score, setScore] = React.useState(0);

    return (
        <>
            <Jumbotron fluid>
                {
                    rack.length === 0 ? <Instructions /> :
                        <UserInput
                            words={words}
                            setWords={setWords}
                            rack={rack}
                            setRack={setRack}
                            setScore={setScore}
                        />
                }
                <div>
                    {rack.length === 0 ? '' : <Score score={score} />}
                    <RequestButton setWords={setWords} setRack={setRack} setScore={setScore} />
                </div>

            </Jumbotron>
            <RemainingWords
                words={words}
            />
        </>
    )
}