import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron';


export default function Instructions() {
    return (
        <Jumbotron fluid>
            <Container>
                <h1>Welcome to Scott and Sophia's TextTwist Clone!</h1>
                <h3>Instructions</h3>
                <p>

                    <strong>Object:</strong> To enter as many valid words as possible that can be formed from the given 7-letter rack
                </p>
                <p>
                    <strong>Game Play:</strong> To start, click <i>Get New Rack</i>. Use your keyboard to start typing a word from the letters in the rack. If you made a mistake, hit <i>Backspace</i>. Once you have finished typing the word, hit <i>Enter</i>. If the word is valid it will appear in a set of blanks below the rack and your typing area will be cleared.
                </p>
            </Container>
        </Jumbotron>
    );
}