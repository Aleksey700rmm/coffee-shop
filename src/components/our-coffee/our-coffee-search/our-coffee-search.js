import { Component } from "react";
import "./our-coffee-search.css";

class CoffeeSearch extends Component {
    render() {
        return (
            <div className="coffee-search">
                <span>Lookiing for</span>
                <input type="text" placeholder="start typing here..." />
            </div>
        );
    }
}

export default CoffeeSearch;
