import React from 'react';
import axios from 'axios';

class ContactMeDisplayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            subject: '',
            comment: '',
            email: ''
        };

     
    }

    handleName = (event) => {
        this.setState({name: event.target.value});
    }

    handleSubject = (event) => {
        this.setState({subject: event.target.value});
    }

    handleComment = (event) => {
        this.setState({comment: event.target.value});
    }

    handleEmail = (event) => {
        this.setState({email: event.target.value});
    }

    cleanForm = () => {
        this.setState({
            name: '',
            subject: '',
            comment: '',
            email: ''
        });
    }


    handleSubmit = (event) => {
        event.preventDefault();

        if(this.state.name === '' || this.state.subject === '' || this.state.email === ''|| this.state.comment === '') alert('One or more of the input is empty.');
        else {
            axios.post('https://personal-api2.herokuapp.com/api/v1', this.state).then(
                res => {
                    this.setState({sent: true}, this.cleanForm());
                    alert('Thank you!');
                }).catch(
                    (err) => {
                    alert('Sorry, we encountered an error in the submission.');
                }
            )
        }

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
                        value={this.state.name} 
                        onChange={this.handleName} 
                    />
                    Email:
                    <input
                        type="text"
                        value={this.state.email}
                        onChange={this.handleEmail} 
                    />
                    Subject:
                    <input 
                        type="text" 
                        value={this.state.subject} 
                        onChange={this.handleSubject} 
                    />
                    Comment:
                    <textarea  
                        value={this.state.comment} 
                        onChange={this.handleComment} 
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>);
    }
}

export default ContactMeDisplayer;