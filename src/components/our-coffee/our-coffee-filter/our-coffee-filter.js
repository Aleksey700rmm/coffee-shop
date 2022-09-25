import { Component } from "react";
import "./our-coffee-filter.css";

class CoffeeFilter extends Component {
    render() {
        const buttonsFilter = [
            { name: "brazil", label: "Brazil" },
            { name: "kenya", label: "Kenya" },
            { name: "columbia", label: "Columbia" },
        ];

        const buttons = buttonsFilter.map(({ name, label }) => {
            const active = this.props.filter === name;
            const clazz = active ? "btn-active" : "coffee-filter-btn";
            return (
                <button
                    className={`coffee-filter-btn ${clazz}`}
                    type="button"
                    key={name}
                    onClick={() => this.props.onFilterSelect(name)}
                >
                    {label}
                </button>
            );
        });
        return (
            <div className="coffee-filter">
                <span>Or filter</span>
                {buttons}
            </div>
        );
    }
}

export default CoffeeFilter;
