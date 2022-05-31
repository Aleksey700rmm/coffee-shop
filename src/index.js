import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./components/app/app";
import OurCoffee from "./components/our-coffee/our-coffee";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="OurCoffee" element={<OurCoffee />} />
                <Route path="invoices" element={<Invoices />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

function Invoices() {
    return (
        <main style={{ padding: "1rem 0" }}>
            <h2>Invoices</h2>
        </main>
    );
}
