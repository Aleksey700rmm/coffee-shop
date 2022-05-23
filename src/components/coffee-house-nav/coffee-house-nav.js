import { Component } from "react";
import './coffee-house-nav.css';

class HouseNav extends Component {
    render() {
        let classNames = 'btn',
            clazz = 'house-nav-icon';
        
        if (this.props.black) {
            classNames += ' black-nav';
            clazz += ' black-nav-icon';
        }
        return (
            <div className="house-nav">
                <span className={clazz}></span>
                <button className={classNames} type="button">
                    Coffee house
                </button>
                <button className={classNames} type="button">
                    Our coffee
                </button>
                <button className={classNames} type="button">
                    For your pleasure
                </button>
            </div>
        )
    }
}

export default HouseNav;