import { Component } from "react";
import HouseNav from "../../coffee-house-nav/coffee-house-nav";
import './our-coffee-header.css';

class CoffeeHeader extends Component {
    render() {
        return (
            <div className="coffee-header">
                <div className="coffee-header-nav">
                    <HouseNav path={this.props.path}/>
                </div>
                <h1>Our Coffee</h1>
            </div>
        )
    }
}

export default CoffeeHeader;