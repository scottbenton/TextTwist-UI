import React, {useEffect} from 'react';

export default function UserInput(props){
    const {words, setWords, rack} = props;

    const [userInput, setUserInput] = React.useState('');

    const handleKeyDown = (event) => {
        console.log(event.keyCode);
    }

    useEffect(() => {
        // On load, add this event listener
        document.addEventListener('keydown', handleKeyDown);
        // On unload, remove this event listener
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        }
    }, []);

    return (
        <>

        </>
    );
}