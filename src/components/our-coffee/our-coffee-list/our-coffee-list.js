import { Component } from "react";
import { Link } from "react-router-dom";
import CoffeeListItem from "../our-coffee-list-item/our-coffee-list-item";
import "./our-coffee-list.css";

class CoffeeList extends Component {
    render() {
        const { cards } = this.props;
        const elements = cards.map((item) => {
            const { id, ...itemProps } = item;
            return (
                <Link to={`our-coffee/${item.id}`} key={item.id}>
                    <CoffeeListItem key={id} {...itemProps} />
                </Link>
            );
        });
        return <div className="coffee-list">{elements}</div>;
    }
}

export default CoffeeList;
