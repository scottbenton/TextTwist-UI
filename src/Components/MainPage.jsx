import React, {useEffect} from 'react';
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

    const [status, setStatus] = React.useState('NONE'); 

    useEffect(() => {
        var timeout;
        if(status !== "NONE"){
            timeout = setTimeout(() => setStatus('NONE'), 500);
        }
        return () => clearTimeout(timeout);
    }, [status])

    const colors = {
        NONE: '#E9ECEF',
        ERROR: '#ECB4B4',
        CORRECT: '#B4ECB4'
    }

    const styles = {
        jumbotronBase: {
            transition: 'background-color .3s',
            backgroundColor: colors[status],
        }
    };

    return (
        <>
            <Jumbotron fluid style={styles.jumbotronBase}>
                {
                    rack.length === 0 ? <Instructions /> :
                        <UserInput
                            words={words}
                            setWords={setWords}
                            rack={rack}
                            setRack={setRack}
                            setScore={setScore}
                            setStatus={setStatus}
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