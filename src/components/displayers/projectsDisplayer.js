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
                    content: <div className="project-content"> 
                        <strong>Language:</strong> HTML, CSS, JavaScript, AJAX
                        <p>A website application that uses the Marvel API to display cards of every iteration of a superhero.</p>
                        <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi2.wp.com%2Fwww.titanui.com%2Fwp-content%2Fuploads%2F2015%2F02%2F28%2FMarvel-Icons-Sketch.jpg&f=1&nofb=1'/>
                        <a href="https://github.com/jocoso/MarvelWiki" target="_blank"> [ Project GitHub ] </a>
                        <a href="https://jocoso.github.io/MarvelWiki/" target="_blank"> [ Project Website] </a>
                    </div>,
                },
                {
                    id: 1,
                    img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F000%2F621%2F594%2Foriginal%2Fcat-flat-logo-vector.jpg&f=1&nofb=1',
                    title: 'KittyVA',
                    content: <div className="project-content"> 
                        <strong>Language:</strong> Python 
                        <p>A software application I created to help organize the user's computer. KittyVA is a cute virtual assistant written in python that tells you jokes, looks for websites, plays music for you, and solves simple math problems.
                        </p>
                        <img src='https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/Bonzi_Buddy.png/300px-Bonzi_Buddy.png' />
                        <a href="https://github.com/jocoso/KittyVA" target="_blank"> [ Project GitHub ] </a>
                    </div>,
                },
                {
                    id: 2,
                    img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fdragon-logo-design-vector-illustration-awesome-t-rex-158326111.jpg&f=1&nofb=1',
                    title: 'Rawr',
                    content: <div className="project-content"> 
                    <strong>Language:</strong> Java 
                    <p>A Java library to create text-adventure games I created during college.</p>
                    <img src='https://github.com/jocoso/Rawr/blob/master/res/example.png?raw=true' />
                    <a href="https://github.com/jocoso/Rawr" target="_blank"> [ Project GitHub ] </a>
                    </div>,
                },
                {
                    id: 3,
                    img: 'https://cdn.conceptartempire.com/images/02/4642/01-sudden-weather-a-cute-robot.jpg',
                    title: 'Agent of Peace',
                    content: <div className="project-content"> 
                    <strong>Language:</strong> C#, Unity 
                    <p>A small project I created and designed by me. A post-apocalyptic world healing after a traumatizing war.</p>
                    <img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/de703437-e01f-42f5-9cb5-5793767740d1/dbeskzd-df445021-5d27-48ad-aad1-b30d293c8816.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2RlNzAzNDM3LWUwMWYtNDJmNS05Y2I1LTU3OTM3Njc3NDBkMVwvZGJlc2t6ZC1kZjQ0NTAyMS01ZDI3LTQ4YWQtYWFkMS1iMzBkMjkzYzg4MTYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ixzPAsWhUu816OKHTkq6YO9F9-nbpI-wzokrGwsGfFo' />
                    <a href="https://github.com/jocoso/agent-of-peace" target="_blank"> [ Project GitHub ] </a>
                    </div>,
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
            <hr className='classy-line'/>

            <div className='portfolio'>
            {this.state.projects.map(
                (project) => {
                    return <button className='game-button' onClick={ () => this.showTrue(project.id) }><ContentImage data={project} /></button>
                }
            )}
            </div>

            {this.state.showModal?this.state.showModal:''}

        </div>);
    }
}

export default ProjectsDisplayer;