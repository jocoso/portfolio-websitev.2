import React from 'react';

export default function Modal(props) {
    return(
        <div style={{ 
            position: 'fixed',
            zIndex: '1',
            left: '0',
            top: '0',
            width: '100%',
            height: '100%',
            overflow: 'scroll',
            backgroundColor: 'rgba(0, 0, 0, 0.4)'
        }}>  
            <div style={{
                backgroundColor: '#fefefe',
                margin: '5% auto',
                padding: '10px',
                border: '1px solid #888',
                width: '60%',
                height: '80%',
                overflow: 'scroll',
                textAlign: 'center',
                color: 'black',
            }}>
                <button onClick={() => props.onClose()} style={{float: 'right'}}>X</button>
                <h1>{props.data.title}</h1>
                <div>{props.data.content}</div>
            </div>
        </div>
    );
}
