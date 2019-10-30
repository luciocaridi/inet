import React from 'react';
import arrow from './circled-right-2.png'
import './main.css';

function boton() {
    return (
        <div>
            <img src={arrow} className="Main-arrow" alt="Arrow" />
        </div>
    );
}

export default boton
