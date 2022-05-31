import { Component } from "react";
import { Link } from "react-router-dom";
import "./coffee-house-nav.css";

class HouseNav extends Component {
    render() {
        let classNames = "btn",
            clazz = "house-nav-icon";

        if (this.props.black) {
            classNames += " black-nav";
            clazz += " black-nav-icon";
        }
        return (
            <div className="house-nav">
                <span className={clazz}></span>
                <Link to="/">
                <button className={classNames} type="button">
                    Coffee house
                </button>
                </Link>
                <Link to="/OurCoffee">
                <button className={classNames} type="button">
                    Our coffee
                </button>
                </Link>
                <Link to="/ForYourPleasure">
                <button className={classNames} type="button">
                    For your pleasure
                </button>
                </Link>
            </div>
        );
    }
}

export default HouseNav;
