import { useState, useEffect, useRef } from "react";
import { MENU, ADD_ONS, DIP_TIERS, CATEGORIES } from "../assets/data/menuData.js";
import { useNavigate, useSearchParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import ItemPopup from "../components/Itempopup";
import "../css/MenuPage.css";

/* ─── Placeholder image ────────────────────────────────────────── */
const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Crect width='80' height='80' fill='%23d1d5db'/%3E%3C/svg%3E";

/* ─── Currency formatter ───────────────────────────────────────── */
const peso = (n) =>
  "₱" + Number(n).toLocaleString("en-PH", { minimumFractionDigits: 2 });

/* ─── Resolve serve options for an individual item ─────────────── */
const getServeOptions = (item, group) =>
  item.serveOptions !== undefined ? item.serveOptions : group.serveOptions;

/* ── Resolve the display price shown on the menu card ── */
const cardPrice = (item, group) => {
  const mode = getServeOptions(item, group);
  if (mode === "hot_iced")   return `${peso(item.hotPrice)} | ${peso(item.icedPrice)}`;
  if (mode === "hot_only")   return peso(item.hotPrice);
  if (mode === "iced_only")  return peso(item.icedPrice);
  return peso(item.price);
};

/* ═══════════════════════════════════════════════════════════════════
   MENU PAGE
═══════════════════════════════════════════════════════════════════ */
export default function MenuPage() {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState(() => searchParams.get("category") || null);
  const [popup, setPopup]                   = useState(null);
  const [cart, setCart]                     = useState([]);

  const sections = ["Drinks", "Meals"];

  const visibleGroups = activeCategory
    ? MENU.filter((g) => g.category === activeCategory)
    : MENU;

  const cartTotal = cart.reduce((s, e) => s + e.lineTotal, 0);

  const handleAddToCart = (entry) => setCart((prev) => [...prev, entry]);

  return (
    <div className = "wrapper">
      <div className="menu-page">
        <NavBar />

        <section className="menu-header">

          {/* ── Hero ── */}
          <div className="menu-hero">
            <h1 className="menu-hero-title">Menu</h1>
          </div>

          {/* ── Category chips ── */}
          <div className="menu-chips-wrap">
            <div className="menu-chips">
              <button
                className={`chip ${activeCategory === null ? "chip--active" : ""}`}
                onClick={() => setActiveCategory(null)}
              >
                All
              </button>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  className={`chip ${activeCategory === cat ? "chip--active" : ""}`}
                  onClick={() => setActiveCategory((prev) => (prev === cat ? null : cat))}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

        </section>
        {/* ── Menu list ── */}
        <div className="menu-list">
          {sections.map((section) => {
            const sectionGroups = visibleGroups.filter((g) => g.section === section);
            if (!sectionGroups.length) return null;
            return (
              <div key={section} className="menu-section">
                <h2 className="menu-section-title">{section}</h2>
                {sectionGroups.map((group) => (
                  <div key={group.category}>
                    <p className="menu-category-label">{group.category}</p>
                    {group.items.map((item) => (
                      <button
                        key={item.id}
                        className="menu-item"
                        onClick={() => setPopup({ item, group })}
                      >
                        <img
                          src={item.image || PLACEHOLDER}
                          alt={item.name}
                          className="menu-item-img"
                        />
                        <div className="menu-item-info">
                          <span className="menu-item-name">
                            {item.name}
                            {item.bestSeller && (
                              <span className="best-seller-icon" title="Best Seller">♥</span>
                            )}
                          </span>
                          <span className="menu-item-price">{cardPrice(item, group)}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                ))}
              </div>
            );
          })}
        </div>

        {/* ── Sticky footer ── */}
        <div className="menu-footer">
          <span className="menu-footer-total">
            Total: <strong>{peso(cartTotal)}</strong>
          </span>
          <button
            className="btn-checkout"
            disabled={cart.length === 0}
            onClick={() => navigate("/checkout/cart", { state: { cart } })}
          >
            Checkout
            {cart.length > 0 && <span className="cart-badge">{cart.length}</span>}
          </button>
        </div>

        {/* ── Popup ── */}
        {popup && (
          <ItemPopup
            item={popup.item}
            group={popup.group}
            onClose={() => setPopup(null)}
            onAddToCart={handleAddToCart}
          />
        )}
      </div>
    </div>
  );
}
