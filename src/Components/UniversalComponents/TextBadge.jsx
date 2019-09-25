import React from 'react';

export default function TwistTile(props) {
    var { width, height } = props;
    const {fontSize, color} = props; // "PRIMARY, SECONDARY"

    const badgeStyles = {
        display: 'inline-block',
        margin: '1px',
        border: '2p solid transparent',
        borderRadius: '.25em',
        fontSize: fontSize,
        textAlign: 'center',
        lineHeight: '1',
        padding: '.25rem',
    }

    if(width){
        badgeStyles.width = width;
    }
    if(height){
        badgeStyles.height = height;
    }

    return (
        <div style={badgeStyles} className={(color === "Secondary" ? "bg-secondary" : "bg-primary") + " text-white"}>
            {props.children}
        </div>
    )
}