import React from 'react';

function TabBar(props) {
    return(
        <div style={{ width: "100%", textAlign: "center"}}>
            <ul>
                {props.data.map(
                    (tab) => {
                        return <li style={{display: "inline"}} key={tab.id}>
                            <button key={tab.id} onClick={() => tab.display()}>{tab.title}</button>
                        </li>
                    }
                )}
            </ul>
        </div>
    );
}

export default TabBar;