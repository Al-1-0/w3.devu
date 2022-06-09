import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Digital.css';

function Digital() {
    return (
        <div className='digital-container'>
            <h1>Digital Solutions</h1>
            <p>Enterprises & Businesses: Plan with us. </p>
            <div className="hero-btns">
                <Button  className='btns' buttonStyle='btn--outline'
                buttonSize='btn--large'>ENQUIRE</Button>
            </div>
        </div>
    )
    }
    
    export default  Digital 
