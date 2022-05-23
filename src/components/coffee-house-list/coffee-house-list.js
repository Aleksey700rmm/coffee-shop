import { Component } from "react";
import HouseListItem from "../coffee-house-list-item/coffee-house-list-item";
import './coffee-house-list.css';

class HouseList extends Component {
    render() {
        const elements = this.props.data.map(item => {
            const {id, ...itemProps} = item;
            return (
                <HouseListItem key={id} {...itemProps}/> //src={item.src} descr={item.descr} price={item.price}
            )
        })
        return (
            <div className="house-list">
                <h2 className="house-list-header">Our best</h2>
                <ul className="house-un-list">
                    {elements}
                </ul>
            </div>
        )
    }
}

export default HouseList;