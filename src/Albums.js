import React from 'react';
import './App.css'
import 
import KC from './static/kc.png'


 
const Albums = ({name, sleeve}) => {

    var counter = 0;
    const count = () => {
        console.log('Clicked: ' + counter)
        counter++;
    }

    return (
        <div className="albums" >
            <h3> { name } </h3>
            <img src={ sleeve } alt="sleeve" style={{ width: 200, height: 200 }} />
        </div >
    )
}

export default Albums;