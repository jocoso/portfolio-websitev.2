import React from 'react';

function TabBar(props) {
    return(
        <div style={{ textAlign: "center"}}>
            <ul style={{padding: "0px", marginLeft: "0"}}>
                {props.data.map(
                    (tab) => {
                        return <li style={{display: "inline-block"}} key={tab.id}>
                            <button key={tab.id} onClick={() => tab.display()}>{tab.title}</button>
                        </li>
                    }
                )}
            </ul>
        </div>
    );
}

export default TabBar;