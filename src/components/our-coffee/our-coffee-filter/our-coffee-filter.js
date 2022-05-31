import { Component } from "react";
import './our-coffee-filter.css';

class CoffeeFilter extends Component {
    render() {
        const buttonsFilter = ['Brazil', 'Kenya', 'Columbia'];

        const buttons = buttonsFilter.map(label => {
            return (
                <button
                className="coffee-filter-btn"
                type="button"
                >{label}</button>
            )
        })
        return (
            <div className="coffee-filter">
                <span>Or filter</span>
                {buttons}
            </div>
        )
    }
}

export default CoffeeFilter;