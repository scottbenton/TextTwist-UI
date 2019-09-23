import React from 'react';
import UserInput from './UserInput';
import RequestButton from './RequestButton';
import RemainingWords from './RemainingWords';
import Instructions from './Instructions';

import Jumbotron from 'react-bootstrap/Jumbotron';

export default function MainPage(props) {
    const [words, setWords] = React.useState([]);
    const [rack, setRack] = React.useState([]);

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
                        />
                }
                <RequestButton setWords={setWords} setRack={setRack} />

            </Jumbotron>
            <RemainingWords
                words={words}
            />
        </>
    )
}