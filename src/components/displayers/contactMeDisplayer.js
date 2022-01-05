import React from 'react';
import axios from 'axios';

class ContactMeDisplayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            subject: '',
            comment: '',
        };

     
    }

    handleName = (event) => {
        this.setState({name: event.target.value});
    }

    handleEmail = (event) => {
        this.setState({subject: event.target.value});
    }

    handleComment = (event) => {
        this.setState({comment: event.target.value});
    }


    handleSubmit = (event) => {
        event.preventDefault();

        if(this.state.name === '' || this.state.subject === '' || this.state.comment === '') alert('One or more of the input is empty.');

        axios.post('https://personal-api-fl9fj8zn2-jocoso.vercel.app', this.state).then(
            res => {
                this.setState({sent: true}, alert('Message successfully sent.'));
            }).catch(
                () => {
                    alert('message not sent.');
                }
            )

    }
    
    render() {
    return(<div>
            <h1 className="title">Contact Me</h1>
            <hr className="classy-line" />

            <form onSubmit={this.handleSubmit} className='form-root' method="POST">
                <label className="form-label">
                    Name:
                    <input 
                        type="text" 
                        name={this.state.name} 
                        onChange={this.handleName} 
                    />
                    Subject:
                    <input 
                        type="text" 
                        name={this.state.subject} 
                        onChange={this.handleEmail} 
                    />
                    Comment:
                    <textarea  
                        name={this.state.comment} 
                        onChange={this.handleComment} 
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>);
    }
}

export default ContactMeDisplayer;