# American Crate Company

Storefront for viral American beauty, fragrance and electronics sold in **South Africa** and **Zimbabwe**.

- Prices in **USD and ZAR** (toggle in the header; South Africa defaults to ZAR, Zimbabwe to USD).
- Every product shows two clearly labelled options:
  - **Available now**: landed stock in the Johannesburg or Harare hub, delivered in 1–4 days.
  - **Ships from USA**: arrives in about 2 weeks, at a small discount, with a deposit up front.
- Brand-new and **refurbished** electronics, with condition grades.
- **Concierge** request form for products we don't list yet.
- Cart and checkout send the order to you on **WhatsApp** or **email**, with an order reference. No backend is needed.

It's a static site (plain HTML, CSS and JavaScript) with no build step.

## Run it locally

Open `index.html` in a browser, or run `python3 -m http.server` and visit http://localhost:8000.

## Editing the store

| What | File |
| --- | --- |
| Exchange rate, WhatsApp number, email, socials, deposit %, USA discount, concierge fee, delivery fees and payment methods per country | `js/config.js` |
| Products: name, brand, category, price (USD), stock per country, refurbished grade, description | `js/products.js` |
| Colours and layout | `css/styles.css` |

**Before going live:**
1. Contact details are set in `js/config.js` (`whatsappNumber`, `phoneDisplay`, `email`). Change them there if they ever change.
2. Replace the placeholder prices in `js/products.js` with your real ones.
3. Update `usdToZar` whenever your rate changes.

**Stock:** `stock: { za: 3, zw: 0 }` means 3 units have landed in South Africa and none in Zimbabwe. When a count is `0`, the product shows "Not in stock locally" and customers can still order it from the USA.

**Photos:** each product shows generated artwork until you add a photo. Save it as `images/products/<product-id>.jpg` and it appears automatically. [`images/products/README.md`](images/products/README.md) lists the filename for every product.

## Publishing

- **GitHub Pages:** go to Settings → Pages, then deploy from the branch root.
- **Netlify / Vercel / Cloudflare Pages:** drag and drop the folder, or connect the repo. No build command is needed.
