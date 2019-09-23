import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


export default function RemainingWords(props) {
    const { words } = props;
    var styles = {
        divStyle: {
            'fontSize': '6px',
            'padding': '1px',
            'width': '100%',
        },
        badgeStyle: {
            'display': 'inline-block',
            'margin': '1px',
            'width': '20px',
            'border': '2px solid transparent',
            'borderRadius': '5px',
            'height': '20px',
            'textAlign': 'center',
            'lineHeight': '1',
        }
    }
    return (
        <Container>
            <Row>
                {words.map((word, index) => (
                    <Col key={index} xs={12} sm={6} md={4} lg={3} xl={2}>
                        {Array.from(word.word).map((letter, index) => (
                            <div key={index} style={styles.badgeStyle} className="bg-primary text-white">
                                {(word.found ? letter : '')}
                            </div>
                        ))
                        }
                    </Col>
                ))}
            </Row>
        </Container>
    );
}