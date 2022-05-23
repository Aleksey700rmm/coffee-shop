import { Component } from "react";
import HouseBorder from "../coffee-house-border/coffee-house-border";
import './coffee-house-info.css'

class HouseInfo extends Component {
    render() {
        return (
            <div className="house-info">
                <h2 className="house-info-header">About Us</h2>
                <HouseBorder black/>
                <p className="house-info-description">
                    Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                    Afraid at highly months do things on at. Situation recommend objection do intention
                    so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                    met spot shy want. Children me laughing we prospect answered followed. At it went
                    is song that held help face.

                    
                </p>
                <p className="house-info-description">
                    Now residence dashwoods she excellent you. Shade being under his bed her, Much
                    read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                    horrible but confined day end marriage. Eagerness furniture set preserved far
                    recommend. Did even but nor are most gave hope. Secure active living depend son
                    repair day ladies now.
                </p>
            </div>
        )
    }
}

export default HouseInfo;