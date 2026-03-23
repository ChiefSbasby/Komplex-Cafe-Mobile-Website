// menuData.js — Komplex Cafe Menu Database
// 47 items across 8 categories

export const ADD_ONS = [
  { id: "espresso_shot",    label: "Espresso Shot",   price: 45 },
  { id: "full_cream_milk",  label: "Full Cream Milk", price: 20 },
  { id: "syrup",            label: "Syrup",           price: 45 },
  { id: "sauce",            label: "Sauce",           price: 20 },
  { id: "sea_salt_cream",   label: "Sea Salt Cream",  price: 40 },
];

export const DIPS = [
  { id: "choco",          label: "Choco",           price: 0 },
  { id: "caramel",        label: "Caramel",         price: 0 },
  { id: "whip_cream",     label: "Whip Cream",      price: 15 },
  { id: "sea_salt_cream", label: "Sea Salt Cream",  price: 15 },
];

// serveOptions: null = no choice, "hot_iced" = hot or iced toggle
// icedUpcharge: extra charge for iced (if any)

export const MENU = [
  // ── COFFEE (12 items) ─────────────────────────────────────────
  {
    category: "Coffee",
    section: "Drinks",
    serveOptions: "hot_iced",
    icedUpcharge: 10,
    items: [
      { id: "c01", name: "Amerikano",       price: 140, image: null },
      { id: "c02", name: "Latte",           price: 150, image: null },
      { id: "c03", name: "Spanish Latte",   price: 160, image: null },
      { id: "c04", name: "Orea Latte",      price: 160, image: null },
      { id: "c05", name: "Vietnamese",      price: 160, image: null },
      { id: "c06", name: "Mocha",           price: 160, image: null },
      { id: "c07", name: "White Mocha",     price: 165, image: null },
      { id: "c08", name: "Cappuccino",      price: 150, image: null },
      { id: "c09", name: "Macchiato",       price: 155, image: null },
      { id: "c10", name: "Flat White",      price: 155, image: null },
      { id: "c11", name: "Affogato",        price: 160, image: null },
      { id: "c12", name: "Dirty Matcha",    price: 175, image: null },
    ],
  },

  // ── NON-COFFEE (6 items) ──────────────────────────────────────
  {
    category: "Non-Coffee",
    section: "Drinks",
    serveOptions: "hot_iced",
    icedUpcharge: 10,
    items: [
      { id: "nc01", name: "Matcha Latte",       price: 160, image: null },
      { id: "nc02", name: "Oat Milk Latte",     price: 165, image: null },
      { id: "nc03", name: "Taro Latte",         price: 160, image: null },
      { id: "nc04", name: "Brown Sugar Milk",   price: 150, image: null },
      { id: "nc05", name: "Strawberry Milk",    price: 150, image: null },
      { id: "nc06", name: "Hot Chocolate",      price: 145, image: null },
    ],
  },

  // ── FRAPPES (5 items) ─────────────────────────────────────────
  {
    category: "Frappes",
    section: "Drinks",
    serveOptions: null,
    icedUpcharge: 0,
    items: [
      { id: "f01", name: "Mocha Frappe",         price: 175, image: null },
      { id: "f02", name: "Caramel Frappe",       price: 175, image: null },
      { id: "f03", name: "Matcha Frappe",        price: 180, image: null },
      { id: "f04", name: "Strawberry Frappe",    price: 175, image: null },
      { id: "f05", name: "Cookies & Cream Frappe", price: 180, image: null },
    ],
  },

  // ── TWININGS FRUIT TEAS (4 items) ─────────────────────────────
  {
    category: "Fruit Teas",
    section: "Drinks",
    serveOptions: "hot_iced",
    icedUpcharge: 0,
    brand: "Twinings",
    items: [
      { id: "t01", name: "Lemon & Ginger",         price: 120, image: null },
      { id: "t02", name: "Peach & Raspberry",      price: 120, image: null },
      { id: "t03", name: "Apple & Blackcurrant",   price: 120, image: null },
      { id: "t04", name: "Wild Berries",            price: 120, image: null },
    ],
  },

  // ── PASTAS (4 items) ──────────────────────────────────────────
  {
    category: "Pasta",
    section: "Meals",
    serveOptions: null,
    icedUpcharge: 0,
    items: [
      { id: "p01", name: "Bacon Carbonara",              price: 220, image: null },
      { id: "p02", name: "Tuna Creamy Pesto",           price: 220, image: null },
      { id: "p03", name: "Italian Hungarian",            price: 220, image: null },
      { id: "p04", name: "Truffle Pasta",             price: 250, image: null },
    ],
  },

  // ── RICE MEALS (7 items) ──────────────────────────────────────
  {
    category: "Rice Meal",
    section: "Meals",
    serveOptions: null,
    icedUpcharge: 0,
    items: [
      { id: "r01", name: "Hungarian Sausage",  price: 180, image: null },
      { id: "r02", name: "Spam",       price: 180, image: null },
      { id: "r03", name: "Bacon",         price: 180, image: null },
      { id: "r04", name: "Corned Beef",           price: 180, image: null },
      { id: "r05", name: "Tapa",                   price: 220, image: null },
      { id: "r06", name: "Fried Chicken Chops",              price: 220, image: null },
      { id: "r07", name: "Chicken Parmigiana",       price: 250, image: null },
    ],
  },

  // ── SNACKS (5 items) ──────────────────────────────────────────
  {
    category: "Snacks",
    section: "Meals",
    serveOptions: null,
    icedUpcharge: 0,
    items: [
      { id: "s01", name: "Churros",            price: 120, image: null },
      { id: "s02", name: "Crisscut Fries",            price: 140, image: null },
      { id: "s03", name: "Cajun Fries",                  price: 150, image: null },
      { id: "s04", name: "Nuggets",            price: 100, image: null },
      { id: "s05", name: "Nachos",             price: 120, image: null },
    ],
  },

  // ── SANDWICHES (4 items) ──────────────────────────────────────
  {
    category: "Sandwiches",
    section: "Meals",
    serveOptions: null,
    icedUpcharge: 0,
    items: [
      { id: "sw01", name: "Chicken Club",           price: 175, image: null },
      { id: "sw02", name: "BLT",                    price: 160, image: null },
      { id: "sw03", name: "Tuna Melt",              price: 165, image: null },
      { id: "sw04", name: "Egg & Cheese",           price: 150, image: null },
    ],
  },
];

// Helper: all unique section labels in order
export const SECTIONS = [...new Set(MENU.map((g) => g.section))];

// Helper: all category names in order
export const CATEGORIES = MENU.map((g) => g.category);
