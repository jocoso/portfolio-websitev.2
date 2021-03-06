import React from 'react';
import '../../App.css';
import pixelPortrait from '../../images/coolpixel.png'

export default function AboutMeDisplayer() {
    const info = 'A recent graduate from Lehman College who Loves programming,\n writing, drawing and designing games on his free time.';
    return(
        <div id='about-me'>
            <h1 className='title'>About Me</h1>
            <hr className='classy-line' />
            <div>
                <div className='wrapper'>
                    <span className='title'>Joshua Collado</span>
                    <div className='left'>
                        <img src={pixelPortrait} />
                    </div>
                    <div className='right'>
                        <p>{info}</p>    
                    </div>
                    
                </div>
            </div>
        </div>
    );
}