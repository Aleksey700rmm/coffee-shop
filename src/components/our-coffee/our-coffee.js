import { Component } from "react";
import CoffeeHeader from "./our-coffee-header/our-coffee-header";
import CoffeeAbout from "./our-coffee-about/our-coffee-about";
import CoffeeSearch from "../our-coffee/our-coffee-search/our-coffee-search";
import CoffeeFilter from "./our-coffee-filter/our-coffee-filter";
import CoffeeList from "./our-coffee-list/our-coffee-list";
import HouseNav from "../coffee-house-nav/coffee-house-nav";
import HouseBorder from "../coffee-house-border/coffee-house-border";

import './our-coffee.css';

class OurCoffee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [
                {
                    src: process.env.PUBLIC_URL + "/img/our-coffee-list-pic.png",
                    descr: "Solimo Coffee Beans 2 kg",
                    price: 10.73,
                    place: 'Brazil',
                    id: 1,
                },
                {
                    src: process.env.PUBLIC_URL + "/img/our-best-presto.png",
                    descr: "Presto Coffee Beans 1 kg",
                    place: 'Kenya',
                    price: 15.99,
                    id: 2,
                },
                {
                    src: process.env.PUBLIC_URL + "./img/our-best-aromisto.png",
                    descr: "AROMISTICO Coffee 1 kg",
                    place: 'Columbia',
                    price: 6.99,
                    id: 3,
                },
                {
                    src: process.env.PUBLIC_URL + "/img/our-coffee-list-pic.png",
                    descr: "Solimo Coffee Beans 2 kg",
                    price: 10.73,
                    place: 'Kenya',
                    id: 4,
                },
                {
                    src: process.env.PUBLIC_URL + "/img/our-best-presto.png",
                    descr: "Presto Coffee Beans 1 kg",
                    place: 'Brazil',
                    price: 15.99,
                    id: 5,
                },
                {
                    src: process.env.PUBLIC_URL + "./img/our-best-aromisto.png",
                    descr: "AROMISTICO Coffee 1 kg",
                    place: 'Columbia',
                    price: 6.99,
                    id: 6,
                },
            ],
            term: '',
            filter: ''
        }
    }

    searchCard = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.descr.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'kenya':
                return items.filter(item => item.place === 'Kenya');
            case 'columbia':
                return items.filter(item => item.place === 'Columbia');
            case 'brazil':
                return items.filter(item => item.place === 'Brazil');
            default:
                return items
        }       
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }

    render() {
        const {cards, term, filter} = this.state;
        const visibleCards = this.filterPost(this.searchCard(cards, term), filter);
        return (
            <>
                <CoffeeHeader path={this.props.path}/>
                <CoffeeAbout/>
                <div className="our-coffee-search">
                    <CoffeeSearch onUpdateSearch={this.onUpdateSearch}/>
                    <CoffeeFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
                </div>
                <CoffeeList cards={visibleCards}/>
                <div className="footer">
                    <HouseNav black path={this.props.path}/>
                    <HouseBorder black />
                </div>
            </>
        )
    }
}

export default OurCoffee;