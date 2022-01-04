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
                            title: 'Learning Specialist',
                            content: <ul>
                                <li>Communicate and interact with parents on student's academic progress</li>
                                <li>Adhere to and comply with all the school rules and guidelines</li>
                                <li>Mantain the student's performance longs to help the teacher elevate the kids' confidence positively</li>
                                <li>Responsible for creating class materials that students would use as enhancements to textbooks</li>
                            </ul>
                        },
                        {
                            id: 'ed-colum',
                            title: 'Columbia',
                            content: '(Applied) Master in Computer Science'
                        }
                    ],
                }
            ]
        }
    }

    render() {
        return(<div>
            {this.state.experiences.map(
                (experience) => {
                    return <InnerCollapsible data={experience} />
                }
            )}
        </div>);
    }
}

export default ExperienceDisplayer;