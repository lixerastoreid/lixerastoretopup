
"use strict";

// =====================================
// LIXERA STORE - DATA DAN PENGATURAN
// =====================================

const ADMIN_WA = "628818238236";
const STORE_LOGO = "logolixerastore.jpg";

const categories = [
  { id: "mobile-legends", name: "Mobile Legends", image: "mobilelegends.jpg", group: "Game" },
  { id: "free-fire", name: "Free Fire", image: "freefire.jpg", group: "Game" },
  { id: "free-fire-max", name: "Free Fire MAX", image: "freefiremax.jpg", group: "Game" },
  { id: "pubg-mobile", name: "PUBG Mobile", image: "pubgmobile.jpg", group: "Game" },
  { id: "honor-of-kings", name: "Honor of Kings", image: "honorofkings.jpg", group: "Game" },
  { id: "delta-force", name: "Delta Force", image: "deltaforce.jpg", group: "Game" },
  { id: "valorant", name: "Valorant", image: "valorant.jpg", group: "PC Game" },
  { id: "league-of-legends", name: "League of Legends", image: "leagueoflegends.jpg", group: "PC Game" },
  { id: "marvel-rivals", name: "Marvel Rivals", image: "marvelrivals.jpg", group: "PC Game" },
  { id: "magic-chess", name: "Magic Chess: Go Go", image: "magicchesgogo.jpg", group: "Game" },
  { id: "afk-journey", name: "AFK Journey", image: "afkjourney.jpg", group: "Game" },
  { id: "captain-tsubasa", name: "Captain Tsubasa", image: "captaintsubasa.jpg", group: "Game" },
  { id: "cloud-songs", name: "Cloud Song Saga of Skywalkers", image: "cloudsongsagaofskywalkers.jpg", group: "Game" },
  { id: "mu-origin", name: "MU Origin", image: "muorigin.jpg", group: "Game" },
  { id: "pixel-gun", name: "Pixel Gun 3D", image: "pixelgun3d.jpg", group: "Game" },
  { id: "racing-master", name: "Racing Master", image: "racingmaster.jpg", group: "Game" },
  { id: "hago", name: "Hago", image: "hago.jpg", group: "Game" },
  { id: "undawn", name: "Undawn", image: "undawn.jpg", group: "Game" },
  { id: "mob-rush", name: "Mob Rush", image: "mobrush.jpg", group: "Game" },
  { id: "fc-mobile", name: "FC Mobile", image: "fcmobile.jpg", group: "Game" },
  { id: "football-master-2", name: "Football Master 2", image: "footballmaster2.jpg", group: "Game" },
  { id: "bigolive", name: "BIGO Live", image: "bigolive.jpg", group: "Entertainment" },
  { id: "likee", name: "Likee", image: "like.jpg", group: "Entertainment" },
  { id: "lita", name: "Lita", image: "lita.jpg", group: "Entertainment" },
  { id: "sugo", name: "SUGO", image: "sugo.jpg", group: "Entertainment" },
  { id: "poppo-live", name: "Poppo Live", image: "poppolive.jpg", group: "Entertainment" },
  { id: "wetv", name: "WeTV", image: "wetv.jpg", group: "Entertainment" },
  { id: "vidio", name: "Vidio", image: "vidio.jpg", group: "Entertainment" },
  { id: "zepeto", name: "ZEPETO", image: "zepeto.jpg", group: "Entertainment" }
];

// Harga di bawah mengikuti data yang tersedia dari pengguna.
// Harga dalam rupiah. Jangan mengubah harga tanpa memperbarui data.
const mobileLegendsProducts = [
  { name: "5 Diamonds", subcategory: "Diamond", price: 1785 },
  { name: "10 Diamonds (9 + 1 Bonus)", subcategory: "Diamond", price: 3579 },
  { name: "12 Diamonds (11 + 1 Bonus)", subcategory: "Diamond", price: 3949 },
  { name: "19 Diamonds (17 + 2 Bonus)", subcategory: "Diamond", price: 6341 },
  { name: "28 Diamonds (25 + 3 Bonus)", subcategory: "Diamond", price: 9509 },
  { name: "28.170 Diamonds (23.431 + 4.739 Bonus)", subcategory: "Diamond", price: 8448106 },

  { name: "Twilight Pass", subcategory: "Pass", price: 169120 },
  { name: "Weekly Elite Bundle ⚠️ 1x/Minggu", subcategory: "Bundle", price: 17002 },
  { name: "Monthly Epic Bundle ⚠️ 1x/Bulan", subcategory: "Bundle", price: 84430 },
  { name: "Weekly Diamond Pass", subcategory: "Weekly Diamond Pass", price: 30198 },
  { name: "Weekly Diamond Pass x2 🔥 Muraaah", subcategory: "Weekly Diamond Pass", price: 62255 },
  { name: "Weekly Diamond Pass x3 🔥 Muraaah", subcategory: "Weekly Diamond Pass", price: 94299 }
];

// Kategori tanpa data harga lengkap memakai jalur tanya harga.
categories.forEach((category) => {
  if (category.id === "mobile-legends") {
    category.products = mobileLegendsProducts;
  } else {
    category.products = [{
      name: "Top Up " + category.name,
      subcategory: "Top Up",
      price: null,
      quoteOnly: true
    }];
  }
});

const customFields = {
  "mobile-legends": [
    { name: "userId", label: "User ID", placeholder: "Masukkan User ID", required: true },
    { name: "zoneId", label: "Zone ID", placeholder: "Masukkan Zone ID", required: true }
  ],
  "free-fire": [
    { name: "userId", label: "Player ID", placeholder: "Masukkan Player ID", required: true }
  ],
  "free-fire-max": [
    { name: "userId", label: "Player ID", placeholder: "Masukkan Player ID", required: true }
  ],
  "pubg-mobile": [
    { name: "userId", label: "Character ID", placeholder: "Masukkan Character ID", required: true }
  ],
  "honor-of-kings": [
    { name: "userId", label: "Player ID", placeholder: "Masukkan Player ID", required: true }
  ],
  "delta-force": [
    { name: "userId", label: "Player ID", placeholder: "Masukkan Player ID", required: true }
  ],
  "valorant": [
    { name: "userId", label: "Riot ID", placeholder: "Contoh: Nama#TAG", required: true },
    { name: "region", label: "Region", placeholder: "Masukkan region akun", required: true }
  ],
  "league-of-legends": [
    { name: "userId", label: "Riot ID", placeholder: "Contoh: Nama#TAG", required: true },
    { name: "region", label: "Region", placeholder: "Masukkan region akun", required: true }
  ],
  "bigolive": [
    { name: "userId", label: "BIGO ID", placeholder: "Masukkan BIGO ID", required: true }
  ],
  "likee": [
    { name: "userId", label: "Likee ID", placeholder: "Masukkan Likee ID", required: true }
  ],
  "lita": [
    { name: "userId", label: "User ID", placeholder: "Masukkan User ID", required: true }
  ],
  "sugo": [
    { name: "userId", label: "SUGO ID", placeholder: "Masukkan SUGO ID", required: true }
  ],
  "poppo-live": [
    { name: "userId", label: "Poppo ID", placeholder: "Masukkan Poppo ID", required: true }
  ],
  "zepeto": [
    { name: "userId", label: "ZEPETO ID", placeholder: "Masukkan ZEPETO ID", required: true }
  ]
};

// Variabel status website
let activeGroup = "Semua";
let activeCategory = null;
let activeSubcategory = "Semua";
let selectedProduct = null;
let toastTimeout = null;
let pendingOrder = null;

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function formatRupiah(amount) {
  if (amount === null || amount === undefined || !Number.isFinite(Number(amount))) {
    return "Tanya Harga";
  }

  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0
  }).format(Number(amount));
}

function getCategoryById(id) {
  return categories.find((category) => category.id === id) || null;
}

function getProductPriceLabel(product) {
  return product.price == null ? "Tanya Harga via WhatsApp" : formatRupiah(product.price);
    }

// =====================================
// RENDER KATEGORI DAN PENCARIAN
// =====================================

function renderCategories() {
  const grid = $("#categoryGrid");
  const emptyState = $("#emptyState");
  if (!grid) return;

  const keyword = ($("#searchInput")?.value || "").trim().toLowerCase();

  const visibleCategories = categories.filter((category) => {
    const matchGroup = activeGroup === "Semua" || category.group === activeGroup;
    const matchSearch = category.name.toLowerCase().includes(keyword);
    return matchGroup && matchSearch;
  });

  grid.innerHTML = "";

  visibleCategories.forEach((category) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "category-card";
    card.innerHTML = `
      <img src="${category.image}" alt="${category.name}" loading="lazy">
      <div class="category-card-copy">
        <h3>${category.name}</h3>
        <p>${category.group}</p>
        <span class="card-link">Lihat Produk ↗</span>
      </div>
    `;

    card.addEventListener("click", () => openCategoryPage(category.id));

    const image = card.querySelector("img");
    image.addEventListener("error", () => {
      image.src = STORE_LOGO;
    }, { once: true });

    grid.appendChild(card);
  });

  emptyState?.classList.toggle("hidden", visibleCategories.length > 0);
}

function setActiveGroup(group) {
  activeGroup = group;

  $$(".tab-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.group === group);
  });

  renderCategories();
}

function openCategoryPage(categoryId) {
  const category = getCategoryById(categoryId);
  if (!category) return;

  activeCategory = category;
  activeSubcategory = "Semua";
  selectedProduct = null;

  $("#categoryGrid")?.classList.add("hidden");
  $("#categoryTabs")?.classList.add("hidden");
  $("#mainSearchBox")?.classList.add("hidden");
  $("#emptyState")?.classList.add("hidden");

  $("#categoryPageTitle").textContent = category.name;
  $("#categoryPage")?.classList.remove("hidden");
  $("#pesanan")?.classList.add("hidden");

  renderSubcategoryFilters();
  renderProducts();

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function returnToCategories() {
  activeCategory = null;
  activeSubcategory = "Semua";
  selectedProduct = null;

  $("#categoryPage")?.classList.add("hidden");
  $("#pesanan")?.classList.add("hidden");
  $("#categoryGrid")?.classList.remove("hidden");
  $("#categoryTabs")?.classList.remove("hidden");
  $("#mainSearchBox")?.classList.remove("hidden");

  renderCategories();
  window.scrollTo({ top: $("#kategori")?.offsetTop || 0, behavior: "smooth" });
}

function renderSubcategoryFilters() {
  const container = $("#subcategoryFilters");
  if (!container || !activeCategory) return;

  const names = [
    "Semua",
    ...new Set((activeCategory.products || []).map((product) => product.subcategory || "Lainnya"))
  ];

  container.innerHTML = "";

  names.forEach((name) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "subcategory-filter";
    button.textContent = name;

    if (name === activeSubcategory) {
      button.classList.add("active");
    }

    button.addEventListener("click", () => {
      activeSubcategory = name;
      renderSubcategoryFilters();
      renderProducts();
    });

    container.appendChild(button);
  });
}

function renderProducts() {
  const grid = $("#categoryProductGrid");
  const emptyState = $("#categoryEmptyState");
  if (!grid || !activeCategory) return;

  const products = activeCategory.products || [];
  const visibleProducts = activeSubcategory === "Semua"
    ? products
    : products.filter((product) => (product.subcategory || "Lainnya") === activeSubcategory);

  grid.innerHTML = "";

  visibleProducts.forEach((product) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "product-card";

    if (selectedProduct === product) {
      card.classList.add("selected");
    }

    const priceLabel = getProductPriceLabel(product);
    const originalPrice = product.originalPrice;

    card.innerHTML = `
      <div>
        <span class="product-type">${product.subcategory || "Produk"}</span>
        <h3></h3>
      </div>
      <div class="product-price">
        <span class="current-price"></span>
        ${originalPrice && originalPrice > product.price
          ? `<del class="product-original">${formatRupiah(originalPrice)}</del>`
          : ""}
      </div>
      <span class="product-action">Pilih Produk →</span>
    `;

    card.querySelector("h3").textContent = product.name;
    card.querySelector(".current-price").textContent = priceLabel;

    card.addEventListener("click", () => chooseProduct(product, activeCategory));
    grid.appendChild(card);
  });

  emptyState?.classList.toggle("hidden", visibleProducts.length > 0);
                   }

// =====================================
// PILIH PRODUK DAN FORM KHUSUS KATEGORI
// =====================================

function chooseProduct(product, category) {
  selectedProduct = product;
  activeCategory = category;

  renderProducts();
  renderOrderFields();
  updateOrderSummary();

  $("#pesanan")?.classList.remove("hidden");

  window.setTimeout(() => {
    $("#pesanan")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 80);
}

function renderOrderFields() {
  const container = $("#gameFields");
  if (!container || !activeCategory) return;

  container.innerHTML = "";

  const fields = customFields[activeCategory.id] || [
    {
      name: "userId",
      label: "ID / Nomor Akun",
      placeholder: "Masukkan ID atau nomor akun",
      required: true
    }
  ];

  const heading = document.createElement("h3");
  heading.textContent = "Data " + activeCategory.name;
  heading.style.marginTop = "25px";
  container.appendChild(heading);

  fields.forEach((field) => {
    const label = document.createElement("label");
    label.htmlFor = "gameField_" + field.name;
    label.textContent = field.label;

    const input = document.createElement("input");
    input.id = "gameField_" + field.name;
    input.name = field.name;
    input.type = "text";
    input.placeholder = field.placeholder;
    input.required = Boolean(field.required);
    input.autocomplete = "off";

    container.appendChild(label);
    container.appendChild(input);
  });

  const hint = document.createElement("small");
  hint.className = "game-field-hint";
  hint.textContent = activeCategory.id === "mobile-legends"
    ? "Pastikan User ID dan Zone ID benar."
    : "Pastikan data akun sesuai dengan instruksi game atau layanan.";
  container.appendChild(hint);
}

function updateOrderSummary() {
  if (!selectedProduct || !activeCategory) {
    $("#summaryEmpty")?.classList.remove("hidden");
    $("#summaryDetails")?.classList.add("hidden");
    return;
  }

  $("#summaryEmpty")?.classList.add("hidden");
  $("#summaryDetails")?.classList.remove("hidden");

  $("#summaryImage").src = activeCategory.image;
  $("#summaryImage").onerror = () => {
    $("#summaryImage").src = STORE_LOGO;
  };

  $("#summaryCategory").textContent = activeCategory.name;
  $("#summaryProduct").textContent = selectedProduct.name;

  const priceText = getProductPriceLabel(selectedProduct);
  $("#summaryPrice").textContent = priceText;
  $("#summaryTotal").textContent = priceText;
}

function changeSelectedProduct() {
  if (!activeCategory) return;

  $("#pesanan")?.classList.add("hidden");
  $("#categoryPage")?.classList.remove("hidden");

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function collectGameFieldValues() {
  const values = [];

  $$("#gameFields input").forEach((input) => {
    const label = $(`label[for="${input.id}"]`);
    values.push({
      label: label ? label.textContent : input.name,
      value: input.value.trim()
    });
  });

  return values;
}

// =====================================
// PESANAN, PEMBAYARAN, DAN WHATSAPP
// =====================================

function buildOrderMessage() {
  if (!selectedProduct || !activeCategory) return "";

  const buyerName = $("#buyerName").value.trim();
  const buyerContact = $("#buyerContact").value.trim();
  const buyerNote = $("#buyerNote").value.trim();
  const gameValues = collectGameFieldValues();

  const lines = [
    "Halo Admin LIXERA STORE, saya ingin memesan:",
    "",
    "Kategori: " + activeCategory.name,
    "Produk: " + selectedProduct.name,
    "Harga: " + getProductPriceLabel(selectedProduct),
    "Nama pembeli: " + buyerName,
    "Nomor WhatsApp: " + buyerContact
  ];

  gameValues.forEach((field) => {
    lines.push(field.label + ": " + field.value);
  });

  if (buyerNote) {
    lines.push("Catatan: " + buyerNote);
  }

  if (selectedProduct.price == null) {
    lines.push("", "Mohon informasikan harga produk ini terlebih dahulu.");
  }

  lines.push("", "Mohon konfirmasi pesanan saya. Terima kasih.");
  return lines.join("\n");
}

function openWhatsApp(message) {
  const url = "https://wa.me/" + ADMIN_WA + "?text=" + encodeURIComponent(message);
  window.open(url, "_blank", "noopener,noreferrer");
}

function showToast(message) {
  const toast = $("#toast");
  if (!toast) return;

  toast.textContent = message;
  toast.classList.remove("hidden");

  window.clearTimeout(toastTimeout);
  toastTimeout = window.setTimeout(() => {
    toast.classList.add("hidden");
  }, 3000);
}

function openPaymentModal() {
  if (!selectedProduct) {
    showToast("Pilih produk terlebih dahulu.");
    return;
  }

  if (selectedProduct.price == null) {
    openWhatsApp(buildOrderMessage());
    showToast("Silakan tanyakan harga kepada admin melalui WhatsApp.");
    return;
  }

  pendingOrder = buildOrderMessage();
  $("#paymentTotal").textContent = formatRupiah(selectedProduct.price);
  $("#paymentModal")?.classList.remove("hidden");
  document.body.classList.add("no-scroll");
}

function closePaymentModal() {
  $("#paymentModal")?.classList.add("hidden");
  document.body.classList.remove("no-scroll");
}

function handleOrderSubmit(event) {
  event.preventDefault();

  if (!selectedProduct || !activeCategory) {
    showToast("Pilih kategori dan produk terlebih dahulu.");
    return;
  }

  const message = buildOrderMessage();

  if (selectedProduct.price == null) {
    openWhatsApp(message);
    showToast("Lanjutkan pertanyaan harga melalui WhatsApp.");
    return;
  }

  pendingOrder = message;
  openPaymentModal();
}

// Event form pesanan
$("#orderForm")?.addEventListener("submit", handleOrderSubmit);

$("#changeProduct")?.addEventListener("click", changeSelectedProduct);

$("#closePayment")?.addEventListener("click", closePaymentModal);
$("#cancelPayment")?.addEventListener("click", closePaymentModal);

$("#paymentModal")?.addEventListener("click", (event) => {
  if (event.target.id === "paymentModal") {
    closePaymentModal();
  }
});

$("#confirmWhatsApp")?.addEventListener("click", () => {
  if (!pendingOrder) {
    showToast("Data pesanan belum tersedia.");
    return;
  }

  openWhatsApp(
    pendingOrder +
    "\n\nSaya akan melakukan pembayaran setelah mendapat konfirmasi admin."
  );

  closePaymentModal();
});
    
// =====================================
// NAVIGASI, BANNER, DAN INISIALISASI
// =====================================

// Tombol kembali dari halaman kategori
$("#backToCategories")?.addEventListener("click", returnToCategories);

// Filter kategori utama
$$(".tab-button").forEach((button) => {
  button.addEventListener("click", () => {
    setActiveGroup(button.dataset.group);
  });
});

// Pencarian kategori
$("#searchInput")?.addEventListener("input", renderCategories);

// Tombol menu mobile
$("#menuToggle")?.addEventListener("click", () => {
  const nav = $("#mainNav");
  const isOpen = nav?.classList.toggle("open");

  $("#menuToggle").setAttribute("aria-expanded", String(Boolean(isOpen)));
});

// Tutup menu HP setelah link dipilih
$$(".main-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    $("#mainNav")?.classList.remove("open");
    $("#menuToggle")?.setAttribute("aria-expanded", "false");
  });
});

// Link kembali ke beranda
function goHome() {
  returnToCategories();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

$("#homeLink")?.addEventListener("click", (event) => {
  event.preventDefault();
  goHome();
});

$("#footerHomeLink")?.addEventListener("click", (event) => {
  event.preventDefault();
  goHome();
});

$("#exploreButton")?.addEventListener("click", () => {
  returnToCategories();
});

// Navigasi ke bagian website
$$("[data-nav]").forEach((link) => {
  link.addEventListener("click", () => {
    const target = link.dataset.nav;

    if (target === "categories") {
      returnToCategories();
    } else if (target === "home") {
      goHome();
    }
  });
});

// Banner slider
const bannerImages = [
  "bannerhlm1.png",
  "bannerhlm2.png",
  "bannerhlm3.png"
];

let activeBannerIndex = 0;

function setBanner(index) {
  const banner = $("#heroBanner");
  if (!banner) return;

  activeBannerIndex = (index + bannerImages.length) % bannerImages.length;
  banner.src = bannerImages[activeBannerIndex];

  $$(".banner-dot").forEach((dot, dotIndex) => {
    dot.classList.toggle("active", dotIndex === activeBannerIndex);
  });
}

$$(".banner-dot").forEach((dot) => {
  dot.addEventListener("click", () => {
    setBanner(Number(dot.dataset.banner));
  });
});

window.setInterval(() => {
  // Ganti banner otomatis hanya saat halaman utama terlihat.
  if (!$("#categoryPage")?.classList.contains("hidden")) return;
  setBanner(activeBannerIndex + 1);
}, 5000);

// Tahun di footer
$("#currentYear").textContent = new Date().getFullYear();

// Perbaikan gambar kategori yang tidak ditemukan
document.addEventListener("error", (event) => {
  const target = event.target;

  if (
    target instanceof HTMLImageElement &&
    !target.dataset.fallbackApplied &&
    target.getAttribute("src") !== STORE_LOGO
  ) {
    target.dataset.fallbackApplied = "true";
    target.src = STORE_LOGO;
  }
}, true);

// Tampilkan kategori saat website dibuka
renderCategories();
setBanner(0);
