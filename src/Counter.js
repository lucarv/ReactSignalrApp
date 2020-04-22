import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

var counter = 0;
const count = () => {
    console.log('Clicked: ' + counter)
    counter++;
}

const Counter = () => {

    return (
        <div className='counter'>
            <h3>Counter Component</h3>
            <Button variant="danger" size="sm" className="mr-2" onClick={count}> Perigo </Button>
        </div>
    )
}


export default Counter;