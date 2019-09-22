import React from 'react';

export default function RemainingWords(props) {
    const {words} = props;
    const hasCreatedRack = false;
    if (hasCreatedRack) {
        return <InGameMessage />;
    } else {
      return <InitialMessage />;
    }
}

function InitialMessage(props) {
    return <h1>Welcome to Text Twist Clone!</h1>;
}
  
function InGameMessage(props) {
return <h1>You have created a rack</h1>;
}