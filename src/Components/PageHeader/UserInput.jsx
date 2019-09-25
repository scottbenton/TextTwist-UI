import React, { useEffect, useCallback } from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import ShuffleButton from './ShuffleButton';

import Badge from '../UniversalComponents/TextBadge';

export default function UserInput(props) {
    const { setWords, rack, setRack, setScore, setStatus } = props;

    const [userInput, setUserInput] = React.useState('');

    const setAllUnused = useCallback(() => {
        setRack(prevRack => {
            var newRack = [...prevRack];
            newRack.forEach(char => {
                char.used = false;
            });
            console.log(newRack);
            return newRack;
        })
    }, [setRack]);

    const handleKeyDown = useCallback((event) => {
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
            setUserInput(prevInput => {
                var newInput = prevInput;
                setWords(prevWords => {
                    console.log(prevWords);
                    console.log(prevInput);
                    var foundWord = prevWords.findIndex((word) => {
                        return !word.found && word.word === prevInput;
                    });
                    if (foundWord >= 0) {
                        setAllUnused();
                        newInput = '';
                        var newWords = [...prevWords];
                        newWords[foundWord].found = true;
                        setScore(prevScore => prevScore + 10);
                        setStatus("CORRECT");
                        return newWords;
                    } else {
                        setAllUnused();
                        setStatus("ERROR");
                        newInput = '';
                        return prevWords;
                    }
                })
                return newInput;
            })
        }
    }, [setAllUnused, setRack, setWords, setScore]);


    useEffect(() => {
        console.log(userInput);
    }, [userInput])

    useEffect(() => {
        // On load, add this event listener
        document.addEventListener('keydown', (event) => handleKeyDown(event));
        // On unload, remove this event listener
        return () => {
            document.removeEventListener('keydown', (event) => handleKeyDown(event));
        }
    }, [handleKeyDown]);

    var styles = {
        colStyle: {
            fontSize: '36px',
            width: '100%',
            textAlign: 'center',
            padding: '4px',
        },
        centeringDiv: {
            width: '100%',
            display: 'inline-block',
            margin: '0 auto',
        },
        badgeStyle: {
            display: 'inline-block',
            margin: '4px',
            width: '50px',
            border: '5px solid transparent',
            borderRadius: '15px',
            height: '50px',
            textAlign: 'center',
            lineHeight: '1',
        }
    }


    return (
        <Container>
            <Row>
                <Col style={styles.colStyle}>
                    <div style={styles.centeringDiv}>
                        {Array.from(userInput).map((char, index) => (
                            <Badge key={index} color={'Primary'} fontSize={36} width={50} height={50}>
                                {char}
                            </Badge>
                        ))}
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs={1} />
                <Col xs={10} style={styles.colStyle}>
                    <div style={styles.centeringDiv}>
                        {rack.map((char, index) => (char.used ? null :
                                <Badge key={index} color={'Secondary'} fontSize={36} width={50} height={50}>
                                    {char.char}
                                </Badge>
                        ))}
                    </div>
                </Col>
                <Col xs={1}>
                    <ShuffleButton setRack={setRack} />
                </Col>
            </Row>
        </Container>
    );
}