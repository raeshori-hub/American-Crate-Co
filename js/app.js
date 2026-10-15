/* American Crate Company — storefront logic (no dependencies). */
(function () {
  "use strict";

  const CFG = window.STORE_CONFIG;
  const PRODUCTS = window.PRODUCTS;
  const byId = Object.fromEntries(PRODUCTS.map((p) => [p.id, p]));
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  // ---------- Icons (48×48 line icons) ----------
  const ICONS = {
    lipstick: '<path d="M18 42V27h12v15zM20 27v-6h8v6M21 21V11l6-4v14"/>',
    dropper: '<rect x="14" y="22" width="20" height="20" rx="5"/><path d="M19 22v-7h10v7M21 15V8a3 3 0 0 1 6 0v7"/>',
    bottle: '<rect x="13" y="18" width="22" height="24" rx="5"/><path d="M18 18V9h12v9M19 29h10"/>',
    tube: '<path d="M16 6h16l-2.5 28h-11zM18 34h12v8H18z"/>',
    compact: '<circle cx="24" cy="27" r="15"/><circle cx="24" cy="27" r="8"/><path d="M12 9l5 5"/>',
    jar: '<rect x="10" y="20" width="28" height="20" rx="5"/><rect x="12" y="11" width="24" height="9" rx="3"/><path d="M17 30h14"/>',
    pump: '<rect x="14" y="20" width="20" height="22" rx="5"/><path d="M20 20v-6h8v6M24 14V8h-8M19 30h10"/>',
    mist: '<rect x="15" y="20" width="18" height="22" rx="4"/><path d="M19 20v-5h10v5M22 15v-4h6v4M33 9h5M34 5l3-2M34 13l3 2"/>',
    perfume: '<rect x="11" y="18" width="26" height="24" rx="6"/><path d="M19 18v-6h10v6M16 9h16M18 30h12"/>',
    styler: '<rect x="20" y="4" width="8" height="18" rx="4"/><path d="M20 10h8M20 15h8"/><rect x="19" y="22" width="10" height="22" rx="4"/>',
    dryer: '<rect x="15" y="4" width="18" height="22" rx="9"/><path d="M20 11h8M20 16h8M20 21h8"/><rect x="20" y="26" width="8" height="17" rx="3"/>',
    earbuds: '<rect x="9" y="15" width="30" height="22" rx="10"/><path d="M9 25h30M22 31h4"/>',
    speaker: '<rect x="8" y="14" width="32" height="20" rx="10"/><circle cx="18" cy="24" r="4"/><circle cx="30" cy="24" r="4"/>',
    vr: '<path d="M8 18h32a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-9l-4-5h-6l-4 5H8a3 3 0 0 1-3-3V21a3 3 0 0 1 3-3zM14 18l3-6h14l3 6"/>',
    tablet: '<rect x="12" y="5" width="24" height="38" rx="4"/><path d="M17 12h14M17 18h14M17 24h10"/>',
    phone: '<rect x="14" y="4" width="20" height="40" rx="5"/><path d="M21 8h6M22 38h4"/>',
    laptop: '<rect x="10" y="10" width="28" height="20" rx="2"/><path d="M4 36h40l-3 4H7z"/>',
    watch: '<rect x="14" y="14" width="20" height="20" rx="6"/><path d="M18 14l2-9h8l2 9M18 34l2 9h8l2-9M24 19v5l3 2"/>',
    console: '<path d="M14 16h20c5 0 8 4 9 10l1 7c.5 4-4 6-7 3l-5-5H16l-5 5c-3 3-7.5 1-7-3l1-7c1-6 4-10 9-10z"/><path d="M15 21v7M11.5 24.5h7M32 23h.01M36 27h.01"/>',
    shield: '<path d="M24 5l15 6v11c0 10-6.5 17-15 21C15.5 39 9 32 9 22V11z"/><path d="M17 24l5 5 9-10"/>',
    tag: '<path d="M6 24V8a2 2 0 0 1 2-2h16l18 18-18 18z"/><circle cx="15" cy="15" r="3"/>',
    check: '<path d="M10 25l9 9 19-20"/>',
    chat: '<path d="M8 10h32v22H22l-9 7v-7H8z"/><path d="M15 19h18M15 25h12"/>',
    pyjamas: '<path d="M17 6l-10 6 4 8 5-3v25h16V17l5 3 4-8-10-6c-1 3-4 5-7 5s-6-2-7-5z"/><path d="M24 20v18M28 24h.01M28 30h.01"/>',
    candle: '<rect x="13" y="22" width="22" height="20" rx="4"/><path d="M24 22v-4M24 18c-2.5-2-2.5-5 0-9 2.5 4 2.5 7 0 9zM13 30h22"/>',
    pencil: '<path d="M30 6l12 12-24 24H6V30zM26 10l12 12M6 42l6-6"/>',
    plane: '<path d="M44 6L4 21l14 6 5 15 6-10 10 7zM18 27L44 6"/>',
    bolt: '<path d="M27 4L10 27h13l-3 17 18-24H25z"/>',
    x: '<path d="M14 14l20 20M34 14L14 34"/>',
    crate: '<rect x="6" y="10" width="36" height="30" rx="4"/><path d="M6 20h36M6 30h36M24 10v30"/>'
  };
  const icon = (name, sw = 2.6) =>
    `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ICONS.crate}</svg>`;

  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  // ---------- Storage (safe) ----------
  const store = {
    get(key, fallback) {
      try { const v = localStorage.getItem("acc." + key); return v ? JSON.parse(v) : fallback; } catch { return fallback; }
    },
    set(key, value) {
      try { localStorage.setItem("acc." + key, JSON.stringify(value)); } catch { /* ignore */ }
    }
  };

  function guessCountry() {
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
      if (/Harare|Bulawayo/.test(tz)) return "zw";
    } catch { /* ignore */ }
    return "za";
  }

  // ---------- State ----------
  const initialCountry = store.get("country", guessCountry());
  const state = {
    country: CFG.countries[initialCountry] ? initialCountry : "za",
    currency: store.get("currency", null),
    cat: "all",
    sub: "all",
    gender: "all",
    brand: "all",
    cond: "all",
    avail: "all",
    q: "",
    sort: "featured",
    shown: 16,
    cart: store.get("cart", []).filter((l) => byId[l.id])
  };
  if (state.currency !== "USD" && state.currency !== "ZAR") state.currency = CFG.countries[state.country].defaultCurrency;

  const GENDERS = [["women", "For her"], ["men", "For him"], ["unisex", "Unisex"]];
  const GENDER_LABEL = Object.fromEntries(GENDERS);
  const GENDER_SEARCH = { women: "for her women ladies perfume", men: "for him men mens cologne", unisex: "unisex for everyone" };

  const SUBS = {
    beauty: [["makeup", "Makeup"], ["skin", "Skincare"], ["body", "Body care"], ["fragrance", "Perfume"], ["hair", "Hair tools"]],
    sleep: [["pyjamas", "Pyjamas"]],
    electronics: [["audio", "Audio"], ["phones", "Phones"], ["computers", "Laptops & tablets"], ["wearables", "Wearables"], ["gaming", "Gaming"]]
  };

  // ---------- Money ----------
  const usdWhole = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
  const usdCents = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2 });
  const fmtUSD = { format: (n) => (Number.isInteger(n) ? usdWhole : usdCents).format(n) };
  const fmtZAR = new Intl.NumberFormat("en-ZA", { style: "currency", currency: "ZAR", minimumFractionDigits: 0, maximumFractionDigits: 0 });
  const round2 = (n) => Math.round(n * 100) / 100;
  const money = (usd, cur = state.currency) => (cur === "ZAR" ? fmtZAR.format(Math.round(usd * CFG.usdToZar)) : fmtUSD.format(round2(usd)));
  const altCur = () => (state.currency === "USD" ? "ZAR" : "USD");
  const unitUSD = (p, mode) => (mode === "ship" ? round2(p.priceUSD * (1 - CFG.preorderDiscount)) : p.priceUSD);
  const pct = (n) => Math.round(n * 100) + "%";

  // ---------- Availability ----------
  const country = () => CFG.countries[state.country];
  const stockHere = (p) => (p.stock && p.stock[state.country]) || 0;
  const inCart = (id, mode) => state.cart.filter((l) => l.id === id && l.mode === mode).reduce((s, l) => s + l.qty, 0);
  const canNow = (p) => stockHere(p) > 0;
  const canShip = (p) => !!p.usaOrder;
  const bestMode = (p) => (canNow(p) ? "now" : "ship");

  const fullName = (p) => (p.name.startsWith(p.brand) ? p.name : `${p.brand} ${p.name}`);

  // ---------- Product art ----------
  // Photo for a product: its `image` field, else images/products/<id>.jpg if that file exists.
  const photoSrc = (p) => p.image || (CFG.productImageFolder ? `${CFG.productImageFolder}${p.id}.jpg` : "");

  function art(p, { mark = false } = {}) {
    const [a, b] = p.tone || ["#ece8e3", "#9a948c"];
    const src = photoSrc(p);
    // The artwork sits underneath; a missing photo removes itself and the artwork shows.
    return `<div class="art" style="--tone-a:${a};--tone-b:${b}" role="img" aria-label="${esc(fullName(p))}">
      <span class="art__icon">${icon(p.icon, 2)}</span>
      ${mark ? `<span class="art__mark">${esc(p.brand)}</span>` : ""}
      ${src ? `<img class="art__photo" src="${esc(src)}" alt="" loading="lazy" onerror="this.remove()">` : ""}
    </div>`;
  }

  // ---------- Filtering ----------
  // Search ignores case, accents and punctuation: every typed word must appear in the product,
  // and brand names also match with the spaces squeezed out ("onesize", "toofaced", "loreal").
  const spaced = (t) => t.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/['’.\-]/g, "").replace(/\//g, " ")
    .toLowerCase().replace(/\s+/g, " ").trim();
  const squash = (t) => spaced(t).replace(/ /g, "");
  function searchHit(p, q) {
    const hay = spaced(`${p.brand} ${p.name} ${p.sub} ${p.condition} ${p.viral || ""} ${GENDER_SEARCH[p.gender] || ""}`);
    return spaced(q).split(" ").every((w) => hay.includes(w)) || squash(p.brand).includes(squash(q));
  }

  function matches(p, f) {
    const q = f.q.trim();
    if (f.cat !== "all" && p.category !== f.cat) return false;
    if (f.sub !== "all" && p.sub !== f.sub) return false;
    if (f.cond !== "all" && p.condition !== f.cond) return false;
    if (f.brand !== "all" && p.brand !== f.brand) return false;
    if (f.gender !== "all" && p.sub === "fragrance" && p.gender !== f.gender && p.gender !== "unisex") return false;
    if (f.avail === "now" && !canNow(p)) return false;
    if (f.avail === "ship" && (canNow(p) || !canShip(p))) return false;
    if (q && !searchHit(p, q)) return false;
    return true;
  }
  // How many products a filter option would show, given the other active filters.
  const countWith = (over) => PRODUCTS.filter((p) => matches(p, { ...state, ...over })).length;

  function filtered() {
    const list = PRODUCTS.filter((p) => matches(p, state));
    const price = (p) => unitUSD(p, bestMode(p));
    if (state.sort === "price-asc") list.sort((a, b) => price(a) - price(b));
    else if (state.sort === "price-desc") list.sort((a, b) => price(b) - price(a));
    else if (state.sort === "name") list.sort((a, b) => a.name.localeCompare(b.name));
    else list.sort((a, b) => (canNow(b) - canNow(a)) || (!!b.viral - !!a.viral));
    return list;
  }

  // ---------- Product cards ----------
  // The delivery option a shopper has picked on each card (defaults to the fastest available).
  const picked = {};
  const modeFor = (p) => (picked[p.id] === "now" && canNow(p)) || (picked[p.id] === "ship" && canShip(p)) ? picked[p.id] : bestMode(p);

  function badges(p) {
    const out = [];
    if (p.condition === "refurbished") out.push('<span class="badge badge--refurb">Refurbished</span>');
    else if (p.viral) out.push(`<span class="badge">${esc(p.viral)}</span>`);
    if (p.wasUSD && p.wasUSD > p.priceUSD) out.push(`<span class="badge badge--sale">-${Math.round((1 - p.priceUSD / p.wasUSD) * 100)}%</span>`);
    return out.join("");
  }

  function metaLine(p) {
    if (p.gender) return `${GENDER_LABEL[p.gender]}${p.size ? ` · ${esc(p.size)}` : ""}`;
    if (p.grade) return esc(p.grade);
    if (p.category === "electronics") return "Brand new · sealed";
    if (p.category === "sleep") return "Sizes XS–XL";
    return "";
  }

  function priceHTML(p, mode) {
    const usd = unitUSD(p, mode);
    const was = p.wasUSD && p.wasUSD > usd ? `<span class="price__was">${money(p.wasUSD)}</span>` : "";
    return `<div class="price"><span class="price__main">${money(usd)}</span>${was}<span class="price__alt">${money(usd, altCur())}</span></div>`;
  }

  function availNote(p, mode) {
    if (mode === "now") {
      const left = stockHere(p);
      return `<b class="now">In stock</b> in ${esc(country().hub)}${left <= 3 ? ` · ${left} left` : ""}`;
    }
    return `<b class="ship">Ships from USA</b>${CFG.preorderDiscount ? ` · save ${pct(CFG.preorderDiscount)}` : ""}`;
  }

  function availSeg(p, mode, big = false) {
    const nowOk = canNow(p), shipOk = canShip(p);
    const sub = (t) => (big ? `<small>${t}</small>` : "");
    return `<div class="avail__seg" role="group" aria-label="Delivery option">
      <button type="button" data-pick="${p.id}" data-mode="now" aria-pressed="${mode === "now"}" ${nowOk ? "" : "disabled"}>
        <span><i class="dot dot--now"></i> Ready now</span>${sub(nowOk ? `${money(unitUSD(p, "now"))} · 1–4 days` : "Not in stock locally")}
      </button>
      <button type="button" data-pick="${p.id}" data-mode="ship" aria-pressed="${mode === "ship"}" ${shipOk ? "" : "disabled"}>
        <span><i class="dot dot--ship"></i> ~2 weeks</span>${sub(`${money(unitUSD(p, "ship"))} · from USA`)}
      </button>
    </div>`;
  }

  function card(p) {
    const mode = modeFor(p);
    return `<article class="product" data-card="${p.id}">
      <button class="product__media" type="button" data-open="${p.id}" aria-label="View ${esc(fullName(p))}">
        ${art(p)}
        <span class="badges">${badges(p)}</span>
      </button>
      <div class="product__info">
        <div class="product__brand">${esc(p.brand)}</div>
        <h3 class="product__name"><button type="button" data-open="${p.id}">${esc(p.name)}</button></h3>
        <div class="product__meta">${metaLine(p)}</div>
        ${priceHTML(p, mode)}
        <div class="avail">
          ${availSeg(p, mode)}
          <p class="avail__note">${availNote(p, mode)}</p>
        </div>
        <button class="add-btn" type="button" data-add="${p.id}" data-mode="${mode}">${mode === "now" ? "Add to bag" : "Pre-order"}</button>
      </div>
    </article>`;
  }

  // Re-render a single card after its option changes (keeps scroll position and focus nearby).
  function refreshCard(id) {
    const el = $(`[data-card="${id}"]`);
    if (!el) return;
    el.outerHTML = card(byId[id]);
  }

  const SUB_LABEL = Object.fromEntries([...SUBS.beauty, ...SUBS.electronics]);
  const CAT_LABEL = { all: "Shop all", beauty: "Beauty", sleep: "Sleepwear", electronics: "Tech" };

  function shopTitle() {
    if (state.sub !== "all") return SUB_LABEL[state.sub];
    if (state.cat === "electronics" && state.cond === "refurbished") return "Refurbished tech";
    if (state.cat === "electronics" && state.cond === "new") return "New tech";
    if (state.avail === "now" && state.cat === "all") return "Ready now";
    return CAT_LABEL[state.cat];
  }

  function activeFilters() {
    const out = [];
    if (state.cat !== "all") out.push(["cat", CAT_LABEL[state.cat]]);
    if (state.sub !== "all") out.push(["sub", SUB_LABEL[state.sub]]);
    if (state.gender !== "all") out.push(["gender", GENDER_LABEL[state.gender]]);
    if (state.brand !== "all") out.push(["brand", state.brand]);
    if (state.cond !== "all") out.push(["cond", state.cond === "new" ? "Brand new" : "Refurbished"]);
    if (state.q.trim()) out.push(["q", `“${state.q.trim()}”`]);
    return out;
  }

  const PAGE = 16;

  function renderGrid({ keepShown = false } = {}) {
    if (!keepShown) state.shown = PAGE;
    const list = filtered();
    $("#productGrid").innerHTML = list.slice(0, state.shown).map(card).join("");
    const left = list.length - state.shown;
    $("#moreWrap").hidden = left <= 0;
    $("#moreText").textContent = `Showing ${Math.min(state.shown, list.length)} of ${list.length}`;
    $("#emptyState").hidden = list.length > 0;
    $("#shopTitle").textContent = shopTitle();
    $("#resultsCount").textContent = `${list.length} product${list.length === 1 ? "" : "s"} · ${list.filter(canNow).length} ready now in ${country().name}`;
    $$("[data-avail]").forEach((b) => b.setAttribute("aria-pressed", b.dataset.avail === state.avail));

    const af = activeFilters();
    const n = af.filter(([k]) => k !== "q" && k !== "cat").length;
    const fc = $("#filterCount");
    fc.hidden = n === 0;
    fc.textContent = n;
    $("#activeFilters").innerHTML = af.length
      ? af.map(([k, l]) => `<button class="af" type="button" data-remove-filter="${k}" aria-label="Remove ${esc(l)} filter">${esc(l)}<span aria-hidden="true">×</span></button>`).join("") +
        (af.length > 1 ? '<button class="af af--clear" type="button" data-clear-filters>Clear all</button>' : "")
      : "";
    if (filterPanel.classList.contains("open")) renderFilters();
  }

  // ---------- Filter panel ----------
  const filterPanel = $("#filterPanel");

  function fchip(key, value, label, count) {
    const on = state[key] === value;
    return `<button class="fchip" type="button" data-f="${key}" data-v="${esc(value)}" aria-pressed="${on}" ${!on && count === 0 ? "disabled" : ""}>${esc(label)}${count != null ? ` <small>${count}</small>` : ""}</button>`;
  }

  function renderFilters() {
    const groups = [];
    groups.push(["Category", [["all", "All"], ["beauty", "Beauty"], ["sleep", "Sleepwear"], ["electronics", "Tech"]]
      .map(([v, l]) => fchip("cat", v, l, v === "all" ? null : countWith({ cat: v, sub: "all", cond: "all", gender: "all", brand: "all" }))).join("")]);
    if (state.cat !== "all") {
      groups.push(["Type", fchip("sub", "all", "All", null) +
        SUBS[state.cat].map(([v, l]) => fchip("sub", v, l, countWith({ sub: v, gender: "all" }))).join("")]);
    }
    if (state.sub === "fragrance") {
      groups.push(["Scent for", fchip("gender", "all", "Everyone", null) + GENDERS.map(([v, l]) => fchip("gender", v, l, countWith({ gender: v }))).join("")]);
    }
    if (state.cat === "all" || state.cat === "electronics") {
      groups.push(["Condition", fchip("cond", "all", "All", null) + fchip("cond", "new", "Brand new", countWith({ cond: "new" })) + fchip("cond", "refurbished", "Refurbished", countWith({ cond: "refurbished" }))]);
    }
    const brands = [...new Set(PRODUCTS.filter((p) => matches(p, { ...state, brand: "all" })).map((p) => p.brand))].sort((a, b) => a.localeCompare(b));
    if (state.brand !== "all" && !brands.includes(state.brand)) brands.unshift(state.brand);
    groups.push(["Brand", fchip("brand", "all", "All brands", null) + brands.map((b) => fchip("brand", b, b, countWith({ brand: b }))).join("")]);
    groups.push(["Availability", [["all", "All"], ["now", "Ready now"], ["ship", "~2 weeks"]]
      .map(([v, l]) => fchip("avail", v, l, v === "all" ? null : countWith({ avail: v }))).join("")]);

    $("#filterContent").innerHTML = groups.map(([t, html]) => `<div class="fgroup"><h3>${t}</h3><div class="fchips">${html}</div></div>`).join("");
    const n = filtered().length;
    $("#filterApply").textContent = `Show ${n} product${n === 1 ? "" : "s"}`;
  }

  function setFilter(key, value) {
    state[key] = value;
    if (key === "cat") { state.sub = "all"; state.gender = "all"; state.brand = "all"; if (value !== "electronics") state.cond = "all"; }
    if (key === "sub") state.gender = "all";
    renderGrid();
  }

  function clearFilters() {
    Object.assign(state, { cat: "all", sub: "all", gender: "all", brand: "all", cond: "all", avail: "all", q: "" });
    $("#searchInput").value = "";
    renderGrid();
  }

  function openFilters() { renderFilters(); filterPanel.classList.add("open"); filterPanel.setAttribute("aria-hidden", "false"); setTimeout(() => $(".modal__close", filterPanel).focus(), 50); }
  function closeFilters() { filterPanel.classList.remove("open"); filterPanel.setAttribute("aria-hidden", "true"); }
  $("#filterBtn").addEventListener("click", openFilters);
  filterPanel.addEventListener("click", (e) => {
    const c = e.target.closest("[data-f]");
    if (c) { setFilter(c.dataset.f, c.dataset.v); return; }
    if (e.target.closest("[data-close-filters]")) closeFilters();
  });

  // ---------- Product modal ----------
  const pm = $("#productModal");
  let pmState = null;

  function renderProductModal() {
    const { p, mode, qty } = pmState;
    $("#productModalBody").innerHTML = `
      <button class="modal__close" type="button" data-close aria-label="Close">×</button>
      <div class="pd">
        <div class="pd__media">${art(p, { mark: true })}<span class="badges">${badges(p)}</span></div>
        <div class="pd__info">
          <div class="product__brand">${esc(p.brand)}</div>
          <h2 id="pmTitle">${esc(p.name)}</h2>
          <div class="product__meta">${metaLine(p)}${p.grade ? " · 6-month warranty" : ""}</div>
          ${priceHTML(p, mode)}
          <p class="pd__desc">${esc(p.desc || "")}</p>
          <div class="pd__label">How would you like it?</div>
          <div class="avail">
            ${availSeg(p, mode, true)}
            <p class="avail__note">${mode === "now"
              ? `Delivered in 1–4 days from ${esc(country().hub)}, or collect.`
              : `Arrives in ${esc(CFG.usaLeadTime)}. ${pct(CFG.preorderDeposit)} deposit now, the rest when it lands.`}</p>
          </div>
          <div class="pd__buy">
            <div class="qty" aria-label="Quantity">
              <button type="button" data-pm-qty="-1" aria-label="Decrease quantity">−</button>
              <span>${qty}</span>
              <button type="button" data-pm-qty="1" aria-label="Increase quantity">+</button>
            </div>
            <button class="add-btn" type="button" data-pm-add>${mode === "now" ? "Add to bag" : "Pre-order"} · ${money(unitUSD(p, mode) * qty)}</button>
          </div>
          ${p.highlights ? `<ul class="pd__list">${p.highlights.map((h) => `<li>${esc(h)}</li>`).join("")}</ul>` : ""}
        </div>
      </div>`;
  }

  function openProduct(id) {
    const p = byId[id];
    if (!p) return;
    pmState = { p, mode: modeFor(p), qty: 1 };
    renderProductModal();
    pm.showModal();
  }

  function clampPmQty() {
    if (pmState.mode === "now") {
      const max = Math.max(1, stockHere(pmState.p) - inCart(pmState.p.id, "now"));
      pmState.qty = Math.min(pmState.qty, max);
    }
  }
  pm.addEventListener("click", (e) => {
    if (e.target === pm || e.target.closest("[data-close]")) { pm.close(); return; }
    const pick = e.target.closest("[data-pick]");
    if (pick) {
      pmState.mode = pick.dataset.mode;
      picked[pmState.p.id] = pick.dataset.mode;
      clampPmQty(); renderProductModal(); refreshCard(pmState.p.id);
      return;
    }
    const q = e.target.closest("[data-pm-qty]");
    if (q) { pmState.qty = Math.max(1, Math.min(20, pmState.qty + Number(q.dataset.pmQty))); clampPmQty(); renderProductModal(); return; }
    if (e.target.closest("[data-pm-add]")) {
      if (addToCart(pmState.p.id, pmState.mode, pmState.qty)) pm.close();
    }
  });

  // ---------- Cart ----------
  function saveCart() { store.set("cart", state.cart); }

  function addToCart(id, mode, qty = 1) {
    const p = byId[id];
    if (mode === "now") {
      const room = stockHere(p) - inCart(id, "now");
      if (room <= 0) { toast(`No more ${p.name} in stock locally — try ordering from the USA.`); return false; }
      qty = Math.min(qty, room);
    }
    const line = state.cart.find((l) => l.id === id && l.mode === mode);
    if (line) line.qty += qty; else state.cart.push({ id, mode, qty });
    saveCart();
    renderCart();
    const btn = $("#cartBtn");
    btn.classList.remove("bump"); void btn.offsetWidth; btn.classList.add("bump");
    toast(mode === "now" ? "Added to bag ✓" : `Pre-order added · arrives in ${CFG.usaLeadTime}`);
    return true;
  }

  function cartTotals(deliveryUSD = null) {
    let now = 0, ship = 0;
    for (const l of state.cart) {
      const v = unitUSD(byId[l.id], l.mode) * l.qty;
      if (l.mode === "now") now += v; else ship += v;
    }
    const subtotal = now + ship;
    const delivery = deliveryUSD == null ? null : deliveryUSD;
    const total = subtotal + (delivery || 0);
    const dueNow = now + ship * CFG.preorderDeposit + (delivery || 0);
    return { now, ship, subtotal, delivery, total, dueNow, balance: total - dueNow };
  }

  function lineHTML(l, idx) {
    const p = byId[l.id];
    return `<div class="line">
      <div class="line__art">${art(p)}</div>
      <div>
        <div class="line__brand">${esc(p.brand)}</div>
        <div class="line__name">${esc(p.name)}</div>
        <div class="line__ctrl">
          <div class="qty">
            <button type="button" data-line-qty="-1" data-idx="${idx}" aria-label="Decrease quantity">−</button>
            <span>${l.qty}</span>
            <button type="button" data-line-qty="1" data-idx="${idx}" aria-label="Increase quantity">+</button>
          </div>
          <button class="line__remove" type="button" data-line-remove="${idx}">Remove</button>
        </div>
      </div>
      <div class="line__price">${money(unitUSD(p, l.mode) * l.qty)}<small>${money(unitUSD(p, l.mode) * l.qty, altCur())}</small></div>
    </div>`;
  }

  function renderCart() {
    const count = state.cart.reduce((s, l) => s + l.qty, 0);
    const countEl = $("#cartCount");
    countEl.textContent = count;
    countEl.toggleAttribute("data-zero", count === 0);
    $("#cartBtn").setAttribute("aria-label", `Open bag, ${count} item${count === 1 ? "" : "s"}`);

    if (!state.cart.length) {
      $("#cartContent").innerHTML = `<div class="bag-empty"><span class="cat__circle">${icon("crate")}</span>
        <p><strong>Your bag is empty</strong><br><span class="muted">Find something you love, or ask our concierge to source it.</span></p>
        <a class="btn btn--dark" href="#shop" data-close-cart>Start shopping</a></div>`;
      $("#cartFoot").innerHTML = "";
      return;
    }
    const groups = [
      ["now", '<span class="tag tag--now"><i class="dot dot--now"></i>Ready now</span>', `<small>Delivered in 1–4 days</small>`],
      ["ship", '<span class="tag tag--ship"><i class="dot dot--ship"></i>From the USA</span>', `<small>Arrives in ${esc(CFG.usaLeadTime)}</small>`]
    ];
    $("#cartContent").innerHTML = groups.map(([mode, badge, note]) => {
      const lines = state.cart.map((l, i) => [l, i]).filter(([l]) => l.mode === mode);
      if (!lines.length) return "";
      return `<div class="bag-group"><div class="bag-group__head">${badge}${note}</div>${lines.map(([l, i]) => lineHTML(l, i)).join("")}</div>`;
    }).join("");

    const t = cartTotals();
    const minFee = Math.min(...country().delivery.map((d) => d.feeUSD));
    $("#cartFoot").innerHTML = `<div class="totals">
        <div><span>Subtotal</span><strong>${money(t.subtotal)}</strong></div>
        <div class="muted"><span>≈ ${altCur()}</span><span>${money(t.subtotal, altCur())}</span></div>
        <div class="muted"><span>Delivery</span><span>${minFee === 0 ? "Free collection, or courier" : "From " + money(minFee)}</span></div>
        ${t.ship ? `<div class="muted"><span>USA items: ${pct(CFG.preorderDeposit)} deposit now</span><span>${money(t.dueNow)} due on order</span></div>` : ""}
      </div>
      <button class="btn btn--dark btn--block" type="button" id="checkoutBtn">Checkout</button>`;
  }

  $("#cartContent").addEventListener("click", (e) => {
    const q = e.target.closest("[data-line-qty]");
    if (q) {
      const l = state.cart[Number(q.dataset.idx)];
      const p = byId[l.id];
      const next = l.qty + Number(q.dataset.lineQty);
      if (l.mode === "now" && next > stockHere(p)) { toast(`Only ${stockHere(p)} in stock locally.`); return; }
      if (next <= 0) state.cart.splice(Number(q.dataset.idx), 1); else l.qty = Math.min(next, 20);
      saveCart(); renderCart(); return;
    }
    const r = e.target.closest("[data-line-remove]");
    if (r) { state.cart.splice(Number(r.dataset.lineRemove), 1); saveCart(); renderCart(); }
  });

  const drawer = $("#cartDrawer");
  function openCart() { drawer.classList.add("open"); drawer.setAttribute("aria-hidden", "false"); setTimeout(() => $(".modal__close", drawer).focus(), 50); }
  function closeCart() { drawer.classList.remove("open"); drawer.setAttribute("aria-hidden", "true"); }
  $("#cartBtn").addEventListener("click", openCart);
  drawer.addEventListener("click", (e) => {
    if (e.target.closest("[data-close-cart]")) closeCart();
    if (e.target.closest("#checkoutBtn")) { closeCart(); openCheckout(); }
  });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && drawer.classList.contains("open")) closeCart(); });

  // ---------- Checkout ----------
  const co = $("#checkoutModal");
  const coForm = $("#checkoutForm");

  function fillCheckoutOptions() {
    const c = CFG.countries[coForm.country.value];
    coForm.delivery.innerHTML = c.delivery.map((d) =>
      `<option value="${d.id}">${esc(d.label)} — ${d.feeUSD ? money(d.feeUSD) : "Free"}</option>`).join("");
    coForm.payment.innerHTML = c.payments.map((p) => `<option>${esc(p)}</option>`).join("");
    updateCheckoutSummary();
  }

  function deliveryChoice() {
    const c = CFG.countries[coForm.country.value];
    return c.delivery.find((d) => d.id === coForm.delivery.value) || c.delivery[0];
  }

  function updateCheckoutSummary() {
    const d = deliveryChoice();
    $("#addressField").hidden = d.id === "collect";
    const t = cartTotals(d.feeUSD);
    $("#checkoutSummary").innerHTML = `<ul>${state.cart.map((l) => {
      const p = byId[l.id];
      return `<li><span>${l.qty} × ${esc(fullName(p))} <span class="muted">(${l.mode === "now" ? "ready now" : "USA order"})</span></span><span>${money(unitUSD(p, l.mode) * l.qty)}</span></li>`;
    }).join("")}
      <li><span>Delivery</span><span>${d.feeUSD ? money(d.feeUSD) : "Free"}</span></li></ul>
      <div class="totals" style="margin:0">
        <div class="totals__grand"><span>Total</span><span>${money(t.total)} <small class="muted">(${money(t.total, altCur())})</small></span></div>
        ${t.ship ? `<div class="muted"><span>Due on order (incl. ${pct(CFG.preorderDeposit)} USA deposit)</span><span>${money(t.dueNow)}</span></div>
        <div class="muted"><span>Balance when USA items land</span><span>${money(t.balance)}</span></div>` : ""}
      </div>`;
  }

  function openCheckout() {
    if (!state.cart.length) return;
    $("#checkoutStep").hidden = false;
    $("#checkoutDone").hidden = true;
    $("#oError").hidden = true;
    coForm.country.value = state.country;
    fillCheckoutOptions();
    co.showModal();
  }

  coForm.country.addEventListener("change", fillCheckoutOptions);
  coForm.delivery.addEventListener("change", updateCheckoutSummary);
  co.addEventListener("click", (e) => {
    if (e.target === co || e.target.closest("[data-close]")) co.close();
  });

  function validate(form, errEl, fields) {
    let firstBad = null;
    for (const name of fields) {
      const el = form[name];
      const bad = !el.value.trim();
      el.setAttribute("aria-invalid", bad);
      if (bad && !firstBad) firstBad = el;
    }
    if (form.email && form.email.value && !/^\S+@\S+\.\S+$/.test(form.email.value)) {
      form.email.setAttribute("aria-invalid", "true");
      firstBad = firstBad || form.email;
    }
    errEl.hidden = !firstBad;
    if (firstBad) { errEl.textContent = "Please fill in the highlighted fields."; firstBad.focus(); }
    return !firstBad;
  }

  function send(channel, subject, body) {
    if (channel === "email") {
      window.location.href = `mailto:${CFG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    } else {
      window.open(`https://wa.me/${CFG.whatsappNumber}?text=${encodeURIComponent(body)}`, "_blank", "noopener");
    }
  }

  function orderRef() {
    const d = new Date();
    const ymd = `${String(d.getFullYear()).slice(2)}${String(d.getMonth() + 1).padStart(2, "0")}${String(d.getDate()).padStart(2, "0")}`;
    return `ACC-${ymd}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
  }

  coForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const fields = ["name", "phone", "city"];
    if (deliveryChoice().id !== "collect") fields.push("address");
    if (!validate(coForm, $("#oError"), fields)) return;

    const f = coForm;
    const c = CFG.countries[f.country.value];
    const d = deliveryChoice();
    const t = cartTotals(d.feeUSD);
    const both = (usd) => `${fmtUSD.format(round2(usd))} / ${fmtZAR.format(Math.round(usd * CFG.usdToZar))}`;
    const ref = orderRef();
    const lines = state.cart.map((l) => {
      const p = byId[l.id];
      return `• ${l.qty} × ${fullName(p)} — ${l.mode === "now" ? "READY NOW" : "ORDER FROM USA (~2 wks)"} — ${both(unitUSD(p, l.mode) * l.qty)}`;
    });
    const body = [
      `Hi ${CFG.storeName}! I'd like to place an order.`,
      `Order ref: ${ref}`,
      "",
      ...lines,
      "",
      `Delivery: ${d.label} — ${d.feeUSD ? both(d.feeUSD) : "Free"}`,
      `TOTAL: ${both(t.total)}`,
      t.ship ? `Due on order (incl. ${pct(CFG.preorderDeposit)} USA deposit): ${both(t.dueNow)}` : null,
      `Preferred currency: ${state.currency}`,
      `Payment: ${f.payment.value}`,
      "",
      `Name: ${f.name.value.trim()}`,
      `WhatsApp: ${f.phone.value.trim()}`,
      f.email.value.trim() ? `Email: ${f.email.value.trim()}` : null,
      `Country: ${c.name}`,
      `City: ${f.city.value.trim()}`,
      d.id !== "collect" && f.address.value.trim() ? `Address: ${f.address.value.trim()}` : null,
      f.notes.value.trim() ? `Notes: ${f.notes.value.trim()}` : null
    ].filter((x) => x !== null).join("\n");

    send(e.submitter && e.submitter.dataset.send === "email" ? "email" : "whatsapp", `New order ${ref}`, body);

    $("#orderRef").textContent = ref;
    $("#checkoutStep").hidden = true;
    $("#checkoutDone").hidden = false;
    state.cart = [];
    saveCart();
    renderCart();
  });

  // ---------- Concierge ----------
  const cForm = $("#conciergeForm");
  cForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!validate(cForm, $("#cError"), ["product", "name", "phone"])) return;
    const f = cForm;
    const body = [
      `Hi ${CFG.storeName}! Concierge request:`,
      "",
      `Product: ${f.product.value.trim()}`,
      f.details.value.trim() ? `Details: ${f.details.value.trim()}` : null,
      `Deliver to: ${CFG.countries[f.country.value].name}`,
      "",
      `Name: ${f.name.value.trim()}`,
      `WhatsApp: ${f.phone.value.trim()}`
    ].filter((x) => x !== null).join("\n");
    send(e.submitter && e.submitter.dataset.send === "email" ? "email" : "whatsapp", "Concierge request", body);
    toast("Thanks! We'll send your quote within 24 hours.");
    f.reset();
    f.country.value = state.country;
  });

  // ---------- Toast ----------
  let toastTimer;
  function toast(msg) {
    const t = $("#toast");
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove("show"), 2600);
  }

  // ---------- Global UI ----------
  function renderLocale() {
    const c = country();
    $("#localeFlag").textContent = c.flag;
    $("#localeCur").textContent = state.currency;
    $$("[data-currency]").forEach((b) => b.setAttribute("aria-pressed", b.dataset.currency === state.currency));
    $$("[data-country]").forEach((b) => b.setAttribute("aria-pressed", b.dataset.country === state.country));
  }

  function renderStatic() {
    $$("[data-preorder-discount]").forEach((el) => (el.textContent = pct(CFG.preorderDiscount)));
    $$("[data-deposit]").forEach((el) => (el.textContent = pct(CFG.preorderDeposit)));
    $$("[data-concierge-fee]").forEach((el) => (el.textContent = pct(CFG.conciergeFeeRate)));
    $$("[data-concierge-min]").forEach((el) => (el.textContent = money(CFG.conciergeMinFeeUSD)));
    $$("[data-rate]").forEach((el) => (el.textContent = `$1 = R${CFG.usdToZar.toFixed(2)}`));
    $$("[data-hub-za]").forEach((el) => (el.textContent = CFG.countries.za.hub));
    $$("[data-hub-zw]").forEach((el) => (el.textContent = CFG.countries.zw.hub));
    cForm.country.value = state.country;
  }

  function renderAll() {
    renderLocale();
    renderStatic();
    renderGrid({ keepShown: true });
    renderCart();
    if (pm.open && pmState) { pmState.mode = modeFor(pmState.p); clampPmQty(); renderProductModal(); }
  }

  // Country & currency
  const localeModal = $("#localeModal");
  $("#localeBtn").addEventListener("click", () => localeModal.showModal());
  localeModal.addEventListener("click", (e) => {
    if (e.target === localeModal || e.target.closest("[data-close]")) { localeModal.close(); return; }
    const cur = e.target.closest("[data-currency]");
    if (cur) { state.currency = cur.dataset.currency; store.set("currency", state.currency); renderAll(); return; }
    const ctry = e.target.closest("[data-country]");
    if (ctry && ctry.dataset.country !== state.country) setCountry(ctry.dataset.country);
  });

  function setCountry(code) {
    state.country = code;
    state.currency = country().defaultCurrency;
    store.set("country", state.country);
    store.set("currency", state.currency);
    // Landed stock differs per country: move "ready now" lines that are no longer possible to USA orders.
    let moved = false;
    state.cart = state.cart.flatMap((l) => {
      if (l.mode !== "now") return [l];
      const s = stockHere(byId[l.id]);
      if (s >= l.qty) return [l];
      moved = true;
      const out = [];
      if (s > 0) out.push({ ...l, qty: s });
      out.push({ id: l.id, mode: "ship", qty: l.qty - s });
      return out;
    });
    state.cart = state.cart.reduce((acc, l) => {
      const ex = acc.find((x) => x.id === l.id && x.mode === l.mode);
      if (ex) ex.qty += l.qty; else acc.push({ ...l });
      return acc;
    }, []);
    saveCart();
    renderAll();
    toast(`Showing stock for ${country().name}${moved ? " · some bag items moved to USA order" : ""}`);
  }

  // Jump to a section of the shop from nav, category circles, hero and footer.
  function goShop(d) {
    Object.assign(state, { cat: d.goCat || "all", sub: d.goSub || "all", cond: d.goCond || "all", avail: d.goAvail || "all", gender: "all", brand: "all", q: "" });
    $("#searchInput").value = "";
    renderGrid();
    closeMenu();
    $("#shop").scrollIntoView({ behavior: "smooth" });
  }

  document.addEventListener("click", (e) => {
    const t = e.target.closest("button, a");
    if (!t) return;
    const d = t.dataset;
    if (d.goCat || d.goAvail) { e.preventDefault(); goShop(d); }
    else if (d.avail) { state.avail = d.avail; renderGrid(); }
    else if (d.removeFilter) {
      if (d.removeFilter === "q") { state.q = ""; $("#searchInput").value = ""; renderGrid(); }
      else setFilter(d.removeFilter, "all");
    }
    else if ("clearFilters" in d) { clearFilters(); }
    else if (d.pick && !t.closest("#productModal")) { picked[d.pick] = d.mode; refreshCard(d.pick); }
    else if (d.open) { openProduct(d.open); }
    else if (d.add) { addToCart(d.add, d.mode); }
  });

  let searchTimer;
  $("#searchInput").addEventListener("input", (e) => {
    clearTimeout(searchTimer);
    // Search covers the whole store, so typing clears any category narrowing.
    searchTimer = setTimeout(() => {
      state.q = e.target.value;
      if (state.q.trim()) Object.assign(state, { cat: "all", sub: "all", gender: "all", brand: "all", cond: "all" });
      renderGrid();
    }, 150);
  });
  $("#searchBtn").addEventListener("click", () => {
    $("#shop").scrollIntoView({ behavior: "smooth" });
    setTimeout(() => $("#searchInput").focus({ preventScroll: true }), 350);
  });
  $("#sortSelect").addEventListener("change", (e) => { state.sort = e.target.value; renderGrid(); });
  $("#moreBtn").addEventListener("click", () => { state.shown += PAGE; renderGrid({ keepShown: true }); });

  // Mobile menu
  const menuBtn = $("#menuBtn");
  function closeMenu() { $("#nav").classList.remove("open"); $("#menuScrim").classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); }
  menuBtn.addEventListener("click", () => {
    $("#nav").classList.add("open"); $("#menuScrim").classList.add("open"); menuBtn.setAttribute("aria-expanded", "true");
  });
  $$("[data-close-menu]").forEach((el) => el.addEventListener("click", closeMenu));
  $$("#nav a").forEach((a) => a.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    closeMenu();
    if (filterPanel.classList.contains("open")) closeFilters();
  });

  // Icons in static markup
  $$("[data-icon]").forEach((el) => (el.innerHTML = icon(el.dataset.icon, 2)));

  // Hero: four favourites
  $("#heroGrid").innerHTML = ["rare-beauty-soft-pinch-blush", "fenty-gloss-bomb", "kayali-vanilla-28", "nyx-butter-gloss"]
    .map((id) => byId[id]).filter(Boolean).map((p) => art(p)).join("");

  // Footer contact
  $("#footWhatsapp").href = `https://wa.me/${CFG.whatsappNumber}`;
  $("#footEmail").href = `mailto:${CFG.email}`;
  $("#footEmail").textContent = CFG.email;
  $("#footInstagram").href = `https://instagram.com/${CFG.instagram}`;
  $("#footTiktok").href = `https://www.tiktok.com/@${CFG.tiktok}`;
  $("#year").textContent = new Date().getFullYear();

  renderAll();
})();
