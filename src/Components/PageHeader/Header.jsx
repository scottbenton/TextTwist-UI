import React from 'react'

import UserInput from './UserInput';
import RequestButton from './RequestButton';
import Instructions from './Instructions';
import Score from './Score';

import Jumbotron from 'react-bootstrap/Jumbotron';
import AnswersButton from './AnswersButton';

import { Container, Row, Col } from 'react-bootstrap';

import TextBadge from '../UniversalComponents/TextBadge';

export default function Header(props) {
    const { status, setStatus, words, setWords, rack, setRack, score, setScore } = props;

    const colors = {
        NONE: '#E9ECEF',
        ERROR: '#ECB4B4',
        CORRECT: '#B4ECB4'
    }

    const styles = {
        jumbotronBase: {
            padding: '4px',
            transition: 'background-color .3s',
            backgroundColor: colors[status],
        },
        container: {
            margin: '8px',
            maxWidth: '100%',
        }
    };

    return (

        <Jumbotron fluid style={styles.jumbotronBase}>
            <Container style={styles.container}>
                <Row>
                    <Col xs={12}>
                        <TextBadge fontSize={36}>
                            text twist    
                        </TextBadge>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
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
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={6}>
                        {rack.length > 0 && <Score score={score} />}
                    </Col>
                    <Col xs={6} sm={3}>
                        {rack.length > 0 && <AnswersButton setWords={setWords} />}
                    </Col>
                    <Col xs={6} sm={3}>
                        <RequestButton setWords={setWords} setRack={setRack} setScore={setScore} />
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}