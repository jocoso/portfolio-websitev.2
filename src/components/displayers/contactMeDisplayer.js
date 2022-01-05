import React from 'react';
import validator from 'validator';

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
        this.setState({email: event.target.value});
    }

    handleComment = (event) => {
        this.setState({comment: event.target.value});
    }


    handleSubmit = (event) => {
        event.preventDefault();

        if(this.state.name === '' || this.state.subject === '' || this.state.comment === '') alert('One or more of the input is empty.');

        
           
        fetch('http://localhost:3000/send', {
            method: 'POST',
            body: JSON.strongify(this.state),
            headers: {
                'Accept' : 'application/json',
                'Content-Type' :'application/json'
            },
        }).then(
            (response) => (response.json()) 
        ).then((response) => {
            if(response.status === 'success') {
                alert('Message Sent.');
            } else if(response.status === 'fail') {
                alert('Message failed to send.');
            }
        })

        alert('Your form was submitted');
        
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