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
        let rootClass = 'collapsible-root game-button ';
        rootClass += classNames({
            arrowRight: !this.state.show,
            arrowDown: this.state.show,
        });

        return(
            <div>
                {/* Outside root button */}
                <button 
                    onClick={this.collapseToggle} 
                    className={rootClass} 
                    key={this.props.data.id}
                > 
                    {this.props.data.title} 
                </button>

                    {/* Inner Buttons */}
                    <span className={classNames({
                        displayNone: !this.state.show,
                        displayContent: this.state.show,
                        collapsibleInner: true,
                    })}>
                        {this.props.data.inners.map((inner) => {
                            return <Collapsible data={inner} />})}
                    </span>
            </div>
        );
    }

}

export default InnerCollapsible;