import React from 'react';
import blop from '../images/blop.png';

export default function LifeBar(props) {
    
    let stars = [];
    
    for(let i = 0; i < props.size; i++) {
        stars[i] = <img src={blop} width="40" height="40" />;
    }


    return <div>
        <div>
            {props.name}: 
            {stars}
        </div>
        {/* {stars() + ' ' + '(' + props.size + ')'} */}
    
    </div>
}