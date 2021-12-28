import React from 'react';
import classNames from "classnames";
import "../App.css";

class Collapsible extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
        }
    }

    collapseToggle = () => {
        let {show} =  this.state;
        show = !show;
        this.setState({show});
    }

    render() {
        return(
            <div style={{display: "inline-block", alignItems:"center", width: "70%"}}>
                <button onClick={this.collapseToggle} className="collapsible" key={this.props.data.id}
                style={{
                    backgroundColor: "#eee",
                    color: "#444",
                    width: "100%",
                    cursor: "pointer",
                    padding: "18px",
                    borderRadius: "8px",
                    border: "none",
                    textAlign: "center",
                    outline: "none",
                    fontSize: "15px",
                }}> {this.props.data.title} </button>
                    <div className={classNames({
                        displayNone: !this.state.show,
                        displayContent: this.state.show,
                    })}>
                        <p>{this.props.data.content}</p>
                    </div>
            </div>
        );
    }
}

export default Collapsible;