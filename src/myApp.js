import React from 'react';
import Counter from './Counter.js';
import Albums from './Albums.js';
import { Jumbotron } from 'react-bootstrap';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <div className='app'>
      <Jumbotron>
        <Counter />
        <br />
        <Albums name="mainly a map of me" sleeve='https://ekskog.net/xtr/static/img/mamom.jpg' />
      </Jumbotron>     
      <Jumbotron>
        <Counter />
        <br />
        <Albums name="osboa" sleeve='https://ekskog.net/xtr/static/img/osboa.png' />
      </Jumbotron> 
    </div>
  )
}

export default App;
