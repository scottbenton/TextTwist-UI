import React from 'react';

import RequestButton from './RequestButton';

export default function MainPage(props) {
    const [words, setWords] = React.useState([]);
    const [rack, setRack] = React.useState('');
    
    return (
        <>
            <RequestButton setWords={setWords} setRack={setRack} />
        </>
    )
}