/*
 * American Crate Company — product catalogue.
 *
 * Each product:
 *   id          unique, url-safe id
 *   name, brand
 *   category    "beauty" | "electronics"
 *   sub         beauty: "makeup" | "skin" | "body" | "fragrance" | "hair"
 *               electronics: "audio" | "phones" | "computers" | "wearables" | "gaming"
 *   condition   "new" | "refurbished"
 *   grade       (refurbished only) e.g. "Grade A — Excellent"
 *   priceUSD    selling price in USD (ZAR is calculated from js/config.js)
 *   wasUSD      optional US retail / compare-at price
 *   stock       units already landed in Africa: { za: South Africa, zw: Zimbabwe }
 *   usaOrder    true if customers can order it to be shipped from the USA
 *   viral       optional badge text, e.g. "TikTok viral"
 *   icon        artwork used when no photo is set (see ICONS in js/app.js)
 *   tone        two colours for the artwork background
 *   image       optional path/URL to a real product photo, e.g. "images/rare-blush.jpg"
 *
 * Prices below are placeholders — replace them with your own.
 */
window.PRODUCTS = [
  // ───────────── Beauty · Makeup ─────────────
  {
    id: "rare-beauty-soft-pinch-blush",
    name: "Soft Pinch Liquid Blush",
    brand: "Rare Beauty",
    category: "beauty", sub: "makeup", condition: "new",
    priceUSD: 32, wasUSD: 38,
    stock: { za: 6, zw: 3 }, usaOrder: true,
    viral: "TikTok viral",
    icon: "dropper", tone: ["#ffd6dc", "#f28b9b"],
    desc: "The weightless liquid blush that took over TikTok. One dot is all you need for a natural, long-wearing flush.",
    highlights: ["Shade: Joy (muted peach) / Hope (nude mauve)", "7.5 ml", "Buildable, long-wearing"]
  },
  {
    id: "elf-halo-glow",
    name: "Halo Glow Liquid Filter",
    brand: "e.l.f. Cosmetics",
    category: "beauty", sub: "makeup", condition: "new",
    priceUSD: 22, wasUSD: 26,
    stock: { za: 10, zw: 4 }, usaOrder: true,
    viral: "TikTok viral",
    icon: "bottle", tone: ["#fde7c8", "#e0a96d"],
    desc: "A complexion booster for a soft-focus glow — wear alone, under foundation or as a highlighter.",
    highlights: ["Shades 1 Fair → 8 Rich", "31.5 ml", "Vegan & cruelty-free"]
  },
  {
    id: "charlotte-tilbury-pillow-talk",
    name: "Pillow Talk Matte Revolution Lipstick",
    brand: "Charlotte Tilbury",
    category: "beauty", sub: "makeup", condition: "new",
    priceUSD: 42, wasUSD: 45,
    stock: { za: 0, zw: 2 }, usaOrder: true,
    viral: "Best seller",
    icon: "lipstick", tone: ["#f5d0c5", "#c9867a"],
    desc: "The iconic nude-pink that flatters every skin tone. Creamy matte finish that doesn't dry the lips.",
    highlights: ["Shade: Pillow Talk Original", "3.5 g", "Hydrating matte finish"]
  },
  {
    id: "summer-fridays-lip-butter",
    name: "Lip Butter Balm",
    brand: "Summer Fridays",
    category: "beauty", sub: "makeup", condition: "new",
    priceUSD: 28,
    stock: { za: 8, zw: 0 }, usaOrder: true,
    viral: "TikTok viral",
    icon: "tube", tone: ["#dfe8f5", "#8fa8d4"],
    desc: "Cushiony, conditioning balm with a sheer wash of tint. The cult lip product everyone keeps in their bag.",
    highlights: ["Vanilla, Brown Sugar, Pink Sugar", "15 g", "Shea + murumuru butter"]
  },
  {
    id: "huda-easy-bake-powder",
    name: "Easy Bake Loose Setting Powder",
    brand: "Huda Beauty",
    category: "beauty", sub: "makeup", condition: "new",
    priceUSD: 40,
    stock: { za: 0, zw: 0 }, usaOrder: true,
    icon: "compact", tone: ["#f7e6d3", "#d4a373"],
    desc: "Ultra-fine setting powder for a smooth, crease-free bake that lasts all day.",
    highlights: ["Shades: Pound Cake, Cherry Blossom, Banana Bread", "20 g", "Blurs pores and fine lines"]
  },

  // ───────────── Beauty · Skin ─────────────
  {
    id: "glow-recipe-watermelon-dew-drops",
    name: "Watermelon Glow Niacinamide Dew Drops",
    brand: "Glow Recipe",
    category: "beauty", sub: "skin", condition: "new",
    priceUSD: 38,
    stock: { za: 4, zw: 2 }, usaOrder: true,
    viral: "TikTok viral",
    icon: "dropper", tone: ["#ffdbe3", "#ff7a93"],
    desc: "A lightweight serum-highlighter hybrid that visibly reduces hyperpigmentation and gives a dewy glow.",
    highlights: ["40 ml", "Niacinamide + watermelon", "Suitable for all skin types"]
  },
  {
    id: "laneige-lip-sleeping-mask",
    name: "Lip Sleeping Mask",
    brand: "Laneige",
    category: "beauty", sub: "skin", condition: "new",
    priceUSD: 25,
    stock: { za: 12, zw: 6 }, usaOrder: true,
    viral: "Best seller",
    icon: "jar", tone: ["#ffe0ea", "#e86a92"],
    desc: "The overnight lip treatment for soft, plump lips by morning. Sweet berry scent.",
    highlights: ["Berry, Gummy Bear, Vanilla", "20 g", "Vitamin C + antioxidants"]
  },
  {
    id: "cerave-sa-cleanser",
    name: "SA Smoothing Cleanser (Large)",
    brand: "CeraVe",
    category: "beauty", sub: "skin", condition: "new",
    priceUSD: 18,
    stock: { za: 0, zw: 5 }, usaOrder: true,
    icon: "pump", tone: ["#e3f0f7", "#6ea8c9"],
    desc: "Salicylic-acid cleanser that gently exfoliates rough, bumpy skin. US-size bottle, hard to find locally.",
    highlights: ["473 ml US size", "Salicylic acid + ceramides", "Fragrance-free"]
  },

  // ───────────── Beauty · Body ─────────────
  {
    id: "sol-de-janeiro-bum-bum-cream",
    name: "Brazilian Bum Bum Cream",
    brand: "Sol de Janeiro",
    category: "beauty", sub: "body", condition: "new",
    priceUSD: 52, wasUSD: 58,
    stock: { za: 5, zw: 3 }, usaOrder: true,
    viral: "TikTok viral",
    icon: "jar", tone: ["#fff1c9", "#f2b84b"],
    desc: "The fast-absorbing body cream with the famous pistachio-salted caramel scent.",
    highlights: ["240 ml", "Cupuaçu butter + guaraná", "Scent: Cheirosa 62"]
  },
  {
    id: "sol-de-janeiro-cheirosa-mist",
    name: "Cheirosa 68 Perfume Mist",
    brand: "Sol de Janeiro",
    category: "beauty", sub: "body", condition: "new",
    priceUSD: 38,
    stock: { za: 7, zw: 2 }, usaOrder: true,
    viral: "TikTok viral",
    icon: "mist", tone: ["#ffe1ec", "#d9668f"],
    desc: "Hair and body mist with notes of pink dragonfruit and jasmine — the layering favourite.",
    highlights: ["240 ml", "Hair & body safe", "Also available: 62, 40, 71"]
  },
  {
    id: "tree-hut-sugar-scrub",
    name: "Shea Sugar Scrub",
    brand: "Tree Hut",
    category: "beauty", sub: "body", condition: "new",
    priceUSD: 15,
    stock: { za: 14, zw: 9 }, usaOrder: true,
    viral: "TikTok viral",
    icon: "jar", tone: ["#e7f6e1", "#7fbf6a"],
    desc: "The everyday body scrub with shea butter and real sugar for smooth, glowing skin.",
    highlights: ["510 g", "Scents: Moroccan Rose, Tropical Glow, Watermelon", "Shea butter + sugar"]
  },
  {
    id: "bbw-body-mist",
    name: "Fine Fragrance Body Mist",
    brand: "Bath & Body Works",
    category: "beauty", sub: "body", condition: "new",
    priceUSD: 18,
    stock: { za: 0, zw: 0 }, usaOrder: true,
    icon: "mist", tone: ["#efe4ff", "#9b7ad9"],
    desc: "America's favourite body mists in the season's best-selling scents.",
    highlights: ["236 ml", "Scents: A Thousand Wishes, Into the Night, Gingham", "Light, all-day scent"]
  },

  // ───────────── Beauty · Fragrance ─────────────
  {
    id: "kayali-vanilla-28",
    name: "Vanilla | 28 Eau de Parfum",
    brand: "Kayali",
    category: "beauty", sub: "fragrance", condition: "new",
    priceUSD: 98, wasUSD: 110,
    stock: { za: 2, zw: 1 }, usaOrder: true,
    viral: "TikTok viral",
    icon: "perfume", tone: ["#f6e2c6", "#b98545"],
    desc: "A warm, cosy vanilla with brown sugar and tonka bean — one of the most talked-about scents online.",
    highlights: ["50 ml EDP", "Notes: vanilla orchid, brown sugar, tonka", "Long-lasting"]
  },
  {
    id: "ariana-grande-cloud",
    name: "Cloud Eau de Parfum",
    brand: "Ariana Grande",
    category: "beauty", sub: "fragrance", condition: "new",
    priceUSD: 55,
    stock: { za: 4, zw: 3 }, usaOrder: true,
    viral: "Fan favourite",
    icon: "perfume", tone: ["#e6eefc", "#8ea7e0"],
    desc: "Dreamy and airy: lavender, pear and whipped cream over a creamy musk base.",
    highlights: ["100 ml EDP", "Notes: lavender, praline, musk", "Great everyday scent"]
  },
  {
    id: "glossier-you",
    name: "Glossier You Eau de Parfum",
    brand: "Glossier",
    category: "beauty", sub: "fragrance", condition: "new",
    priceUSD: 82,
    stock: { za: 0, zw: 0 }, usaOrder: true,
    icon: "perfume", tone: ["#fde2e0", "#e59a92"],
    desc: "A skin scent that smells different on everyone — warm, creamy and subtly musky.",
    highlights: ["50 ml EDP", "Notes: pink pepper, iris, ambrette", "Unisex"]
  },

  // ───────────── Beauty · Hair ─────────────
  {
    id: "dyson-airwrap",
    name: "Airwrap Multi-Styler Complete Long",
    brand: "Dyson",
    category: "beauty", sub: "hair", condition: "new",
    priceUSD: 599, wasUSD: 650,
    stock: { za: 1, zw: 0 }, usaOrder: true,
    viral: "TikTok viral",
    icon: "styler", tone: ["#f3d6e4", "#b05a85"],
    desc: "Curl, wave, smooth and dry with no extreme heat. Includes all attachments and a dual-voltage adapter.",
    highlights: ["6 attachments + case", "Supplied with SA/ZW plug adapter", "1-year Crate warranty"]
  },
  {
    id: "revlon-one-step",
    name: "One-Step Volumizer PLUS Hair Dryer Brush",
    brand: "Revlon",
    category: "beauty", sub: "hair", condition: "new",
    priceUSD: 65,
    stock: { za: 3, zw: 4 }, usaOrder: true,
    viral: "TikTok viral",
    icon: "dryer", tone: ["#e8e2f7", "#7f6bb8"],
    desc: "The blow-dry brush that made salon blowouts a 20-minute job at home.",
    highlights: ["Ionic + ceramic", "Supplied with step-down converter", "3 heat settings"]
  },

  // ───────────── Electronics · New ─────────────
  {
    id: "airpods-pro-2",
    name: "AirPods Pro (2nd gen, USB-C)",
    brand: "Apple",
    category: "electronics", sub: "audio", condition: "new",
    priceUSD: 219, wasUSD: 249,
    stock: { za: 3, zw: 2 }, usaOrder: true,
    viral: "Best seller",
    icon: "earbuds", tone: ["#eef1f5", "#9aa7b8"],
    desc: "Active noise cancellation, adaptive audio and a USB-C MagSafe case. Sealed US stock.",
    highlights: ["Sealed, US stock", "USB-C MagSafe case", "1-year Apple warranty"]
  },
  {
    id: "jbl-flip-6",
    name: "Flip 6 Portable Bluetooth Speaker",
    brand: "JBL",
    category: "electronics", sub: "audio", condition: "new",
    priceUSD: 99,
    stock: { za: 0, zw: 3 }, usaOrder: true,
    icon: "speaker", tone: ["#dff3ef", "#36a389"],
    desc: "Big, bold sound in a waterproof, dustproof speaker. 12 hours of playtime.",
    highlights: ["IP67 waterproof", "12-hour battery", "PartyBoost pairing"]
  },
  {
    id: "meta-quest-3s",
    name: "Quest 3S 128GB VR Headset",
    brand: "Meta",
    category: "electronics", sub: "gaming", condition: "new",
    priceUSD: 329,
    stock: { za: 0, zw: 0 }, usaOrder: true,
    icon: "vr", tone: ["#e1e6f7", "#5468b8"],
    desc: "Mixed-reality gaming and fitness. Ships from the USA with a local-plug charger.",
    highlights: ["128 GB", "Mixed reality passthrough", "Includes Touch Plus controllers"]
  },
  {
    id: "kindle-paperwhite",
    name: "Kindle Paperwhite (16GB)",
    brand: "Amazon",
    category: "electronics", sub: "computers", condition: "new",
    priceUSD: 165,
    stock: { za: 2, zw: 2 }, usaOrder: true,
    icon: "tablet", tone: ["#e6efe8", "#5f8f6b"],
    desc: "Faster, brighter and with weeks of battery life. Glare-free display that reads like paper.",
    highlights: ["7\" glare-free display", "Waterproof", "Weeks of battery"]
  },

  // ───────────── Electronics · Refurbished ─────────────
  {
    id: "iphone-14-refurb",
    name: "iPhone 14 128GB",
    brand: "Apple",
    category: "electronics", sub: "phones", condition: "refurbished",
    grade: "Grade A — Excellent",
    priceUSD: 389, wasUSD: 599,
    stock: { za: 2, zw: 3 }, usaOrder: true,
    icon: "phone", tone: ["#e4ecf7", "#5b7fb5"],
    desc: "Fully tested, unlocked iPhone 14 with 85%+ battery health. Looks close to new.",
    highlights: ["Unlocked, eSIM + physical SIM checked", "Battery health 85%+", "6-month Crate warranty"]
  },
  {
    id: "samsung-s23-refurb",
    name: "Galaxy S23 256GB",
    brand: "Samsung",
    category: "electronics", sub: "phones", condition: "refurbished",
    grade: "Grade A — Excellent",
    priceUSD: 359, wasUSD: 799,
    stock: { za: 1, zw: 0 }, usaOrder: true,
    icon: "phone", tone: ["#ece6f5", "#7a5fb0"],
    desc: "Flagship Samsung with a pro-grade camera, fully tested and unlocked.",
    highlights: ["Unlocked, dual SIM", "256 GB", "6-month Crate warranty"]
  },
  {
    id: "macbook-air-m1-refurb",
    name: "MacBook Air 13\" M1 8GB/256GB",
    brand: "Apple",
    category: "electronics", sub: "computers", condition: "refurbished",
    grade: "Grade A — Excellent",
    priceUSD: 499, wasUSD: 999,
    stock: { za: 1, zw: 2 }, usaOrder: true,
    viral: "Student pick",
    icon: "laptop", tone: ["#eceff3", "#7d8796"],
    desc: "Silent, fast and all-day battery. Tested by our technicians, with fresh macOS install.",
    highlights: ["Battery cycle count under 300", "US keyboard", "6-month Crate warranty"]
  },
  {
    id: "apple-watch-se-refurb",
    name: "Apple Watch SE (2nd gen) 44mm",
    brand: "Apple",
    category: "electronics", sub: "wearables", condition: "refurbished",
    grade: "Grade B — Very good",
    priceUSD: 159, wasUSD: 279,
    stock: { za: 0, zw: 0 }, usaOrder: true,
    icon: "watch", tone: ["#f6e6e1", "#c07a66"],
    desc: "Fitness tracking, crash detection and notifications. Light signs of use, fully functional.",
    highlights: ["GPS model", "New sport band included", "6-month Crate warranty"]
  },
  {
    id: "ps5-slim-refurb",
    name: "PlayStation 5 Slim (Disc)",
    brand: "Sony",
    category: "electronics", sub: "gaming", condition: "refurbished",
    grade: "Grade A — Excellent",
    priceUSD: 399, wasUSD: 499,
    stock: { za: 0, zw: 1 }, usaOrder: true,
    icon: "console", tone: ["#e3e8f4", "#3e5aa8"],
    desc: "Certified refurbished PS5 Slim with one controller. Tested, cleaned and ready to play.",
    highlights: ["1 TB", "Includes DualSense controller", "6-month Crate warranty"]
  }
];
