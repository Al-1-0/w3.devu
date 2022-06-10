import React from 'react';
import '../App.css';
import { NeonButton } from './NeonButton';
import './Articles.css';

function Article01() {
    return (
        <div className='article-container'>
           
           <h1>Recent Work</h1>
           <p>Although our projects mainly use modern, professional tech stacks, we pride ourselves in our knowledge of legacy tech too. </p>
           <div className="hero-btns">
               <NeonButton className='btns' buttonStyle='btn--outline'
               buttonSize='btn--large' >VISIT PROJECT</NeonButton>
               {/*<Button className='btns' buttonStyle='btn--primary'
               buttonSize='btn--large'>WATCH TRAILER <i className='far fa-play-circle' />
    </Button>*/}

           </div>
    
        </div>
    );
}

export default Article01