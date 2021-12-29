import React from 'react';

export default function ContentImage(props) {
    return(<div style={{width: '100px', display: 'inline-block'}}>
        <img width='100' height='100' src={props.data.img} />
        <div style={{textAlign: 'center'}}>{props.data.title}</div>
    </div>);
}