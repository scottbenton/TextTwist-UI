import React from 'react';
import Button from 'react-bootstrap/Button';

export default function AnswersButton(props) {
    const {setWords} = props;

    const showAnswers = () => {
        setWords(prevWords => {
            var newWords = [...prevWords];
            newWords.forEach((word) => word.found = true);
            return newWords;
        })
    }

    const styles = {
        button: {
            float: 'right',
        }
    }

    return (
        <Button onClick={showAnswers} variant='outline-primary' style={styles.button}>
            Show Answers
        </Button>
    )
}