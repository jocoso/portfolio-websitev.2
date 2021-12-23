import React from 'react';

import TabBar from '../components/tabBar';

// Displayers
import Displayer from '../components/displayer';
import AboutMeDisplayer from "../components/displayers/aboutMeDisplayer";
import SkillsDisplayer from "../components/displayers/skillsDisplayer";
import ProjectsDisplayer from "../components/displayers/projectsDisplayer";
import ContactMeDisplayer from './displayers/contactMeDisplayer';
import ExperienceDisplayer from './displayers/experienceDisplayer';

class MenuWindow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentDisplay: 0,
            tabs: [
                {
                    id: 0,
                    title: "About Me",
                    component: <AboutMeDisplayer />,
                    display: () => this.setDisplayer(0)
                },
                {
                    id: 1,
                    title: "Skills",
                    component: <SkillsDisplayer />,
                    display: () => this.setDisplayer(1),
                },
                {
                    id: 2,
                    title: "Projects",
                    component: <ProjectsDisplayer />,
                    display: () => this.setDisplayer(2),
                },
                {
                    id: 3,
                    title: "Experience",
                    component: <ExperienceDisplayer />,
                    display: () => this.setDisplayer(3),
                },
                {
                    id: 4,
                    title: "Contact Me",
                    component: <ContactMeDisplayer />,
                    display: () => this.setDisplayer(4),
                }
            ],
        }
    }

    setDisplayer = (id) => {
        if(this.state.currentDisplay !== id) {
            let currentDisplay = {...this.state.currentDisplay};
            currentDisplay = id;
            this.setState({currentDisplay});
        }

        return this.state.tabs[id].component;
    }

    

    onClose = () => {

    }

    render() {
        return( <div>
            <TabBar data={this.state.tabs} onClose={this.onClose} />
            <div>
                {this.state.tabs[this.state.currentDisplay].display()}
            </div>
        </div> );
    }
}

export default MenuWindow;
