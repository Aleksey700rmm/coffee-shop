import { Component } from "react";
import HouseBorder from "../coffee-house-border/coffee-house-border";
import CoffeeHouseHeader from "../coffee-house-header/coffee-house-header";
import HouseInfo from "../coffee-house-info/coffee-house-info";
import HouseList from "../coffee-house-list/coffee-house-list";
import HouseNav from "../coffee-house-nav/coffee-house-nav";
import "./app.css";

class App extends Component {
    render() {
        const data = [
            {
                src: process.env.PUBLIC_URL + "/img/our-best-solimo.png",
                descr: "Solimo Coffee Beans 2 kg",
                price: 10.73,
                id: 1,
            },
            {
                src: process.env.PUBLIC_URL + "/img/our-best-presto.png",
                descr: "Presto Coffee Beans 1 kg",
                price: 15.99,
                id: 2,
            },
            {
                src: process.env.PUBLIC_URL + "./img/our-best-aromisto.png",
                descr: "AROMISTICO Coffee 1 kg",
                price: 6.99,
                id: 3,
            },
        ];

        return (
            <div className="app">
                <CoffeeHouseHeader path={this.props.path} />
                <HouseInfo />
                <HouseList data={data} />
                <div className="footer">
                    <HouseNav black path={this.props.path} />
                    <HouseBorder black />
                </div>
            </div>
        );
    }
}

export default App;
