import React, {useEffect} from 'react';
import RemainingWords from './WordDisplay/RemainingWords';

import Header from './PageHeader/Header';

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

    return (
        <>
            <Header
                words={words}
                setWords={setWords}
                rack={rack}
                setRack={setRack}
                score={score}
                setScore={setScore}
                status={status}
                setStatus={setStatus}
            />
            <RemainingWords
                words={words}
            />
        </>
    )
}