import React from 'react';
import yes from '../images/blop.gif';
import no from '../images/nope.png';

// Given a list of options, displays a life bar.
export default function LifeBar(props) {

    return <div>
        <div className="skill-item">
            {props.name}: 
            {props.data.levels.map(level => {
                const image = (level.check) ? yes : no;
                return <img src={image} width="40" height="40" title={level.info} />
            })}
        </div>
    </div>
}