import React from 'react';

export default function LifeBar(props) {
    const stars = () => {
        let stars = "";
        
        for(let i = 0; i < props.size; i++) {
            stars += '*';
        }

        return stars;
    }
    return <div>
        <div>{props.name}: {stars() + ' ' + '(' + props.size + ')'}</div>
    </div>
}