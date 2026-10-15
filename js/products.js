/*
 * American Crate Company — product catalogue.
 *
 * Each product:
 *   id          unique, url-safe id
 *   name, brand
 *   category    "beauty" | "electronics" | "sleep"
 *   sub         beauty: "makeup" | "skin" | "body" | "fragrance" | "hair"
 *               electronics: "audio" | "phones" | "computers" | "wearables" | "gaming"
 *               sleep: "pyjamas"
 *   condition   "new" | "refurbished"
 *   grade       (refurbished only) e.g. "Grade A — Excellent"
 *   priceUSD    selling price in USD (ZAR is calculated from js/config.js)
 *   wasUSD      optional US retail / compare-at price
 *   stock       units already landed in Africa: { za: South Africa, zw: Zimbabwe }
 *   usaOrder    true if customers can order it to be shipped from the USA
 *   viral       optional badge text, e.g. "TikTok viral"
 *   icon        artwork used when no photo is set (see ICONS in js/app.js)
 *   gender      (fragrance only) "women" | "men" | "unisex"
 *   size        optional size shown on the card, e.g. "100 ml"
 *   tone        two colours for the artwork background
 *   image       optional photo path/URL. If left out, the site uses images/products/<id>.jpg
 *               when that file exists, and the generated artwork otherwise.
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
  {
    id: "huda-faux-filter-foundation",
    name: "#FauxFilter Luminous Matte Foundation",
    brand: "Huda Beauty",
    category: "beauty", sub: "makeup", condition: "new",
    priceUSD: 42,
    stock: { za: 4, zw: 3 }, usaOrder: true,
    viral: "Best seller",
    icon: "bottle", tone: ["#f1d7bf", "#9c6540"],
    desc: "Full-coverage, long-wearing foundation with a soft, luminous-matte finish that looks filtered in real life.",
    highlights: ["Over 50 shades", "35 ml", "Full coverage, transfer-resistant"]
  },
  {
    id: "huda-faux-filter-concealer",
    name: "#FauxFilter Luminous Matte Concealer",
    brand: "Huda Beauty",
    category: "beauty", sub: "makeup", condition: "new",
    priceUSD: 34,
    stock: { za: 5, zw: 3 }, usaOrder: true,
    icon: "tube", tone: ["#f4dcc6", "#a8714a"],
    desc: "A creamy, crease-proof concealer that covers, brightens and blurs.",
    highlights: ["9 ml", "Full coverage", "Crease-proof, waterproof"]
  },
  {
    id: "huda-lip-contour-2",
    name: "Lip Contour 2.0 Automatic Matte Lip Pencil",
    brand: "Huda Beauty",
    category: "beauty", sub: "makeup", condition: "new",
    priceUSD: 22,
    stock: { za: 8, zw: 6 }, usaOrder: true,
    viral: "TikTok viral",
    icon: "pencil", tone: ["#ecd0c4", "#8f4f3e"],
    desc: "A creamy, long-wearing lip liner that defines and fills for the perfect overlined look.",
    highlights: ["0.5 g", "Shades: Muted Pink, Trendy, Warm Brown & more", "Built-in sharpener"]
  },
  {
    id: "huda-glowish-multidew-skin-tint",
    name: "GloWish Multidew Skin Tint",
    brand: "Huda Beauty",
    category: "beauty", sub: "makeup", condition: "new",
    priceUSD: 30,
    stock: { za: 5, zw: 4 }, usaOrder: true,
    icon: "dropper", tone: ["#f6e0cb", "#c08a5a"],
    desc: "A lightweight, dewy skin tint with hydrating ingredients for a fresh, natural glow.",
    highlights: ["40 ml", "Light coverage, dewy finish", "Hyaluronic acid + vitamin C"]
  },
  {
    id: "huda-nude-obsessions-palette",
    name: "Nude Obsessions Eyeshadow Palette",
    brand: "Huda Beauty",
    category: "beauty", sub: "makeup", condition: "new",
    priceUSD: 30,
    stock: { za: 4, zw: 2 }, usaOrder: true,
    icon: "compact", tone: ["#f1dccb", "#a9785a"],
    desc: "Nine wearable mattes and shimmers for everyday nude eyes, in shades made for different undertones.",
    highlights: ["9 shades", "Mattes + shimmers", "Variations: Light, Medium, Rich"]
  },
  {
    id: "danessa-myricks-yummy-skin-balm-powder",
    name: "Yummy Skin Blurring Balm Powder",
    brand: "Danessa Myricks Beauty",
    category: "beauty", sub: "makeup", condition: "new",
    priceUSD: 38,
    stock: { za: 4, zw: 3 }, usaOrder: true,
    viral: "TikTok viral",
    icon: "compact", tone: ["#f3dcc6", "#a8714a"],
    desc: "The balm-to-powder that blurs, sets and smooths in one step — a cult favourite for deeper skin tones with an inclusive shade range.",
    highlights: ["18 shades, light to deep", "Balm-to-powder finish", "Blurs pores and texture"]
  },
  {
    id: "danessa-myricks-colorfix",
    name: "Colorfix Multi-Use Cream Pigment",
    brand: "Danessa Myricks Beauty",
    category: "beauty", sub: "makeup", condition: "new",
    priceUSD: 22,
    stock: { za: 6, zw: 0 }, usaOrder: true,
    icon: "tube", tone: ["#f6d4c8", "#c4574a"],
    desc: "Waterproof, transfer-proof cream colour for eyes, lips and cheeks. Pros use it for everything.",
    highlights: ["Eyes, lips & cheeks", "Waterproof once set", "Matte, metallic & neon shades"]
  },
  {
    id: "danessa-myricks-lightwork-palette",
    name: "Lightwork Highlight & Contour Palette",
    brand: "Danessa Myricks Beauty",
    category: "beauty", sub: "makeup", condition: "new",
    priceUSD: 50,
    stock: { za: 0, zw: 0 }, usaOrder: true,
    icon: "compact", tone: ["#f7e3c5", "#c99a5b"],
    desc: "Cream and balm highlighters that melt into skin for a lit-from-within glow on every complexion.",
    highlights: ["Cream + balm textures", "Face & body", "Buildable glow"]
  },
  {
    id: "fenty-gloss-bomb",
    name: "Gloss Bomb Universal Lip Luminizer",
    brand: "Fenty Beauty",
    category: "beauty", sub: "makeup", condition: "new",
    priceUSD: 24,
    stock: { za: 10, zw: 6 }, usaOrder: true,
    viral: "Best seller",
    icon: "tube", tone: ["#fbd9cf", "#d98a73"],
    desc: "The explosive-shine gloss that flatters every skin tone. Non-sticky, with a peach-vanilla scent.",
    highlights: ["Shade: Fenty Glow (universal rose nude)", "9 ml", "Shea butter for comfort"]
  },
  {
    id: "fenty-pro-filtr-foundation",
    name: "Pro Filt'r Soft Matte Longwear Foundation",
    brand: "Fenty Beauty",
    category: "beauty", sub: "makeup", condition: "new",
    priceUSD: 44,
    stock: { za: 5, zw: 4 }, usaOrder: true,
    icon: "bottle", tone: ["#f0d2b4", "#8d5a36"],
    desc: "Soft-matte, buildable foundation in 50 shades that changed the industry. Send us your shade or we'll help match it.",
    highlights: ["50 shades", "32 ml", "Climate-adaptive, sweat & humidity resistant"]
  },
  {
    id: "fenty-killawatt-highlighter",
    name: "Killawatt Freestyle Highlighter",
    brand: "Fenty Beauty",
    category: "beauty", sub: "makeup", condition: "new",
    priceUSD: 42,
    stock: { za: 2, zw: 0 }, usaOrder: true,
    icon: "compact", tone: ["#fbe7c4", "#d9a24c"],
    desc: "Ultra-fine highlighter duo, from subtle sheen to blinding shimmer.",
    highlights: ["Duo: Trophy Wife / Mean Money / Lightning Dust", "8 g", "Cream-powder hybrid"]
  },

  // ───────────── NARS ─────────────
  {
    id: "nars-radiant-creamy-concealer",
    name: "Radiant Creamy Concealer",
    brand: "NARS",
    category: "beauty", sub: "makeup", condition: "new",
    priceUSD: 36,
    stock: { za: 6, zw: 4 }, usaOrder: true,
    viral: "Best seller",
    icon: "tube", tone: ["#f3dcc8", "#a8714a"],
    desc: "The award-winning concealer that corrects, contours and highlights with a natural, radiant finish.",
    highlights: ["30 shades", "6 ml", "Medium-to-buildable coverage"]
  },
  {
    id: "nars-orgasm-blush",
    name: "Blush in Orgasm",
    brand: "NARS",
    category: "beauty", sub: "makeup", condition: "new",
    priceUSD: 36,
    stock: { za: 5, zw: 3 }, usaOrder: true,
    viral: "Iconic",
    icon: "compact", tone: ["#fbdcd6", "#d9776a"],
    desc: "The world-famous peachy-pink blush with golden shimmer that flatters every skin tone.",
    highlights: ["4.8 g", "Peachy pink with golden shimmer", "Long-wearing powder"]
  },
  {
    id: "nars-light-reflecting-foundation",
    name: "Light Reflecting Foundation",
    brand: "NARS",
    category: "beauty", sub: "makeup", condition: "new",
    priceUSD: 55,
    stock: { za: 3, zw: 2 }, usaOrder: true,
    icon: "bottle", tone: ["#f0d6bd", "#9a6640"],
    desc: "A skincare-infused foundation that blurs and brightens for a luminous, natural finish.",
    highlights: ["36 shades", "30 ml", "Medium buildable coverage"]
  },
  {
    id: "nars-laguna-bronzer",
    name: "Laguna Bronzing Powder",
    brand: "NARS",
    category: "beauty", sub: "makeup", condition: "new",
    priceUSD: 45,
    stock: { za: 3, zw: 2 }, usaOrder: true,
    icon: "compact", tone: ["#f1d6bb", "#a96f3c"],
    desc: "The cult matte bronzer for a natural, sun-kissed glow.",
    highlights: ["11 g", "Shade: Laguna (universal matte bronze)", "Buildable"]
  },

  // ───────────── Charlotte Tilbury ─────────────
  {
    id: "ct-hollywood-flawless-filter",
    name: "Hollywood Flawless Filter",
    brand: "Charlotte Tilbury",
    category: "beauty", sub: "makeup", condition: "new",
    priceUSD: 52,
    stock: { za: 4, zw: 2 }, usaOrder: true,
    viral: "TikTok viral",
    icon: "bottle", tone: ["#f7e3d0", "#c48a57"],
    desc: "The complexion booster that gives skin a soft-focus, lit-from-within glow. Wear alone or under foundation.",
    highlights: ["30 ml", "Shades 1 Fair \u2192 9 Deep", "Primer, highlighter & glow booster"]
  },
  {
    id: "ct-airbrush-setting-spray",
    name: "Airbrush Flawless Setting Spray",
    brand: "Charlotte Tilbury",
    category: "beauty", sub: "makeup", condition: "new",
    priceUSD: 40,
    stock: { za: 5, zw: 3 }, usaOrder: true,
    icon: "mist", tone: ["#f4e4ea", "#b9748e"],
    desc: "Locks makeup in place for up to 16 hours with a fresh, airbrushed finish.",
    highlights: ["100 ml", "Up to 16 hours wear", "Shine-controlling"]
  },
  {
    id: "ct-beauty-light-wand",
    name: "Beauty Light Wand",
    brand: "Charlotte Tilbury",
    category: "beauty", sub: "makeup", condition: "new",
    priceUSD: 45,
    stock: { za: 4, zw: 2 }, usaOrder: true,
    viral: "Fan favourite",
    icon: "tube", tone: ["#fbe0e3", "#d27588"],
    desc: "A cushion-tip liquid highlighter and blush in one, for an instant rosy glow.",
    highlights: ["12 ml", "Shade: Pillow Talk", "Highlighter + blush"]
  },
  {
    id: "ct-magic-cream",
    name: "Charlotte's Magic Cream",
    brand: "Charlotte Tilbury",
    category: "beauty", sub: "skin", condition: "new",
    priceUSD: 84,
    stock: { za: 2, zw: 1 }, usaOrder: true,
    icon: "jar", tone: ["#f4e6dd", "#b98b6b"],
    desc: "The backstage moisturiser that plumps, hydrates and preps skin for makeup.",
    highlights: ["50 ml", "Hyaluronic acid + peptides", "Makeup-artist favourite"]
  },

  // ───────────── Too Faced ─────────────
  {
    id: "too-faced-better-than-sex-mascara",
    name: "Better Than Sex Volumizing Mascara",
    brand: "Too Faced",
    category: "beauty", sub: "makeup", condition: "new",
    priceUSD: 31,
    stock: { za: 10, zw: 6 }, usaOrder: true,
    viral: "Best seller",
    icon: "pencil", tone: ["#f7d9e2", "#c04d72"],
    desc: "The cult hourglass-brush mascara for dramatic volume and length.",
    highlights: ["8 ml", "Intense black", "Volume + length"]
  },
  {
    id: "too-faced-born-this-way",
    name: "Born This Way Natural Finish Foundation",
    brand: "Too Faced",
    category: "beauty", sub: "makeup", condition: "new",
    priceUSD: 45,
    stock: { za: 4, zw: 3 }, usaOrder: true,
    icon: "bottle", tone: ["#f2d8c1", "#a26b43"],
    desc: "Oil-free, medium-to-full coverage foundation that looks like skin, with coconut water and hyaluronic acid.",
    highlights: ["35 shades", "30 ml", "Undetectable, natural finish"]
  },
  {
    id: "too-faced-lip-injection-extreme",
    name: "Lip Injection Extreme Lip Plumper",
    brand: "Too Faced",
    category: "beauty", sub: "makeup", condition: "new",
    priceUSD: 31,
    stock: { za: 6, zw: 4 }, usaOrder: true,
    viral: "TikTok viral",
    icon: "tube", tone: ["#fbe3ea", "#d0607f"],
    desc: "The tingling clear gloss that gives an instantly fuller-looking pout.",
    highlights: ["4 g", "Clear, high-shine", "Instant plumping tingle"]
  },
  {
    id: "too-faced-hangover-primer",
    name: "Hangover Replenishing Face Primer",
    brand: "Too Faced",
    category: "beauty", sub: "makeup", condition: "new",
    priceUSD: 38,
    stock: { za: 3, zw: 0 }, usaOrder: true,
    icon: "bottle", tone: ["#e9f2ea", "#5b9a6b"],
    desc: "A hydrating primer with coconut water and probiotics that wakes up tired skin and helps makeup last.",
    highlights: ["40 ml", "Coconut water + probiotics", "Smooths & hydrates"]
  },

  // ───────────── Rare Beauty ─────────────
  {
    id: "rare-beauty-positive-light-luminizer",
    name: "Positive Light Liquid Luminizer",
    brand: "Rare Beauty",
    category: "beauty", sub: "makeup", condition: "new",
    priceUSD: 28,
    stock: { za: 5, zw: 3 }, usaOrder: true,
    icon: "dropper", tone: ["#fbecd9", "#cf9a5c"],
    desc: "A weightless liquid highlighter for a natural, lit-from-within glow.",
    highlights: ["15 ml", "Buildable glow", "Shades: Enlighten, Mesmerize, Exhilarate & more"]
  },
  {
    id: "rare-beauty-warm-wishes-bronzer",
    name: "Warm Wishes Effortless Bronzer Stick",
    brand: "Rare Beauty",
    category: "beauty", sub: "makeup", condition: "new",
    priceUSD: 28,
    stock: { za: 4, zw: 2 }, usaOrder: true,
    viral: "TikTok viral",
    icon: "tube", tone: ["#f3dac2", "#ad7445"],
    desc: "A creamy bronzer stick with a cushion applicator that blends in seconds.",
    highlights: ["10 g", "Cushion-tip applicator", "Shades: Happy Sol, Sunny Days & more"]
  },
  {
    id: "rare-beauty-liquid-touch-foundation",
    name: "Liquid Touch Weightless Foundation",
    brand: "Rare Beauty",
    category: "beauty", sub: "makeup", condition: "new",
    priceUSD: 34,
    stock: { za: 3, zw: 2 }, usaOrder: true,
    icon: "bottle", tone: ["#f2dac4", "#a36d45"],
    desc: "A breathable, medium-coverage foundation with a natural matte finish.",
    highlights: ["48 shades", "30 ml", "Weightless, buildable"]
  },
  {
    id: "rare-beauty-perfect-strokes-mascara",
    name: "Perfect Strokes Universal Volumizing Mascara",
    brand: "Rare Beauty",
    category: "beauty", sub: "makeup", condition: "new",
    priceUSD: 24,
    stock: { za: 6, zw: 4 }, usaOrder: true,
    icon: "pencil", tone: ["#f6dfe3", "#a65a6c"],
    desc: "A lengthening, volumising mascara with a dual-sided brush for every lash type.",
    highlights: ["11 ml", "Black", "Volume + length, smudge-resistant"]
  },

  // ───────────── L'Oréal Paris ─────────────
  {
    id: "loreal-lash-paradise",
    name: "Voluminous Lash Paradise Mascara",
    brand: "L'Or\u00e9al Paris",
    category: "beauty", sub: "makeup", condition: "new",
    priceUSD: 14,
    stock: { za: 15, zw: 10 }, usaOrder: true,
    viral: "Best seller",
    icon: "pencil", tone: ["#fbe0e8", "#d0577c"],
    desc: "The feathery-soft, volumising mascara that rivals luxury brands at a drugstore price.",
    highlights: ["7.6 ml", "Blackest Black", "Volume + length"]
  },
  {
    id: "loreal-telescopic-lift",
    name: "Telescopic Lift Washable Mascara",
    brand: "L'Or\u00e9al Paris",
    category: "beauty", sub: "makeup", condition: "new",
    priceUSD: 15,
    stock: { za: 10, zw: 6 }, usaOrder: true,
    viral: "TikTok viral",
    icon: "pencil", tone: ["#e6e9f4", "#4a5a9c"],
    desc: "Lifts and lengthens lashes up to 36 hours with a double-hook bristle brush.",
    highlights: ["9.9 ml", "Black", "Lift + length, up to 36 hours"]
  },
  {
    id: "loreal-infallible-fresh-wear",
    name: "Infallible 32H Fresh Wear Foundation",
    brand: "L'Or\u00e9al Paris",
    category: "beauty", sub: "makeup", condition: "new",
    priceUSD: 18,
    stock: { za: 8, zw: 5 }, usaOrder: true,
    icon: "bottle", tone: ["#f2d9c3", "#a56f47"],
    desc: "Long-lasting, breathable full coverage that resists sweat, heat and transfer.",
    highlights: ["40 shades", "30 ml", "SPF 25, waterproof"]
  },
  {
    id: "loreal-revitalift-ha-serum",
    name: "Revitalift 1.5% Pure Hyaluronic Acid Serum",
    brand: "L'Or\u00e9al Paris",
    category: "beauty", sub: "skin", condition: "new",
    priceUSD: 32,
    stock: { za: 6, zw: 4 }, usaOrder: true,
    icon: "dropper", tone: ["#e4ecf7", "#5679b0"],
    desc: "A plumping, hydrating serum with pure hyaluronic acid for smoother-looking skin.",
    highlights: ["30 ml", "1.5% hyaluronic acid", "Fragrance-free"]
  },
  {
    id: "loreal-lumi-glotion",
    name: "Lumi Glotion Natural Glow Enhancer",
    brand: "L'Or\u00e9al Paris",
    category: "beauty", sub: "makeup", condition: "new",
    priceUSD: 18,
    stock: { za: 7, zw: 4 }, usaOrder: true,
    icon: "tube", tone: ["#fbebd6", "#c99357"],
    desc: "A tinted, glowy body-and-face lotion for an instant, radiant finish.",
    highlights: ["40 ml", "Shades: Light, Medium, Deep", "Shea butter + glycerin"]
  },

  // ───────────── ONE/SIZE by Patrick Starrr ─────────────
  {
    id: "onesize-on-til-dawn-setting-spray",
    name: "On 'Til Dawn Mattifying Waterproof Setting Spray",
    brand: "ONE/SIZE by Patrick Starrr",
    category: "beauty", sub: "makeup", condition: "new",
    priceUSD: 34,
    stock: { za: 8, zw: 6 }, usaOrder: true,
    viral: "TikTok viral",
    icon: "mist", tone: ["#ece2f8", "#6a46a3"],
    desc: "The cult setting spray that locks makeup in place through heat, sweat and long nights, with a soft matte finish.",
    highlights: ["100 ml", "Up to 16-hour wear", "Waterproof, mattifying"]
  },
  {
    id: "onesize-ultimate-blurring-setting-powder",
    name: "Ultimate Blurring Setting Powder",
    brand: "ONE/SIZE by Patrick Starrr",
    category: "beauty", sub: "makeup", condition: "new",
    priceUSD: 36,
    stock: { za: 6, zw: 4 }, usaOrder: true,
    viral: "Best seller",
    icon: "compact", tone: ["#f3e6dc", "#a77d5c"],
    desc: "A finely milled setting powder that blurs pores and texture and keeps shine away.",
    highlights: ["Several shades, including translucent", "Blurs pores & texture", "Long-lasting matte set"]
  },
  {
    id: "onesize-turn-up-the-base-foundation",
    name: "Turn Up The Base Full Beat Waterproof Liquid Foundation",
    brand: "ONE/SIZE by Patrick Starrr",
    category: "beauty", sub: "makeup", condition: "new",
    priceUSD: 36,
    stock: { za: 4, zw: 3 }, usaOrder: true,
    icon: "bottle", tone: ["#f1d8c0", "#9d6741"],
    desc: "Full-coverage, waterproof foundation built to last from day to night.",
    highlights: ["Wide shade range", "Full coverage", "Waterproof, long-wearing"]
  },
  {
    id: "onesize-turn-up-the-base-powder-foundation",
    name: "Turn Up The Base Versatile Powder Foundation",
    brand: "ONE/SIZE by Patrick Starrr",
    category: "beauty", sub: "makeup", condition: "new",
    priceUSD: 36,
    stock: { za: 3, zw: 2 }, usaOrder: true,
    icon: "compact", tone: ["#f2dbc5", "#a16d46"],
    desc: "A buildable powder foundation for quick, even coverage and touch-ups on the go.",
    highlights: ["Wide shade range", "Buildable coverage", "Wear alone or over liquid"]
  },
  {
    id: "onesize-beauty-blur-balm",
    name: "Beauty Blur Balm Hybrid Foundation",
    brand: "ONE/SIZE by Patrick Starrr",
    category: "beauty", sub: "makeup", condition: "new",
    priceUSD: 34,
    stock: { za: 3, zw: 2 }, usaOrder: true,
    icon: "compact", tone: ["#f3decb", "#a8774f"],
    desc: "A balm-to-skin hybrid foundation that melts in to blur and even out the complexion.",
    highlights: ["Wide shade range", "Balm texture", "Natural, soft-blur finish"]
  },
  {
    id: "onesize-butter-silk-concealer",
    name: "Butter Silk Concealer",
    brand: "ONE/SIZE by Patrick Starrr",
    category: "beauty", sub: "makeup", condition: "new",
    priceUSD: 28,
    stock: { za: 5, zw: 3 }, usaOrder: true,
    icon: "tube", tone: ["#f5dfca", "#ab7550"],
    desc: "A creamy, buttery concealer that covers and brightens without creasing.",
    highlights: ["Wide shade range", "Creamy, crease-resistant", "Medium-to-full coverage"]
  },
  {
    id: "onesize-bb-cream",
    name: "Turn Up The Base BB Cream",
    brand: "ONE/SIZE by Patrick Starrr",
    category: "beauty", sub: "makeup", condition: "new",
    priceUSD: 32,
    stock: { za: 4, zw: 2 }, usaOrder: true,
    icon: "tube", tone: ["#f4e1cf", "#b0805a"],
    desc: "A lightweight, skin-evening BB cream for a fresh, natural look.",
    highlights: ["Light coverage", "Lightweight", "Everyday wear"]
  },
  {
    id: "onesize-boucle-silk-powder",
    name: "Boucl\u00e9 Silk Airbrushed Finishing Powder",
    brand: "ONE/SIZE by Patrick Starrr",
    category: "beauty", sub: "makeup", condition: "new",
    priceUSD: 36,
    stock: { za: 3, zw: 2 }, usaOrder: true,
    icon: "compact", tone: ["#f4e9e1", "#b38e72"],
    desc: "A silky finishing powder for a smooth, airbrushed final touch.",
    highlights: ["Finishing powder", "Silky, airbrushed finish", "Softens texture"]
  },
  {
    id: "onesize-oil-sucker-primer",
    name: "Oil Sucker Extreme Mattifying Alkaline Primer",
    brand: "ONE/SIZE by Patrick Starrr",
    category: "beauty", sub: "makeup", condition: "new",
    priceUSD: 32,
    stock: { za: 5, zw: 4 }, usaOrder: true,
    icon: "bottle", tone: ["#e5f1ec", "#4c9479"],
    desc: "A mattifying primer that controls oil and helps makeup stay put on shiny skin.",
    highlights: ["Mattifying", "Oil control", "Great for hot climates"]
  },
  {
    id: "onesize-secure-the-blur-primer",
    name: "Secure The Blur Makeup Magnet Primer",
    brand: "ONE/SIZE by Patrick Starrr",
    category: "beauty", sub: "makeup", condition: "new",
    priceUSD: 32,
    stock: { za: 4, zw: 2 }, usaOrder: true,
    icon: "bottle", tone: ["#ece4f6", "#7a59ad"],
    desc: "A gripping, blurring primer that holds makeup in place and softens pores.",
    highlights: ["Gripping formula", "Blurs pores", "Smooth base"]
  },
  {
    id: "onesize-secure-the-sweat-primer",
    name: "Secure The Sweat Waterproof Mattifying Primer",
    brand: "ONE/SIZE by Patrick Starrr",
    category: "beauty", sub: "makeup", condition: "new",
    priceUSD: 32,
    stock: { za: 4, zw: 3 }, usaOrder: true,
    icon: "bottle", tone: ["#e3eef7", "#4f7fb0"],
    desc: "A waterproof, mattifying primer made to keep makeup on through heat and sweat.",
    highlights: ["Waterproof", "Mattifying", "Sweat-resistant"]
  },
  {
    id: "onesize-oil-sucker-blotting-spray",
    name: "Oil Sucker Liquid Blotting Paper Spray",
    brand: "ONE/SIZE by Patrick Starrr",
    category: "beauty", sub: "makeup", condition: "new",
    priceUSD: 30,
    stock: { za: 4, zw: 2 }, usaOrder: true,
    icon: "mist", tone: ["#e6f2ee", "#4f977f"],
    desc: "A spray-on blotting paper that knocks back shine over makeup during the day.",
    highlights: ["Mist over makeup", "Instant shine control", "Touch-up friendly"]
  },
  {
    id: "onesize-go-off-makeup-dissolving-mist",
    name: "GO OFF Makeup Dissolving Mist",
    brand: "ONE/SIZE by Patrick Starrr",
    category: "beauty", sub: "makeup", condition: "new",
    priceUSD: 30,
    stock: { za: 4, zw: 3 }, usaOrder: true,
    icon: "mist", tone: ["#eef0f6", "#6b7aa4"],
    desc: "Mist on, wipe off: melts away makeup, even waterproof formulas, at the end of the night.",
    highlights: ["Spray-on makeup remover", "Removes waterproof makeup", "Gentle on skin"]
  },
  {
    id: "onesize-cheek-clapper-blush-trio",
    name: "Cheek Clapper 3D Blush Trio Palette",
    brand: "ONE/SIZE by Patrick Starrr",
    category: "beauty", sub: "makeup", condition: "new",
    priceUSD: 36,
    stock: { za: 5, zw: 3 }, usaOrder: true,
    viral: "Fan favourite",
    icon: "compact", tone: ["#fbdde3", "#d2607d"],
    desc: "Three coordinated blush shades for a dimensional, sculpted flush.",
    highlights: ["3 shades per palette", "Several colourways", "Buildable, blendable"]
  },
  {
    id: "onesize-made-for-shade-bronze-sculpt-trio",
    name: "Made For Shade Bronze & Sculpt Trio",
    brand: "ONE/SIZE by Patrick Starrr",
    category: "beauty", sub: "makeup", condition: "new",
    priceUSD: 36,
    stock: { za: 3, zw: 2 }, usaOrder: true,
    icon: "compact", tone: ["#f1d8bd", "#a26a39"],
    desc: "Bronzer, contour and highlight in one trio for a quick sculpted face.",
    highlights: ["3 shades", "Bronze, sculpt & glow", "Several colourways"]
  },
  {
    id: "onesize-fantasize-mascara",
    name: "Fantasize Lifting & Lengthening Mascara",
    brand: "ONE/SIZE by Patrick Starrr",
    category: "beauty", sub: "makeup", condition: "new",
    priceUSD: 26,
    stock: { za: 6, zw: 4 }, usaOrder: true,
    icon: "pencil", tone: ["#e8e4f0", "#4f4170"],
    desc: "A lifting, lengthening mascara for long, defined lashes that hold their curl.",
    highlights: ["Black", "Lift + length", "Long-wearing"]
  },
  {
    id: "onesize-lip-snatcher-velvet-flex",
    name: "Lip Snatcher Velvet Flex Lip Duo",
    brand: "ONE/SIZE by Patrick Starrr",
    category: "beauty", sub: "makeup", condition: "new",
    priceUSD: 24,
    stock: { za: 5, zw: 3 }, usaOrder: true,
    icon: "lipstick", tone: ["#f6d6da", "#b0475d"],
    desc: "A two-ended lip duo with a velvet colour and a defining liner for a snatched lip.",
    highlights: ["Liner + colour duo", "Velvet finish", "Several shades"]
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

  // ───────────── NYX Professional Makeup ─────────────
  {
    id: "nyx-butter-gloss",
    name: "Butter Gloss",
    brand: "NYX Professional Makeup",
    category: "beauty", sub: "makeup", condition: "new",
    priceUSD: 9,
    stock: { za: 15, zw: 10 }, usaOrder: true,
    viral: "TikTok viral",
    icon: "tube", tone: ["#fbe1d6", "#e0957a"],
    desc: "The creamy, non-sticky gloss everyone owns in five shades. Buttery shine with a sweet scent.",
    highlights: ["Shades: Cr\u00e8me Br\u00fbl\u00e9e, Madeleine, Tiramisu & more", "8 ml", "Non-sticky"]
  },
  {
    id: "nyx-fat-oil-lip-drip",
    name: "Fat Oil Lip Drip",
    brand: "NYX Professional Makeup",
    category: "beauty", sub: "makeup", condition: "new",
    priceUSD: 12,
    stock: { za: 8, zw: 6 }, usaOrder: true,
    viral: "TikTok viral",
    icon: "dropper", tone: ["#fcd9e3", "#d9577f"],
    desc: "A high-shine lip oil that looks like gloss and feels like care, with a hint of colour.",
    highlights: ["Shades: Missed Call, My Main, Status Update", "4.8 ml", "Squalane + raspberry oils"]
  },
  {
    id: "nyx-duck-plump",
    name: "Duck Plump High Pigment Plumping Gloss",
    brand: "NYX Professional Makeup",
    category: "beauty", sub: "makeup", condition: "new",
    priceUSD: 14,
    stock: { za: 4, zw: 0 }, usaOrder: true,
    icon: "tube", tone: ["#f8d2d6", "#c9465b"],
    desc: "A tingling plumping gloss with real colour for fuller-looking lips.",
    highlights: ["Tingling plumping effect", "7 ml", "Pigmented colour + shine"]
  },
  {
    id: "nyx-suede-matte-lip-liner",
    name: "Suede Matte Lip Liner",
    brand: "NYX Professional Makeup",
    category: "beauty", sub: "makeup", condition: "new",
    priceUSD: 7,
    stock: { za: 20, zw: 12 }, usaOrder: true,
    viral: "Best seller",
    icon: "pencil", tone: ["#ecd0c4", "#8f5442"],
    desc: "The creamy matte liner behind countless viral lip combos. Pair it with Butter Gloss.",
    highlights: ["Shades: Brunch Me, Soft Spoken, Cabaret Queen & more", "1 g", "Long-wearing matte"]
  },
  {
    id: "nyx-buttermelt-blush",
    name: "Buttermelt Powder Blush",
    brand: "NYX Professional Makeup",
    category: "beauty", sub: "makeup", condition: "new",
    priceUSD: 12,
    stock: { za: 6, zw: 4 }, usaOrder: true,
    viral: "TikTok viral",
    icon: "compact", tone: ["#fbd7cf", "#e07a6a"],
    desc: "Butter-soft pressed blush that melts into skin with up to 12 hours of colour.",
    highlights: ["5 g", "Buildable, blendable", "Vegan formula"]
  },
  {
    id: "nyx-epic-ink-liner",
    name: "Epic Ink Liner",
    brand: "NYX Professional Makeup",
    category: "beauty", sub: "makeup", condition: "new",
    priceUSD: 12,
    stock: { za: 10, zw: 6 }, usaOrder: true,
    icon: "pencil", tone: ["#dedde3", "#2d2c35"],
    desc: "Waterproof liquid liner with a flexible brush tip for sharp wings in one stroke.",
    highlights: ["Black", "1 ml", "Waterproof"]
  },
  {
    id: "nyx-matte-setting-spray",
    name: "Matte Finish Setting Spray",
    brand: "NYX Professional Makeup",
    category: "beauty", sub: "makeup", condition: "new",
    priceUSD: 11,
    stock: { za: 9, zw: 7 }, usaOrder: true,
    icon: "mist", tone: ["#e3ecf3", "#7d98b0"],
    desc: "Locks makeup in place with a shine-controlling matte finish \u2014 perfect for hot summer days.",
    highlights: ["60 ml", "Long-lasting hold", "Lightweight mist"]
  },
  {
    id: "nyx-bare-with-me-concealer-serum",
    name: "Bare With Me Concealer Serum",
    brand: "NYX Professional Makeup",
    category: "beauty", sub: "makeup", condition: "new",
    priceUSD: 13,
    stock: { za: 5, zw: 3 }, usaOrder: true,
    icon: "dropper", tone: ["#f2dcc6", "#b88a62"],
    desc: "Lightweight, hydrating concealer with a natural finish that won't crease.",
    highlights: ["9.6 ml", "Hydrating serum formula", "Medium buildable coverage"]
  },

  // ───────────── e.l.f. Cosmetics ─────────────
  {
    id: "elf-power-grip-primer",
    name: "Power Grip Primer",
    brand: "e.l.f. Cosmetics",
    category: "beauty", sub: "makeup", condition: "new",
    priceUSD: 13,
    stock: { za: 14, zw: 8 }, usaOrder: true,
    viral: "TikTok viral",
    icon: "jar", tone: ["#e5f1ef", "#5fa8a0"],
    desc: "The gel primer that grips makeup all day. Hydrating, with hyaluronic acid.",
    highlights: ["24 ml", "Gel formula with hyaluronic acid", "Makeup lasts all day"]
  },
  {
    id: "elf-glow-reviver-lip-oil",
    name: "Glow Reviver Lip Oil",
    brand: "e.l.f. Cosmetics",
    category: "beauty", sub: "makeup", condition: "new",
    priceUSD: 11,
    stock: { za: 10, zw: 6 }, usaOrder: true,
    viral: "TikTok viral",
    icon: "dropper", tone: ["#fcd7e0", "#e46f8e"],
    desc: "A nourishing, tinted lip oil with a glassy shine.",
    highlights: ["Shades: Pink Quartz, Rose Envy, Honey Talks", "7.6 ml", "Jojoba oil + vitamin E"]
  },
  {
    id: "elf-camo-concealer",
    name: "Hydrating Camo Concealer",
    brand: "e.l.f. Cosmetics",
    category: "beauty", sub: "makeup", condition: "new",
    priceUSD: 9,
    stock: { za: 12, zw: 8 }, usaOrder: true,
    viral: "Best seller",
    icon: "bottle", tone: ["#f3dcc8", "#b5835b"],
    desc: "Full coverage, satin finish and 25 shades, for a fraction of the luxury price.",
    highlights: ["25 shades", "6 ml", "Full coverage, satin finish"]
  },
  {
    id: "elf-camo-liquid-blush",
    name: "Camo Liquid Blush",
    brand: "e.l.f. Cosmetics",
    category: "beauty", sub: "makeup", condition: "new",
    priceUSD: 9,
    stock: { za: 7, zw: 5 }, usaOrder: true,
    icon: "dropper", tone: ["#ffd8d6", "#e6646a"],
    desc: "A super-pigmented liquid blush. One tiny drop gives a long-lasting flush.",
    highlights: ["Shades: Comin' in Hot Pink, Suave Mauve & more", "4 ml", "Long-wearing"]
  },
  {
    id: "elf-putty-bronzer",
    name: "Putty Bronzer",
    brand: "e.l.f. Cosmetics",
    category: "beauty", sub: "makeup", condition: "new",
    priceUSD: 10,
    stock: { za: 6, zw: 0 }, usaOrder: true,
    icon: "compact", tone: ["#f2d7b8", "#b0743c"],
    desc: "A creamy putty-to-powder bronzer for a natural sun-kissed warmth.",
    highlights: ["10 g", "Putty-to-powder", "Tahitian vanilla + argan oil"]
  },
  {
    id: "elf-halo-glow-beauty-wand",
    name: "Halo Glow Contour Beauty Wand",
    brand: "e.l.f. Cosmetics",
    category: "beauty", sub: "makeup", condition: "new",
    priceUSD: 11,
    stock: { za: 5, zw: 3 }, usaOrder: true,
    viral: "TikTok viral",
    icon: "tube", tone: ["#e9d2bf", "#8d5c3b"],
    desc: "Liquid contour in a cushion-tip wand for quick, seamless sculpting.",
    highlights: ["10 ml", "Cushion applicator", "Blends in seconds"]
  },
  {
    id: "elf-power-grip-setting-spray",
    name: "Power Grip Dewy Setting Spray",
    brand: "e.l.f. Cosmetics",
    category: "beauty", sub: "makeup", condition: "new",
    priceUSD: 14,
    stock: { za: 6, zw: 4 }, usaOrder: true,
    icon: "mist", tone: ["#e2f0f6", "#5c9fc0"],
    desc: "Sets makeup with a dewy, hydrated finish that lasts up to 16 hours.",
    highlights: ["80 ml", "Dewy finish", "Hyaluronic acid"]
  },
  {
    id: "elf-holy-hydration-cream",
    name: "Holy Hydration! Face Cream",
    brand: "e.l.f. Cosmetics",
    category: "beauty", sub: "skin", condition: "new",
    priceUSD: 16,
    stock: { za: 8, zw: 5 }, usaOrder: true,
    icon: "jar", tone: ["#e6eef8", "#6f8fc4"],
    desc: "A rich daily moisturiser with hyaluronic acid, peptides and niacinamide.",
    highlights: ["50 g", "Fragrance-free", "For all skin types"]
  },

  // ───────────── La Roche-Posay ─────────────
  {
    id: "lrp-toleriane-double-repair",
    name: "Toleriane Double Repair Face Moisturizer",
    brand: "La Roche-Posay",
    category: "beauty", sub: "skin", condition: "new",
    priceUSD: 26,
    stock: { za: 8, zw: 5 }, usaOrder: true,
    viral: "Best seller",
    icon: "pump", tone: ["#e4eef7", "#3f78b5"],
    desc: "The dermatologist-favourite daily moisturiser with ceramides and niacinamide. Restores the skin barrier in one hour.",
    highlights: ["100 ml US size", "Ceramides + niacinamide", "Oil-free, fragrance-free"]
  },
  {
    id: "lrp-cicaplast-baume-b5",
    name: "Cicaplast Baume B5+",
    brand: "La Roche-Posay",
    category: "beauty", sub: "skin", condition: "new",
    priceUSD: 20,
    stock: { za: 10, zw: 6 }, usaOrder: true,
    viral: "TikTok viral",
    icon: "tube", tone: ["#e8f0f6", "#4d7fa8"],
    desc: "The cult multi-purpose soothing balm for dry, irritated skin. A must-have for harmattan and winter.",
    highlights: ["40 ml", "Panthenol + madecassoside", "Face, body & lips"]
  },
  {
    id: "lrp-anthelios-melt-in-milk-spf60",
    name: "Anthelios Melt-In Milk Sunscreen SPF 60",
    brand: "La Roche-Posay",
    category: "beauty", sub: "skin", condition: "new",
    priceUSD: 40,
    stock: { za: 4, zw: 2 }, usaOrder: true,
    icon: "bottle", tone: ["#fdf0d6", "#d8973c"],
    desc: "Fast-absorbing, broad-spectrum sun protection for face and body with a velvety finish.",
    highlights: ["150 ml", "SPF 60, broad spectrum", "Water resistant (80 min)"]
  },
  {
    id: "lrp-effaclar-duo",
    name: "Effaclar Duo Dual Action Acne Treatment",
    brand: "La Roche-Posay",
    category: "beauty", sub: "skin", condition: "new",
    priceUSD: 26,
    stock: { za: 5, zw: 4 }, usaOrder: true,
    icon: "tube", tone: ["#e6f1f0", "#3c8f8a"],
    desc: "Benzoyl peroxide spot treatment that clears breakouts and helps prevent marks.",
    highlights: ["20 ml", "5.5% micronised benzoyl peroxide", "Oil-free"]
  },
  {
    id: "lrp-toleriane-hydrating-cleanser",
    name: "Toleriane Hydrating Gentle Cleanser",
    brand: "La Roche-Posay",
    category: "beauty", sub: "skin", condition: "new",
    priceUSD: 20,
    stock: { za: 9, zw: 6 }, usaOrder: true,
    icon: "pump", tone: ["#eaf1f8", "#5b86b3"],
    desc: "A creamy, non-foaming cleanser that removes makeup and impurities without stripping.",
    highlights: ["400 ml US size", "Ceramides + glycerin", "For normal to dry, sensitive skin"]
  },
  {
    id: "lrp-lipikar-ap-balm",
    name: "Lipikar Balm AP+M Body Moisturizer",
    brand: "La Roche-Posay",
    category: "beauty", sub: "body", condition: "new",
    priceUSD: 34,
    stock: { za: 3, zw: 2 }, usaOrder: true,
    icon: "tube", tone: ["#e3edf6", "#356da4"],
    desc: "Rich, 48-hour body balm for very dry and eczema-prone skin, for adults, kids and babies.",
    highlights: ["400 ml", "Shea butter + niacinamide", "Suitable from birth"]
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
  {
    id: "bbw-ultimate-hydration-body-cream",
    name: "Ultimate Hydration Body Cream",
    brand: "Bath & Body Works",
    category: "beauty", sub: "body", condition: "new",
    priceUSD: 19,
    stock: { za: 12, zw: 8 }, usaOrder: true,
    viral: "Best seller",
    icon: "jar", tone: ["#fde4ec", "#e07a9b"],
    desc: "Rich, whipped body cream with 24-hour moisture in America's favourite scents.",
    highlights: ["226 g", "Scents: A Thousand Wishes, Warm Vanilla Sugar, Champagne Toast", "Shea butter + hyaluronic acid"]
  },
  {
    id: "bbw-shower-gel",
    name: "Daily Nourishing Shower Gel",
    brand: "Bath & Body Works",
    category: "beauty", sub: "body", condition: "new",
    priceUSD: 17,
    stock: { za: 10, zw: 6 }, usaOrder: true,
    icon: "pump", tone: ["#e9f3ea", "#5ba26a"],
    desc: "Lathers into a fragrant, moisturising shower in the scent of your choice.",
    highlights: ["295 ml", "Shea butter + vitamin E", "Scents to match the mists & creams"]
  },
  {
    id: "bbw-3-wick-candle",
    name: "3-Wick Candle",
    brand: "Bath & Body Works",
    category: "beauty", sub: "body", condition: "new",
    priceUSD: 29,
    stock: { za: 6, zw: 4 }, usaOrder: true,
    viral: "TikTok viral",
    icon: "candle", tone: ["#fff0d9", "#d98c3a"],
    desc: "The iconic 3-wick candle that fills a room with scent. Up to 45 hours of burn time.",
    highlights: ["411 g", "Up to 45 hours burn", "Seasonal & classic scents"]
  },
  {
    id: "bbw-foaming-hand-soap",
    name: "Gentle & Clean Foaming Hand Soap",
    brand: "Bath & Body Works",
    category: "beauty", sub: "body", condition: "new",
    priceUSD: 9,
    stock: { za: 20, zw: 12 }, usaOrder: true,
    icon: "pump", tone: ["#e8eefc", "#6b80d6"],
    desc: "Soft, fluffy foam that cleans gently and leaves hands smelling amazing. Stock up in three scents.",
    highlights: ["259 ml", "Aloe + vitamin E", "Mix & match scents"]
  },

  // ───────────── Victoria's Secret Beauty ─────────────
  {
    id: "vs-bombshell-edp",
    name: "Bombshell Eau de Parfum",
    brand: "Victoria's Secret",
    category: "beauty", sub: "fragrance", condition: "new",
    priceUSD: 98,
    stock: { za: 3, zw: 2 }, usaOrder: true,
    viral: "Best seller",
    gender: "women", size: "100 ml",
    icon: "perfume", tone: ["#fbe1ea", "#d1557f"],
    desc: "Victoria's Secret's best-selling fragrance: bright purple passion fruit, peony and vanilla orchid.",
    highlights: ["100 ml EDP", "Notes: passion fruit, peony, vanilla orchid", "Signature striped bottle"]
  },
  {
    id: "vs-bare-vanilla-mist",
    name: "Bare Vanilla Fragrance Mist",
    brand: "Victoria's Secret",
    category: "beauty", sub: "body", condition: "new",
    priceUSD: 24,
    stock: { za: 10, zw: 8 }, usaOrder: true,
    viral: "TikTok viral",
    icon: "mist", tone: ["#f8ead9", "#c08a54"],
    desc: "The cosy, creamy vanilla mist everyone layers. Soft cashmere and whipped vanilla.",
    highlights: ["250 ml", "Notes: whipped vanilla, cashmere", "Hair & body safe"]
  },
  {
    id: "vs-pure-seduction-mist",
    name: "Pure Seduction Fragrance Mist",
    brand: "Victoria's Secret",
    category: "beauty", sub: "body", condition: "new",
    priceUSD: 24,
    stock: { za: 6, zw: 5 }, usaOrder: true,
    icon: "mist", tone: ["#f6dbe4", "#b8456d"],
    desc: "Juicy red plum and freesia: a bold, fruity favourite.",
    highlights: ["250 ml", "Notes: red plum, freesia", "Hair & body safe"]
  },
  {
    id: "vs-bare-vanilla-lotion",
    name: "Bare Vanilla Fragrance Lotion",
    brand: "Victoria's Secret",
    category: "beauty", sub: "body", condition: "new",
    priceUSD: 22,
    stock: { za: 8, zw: 5 }, usaOrder: true,
    icon: "pump", tone: ["#f8ece0", "#b98656"],
    desc: "Silky lotion in the Bare Vanilla scent to layer with the mist.",
    highlights: ["236 ml", "Shea butter + coconut oil", "Pairs with Bare Vanilla mist"]
  },
  {
    id: "vs-flavored-lip-gloss",
    name: "Flavored Lip Gloss",
    brand: "Victoria's Secret",
    category: "beauty", sub: "makeup", condition: "new",
    priceUSD: 15,
    stock: { za: 12, zw: 8 }, usaOrder: true,
    icon: "tube", tone: ["#fde0e6", "#e46a86"],
    desc: "The nostalgic, high-shine flavoured gloss in sweet fruity flavours.",
    highlights: ["13 g", "Flavours: Strawberry Fizz, Coconut Craze & more", "Sheer, glossy shine"]
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
    gender: "women", size: "50 ml",
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
    gender: "women", size: "100 ml",
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
    gender: "unisex", size: "50 ml",
    icon: "perfume", tone: ["#fde2e0", "#e59a92"],
    desc: "A skin scent that smells different on everyone — warm, creamy and subtly musky.",
    highlights: ["50 ml EDP", "Notes: pink pepper, iris, ambrette", "Unisex"]
  },
  {
    id: "forvr-mood-i-am-her",
    name: "I Am Her Eau de Parfum",
    brand: "FORVR Mood",
    category: "beauty", sub: "fragrance", condition: "new",
    priceUSD: 85,
    stock: { za: 3, zw: 2 }, usaOrder: true,
    viral: "New launch",
    gender: "women", size: "50 ml",
    icon: "perfume", tone: ["#f7d6d9", "#a8394a"],
    desc: "Jackie Aina's sensual signature: red velvet and juicy pear over a warm, woody base.",
    highlights: ["50 ml EDP", "Notes: red velvet, pear, oud", "By Jackie Aina's FORVR Mood"]
  },
  {
    id: "forvr-mood-hard-to-get",
    name: "Hard to Get Eau de Parfum",
    brand: "FORVR Mood",
    category: "beauty", sub: "fragrance", condition: "new",
    priceUSD: 85,
    stock: { za: 2, zw: 0 }, usaOrder: true,
    gender: "women", size: "50 ml",
    icon: "perfume", tone: ["#fbf0d2", "#d7aa55"],
    desc: "Bright and addictive: sparkling citron zest, sheer jasmine and whipped vanilla.",
    highlights: ["50 ml EDP", "Notes: citron zest, jasmine, whipped vanilla", "By Jackie Aina's FORVR Mood"]
  },
  {
    id: "forvr-mood-discovery-set",
    name: "Fine Fragrance Discovery Set",
    brand: "FORVR Mood",
    category: "beauty", sub: "fragrance", condition: "new",
    priceUSD: 36,
    stock: { za: 5, zw: 4 }, usaOrder: true,
    viral: "Gift idea",
    gender: "women", size: "4 × 3 ml",
    icon: "perfume", tone: ["#f3e1ea", "#9c6a86"],
    desc: "Try all four FORVR Mood scents before choosing your full size — or gift them.",
    highlights: ["I Am Her, Hard to Get, NDA, You Remind Me", "4 × 3 ml vials", "Perfect gift"]
  },
  {
    id: "ysl-libre-edp",
    name: "Libre Eau de Parfum",
    brand: "Yves Saint Laurent",
    category: "beauty", sub: "fragrance", condition: "new",
    priceUSD: 135, wasUSD: 150,
    stock: { za: 2, zw: 1 }, usaOrder: true,
    viral: "Best seller",
    gender: "women", size: "50 ml",
    icon: "perfume", tone: ["#f5e6c8", "#c79a3c"],
    desc: "A bold floral lavender with orange blossom and vanilla — modern, confident and long-lasting.",
    highlights: ["50 ml EDP", "Notes: lavender, orange blossom, vanilla", "Iconic gold-cap bottle"]
  },
  {
    id: "lancome-la-vie-est-belle",
    name: "La Vie Est Belle Eau de Parfum",
    brand: "Lancôme",
    category: "beauty", sub: "fragrance", condition: "new",
    priceUSD: 125,
    stock: { za: 3, zw: 2 }, usaOrder: true,
    gender: "women", size: "50 ml",
    icon: "perfume", tone: ["#fbe0e6", "#c9708a"],
    desc: "The sweet gourmand classic: iris, praline and vanilla in the famous smile bottle.",
    highlights: ["50 ml EDP", "Notes: iris, praline, vanilla", "All-day wear"]
  },
  {
    id: "ch-good-girl",
    name: "Good Girl Eau de Parfum",
    brand: "Carolina Herrera",
    category: "beauty", sub: "fragrance", condition: "new",
    priceUSD: 130,
    stock: { za: 0, zw: 2 }, usaOrder: true,
    viral: "Fan favourite",
    gender: "women", size: "50 ml",
    icon: "perfume", tone: ["#dde3f2", "#2b3a6b"],
    desc: "Light and dark in a stiletto bottle: jasmine and tuberose over tonka bean and cocoa.",
    highlights: ["50 ml EDP", "Notes: jasmine, tonka bean, cocoa", "Statement stiletto bottle"]
  },
  {
    id: "mfk-baccarat-rouge-540",
    name: "Baccarat Rouge 540 Eau de Parfum",
    brand: "Maison Francis Kurkdjian",
    category: "beauty", sub: "fragrance", condition: "new",
    priceUSD: 335,
    stock: { za: 0, zw: 0 }, usaOrder: true,
    viral: "TikTok viral",
    gender: "unisex", size: "70 ml",
    icon: "perfume", tone: ["#f6d7cf", "#b5523f"],
    desc: "The most-complimented scent online: saffron, jasmine and ambergris for a luminous, airy trail.",
    highlights: ["70 ml EDP", "Notes: saffron, jasmine, amberwood", "Unisex luxury"]
  },
  {
    id: "dior-sauvage-edt",
    name: "Sauvage Eau de Toilette",
    brand: "Dior",
    category: "beauty", sub: "fragrance", condition: "new",
    priceUSD: 125,
    stock: { za: 4, zw: 3 }, usaOrder: true,
    viral: "Best seller",
    gender: "men", size: "100 ml",
    icon: "perfume", tone: ["#dfe7f1", "#3e5d84"],
    desc: "Fresh, raw and powerful: Calabrian bergamot and ambroxan. The world's best-selling men's fragrance.",
    highlights: ["100 ml EDT", "Notes: bergamot, pepper, ambroxan", "Everyday signature"]
  },
  {
    id: "chanel-bleu-edp",
    name: "Bleu de Chanel Eau de Parfum",
    brand: "Chanel",
    category: "beauty", sub: "fragrance", condition: "new",
    priceUSD: 165,
    stock: { za: 2, zw: 1 }, usaOrder: true,
    gender: "men", size: "100 ml",
    icon: "perfume", tone: ["#d9dfe8", "#1f2d44"],
    desc: "Timeless woody-aromatic: citrus freshness over sandalwood and cedar.",
    highlights: ["100 ml EDP", "Notes: grapefruit, incense, sandalwood", "Office to evening"]
  },
  {
    id: "ysl-y-edp",
    name: "Y Eau de Parfum",
    brand: "Yves Saint Laurent",
    category: "beauty", sub: "fragrance", condition: "new",
    priceUSD: 130,
    stock: { za: 0, zw: 2 }, usaOrder: true,
    gender: "men", size: "60 ml",
    icon: "perfume", tone: ["#e3e6ec", "#4b5466"],
    desc: "Clean and intense: crisp apple and ginger over sage and amberwood.",
    highlights: ["60 ml EDP", "Notes: apple, sage, amberwood", "Long-lasting"]
  },
  {
    id: "jpg-le-male-elixir",
    name: "Le Male Elixir Parfum",
    brand: "Jean Paul Gaultier",
    category: "beauty", sub: "fragrance", condition: "new",
    priceUSD: 140,
    stock: { za: 1, zw: 1 }, usaOrder: true,
    viral: "TikTok viral",
    gender: "men", size: "75 ml",
    icon: "perfume", tone: ["#f2dfb5", "#a8792a"],
    desc: "The viral sailor bottle turned up: lavender, honey and tonka for a warm, sweet, magnetic trail.",
    highlights: ["75 ml Parfum", "Notes: lavender, honey, tonka", "Beast-mode projection"]
  },
  {
    id: "versace-eros-edt",
    name: "Eros Eau de Toilette",
    brand: "Versace",
    category: "beauty", sub: "fragrance", condition: "new",
    priceUSD: 105,
    stock: { za: 5, zw: 4 }, usaOrder: true,
    gender: "men", size: "100 ml",
    icon: "perfume", tone: ["#d8efe9", "#2e8c7c"],
    desc: "Mint, green apple and vanilla — fresh and sweet, a crowd-pleaser for nights out.",
    highlights: ["100 ml EDT", "Notes: mint, green apple, vanilla", "Great value"]
  },
  {
    id: "valentino-born-in-roma-uomo-intense",
    name: "Born in Roma Uomo Intense",
    brand: "Valentino",
    category: "beauty", sub: "fragrance", condition: "new",
    priceUSD: 145,
    stock: { za: 0, zw: 0 }, usaOrder: true,
    gender: "men", size: "100 ml",
    icon: "perfume", tone: ["#e4e1ea", "#3c3550"],
    desc: "Smooth and addictive: vanilla, lavender and vetiver in the studded bottle.",
    highlights: ["100 ml EDP", "Notes: vanilla, lavender, vetiver", "Evening favourite"]
  },
  {
    id: "margiela-replica-jazz-club",
    name: "Replica Jazz Club",
    brand: "Maison Margiela",
    category: "beauty", sub: "fragrance", condition: "new",
    priceUSD: 155,
    stock: { za: 1, zw: 0 }, usaOrder: true,
    gender: "unisex", size: "100 ml",
    icon: "perfume", tone: ["#ecdcc8", "#7a4e2c"],
    desc: "A cosy Brooklyn jazz bar in a bottle: rum, tobacco leaf and vanilla.",
    highlights: ["100 ml EDT", "Notes: rum, tobacco, vanilla", "Unisex"]
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
  },

  // ───────────── Sleepwear ─────────────
  {
    id: "vs-satin-short-pj-set",
    name: "Satin Short PJ Set",
    brand: "Victoria's Secret",
    category: "sleep", sub: "pyjamas", condition: "new",
    priceUSD: 65,
    stock: { za: 4, zw: 3 }, usaOrder: true,
    viral: "Best seller",
    icon: "pyjamas", tone: ["#fbe3ea", "#cf6b8c"],
    desc: "A silky satin cami-and-shorts set with contrast piping, perfect for warm nights.",
    highlights: ["Sizes XS\u2013XL (tell us yours at checkout)", "Satin, machine washable", "Colours: Pink, Black, Ivory"]
  },
  {
    id: "vs-modal-long-pj-set",
    name: "Modal Long PJ Set",
    brand: "Victoria's Secret",
    category: "sleep", sub: "pyjamas", condition: "new",
    priceUSD: 75,
    stock: { za: 3, zw: 2 }, usaOrder: true,
    icon: "pyjamas", tone: ["#ece6f5", "#7d63b0"],
    desc: "Buttery-soft modal long-sleeve top and pants with a relaxed fit.",
    highlights: ["Sizes XS\u2013XL (tell us yours at checkout)", "Modal blend, breathable", "Colours: Heather Grey, Navy, Blush"]
  },
  {
    id: "vs-flannel-long-pj-set",
    name: "Flannel Long PJ Set",
    brand: "Victoria's Secret",
    category: "sleep", sub: "pyjamas", condition: "new",
    priceUSD: 80,
    stock: { za: 2, zw: 0 }, usaOrder: true,
    viral: "Fan favourite",
    icon: "pyjamas", tone: ["#f6e2dc", "#b2513e"],
    desc: "The cosy classic: brushed cotton flannel in a button-up top and pants. Ideal for chilly winter nights.",
    highlights: ["Sizes XS\u2013XL (tell us yours at checkout)", "100% cotton flannel", "Seasonal plaids"]
  },
  {
    id: "vs-cotton-short-pj-set",
    name: "Cotton Short PJ Set",
    brand: "Victoria's Secret",
    category: "sleep", sub: "pyjamas", condition: "new",
    priceUSD: 55,
    stock: { za: 5, zw: 4 }, usaOrder: true,
    icon: "pyjamas", tone: ["#e3eef8", "#5487bd"],
    desc: "Breathable cotton short-sleeve top and shorts with fun prints.",
    highlights: ["Sizes XS\u2013XL (tell us yours at checkout)", "100% cotton", "Prints change seasonally"]
  }
];
