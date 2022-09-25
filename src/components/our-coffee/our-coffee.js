import { Component } from "react";
import CoffeeHeader from "./our-coffee-header/our-coffee-header";
import CoffeeAbout from "./our-coffee-about/our-coffee-about";
import CoffeeSearch from "./our-coffee-search/our-coffee-search";
import CoffeeFilter from "./our-coffee-filter/our-coffee-filter";
import CoffeeList from "./our-coffee-list/our-coffee-list";
import HouseNav from "../coffee-house-nav/coffee-house-nav";
import HouseBorder from "../coffee-house-border/coffee-house-border";

import "./our-coffee.css";

class OurCoffee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: "",
            filter: "",
        };
    }

    searchCard = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter((item) => {
            return item.descr.indexOf(term) > -1;
        });
    };

    onUpdateSearch = (term) => {
        this.setState({ term });
    };

    filterPost = (items, filter) => {
        switch (filter) {
            case "kenya":
                return items.filter((item) => item.place === "Kenya");
            case "columbia":
                return items.filter((item) => item.place === "Columbia");
            case "brazil":
                return items.filter((item) => item.place === "Brazil");
            default:
                return items;
        }
    };

    onFilterSelect = (filter) => {
        this.setState({ filter });
    };

    render() {
        const { term, filter } = this.state;
        const { cards } = this.props;
        const visibleCards = this.filterPost(
            this.searchCard(cards, term),
            filter
        );
        return (
            <>
                <CoffeeHeader path={this.props.path} />
                <CoffeeAbout />
                <div className="our-coffee-search">
                    <CoffeeSearch onUpdateSearch={this.onUpdateSearch} />
                    <CoffeeFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}
                    />
                </div>
                <CoffeeList cards={visibleCards} />
                <div className="footer">
                    <HouseNav black path={this.props.path} />
                    <HouseBorder black />
                </div>
            </>
        );
    }
}

export default OurCoffee;
