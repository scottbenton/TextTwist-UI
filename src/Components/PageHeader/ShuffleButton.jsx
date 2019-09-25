import React from 'react';
import Button from 'react-bootstrap/Button';

export default function ShuffleButton(props) {
    const { setRack } = props;

    const shuffleRack = () => {
        setRack(prevRack => {
            var newRack = [...prevRack];

            for (let i = newRack.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [newRack[i], newRack[j]] = [newRack[j], newRack[i]];
            }
            return newRack;
        })
    }

    return (
        <Button onClick={shuffleRack} variant={'outline-secondary'} style={{marginLeft: 'auto', marginRight: 'auto'}}>
            ↻
        </Button>
    )
}