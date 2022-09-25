import CoffeeHeader from "../our-coffee-header/our-coffee-header";
import HouseNav from "../../coffee-house-nav/coffee-house-nav";
import HouseBorder from "../../coffee-house-border/coffee-house-border";
import { useParams } from "react-router-dom";
import "./single-coffee.css";

const SingleCoffee = (props) => {
    const { id } = useParams();
    const { cards } = props;

    const card = cards.find((card) => +card.id === +id);
    console.log(id);
    return (
        <div>
            <CoffeeHeader path={props.path} />
            <div className="coffee-list-item center">
                <img className="coffee-list-item-img" src={card.src} alt="" />
                <p className="coffee-list-item-descr">{card.descr}</p>
                <p className="coffee-list-item-place">{card.place}</p>
                <span className="coffee-list-item-price">
                    {card.price + "$"}
                </span>
            </div>
            <div className="footer">
                <HouseNav black path={props.path} />
                <HouseBorder black />
            </div>
        </div>
    );
};

export default SingleCoffee;
