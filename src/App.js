import React from 'react';
import logo from './logo.svg';
import './App.css';

import Button from 'react-bootstrap/Button';

import axios from 'axios';

const CORS_API = 'https://cors-anywhere.herokuapp.com/'
const PHP_URL = 'http://texttwistbackend-env.u2wnmj8hvu.us-east-2.elasticbeanstalk.com./';


function App() {

  const makeCall = (evt) => {
    evt.preventDefault();

    axios({
      method: 'get',
      url: CORS_API + PHP_URL,
    }).then((results) => console.log(results));
  }

  return (
    <Button variant='outline-primary' onClick={makeCall}>
      Test
    </Button>
  );
}

export default App;
