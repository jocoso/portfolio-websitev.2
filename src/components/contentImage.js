import React from 'react';

export default function ContentImage(props) {
    return(<div>
        <img src={props.data.img} />
        <div>{props.data.title}</div>
    </div>);
}