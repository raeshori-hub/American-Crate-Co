/*
 * American Crate Company — store settings.
 * Edit the values below to update rates, contact details and fees.
 * All product prices are entered in USD in js/products.js and converted here.
 */
window.STORE_CONFIG = {
  storeName: "American Crate Company",

  // 1 USD = this many ZAR. Update regularly to match your pricing rate.
  usdToZar: 18.5,

  // Where orders and concierge requests are sent.
  // WhatsApp number in international format, digits only (no + or spaces).
  whatsappNumber: "27000000000",
  email: "orders@americancrate.co",
  instagram: "americancrateco",
  tiktok: "americancrateco",

  // Discount applied when a customer chooses "Order from USA" instead of landed stock.
  preorderDiscount: 0.05,

  // Deposit required up front on USA orders and concierge requests.
  preorderDeposit: 0.5,

  // Concierge sourcing fee (share of item cost) and minimum fee in USD.
  conciergeFeeRate: 0.12,
  conciergeMinFeeUSD: 10,

  // Product photos: save a photo as <folder><product id>.jpg (e.g. images/products/dior-sauvage-edt.jpg)
  // and it replaces the generated artwork automatically. Set to "" to turn this off.
  productImageFolder: "images/products/",

  // Typical transit time for products shipped from the USA.
  usaLeadTime: "~2 weeks",

  // Delivery options per country. Fees are in USD.
  countries: {
    za: {
      name: "South Africa",
      flag: "🇿🇦",
      hub: "Johannesburg",
      defaultCurrency: "ZAR",
      delivery: [
        { id: "courier", label: "Door-to-door courier (2–4 working days)", feeUSD: 7 },
        { id: "collect", label: "Collect in Johannesburg (Sandton)", feeUSD: 0 }
      ],
      payments: ["EFT / bank transfer", "Card payment link", "SnapScan / Zapper"]
    },
    zw: {
      name: "Zimbabwe",
      flag: "🇿🇼",
      hub: "Harare",
      defaultCurrency: "USD",
      delivery: [
        { id: "courier", label: "Harare & Bulawayo delivery (1–3 days)", feeUSD: 5 },
        { id: "outlying", label: "Other towns via courier (3–5 days)", feeUSD: 10 },
        { id: "collect", label: "Collect in Harare (Borrowdale)", feeUSD: 0 }
      ],
      payments: ["USD cash on collection", "EcoCash / InnBucks", "Bank transfer (USD)"]
    }
  }
};
