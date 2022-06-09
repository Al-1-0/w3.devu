import React from 'react';
import '../App.css';
import { Button } from './Button';
import './WebContent.css';

function WebContent() {
    return (
        <div className='web-container'>
            <h1>Positive Deployment Pathways</h1>
            <p>You're one click away from reaching your potential</p>
            <div className="hero-btns">
                <Button  className='btns' buttonStyle='btn--outline'
                buttonSize='btn--large'>ENQUIRE</Button>
            </div>
        </div>
    )
    }
    
    export default  WebContent 
