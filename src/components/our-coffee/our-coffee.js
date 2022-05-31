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
    render() {
        
        const cards = [
            {
                src: process.env.PUBLIC_URL + "/img/our-coffee-list-pic.png",
                descr: "Solimo Coffee Beans 2 kg",
                price: 10.73,
                place: 'Brazil',
                id: 1,
            },
            {
                src: process.env.PUBLIC_URL + "/img/our-coffee-list-pic.png",
                descr: "Solimo Coffee Beans 2 kg",
                price: 10.73,
                place: 'Brazil',
                id: 2,
            },
            {
                src: process.env.PUBLIC_URL + "/img/our-coffee-list-pic.png",
                descr: "Solimo Coffee Beans 2 kg",
                price: 10.73,
                place: 'Brazil',
                id: 3,
            },
            {
                src: process.env.PUBLIC_URL + "/img/our-coffee-list-pic.png",
                descr: "Solimo Coffee Beans 2 kg",
                price: 10.73,
                place: 'Brazil',
                id: 4,
            },
            {
                src: process.env.PUBLIC_URL + "/img/our-coffee-list-pic.png",
                descr: "Solimo Coffee Beans 2 kg",
                price: 10.73,
                place: 'Brazil',
                id: 5,
            },
            {
                src: process.env.PUBLIC_URL + "/img/our-coffee-list-pic.png",
                descr: "Solimo Coffee Beans 2 kg",
                price: 10.73,
                place: 'Brazil',
                id: 6,
            },
        ];

        return (
            <>
                <CoffeeHeader/>
                <CoffeeAbout/>
                <div className="our-coffee-search">
                    <CoffeeSearch/>
                    <CoffeeFilter/>
                </div>
                <CoffeeList cards={cards}/>
                <div className="footer">
                    <HouseNav black />
                    <HouseBorder black />
                </div>
            </>
        )
    }
}

export default OurCoffee;