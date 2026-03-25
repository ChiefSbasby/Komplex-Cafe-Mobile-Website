import { useState, useRef } from "react";
import "../css/CheckoutPage.css";
import { useLocation, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

const NAV_ROUTES = [
    { label: "Home", path: "/" },
    { label: "Menu", path: "/menu" },
    { label: "Contact", path: "/contact" },
];

const peso = (n) =>
    "₱" + Number(n).toLocaleString("en-PH", { minimumFractionDigits: 2 });

export default function CheckoutPage_2() {
    const location = useLocation();
    const navigate = useNavigate();

    const cart = location.state?.cart ?? [];
    const cartTotal = cart.reduce((s, e) => s + e.lineTotal, 0);


    return (
        <div className="wrapper">
            <div className="checkout-page">

                <NavBar />

                {/* ── Hero banner ── */}
                <div className="checkout-hero">
                    <h1 className="checkout-hero-title">Checkout</h1>
                </div>

                <p>hi ur in the FIRST checkout page</p>

                {/* ── Cart items ── */}

                {/* ── Sticky footer ── */}
                <div className="checkout-footer">
                    <div className="checkout-footer-total">
                        Total: <strong>{peso(cartTotal)}</strong>
                    </div>
                    <div className="checkout-footer-buttons">
                        <button className="btn-back" onClick={() => navigate("/menu", {state: {cart}})}>Back</button>
                        <button className="btn-continue" disabled={cart.length === 0} onClick={() => navigate("/checkout/extra")}>Continue</button>
                    </div>
                </div>
            </div>
        </div>
    );
}