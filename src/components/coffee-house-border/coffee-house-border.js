import { Component } from "react";
import "./coffee-house-border.css";

class HouseBorder extends Component {
    render() {
        let classNames = "house-border-line";
        let clazz = "house-border-icon";
        if (this.props.black) {
            classNames += " black";
            clazz += " icon-black";
        }

        return (
            <div className="house-border-flex">
                <div className={classNames}></div>
                <span className={clazz}></span>
                <div className={classNames}></div>
            </div>
        );
    }
}

export default HouseBorder;
