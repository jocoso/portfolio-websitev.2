import React from 'react';
import '../App.css';

export default function Modal(props) {
    return(
        <div className='modal-back'>  
            <div className='modal-front'>
                <button onClick={() => props.onClose()} style={{float: 'right'}}>X</button>
                <h1>{props.data.title}</h1>
                <hr className="classy-line" />
                <div>{props.data.content}</div>
            </div>
        </div>
    );
}
