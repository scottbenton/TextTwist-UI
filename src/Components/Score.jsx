import React from 'react';

export default function Score(props) {
    const scoreStyle = {
        display: "inline-block"
    }
    return (
        <h4 style={scoreStyle}>
            Score: {props.score}
        </h4>
    );
}