import React from 'react';
import InnerCollapsible from '../innerCollapsible';

class ExperienceDisplayer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            experiences: [
                {
                    id: 0,
                    title: 'Education',
                    inners: [
                        {
                            id: 'ed-lem',
                            title: 'Lehman College',
                            content: 'BS. Computer science'
                        },
                        {
                            id: 'ed-colum',
                            title: 'Columbia',
                            content: '(Applied) Master in Computer Science'
                        }
                    ],
                },
                {
                    id: 1,
                    title: 'Work Experience',
                    inners: [
                        {
                            id: 'wk-leaspec',
                            title: 'Learning Specialist Science Teacher (Valence College Prep)',
                            content: <ul>
                                <li>Communicate and interact with parents on student's academic progress</li>
                                <li>Adhere to and comply with all the school rules and guidelines</li>
                                <li>Mantain the student's performance longs to help the teacher elevate the kids' confidence positively</li>
                                <li>Responsible for creating class materials that students would use as enhancements to textbooks</li>
                            </ul>
                        },
                        {
                            id: 'wk-sfeng',
                            title: 'Software Engineer (DoSomething)',
                            content: <ul>
                                <li>Helped implement component schemas using GraphQL and Contentful</li>
                                <li>Created a template focused on displaying company-related information using React and SASS</li>
                                <li>Write React code to facilitate communication between GraphQL and the main page, Phoenix-next</li>
                                <li>Test software development methodology in an agile environment</li>
                            </ul>
                        },
                        {
                            id: 'wk-ttp',
                            title: 'Teacher Assistant (Lehman College Math Lab)',
                            content: <ul>
                                <li>Worked with a variety of students solving computer programming problems</li>
                                <li>Assigned students custom-made challenges they could do on their own</li>
                                <li>Provided specialized support for students with disabilities</li>
                            </ul>
                        },
                        {
                            id: 'wk-doe',
                            title: 'Technology Support Intern (DOE)',
                            content: <ul>
                                <li>Organized and kept an inventory of all school equipment and maintaned electronic devices</li>
                                <li>Assisted teachers regarding their laptops, computers, and printers</li>
                                <li>I Contacted with DOE IT main desk consistently to troubleshoot the school's issues</li>
                            </ul>
                        }
                    ],
                }
            ]
        }
    }

    render() {
        return(<div>
            <h1 className="title">Experience</h1>
            <hr className="classy-line"/>

            {this.state.experiences.map(
                (experience) => {
                    return <InnerCollapsible data={experience} />
                }
            )}
        </div>);
    }
}

export default ExperienceDisplayer;