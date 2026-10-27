
"use strict";

const ADMIN_WA = "628818238236";
const LOGO = "logolixerastore.jpg";

const rupiah = (number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0
  }).format(number);

const money = (number) =>
  "Rp" + new Intl.NumberFormat("id-ID").format(number);

const makeProducts = (items) =>
  items.map(([name, price, oldPrice]) => ({
    name,
    price,
    oldPrice: oldPrice || null
  }));

const categories = [
  {
    name: "Mobile Legends",
    group: "Game",
    image: "mobilelegends.jpg",
    description: "Diamond & Weekly Pass",
    fields: [
      { label: "User ID", placeholder: "Contoh: 123456789", required: true },
      { label: "Server / Zone ID", placeholder: "Contoh: 1234", required: true }
    ],
    products: makeProducts([
      ["5 Diamonds", 1785],
      ["10 Diamonds (9+1)", 3579],
      ["12 Diamonds (11+1)", 3949],
      ["19 Diamonds (17+2)", 6341],
      ["28 Diamonds (25+3)", 9509],
      ["44 Diamonds (40+4)", 13753],
      ["54 Diamonds (50+4)", 16350],
      ["71 Diamonds (64+7)", 22165],
      ["74 Diamonds (67+7)", 23250],
      ["85 Diamonds (77+8)", 26218],
      ["88 Diamonds (80+8)", 27306],
      ["110 Diamonds (100+10)", 32945],
      ["113 Diamonds (102+11)", 35144],
      ["128 Diamonds (117+11)", 42385],
      ["148 Diamonds (134+14)", 48616],
      ["170 Diamonds (154+16)", 51863],
      ["176 Diamonds (160+16)", 57984],
      ["184 Diamonds (167+17)", 61576],
      ["222 Diamonds (200+22)", 74198],
      ["240 Diamonds (217+23)", 75016],
      ["258 Diamonds (233+25)", 86204],
      ["277 Diamonds (250+27)", 85657],
      ["296 Diamonds", 90132],
      ["301 Diamonds", 94486],
      ["305 Diamonds", 100630],
      ["333 Diamonds", 103880],
      ["346 Diamonds", 102127],
      ["356 Diamonds", 111487],
      ["370 Diamonds", 113183],
      ["384 Diamonds", 116898],
      ["408 Diamonds", 123698],
      ["424 Diamonds", 130000],
      ["452 Diamonds", 147108],
      ["518 Diamonds", 169376],
      ["568 Diamonds", 182853],
      ["601 Diamonds", 192464],
      ["642 Diamonds", 207000],
      ["716 Diamonds", 229957],
      ["758 Diamonds", 244565],
      ["790 Diamonds", 255639],
      ["845 Diamonds", 272849],
      ["875 Diamonds", 279442],
      ["938 Diamonds", 299998],
      ["966 Diamonds", 309624],
      ["1045 Diamonds", 311799],
      ["1136 Diamonds", 363000],
      ["1159 Diamonds", 371996],
      ["1443 Diamonds", 460683],
      ["1506 Diamonds", 481239],
      ["1704 Diamonds", 544523],
      ["2010 Diamonds", 561429],
      ["2232 Diamonds", 689551],
      ["2380 Diamonds", 732449],
      ["2578 Diamonds", 796794],
      ["2625 Diamonds", 811951],
      ["3453 Diamonds", 1076536]
    ])
  },
  {
    name: "Free Fire",
    group: "Game",
    image: "freefire.jpg",
    description: "Diamond & Membership",
    fields: [
      { label: "Player ID", placeholder: "Masukkan Player ID", required: true }
    ],
    products: makeProducts([
      ["5 Diamonds", 884, 1000],
      ["10 Diamonds", 1762, 2000],
      ["20 Diamonds", 3518, 4000],
      ["50 Diamonds", 7150, 8000],
      ["70 Diamonds", 9150, 10000],
      ["140 Diamonds", 18350, 20000],
      ["12 Diamonds", 1870, 2200],
      ["25 Diamonds", 4897, 5000],
      ["30 Diamonds", 5561, 6000],
      ["55 Diamonds", 7860, 9000],
      ["80 Diamonds", 11754, 12000],
      ["100 Diamonds", 13980, 17600],
      ["120 Diamonds", 17632, 18000],
      ["130 Diamonds", 18791, 19000],
      ["145 Diamonds", 20567, 21000],
      ["150 Diamonds", 21549, 22000],
      ["190 Diamonds", 27426, 28000],
      ["200 Diamonds", 29385, 30000],
      ["210 Diamonds", 29826, 30000],
      ["280 Diamonds", 39179, 40000],
      ["355 Diamonds", 46850, 50000],
      ["420 Diamonds", 57866, 59000]
    ])
  },
  {
    name: "Free Fire MAX",
    group: "Game",
    image: "freefiremax.jpg",
    description: "Diamond",
    fields: [
      { label: "Player ID", placeholder: "Masukkan Player ID", required: true }
    ],
    products: []
  },
  {
    name: "Magic Chess GoGo",
    group: "Game",
    image: "magicchesgogo.jpg",
    description: "Top up game",
    fields: [
      { label: "User ID", placeholder: "Masukkan User ID", required: true },
      { label: "Server / Zone ID", placeholder: "Jika diperlukan", required: false }
    ],
    products: []
  },
  {
    name: "PUBG Mobile",
    group: "Game",
    image: "pubgmobile.jpg",
    description: "UC",
    fields: [
      { label: "Player ID", placeholder: "Masukkan Character ID", required: true }
    ],
    products: []
  },
  {
    name: "FC Mobile",
    group: "Game",
    image: "fcmobile.jpg",
    description: "FC Points",
    fields: [
      { label: "User ID", placeholder: "Masukkan User ID", required: true }
    ],
    products: []
  },
  {
    name: "Honor of Kings",
    group: "Game",
    image: "honorofkings.jpg",
    description: "Token",
    fields: [
      { label: "Player ID", placeholder: "Masukkan Player ID", required: true }
    ],
    products: []
  },
  {
    name: "Football Master 2",
    group: "Game",
    image: "footballmaster2.jpg",
    description: "Item game",
    fields: [
      { label: "User ID", placeholder: "Masukkan User ID", required: true }
    ],
    products: []
  },
  {
    name: "Delta Force",
    group: "Game",
    image: "deltaforce.jpg",
    description: "Top up game",
    fields: [
      { label: "Player ID", placeholder: "Masukkan Player ID", required: true }
    ],
    products: []
  },
  {
    name: "ZEPETO",
    group: "Game",
    image: "zepeto.jpg",
    description: "ZEM & Coin",
    fields: [
      { label: "ZEPETO ID", placeholder: "Masukkan ID akun", required: true }
    ],
    products: []
  },
  {
    name: "Undawn",
    group: "Game",
    image: "undawn.jpg",
    description: "Top up game",
    fields: [
      { label: "Character ID", placeholder: "Masukkan Character ID", required: true },
      { label: "Server", placeholder: "Masukkan server", required: false }
    ],
    products: []
  },
  {
    name: "Call of Duty Mobile",
    group: "Game",
    image: "callofduty.jpg",
    description: "CP",
    fields: [
      { label: "Player UID", placeholder: "Masukkan Player UID", required: true }
    ],
    products: []
  },
  {
    name: "Arena of Valor",
    group: "Game",
    image: "arenaofvalor.jpg",
    description: "Voucher",
    fields: [
      { label: "Player ID", placeholder: "Masukkan Player ID", required: true }
    ],
    products: []
  },
  {
    name: "AFK Journey",
    group: "Game",
    image: "afkjourney.jpg",
    description: "Dragon Crystals",
    fields: [
      { label: "Player ID", placeholder: "Masukkan Player ID", required: true },
      { label: "Server", placeholder: "Masukkan server", required: false }
    ],
    products: []
  },
  {
    name: "Cloud Song: Saga of Skywalkers",
    group: "Game",
    image: "cloudsongsagaofskywalkers.jpg",
    description: "Top up game",
    fields: [
      { label: "Character ID", placeholder: "Masukkan Character ID", required: true },
      { label: "Server", placeholder: "Masukkan server", required: false }
    ],
    products: []
  },
  {
    name: "Mob Rush",
    group: "Game",
    image: "mobrush.jpg",
    description: "Top up game",
    fields: [
      { label: "Player ID", placeholder: "Masukkan Player ID", required: true }
    ],
    products: []
  },
  {
    name: "HAGO",
    group: "Game",
    image: "hago.jpg",
    description: "Koin HAGO",
    fields: [
      { label: "User ID", placeholder: "Masukkan User ID", required: true }
    ],
    products: []
  },
  {
    name: "Pixel Gun 3D",
    group: "Game",
    image: "pixelgun3d.jpg",
    description: "Gems & Coins",
    fields: [
      { label: "Player ID", placeholder: "Masukkan Player ID", required: true }
    ],
    products: []
  },
  {
    name: "Captain Tsubasa: Ace",
    group: "Game",
    image: "captaintsubasa.jpg",
    description: "Top up game",
    fields: [
      { label: "Player ID", placeholder: "Masukkan Player ID", required: true }
    ],
    products: []
  },
  {
    name: "Racing Master",
    group: "Game",
    image: "racingmaster.jpg",
    description: "Top up game",
    fields: [
      { label: "Player ID", placeholder: "Masukkan Player ID", required: true }
    ],
    products: []
  },
  {
    name: "MU Origin 2",
    group: "Game",
    image: "muorigin.jpg",
    description: "Diamond",
    fields: [
      { label: "Character ID", placeholder: "Masukkan Character ID", required: true },
      { label: "Server", placeholder: "Masukkan server", required: false }
    ],
    products: []
  },
  {
    name: "VALORANT",
    group: "PC Game",
    image: "valorant.jpg",
    description: "VP",
    fields: [
      { label: "Riot ID", placeholder: "Nama pemain#TAG", required: true },
      { label: "Region", placeholder: "Contoh: AP", required: true }
    ],
    products: []
  },
  {
    name: "League of Legends PC",
    group: "PC Game",
    image: "leagueoflegends.jpg",
    description: "RP",
    fields: [
      { label: "Riot ID", placeholder: "Nama pemain#TAG", required: true },
      { label: "Region", placeholder: "Masukkan region", required: true }
    ],
    products: []
  },
  {
    name: "Marvel Rivals",
    group: "PC Game",
    image: "marvelrivals.jpg",
    description: "Lattice",
    fields: [
      { label: "Player ID", placeholder: "Masukkan Player ID", required: true }
    ],
    products: []
  },
  {
    name: "Vidio",
    group: "Entertainment",
    image: "vidio.jpg",
    description: "Paket berlangganan",
    fields: [
      { label: "Email / nomor akun Vidio", placeholder: "Email atau nomor terdaftar", required: true }
    ],
    products: []
  },
  {
    name: "Poppo Live",
    group: "Entertainment",
    image: "poppolive.jpg",
    description: "Koin Poppo",
    fields: [
      { label: "User ID", placeholder: "Masukkan User ID", required: true }
    ],
    products: []
  },
  {
    name: "BIGO LIVE",
    group: "Entertainment",
    image: "bigolive.jpg",
    description: "Beans & Diamonds",
    fields: [
      { label: "BIGO ID", placeholder: "Masukkan BIGO ID", required: true }
    ],
    products: []
  },
  {
    name: "LIKE",
    group: "Entertainment",
    image: "like.jpg",
    description: "Koin LIKE",
    fields: [
      { label: "User ID", placeholder: "Masukkan User ID", required: true }
    ],
    products: []
  },
  {
    name: "WeTV",
    group: "Entertainment",
    image: "wetv.jpg",
    description: "VIP",
    fields: [
      { label: "Email / nomor akun WeTV", placeholder: "Email atau nomor terdaftar", required: true }
    ],
    products: []
  },
  {
    name: "LITA",
    group: "Entertainment",
    image: "lita.jpg",
    description: "Koin LITA",
    fields: [
      { label: "User ID", placeholder: "Masukkan User ID", required: true }
    ],
    products: []
  },
  {
    name: "SUGO",
    group: "Entertainment",
    image: "sugo.jpg",
    description: "Koin SUGO",
    fields: [
      { label: "User ID", placeholder: "Masukkan User ID", required: true }
    ],
    products: []
  }
];
    
const categoryGrid = document.getElementById("categoryGrid");
const categoryTabs = document.getElementById("categoryTabs");
const searchInput = document.getElementById("searchInput");
const emptyState = document.getElementById("emptyState");
const orderSection = document.getElementById("pesanan");
const orderForm = document.getElementById("orderForm");
const gameFields = document.getElementById("gameFields");
const paymentModal = document.getElementById("paymentModal");

let activeGroup = "Game";
let openedCategory = null;
let selected = null;
let selectedCategory = null;
let selectedImage = LOGO;
let lastOrderMessage = "";

function getFinalPrice(product, categoryName) {
  if (typeof product.price !== "number") return null;
  if (categoryName === "Mobile Legends") return product.price;
  return product.price + 200;
}

function getOldPrice(product, categoryName) {
  if (categoryName === "Mobile Legends") return null;
  const finalPrice = getFinalPrice(product, categoryName);
  if (product.oldPrice && finalPrice !== null && product.oldPrice > finalPrice) {
    return product.oldPrice;
  }
  return null;
}

function applyImageFallback(img) {
  img.addEventListener("error", () => {
    if (!img.dataset.fallbackUsed) {
      img.dataset.fallbackUsed = "true";
      img.src = LOGO;
    }
  });
}

function hideOrderDetails() {
  orderSection.classList.add("hidden");
  selected = null;
  selectedCategory = null;
  selectedImage = LOGO;

  document.getElementById("summaryEmpty").classList.remove("hidden");
  document.getElementById("summaryDetails").classList.add("hidden");

  gameFields.innerHTML =
    '<p class="field-hint">Pilih nominal terlebih dahulu untuk mengisi detail produk.</p>';

  categoryGrid.querySelectorAll(".product-option.selected").forEach((button) => {
    button.classList.remove("selected");
  });
}

function renderCategories() {
  const query = searchInput.value.trim().toLowerCase();

  const filtered = categories.filter((category) => {
    return category.group === activeGroup &&
      (!query || category.name.toLowerCase().includes(query));
  });

  categoryGrid.innerHTML = "";
  emptyState.classList.toggle("hidden", filtered.length > 0);

  filtered.forEach((category) => {
    const card = document.createElement("article");
    card.className = "category-card";

    if (openedCategory === category.name) {
      card.classList.add("expanded");
    }

    const trigger = document.createElement("button");
    trigger.type = "button";
    trigger.className = "category-trigger";
    trigger.setAttribute("aria-expanded", String(openedCategory === category.name));

    const image = document.createElement("img");
    image.className = "category-image";
    image.src = category.image;
    image.alt = category.name;
    applyImageFallback(image);

    const info = document.createElement("div");
    info.className = "category-info";

    const title = document.createElement("h3");
    title.textContent = category.name;

    const description = document.createElement("p");
    description.textContent = category.description;

    const chevron = document.createElement("span");
    chevron.className = "category-chevron";
    chevron.textContent = openedCategory === category.name ? "⌃" : "⌄";

    info.append(title, description);
    trigger.append(image, info, chevron);

    trigger.addEventListener("click", () => {
      hideOrderDetails();
      openedCategory = openedCategory === category.name ? null : category.name;
      renderCategories();
    });

    card.appendChild(trigger);

    if (openedCategory === category.name) {
      card.appendChild(renderProductPanel(category));
    }

    categoryGrid.appendChild(card);
  });
}

function renderProductPanel(category) {
  const panel = document.createElement("div");
  panel.className = "product-panel";

  const heading = document.createElement("div");
  heading.className = "product-panel-heading";

  const headingText = document.createElement("span");
  headingText.textContent = "Pilih nominal";

  const helper = document.createElement("small");
  helper.textContent = category.products.length
    ? `${category.products.length} pilihan`
    : "Harga melalui admin";

  heading.append(headingText, helper);
  panel.appendChild(heading);

  if (!category.products.length) {
    const notice = document.createElement("p");
    notice.className = "field-hint";
    notice.textContent =
      "Daftar harga kategori ini belum dimasukkan. Hubungi admin untuk harga terbaru.";
    notice.style.color = "var(--muted)";
    notice.style.fontSize = "11px";
    panel.appendChild(notice);

    const contact = document.createElement("a");
    contact.className = "primary-button";
    contact.href = `https://wa.me/${ADMIN_WA}?text=${encodeURIComponent(
      `Halo admin Lixera Store, saya ingin tanya harga ${category.name}.`
    )}`;
    contact.target = "_blank";
    contact.rel = "noopener";
    contact.textContent = "Tanya Harga via WhatsApp ↗";
    panel.appendChild(contact);

    return panel;
  }

  const list = document.createElement("div");
  list.className = "product-list";

  category.products.forEach((product) => {
    const finalPrice = getFinalPrice(product, category.name);
    const oldPrice = getOldPrice(product, category.name);

    const button = document.createElement("button");
    button.type = "button";
    button.className = "product-option";

    const productName = document.createElement("span");
    productName.className = "product-name";
    productName.textContent = product.name;

    const prices = document.createElement("span");
    prices.className = "product-prices";

    const price = document.createElement("span");
    price.className = "product-price";
    price.textContent = money(finalPrice);
    prices.appendChild(price);

    if (oldPrice) {
      const old = document.createElement("span");
      old.className = "product-old-price";
      old.textContent = money(oldPrice);
      prices.appendChild(old);
    }

    button.append(productName, prices);
    button.addEventListener("click", () => chooseProduct(category, product, button));
    list.appendChild(button);
  });

  panel.appendChild(list);
  return panel;
}

function chooseProduct(category, product, button) {
  const finalPrice = getFinalPrice(product, category.name);

  if (finalPrice === null) {
    showToast("Harga produk ini belum tersedia. Silakan hubungi admin.");
    return;
  }

  selected = { ...product, finalPrice };
  selectedCategory = category.name;
  selectedImage = category.image;

  categoryGrid.querySelectorAll(".product-option").forEach((item) => {
    item.classList.remove("selected");
  });
  button.classList.add("selected");

  document.getElementById("summaryEmpty").classList.add("hidden");
  document.getElementById("summaryDetails").classList.remove("hidden");

  const summaryImage = document.getElementById("summaryImage");
  summaryImage.src = selectedImage;
  summaryImage.alt = category.name;
  applyImageFallback(summaryImage);

  document.getElementById("summaryProduct").textContent = product.name;
  document.getElementById("summaryCategory").textContent = category.name;
  document.getElementById("summaryPrice").textContent = rupiah(finalPrice);
  document.getElementById("summaryTotal").textContent = rupiah(finalPrice);

  renderGameFields(category);
  orderSection.classList.remove("hidden");

  window.setTimeout(() => {
    orderSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 60);
}

function renderGameFields(category) {
  gameFields.innerHTML = "";

  category.fields.forEach((field, index) => {
    const label = document.createElement("label");
    label.className = "form-label";
    label.htmlFor = `productField${index}`;

    label.append(document.createTextNode(field.label));

    if (field.required) {
      const required = document.createElement("span");
      required.textContent = " *";
      label.appendChild(required);
    }

    const input = document.createElement("input");
    input.id = `productField${index}`;
    input.name = `productField${index}`;
    input.type = "text";
    input.placeholder = field.placeholder || `Masukkan ${field.label}`;
    input.required = Boolean(field.required);
    input.autocomplete = "off";
    input.maxLength = 100;

    label.appendChild(input);
    gameFields.appendChild(label);
  });
}

categoryTabs.querySelectorAll(".category-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    activeGroup = tab.dataset.group;
    openedCategory = null;
    hideOrderDetails();

    categoryTabs.querySelectorAll(".category-tab").forEach((item) => {
      item.classList.toggle("active", item === tab);
    });

    renderCategories();
  });
});

searchInput.addEventListener("input", () => {
  openedCategory = null;
  hideOrderDetails();
  renderCategories();
});

document.getElementById("changeProduct").addEventListener("click", () => {
  hideOrderDetails();
  document.getElementById("katalog").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

orderForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!selected || !selectedCategory) {
    showToast("Pilih produk terlebih dahulu.");
    return;
  }

  if (!orderForm.reportValidity()) return;

  const buyerName = document.getElementById("buyerName").value.trim();
  const buyerContact = document.getElementById("buyerContact").value.trim();
  const buyerNote = document.getElementById("buyerNote").value.trim();

  const detailLines = [];
  const category = categories.find((item) => item.name === selectedCategory);

  if (category) {
    category.fields.forEach((field, index) => {
      const input = document.getElementById(`productField${index}`);

      if (input && input.value.trim()) {
        detailLines.push(`${field.label}: ${input.value.trim()}`);
      }
    });
  }

  lastOrderMessage = [
    "HALO ADMIN LIXERA STORE, SAYA INGIN KONFIRMASI PESANAN.",
    "",
    "Nama pemesan: " + buyerName,
    "Kategori: " + selectedCategory,
    "Produk: " + selected.name,
    ...detailLines,
    "Kontak: " + (buyerContact || "-"),
    "Catatan: " + (buyerNote || "-"),
    "",
    "Total: " + rupiah(selected.finalPrice),
    "",
    "Saya akan melakukan pembayaran melalui QRIS. Mohon bantu cek pesanan saya."
  ].join("\n");

  document.getElementById("paymentTotal").textContent = rupiah(selected.finalPrice);
  paymentModal.classList.remove("hidden");
  document.body.classList.add("modal-open");
});

function closePaymentModal() {
  paymentModal.classList.add("hidden");
  document.body.classList.remove("modal-open");
}

document.getElementById("closePayment").addEventListener("click", closePaymentModal);

paymentModal.addEventListener("click", (event) => {
  if (event.target === paymentModal) {
    closePaymentModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !paymentModal.classList.contains("hidden")) {
    closePaymentModal();
  }
});

document.getElementById("confirmWhatsApp").addEventListener("click", () => {
  if (!lastOrderMessage) {
    showToast("Isi detail pesanan terlebih dahulu.");
    return;
  }

  const url = `https://wa.me/${ADMIN_WA}?text=${encodeURIComponent(lastOrderMessage)}`;
  window.open(url, "_blank", "noopener,noreferrer");
});

let toastTimeout;

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.remove("hidden");

  window.clearTimeout(toastTimeout);
  toastTimeout = window.setTimeout(() => {
    toast.classList.add("hidden");
  }, 3200);
}

document.querySelectorAll(".banner-dot").forEach((dot) => {
  dot.addEventListener("click", () => {
    const banner = document.getElementById("heroBanner");
    banner.src = dot.dataset.banner;
    banner.dataset.fallbackUsed = "";

    document.querySelectorAll(".banner-dot").forEach((item) => {
      item.classList.toggle("active", item === dot);
    });
  });
});

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "×" : "☰";
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

document.getElementById("currentYear").textContent = new Date().getFullYear();

renderCategories();
