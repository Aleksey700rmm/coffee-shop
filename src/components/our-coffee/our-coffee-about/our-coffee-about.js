import { Component } from "react";
import HouseBorder from "../../coffee-house-border/coffee-house-border";
import "./our-coffee-about.css";

class CoffeeAbout extends Component {
    render() {
        return (
            <>
                <div className="coffee-about">
                    <div className="coffee-about-left"></div>
                    <div className="coffee-about-right">
                        <h2 className="coffee-about-headline">
                            About our beans
                        </h2>
                        <HouseBorder black />
                        <p>
                            Extremity sweetness difficult behaviour he of. On
                            disposal of as landlord horrible. Afraid at highly
                            months do things on at. Situation recommend
                            objection do intention so questions. As greatly
                            removed calling pleased improve an. Last ask him
                            cold feel met spot shy want. Children me laughing we
                            prospect answered followed. At it went is song that
                            held help face.
                        </p>
                    </div>
                </div>
                <div className="coffee-about-border"></div>
            </>
        );
    }
}

export default CoffeeAbout;
