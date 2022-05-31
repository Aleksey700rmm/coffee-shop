import { Component } from "react";
import CoffeeListItem from "../our-coffee-list-item/our-coffee-list-item";
import './our-coffee-list.css';

class CoffeeList extends Component {
    render() {
        // const elements = function getElements() {
        //     for (let i = 0; i < 6; i++) {
        //         <CoffeeListItem cards={this.props.cards}/>
        //     }
        // }
        const { cards} = this.props;
        const elements = cards.map(item => {
            const { id, ...itemProps } = item;
            return (
                <CoffeeListItem key={id} {...itemProps}/>
            )
        })
        return (
            <div className="coffee-list">
                {elements}
            </div>
        )
    }
}

export default CoffeeList;