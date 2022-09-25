import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./components/app/app";
import OurCoffee from "./components/our-coffee/our-coffee";
import Pleasure from "./components/pleasure/pleasure";
import SingleCoffee from "./components/our-coffee/single-coffee/single-coffee";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const cards = [
    {
        src: process.env.PUBLIC_URL + "/img/our-coffee-list-pic.png",
        descr: "Solimo Coffee Beans 2 kg",
        price: 10.73,
        place: "Brazil",
        id: 1,
    },
    {
        src: process.env.PUBLIC_URL + "/img/our-best-presto.png",
        descr: "Presto Coffee Beans 1 kg",
        place: "Kenya",
        price: 15.99,
        id: 2,
    },
    {
        src: process.env.PUBLIC_URL + "/img/our-best-aromisto.png",
        descr: "AROMISTICO Coffee 1 kg",
        place: "Columbia",
        price: 6.99,
        id: 3,
    },
    {
        src: process.env.PUBLIC_URL + "/img/our-coffee-list-pic.png",
        descr: "Solimo Coffee Beans 2 kg",
        price: 10.73,
        place: "Kenya",
        id: 4,
    },
    {
        src: process.env.PUBLIC_URL + "/img/our-best-presto.png",
        descr: "Presto Coffee Beans 1 kg",
        place: "Brazil",
        price: 15.99,
        id: 5,
    },
    {
        src: process.env.PUBLIC_URL + "/img/our-best-aromisto.png",
        descr: "AROMISTICO Coffee 1 kg",
        place: "Columbia",
        price: 6.99,
        id: 6,
    },
];

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App path="/" />} />
                <Route
                    path="/our-coffee"
                    element={<OurCoffee path="our-coffee" cards={cards} />}
                />
                <Route
                    path="/pleasure"
                    element={<Pleasure path="pleasure" />}
                />
                <Route
                    path="/our-coffee/our-coffee/:id"
                    element={<SingleCoffee path="our-coffee" cards={cards} />}
                />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
