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
                    <button
                        className={classNames}
                        style={
                            this.props.path === "/"
                                ? {
                                      outline: "3px solid #D2691E",
                                      borderRadius: 5,
                                  }
                                : undefined
                        }
                        type="button"
                        // onClick={() => this.onNavClick(0)}
                    >
                        Coffee house
                    </button>
                </Link>
                <Link to="/our-coffee">
                    <button
                        className={classNames}
                        type="button"
                        style={
                            this.props.path === "our-coffee"
                                ? {
                                      outline: "3px solid #D2691E",
                                      borderRadius: 5,
                                  }
                                : undefined
                        }
                        // onClick={() => this.onNavClick(1)}
                    >
                        Our coffee
                    </button>
                </Link>
                <Link to="/pleasure">
                    <button
                        className={classNames}
                        type="button"
                        style={
                            this.props.path === "pleasure"
                                ? {
                                      outline: "3px solid #D2691E",
                                      borderRadius: 5,
                                  }
                                : undefined
                        }
                        // onClick={() => this.onNavClick(2)}
                    >
                        For your pleasure
                    </button>
                </Link>
            </div>
        );
    }
}

export default HouseNav;
