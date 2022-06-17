import { Component } from "react";
import PleasureAbout from "./pleasure-about/pleasure-about";
import PleasureHeader from './pleasure-header/pleasure-header';
import HouseNav from "../coffee-house-nav/coffee-house-nav";
import HouseBorder from "../coffee-house-border/coffee-house-border";
import './pleasure.css';

class Pleasure extends Component {
    render() {
        return (
            <>
                <PleasureHeader path={this.props.path}/>
                <PleasureAbout/>
                <div className="footer">
                    <HouseNav black path={this.props.path}/>
                    <HouseBorder black />
                </div>
            </>
            
        )
    }
}

export default Pleasure;