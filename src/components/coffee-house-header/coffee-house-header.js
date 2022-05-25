import { Component } from "react";
import HouseBorder from "../coffee-house-border/coffee-house-border";
import "./coffee-house-header.css";
import HouseNav from "../coffee-house-nav/coffee-house-nav";

class CoffeeHouseHeader extends Component {
    render() {
        return (
            <div className="house-header">
                <div className="house-header-nav">
                    <HouseNav />
                </div>
                <div className="house-header-info">
                    <h1>Everything You Love About Coffee</h1>
                    <HouseBorder />
                    <p>We makes every day full of energy and taste</p>
                    <p>Want to try our beans?</p>
                    <button>More</button>
                </div>
            </div>
        );
    }
}

export default CoffeeHouseHeader;
