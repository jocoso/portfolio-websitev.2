import React from 'react';
import '../../App.css';
import ContentImage from '../contentImage';
import Modal from '../modal';

class ProjectsDisplayer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: null,
            projects: [
                {
                    id: 0,
                    img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvistapointe.net%2Fimages%2Fmarvel-icon-wallpaper-12.jpg&f=1&nofb=1',
                    title: 'Marvel Wiki',
                    content: <div> 
                        <p>A website application that uses the
                        Marvel API to display cards of every iteration of a superhero',</p>
                        <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi2.wp.com%2Fwww.titanui.com%2Fwp-content%2Fuploads%2F2015%2F02%2F28%2FMarvel-Icons-Sketch.jpg&f=1&nofb=1'/>
                    </div>,
                },
                {
                    id: 1,
                    img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F000%2F621%2F594%2Foriginal%2Fcat-flat-logo-vector.jpg&f=1&nofb=1',
                    title: 'KittyVA',
                    content: <div> 
                        <p>An Application created to help organizing your computer.
                            KittyVA is a cute virtual assistant written in pythong
                            that will take hold of whatever you need.
                        </p>
                        <img src='https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/Bonzi_Buddy.png/300px-Bonzi_Buddy.png' />
                    </div>,
                },
                {
                    id: 2,
                    img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fdragon-logo-design-vector-illustration-awesome-t-rex-158326111.jpg&f=1&nofb=1',
                    title: 'Rawr',
                    content: 'Amaria',
                }
            ]
        }
    }

    

    onClose = () => {
        let {showModal} = this.state;
        showModal = null;
        this.setState({showModal});
    }

    showTrue = (id) => {
        let { showModal, projects } = this.state;
        showModal = <Modal onClose={this.onClose} data={projects[id]} />
        this.setState({showModal, projects});
    }

    render() {
        return(<div id='projects-displayer'>
            <h1 className='title'>My Projects</h1>
            <hr />
            {this.state.projects.map(
                (project) => {
                    return <button onClick={ () => this.showTrue(project.id) }><ContentImage data={project} /></button>
                }
            )}
            

            {this.state.showModal?this.state.showModal:''}

        </div>);
    }
}

export default ProjectsDisplayer;