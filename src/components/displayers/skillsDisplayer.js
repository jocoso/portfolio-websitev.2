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
                        {
                            name: 'C++', 
                            levels: [
                                {info: 'Familiar: Understand the language and can make things work.', check: true},
                                {info:'Proficient: Have good understanding of the language and requires little research.', check: true},
                                {info:'Excellent: Can code using no references. Uses documentation when needing help.', check: true},
                                {info:'Expert: Understand the ins and outs of the language.', check: true},
                                {info:'Professional: Have +1 years of laboral experience using the language', check: false}
                            ]
                        },
                        {
                            name: 'JS', 
                            levels: [
                                {info: 'Familiar: Understand the language and can make things work.', check: true},
                                {info:'Proficient: Have good understanding of the language and requires little research.', check: true},
                                {info:'Excellent: Can code using no references. Uses documentation when needing help.', check: true},
                                {info:'Expert: Understand the ins and outs of the language.', check: true},
                                {info:'Professional: Have +1 years of laboral experience using the language', check: true}
                            ]
                        },
                        {
                            name: 'React', 
                            levels: [
                                {info: 'Familiar: Understand the language and can make things work.', check: true},
                                {info:'Proficient: Have good understanding of the language and requires little research.', check: true},
                                {info:'Excellent: Can code using no references. Uses documentation when needing help.', check: true},
                                {info:'Expert: Understand the ins and outs of the language.', check: true},
                                {info:'Professional: Have +1 years of laboral experience using the language', check: true}
                            ]
                        },
                        {
                            name: 'C', 
                            levels: [
                                {info:'Familiar: Understand the language and can make things work.', check: true},
                                {info:'Proficient: Have good understanding of the language and requires little research.', check: true},
                                {info:'Excellent: Can code using no references. Uses documentation when needing help.', check: false},
                                {info:'Expert: Understand the ins and outs of the language.', check: false},
                                {info:'Professional: Have +1 years of laboral experience using the language', check: false}
                            ]
                        },
                    ]
                },
                {
                    title: 'Robotic Skills',
                    contents: [
                        {
                            name: 'Arduino', 
                            size: '5',
                            levels: [
                                {info:'Familiar: Understand the process and with hours of work can make things work.', check: true},
                                {info:'Proficient: Have a good understanding of diagrams and requires little research to build something.', check: true},
                                {info:'Excellent: Can understand and modify diagrams. Uses documentation when needing help.', check: true},
                                {info:'Expert: Can create original diagrams and projects.', check: false},
                                {info:'Professional: Have +1 years of laboral experience building machines.', check: false}
                            ]
                        },
                        {
                            name: 'Raspberry PI', 
                            size: '5',
                            levels: [
                                {info:'Familiar: Understand the process and with hours of work can make things work.', check: true},
                                {info:'Proficient: Have a good understanding of diagrams and requires little research to build something.', check: false},
                                {info:'Excellent: Can understand and modify diagrams. Uses documentation when needing help.', check: false},
                                {info:'Expert: Can create original diagrams and projects.', check: false},
                                {info:'Professional: Have +1 years of laboral experience building machines.', check: false}
                            ]
                        }
                    ]
                },
                {
                    title: 'People Skills',
                    contents: [
                        {
                            name: 'Spanish', 
                            size: '5',
                            levels: [
                                {info: 'Basic understanding of the language', check: true},
                                {info:'Can use the language to solve simple problems', check: true},
                                {info:'Can practice OOP using the language', check: true},
                                {info:'Have used the language to create a project', check: true},
                                {info:'Have +1 years of laboral experience using the language', check: false}
                            ]
                        },
                        {
                            name: 'English', 
                            size: '5',
                            levels: [
                                {info: 'Basic understanding of the language', check: true},
                                {info:'Can use the language to solve simple problems', check: true},
                                {info:'Can practice OOP using the language', check: false},
                                {info:'Have used the language to create a project', check: false},
                                {info:'Have +1 years of laboral experience using the language', check: false}
                            ]
                        },
                        {
                            name: 'Teaching', 
                            size: '5',
                            levels: [
                                {info: 'Basic understanding of the language', check: true},
                                {info:'Can use the language to solve simple problems', check: true},
                                {info:'Can practice OOP using the language', check: true},
                                {info:'Have used the language to create a project', check: true},
                                {info:'Have +1 years of laboral experience using the language', check: false}
                            ]
                        }
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
                    <p className="subtitle">{skill.title}</p>
                    <ul className='list-style-type-none'>
                        {skill.contents.map(content => {
                            return <li>
                                <LifeBar name={content.name} data={content} />
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