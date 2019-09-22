import React, { useEffect } from 'react';

import { Container, Row, Col, Badge } from 'react-bootstrap';

export default function UserInput(props) {
    const { words, setWords, rack, setRack } = props;

    const [userInput, setUserInput] = React.useState('');

    const handleKeyDown = (event) => {
        event.preventDefault();

        var key = event.key.toUpperCase();
        if (key === 'BACKSPACE') {
            var removedChar = '';
            setUserInput(prevInput => {
                removedChar = prevInput[prevInput.length - 1];
                return prevInput.length > 0 ? prevInput.slice(0, -1) : prevInput;
            })
            if (removedChar) {
                setRack(prevRack => {
                    var rack = [...prevRack];
                    var found = false;
                    var newRack = rack.map((char) => {
                        if (!found && char.used && char.char === removedChar) {
                            found = true;
                            return { char: char.char, used: false };
                        }
                        else {
                            return char;
                        }
                    })
                    if (found) {
                        return newRack;
                    } else {
                        return prevRack;
                    }
                })
            }
        }
        // If the key pressed was alphabetical.
        else if (key.length === 1 && key.match(/[A-Z]/i)) {
            var found = false;
            setRack(prevRack => {
                var rack = [...prevRack];
                var newRack = rack.map((char) => {
                    if (!found && key === char.char && !char.used) {
                        found = true;
                        return { char: char.char, used: true };
                    }
                    else {
                        return char;
                    }
                });
                if (found) {
                    return newRack;
                } else {
                    return prevRack;
                }
            })
            if (found) {
                setUserInput(prevInput => {
                    prevInput += key;
                    return prevInput;
                })
            }
        }
        else if (key === "ENTER") {
            console.log("ENTER WAS PRESSED");
            setWords(prevWords => {
                var found = false;
                var newWords = prevWords.map((word) => {
                    if (!word.found && word.word === userInput) {
                        setUserInput('');
                        found = true;
                        return { word: word.word, found: true }
                    }
                    else {
                        return word;
                    }
                })
                if (found) {
                    return newWords;
                }
                else {
                    return prevWords;
                }
            })
        }
    }

    useEffect(() => {
        console.log(userInput);
    }, [userInput])

    useEffect(() => {
        // On load, add this event listener
        document.addEventListener('keydown', handleKeyDown);
        // On unload, remove this event listener
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        }
    }, []);

    var styles = {
        divStyle: {
            'fontSize': '36px',
            'padding': '4px',
            'width': '100%',
            'textAlign': 'center',
        },
        centeringDiv: {
            'display': 'inline-block',
            'margin': '0 auto',
        },
        badgeStyle: {
            'display': 'inline-block',
            'margin': '4px',
            'width': '50px',
            'border': '5px solid transparent',
            'borderRadius': '15px',
            'height': '50px',
            'textAlign': 'center',
            'lineHeight': '1',
        }
    }


    return (
        <Container>
            <Row>
                <Col>
                    <div style={styles.divStyle}>
                        <div style={styles.centeringDiv}>
                            {Array.from(userInput).map((char, index) => (
                                <div key={index} className="bg-primary text-white" style={styles.badgeStyle}>{char}</div>
                            ))}
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div style={styles.divStyle}>
                        <div style={styles.centeringDiv}>
                            {rack.map((char, index) => {
                                return char.used ? null : <div key={index} className="bg-secondary text-white" style={styles.badgeStyle}>{char.char}</div>
                            })}
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}