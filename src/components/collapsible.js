import React from 'react';
import classNames from 'classnames';
import '../App.css';

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
        let rootClass = 'collapsible-root game-button ';
        rootClass += classNames({
            arrowRight: !this.state.show,
            arrowDown: this.state.show,
        });
        return(
            <div className="collapsible-container">
                <button onClick={this.collapseToggle} 
                    className={rootClass} 
                    key={this.props.data.id}
                > 
                    {this.props.data.title} </button>
                    <div className={classNames({
                        displayNone: !this.state.show,
                        displayContent: this.state.show,
                        collapsibleInner: true,
                    })}>
                        <div className="collapsible-content">{this.props.data.content}</div>
                    </div>
            </div>
        );
    }
}

export default Collapsible;