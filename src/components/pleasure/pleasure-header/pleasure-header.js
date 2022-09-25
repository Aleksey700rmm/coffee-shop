import { Component } from "react";
import "./pleasure-header.css";
import HouseNav from "../../coffee-house-nav/coffee-house-nav";

class PleasureHeader extends Component {
    render() {
        return (
            <div className="pleasure-header">
                <div className="pleasure-header-nav">
                    <HouseNav path={this.props.path} />
                </div>
                <h1>For your pleasure</h1>
            </div>
        );
    }
}

export default PleasureHeader;
