import React from 'react';
import LifeBar from '../lifeBar';

export default function SkillsDisplayer(props) {
    return(<div>
        <ul style={{position:"relative", left: "10vw", top: "5vh"}}>
            <li>
                <LifeBar name="C++" size="20" />
            </li>
            <li>
                <LifeBar name="JS" size="20" />
            </li>
            <li>
                <LifeBar name="React" size="20" />
            </li>
        </ul>
    </div>);
}