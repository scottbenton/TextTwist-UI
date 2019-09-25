import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Badge from '../UniversalComponents/TextBadge';

export default function RemainingWords(props) {
    const { words } = props;
    
    return (
        <Container>
            <Row>
                {words.map((word, index) => (
                    <Col key={index} xs={12} sm={6} md={4} lg={3} xl={2}>
                        {Array.from(word.word).map((letter, index) => (
                            <Badge key={index} color={'Primary'} width={20} height={20} fontSize={16}>
                                {(word.found ? letter : '')}
                            </Badge>
                        ))
                        }
                    </Col>
                ))}
            </Row>
        </Container>
    );
}