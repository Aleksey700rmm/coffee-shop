import { Component } from "react";
import "./coffee-house-list-item.css";

class HouseListItem extends Component {
    render() {
        const { src, descr, price } = this.props;
        return (
            <div className="house-list-item">
                <img src={src} alt="" className="house-list-item-pic" />
                <p className="house-list-item-descr">{descr}</p>
                <span className="house-list-item-price">{price + "$"}</span>
            </div>
        );
    }
}

export default HouseListItem;
