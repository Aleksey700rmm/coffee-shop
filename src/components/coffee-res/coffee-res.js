import { Component } from "react";
import CoffeeHeader from "../our-coffee/our-coffee-header/our-coffee-header";
import HouseNav from "../coffee-house-nav/coffee-house-nav";
import HouseBorder from "../coffee-house-border/coffee-house-border";
import './coffee-res.css';


class CoffeeRes extends Component {
    render() {
        return (
            <>
                <CoffeeHeader path={this.props.path}/>
                <div className="footer">
                    <HouseNav black path={this.props.path}/>
                    <HouseBorder black />
                </div>
            </>
        )
    }
}

export default CoffeeRes;