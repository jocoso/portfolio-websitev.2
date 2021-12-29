import React from 'react';
import LifeBar from '../lifeBar';
import '../../App.css';

class SkillsDisplayer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            skills: [
                {
                    title: 'Programming Skills',
                    contents: [
                        {name: 'C++', size: '10'},
                        {name: 'JS', size: '10'},
                        {name: 'React', size: '10'}
                    ]
                },
                {
                    title: 'Robotic Skills',
                    contents: [
                        {name: 'Arduino', size: '10'},
                        {name: 'Raspberry PI', size: '5'}
                    ]
                },
                {
                    title: 'People Skills',
                    contents: [
                        {name: 'Spanish', size: '10'},
                        {name: 'English', size: '10'},
                        {name: 'Teaching', size: '10'}
                    ]
                }
            ]
        }
    }

    render() {
        return(<div>
            <div id='skill-displayer'>
                <h1 className='title'> Skills </h1>
                <hr className='classy-line' />
                { this.state.skills.map( (skill) => {
                return <div className="skill-category">
                    <p>{skill.title}</p>
                    <ul className='list-style-type-none'>
                        {skill.contents.map(content => {
                            return <li>
                                <LifeBar name={content.name} size={content.size} />
                            </li>
                        })}
                    </ul>
                </div>
                })}
            </div>
        </div>
        );
    }
}

export default SkillsDisplayer;