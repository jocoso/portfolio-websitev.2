import React from 'react';
import Collapsible from './collapsible';
import classNames from 'classnames';

class InnerCollapsible extends React.Component {
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
            <div className="collider-container">
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
                    <span className={classNames({
                        displayNone: !this.state.show,
                        displayContent: this.state.show,
                        blockDisplay: true,
                    })}>
                        {this.props.data.inners.map((inner) => {
                            return <Collapsible data={inner} />})}
                    </span>
            </div>
        );
    }

}

export default InnerCollapsible;