import { Component } from "react";
import "./our-coffee-list-item.css";

class CoffeeListItem extends Component {
    render() {
        const { src, descr, price, place } = this.props;
        return (
            <div className="coffee-list-item">
                <div>
                    <img className="coffee-list-item-img" src={src} alt="" />
                </div>
                <div className="right">
                    <p className="coffee-list-item-descr">{descr}</p>
                    <p className="coffee-list-item-place">{place}</p>
                    <span className="coffee-list-item-price">
                        {price + "$"}
                    </span>
                </div>
            </div>
        );
    }
}

export default CoffeeListItem;
