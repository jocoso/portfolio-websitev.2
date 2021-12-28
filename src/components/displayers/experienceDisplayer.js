import React from 'react';
import InnerCollapsible from '../innerCollapsible';

class ExperienceDisplayer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            experiences: [
                {
                    id: 0,
                    title: "Education",
                    inners: [
                        {
                            id: "ed-lem",
                            title: "Lehman College",
                            content: "BS. Computer science"
                        },
                        {
                            id: "ed-colum",
                            title: "Columbia",
                            content: "Master in Computer Science"
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