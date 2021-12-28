import React from 'react';
import "../../App.css";
import pixelPortrait from "../../images/coolpixel.png"

export default function AboutMeDisplayer(props) {
    return(<div id="about-me">
        <h1 className="title">About Me</h1>
        <hr className="classy-line" />
        <div>
            <div className="wrapper">
                <div className="left">
                    <img src={pixelPortrait} />
                </div>
                <div className="right">
                    <h4>Joshua Collado</h4>
                <p>A recent graduate from Lehman College who Loves programming,
            writing, drawing and designing games on his free time.</p>
                </div>
            </div>
        </div>
    </div>);
}