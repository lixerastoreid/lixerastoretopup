/* =========================================
   LIXERA STORE TOP UP
   SCRIPT.JS - BAGIAN 1/5
   SISTEM UTAMA DAN KATEGORI
========================================= */

"use strict";

/* ADMIN DAN KONFIGURASI */

const CONFIG = {
  storeName: "LIXERA STORE TOP UP",
  adminWhatsApp: "628818238236",
  currency: "IDR",
  promoDiscount: 100,
  storageKey: "lixera_store_orders",
  buyerKey: "lixera_store_buyer"
};

/* FORMAT HARGA */

function formatRupiah(amount) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0
  }).format(amount);
}

/* PENYIMPANAN BROWSER */

function saveLocal(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Gagal menyimpan data:", error);
  }
}

function getLocal(key, fallback = []) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch (error) {
    return fallback;
  }
}

/* DATA KATEGORI */

const catalog = [
  {
    id: "mobile-legends",
    name: "Mobile Legends",
    image: "mobilelegends.jpg",
    group: "game",
    fields: [
      {
        id: "gameId",
        label: "User ID Mobile Legends",
        placeholder: "Masukkan User ID",
        required: true
      },
      {
        id: "server",
        label: "Server / Zone ID",
        placeholder: "Masukkan Server ID",
        required: true
      }
    ],
    products: []
  },

  {
    id: "free-fire",
    name: "Free Fire",
    image: "freefire.jpg",
    group: "game",
    fields: [
      {
        id: "gameId",
        label: "Player ID Free Fire",
        placeholder: "Masukkan Player ID",
        required: true
      }
    ],
    products: []
  },

  {
    id: "magic-chess",
    name: "Magic Chess GoGo",
    image: "magicchesgogo.jpg",
    group: "game",
    fields: [
      {
        id: "gameId",
        label: "User ID",
        placeholder: "Masukkan User ID",
        required: true
      }
    ],
    products: []
  },

  {
    id: "pubg-mobile",
    name: "PUBG Mobile",
    image: "pubgmobile.jpg",
    group: "game",
    fields: [
      {
        id: "gameId",
        label: "Character ID PUBG",
        placeholder: "Masukkan Character ID",
        required: true
      }
    ],
    products: []
  },

  {
    id: "fc-mobile",
    name: "EA SPORTS FC Mobile",
    image: "fcmobile.jpg",
    group: "game",
    fields: [
      {
        id: "gameId",
        label: "FC Mobile User ID",
        placeholder: "Masukkan User ID",
        required: true
      }
    ],
    products: []
  },

  {
    id: "honor-of-kings",
    name: "Honor of Kings",
    image: "honorofkings.jpg",
    group: "game",
    fields: [
      {
        id: "gameId",
        label: "Player ID",
        placeholder: "Masukkan Player ID",
        required: true
      }
    ],
    products: []
  },

  {
    id: "football-master",
    name: "Football Master 2",
    image: "footballmaster2.jpg",
    group: "game",
    fields: [
      {
        id: "gameId",
        label: "Player ID",
        placeholder: "Masukkan Player ID",
        required: true
      }
    ],
    products: []
  },

  {
    id: "delta-force",
    name: "Delta Force",
    image: "deltaforce.jpg",
    group: "game",
    fields: [
      {
        id: "gameId",
        label: "Player ID",
        placeholder: "Masukkan Player ID",
        required: true
      }
    ],
    products: []
  },

  {
    id: "zepeto",
    name: "ZEPETO",
    image: "zepeto.jpg",
    group: "game",
    fields: [
      {
        id: "gameId",
        label: "ZEPETO ID",
        placeholder: "Masukkan ZEPETO ID",
        required: true
      }
    ],
    products: []
  },

  {
    id: "undawn",
    name: "Undawn",
    image: "undawn.jpg",
    group: "game",
    fields: [
      {
        id: "gameId",
        label: "Player ID",
        placeholder: "Masukkan Player ID",
        required: true
      },
      {
        id: "server",
        label: "Server",
        placeholder: "Masukkan Server",
        required: true
      }
    ],
    products: []
  },

  {
    id: "call-of-duty",
    name: "Call of Duty Mobile ID",
    image: "callofduty.jpg",
    group: "game",
    fields: [
      {
        id: "gameId",
        label: "UID Call of Duty",
        placeholder: "Masukkan UID",
        required: true
      }
    ],
    products: []
  },

  {
    id: "arena-of-valor",
    name: "Arena of Valor",
    image: "arenaofvalor.jpg",
    group: "game",
    fields: [
      {
        id: "gameId",
        label: "Player ID",
        placeholder: "Masukkan Player ID",
        required: true
      }
    ],
    products: []
  },

  {
    id: "afk-journey",
    name: "AFK Journey",
    image: "afkjourney.jpg",
    group: "game",
    fields: [
      {
        id: "gameId",
        label: "Player ID",
        placeholder: "Masukkan Player ID",
        required: true
      }
    ],
    products: []
  },

  {
    id: "cloud-song",
    name: "Cloud Song: Saga of Skywalkers",
    image: "cloudsongsagaofskywalkers.jpg",
    group: "game",
    fields: [
      {
        id: "gameId",
        label: "Character ID",
        placeholder: "Masukkan Character ID",
        required: true
      },
      {
        id: "server",
        label: "Server",
        placeholder: "Masukkan Server",
        required: true
      }
    ],
    products: []
  },

  {
    id: "mob-rush",
    name: "Mob Rush",
    image: "mobrush.jpg",
    group: "game",
    fields: [
      {
        id: "gameId",
        label: "Player ID",
        placeholder: "Masukkan Player ID",
        required: true
      }
    ],
    products: []
  },

  {
    id: "hago",
    name: "HAGO",
    image: "hago.jpg",
    group: "game",
    fields: [
      {
        id: "gameId",
        label: "HAGO ID",
        placeholder: "Masukkan HAGO ID",
        required: true
      }
    ],
    products: []
  },

  {
    id: "pixel-gun",
    name: "Pixel Gun 3D",
    image: "pixelgun3d.jpg",
    group: "game",
    fields: [
      {
        id: "gameId",
        label: "Player ID",
        placeholder: "Masukkan Player ID",
        required: true
      }
    ],
    products: []
  },

  {
    id: "captain-tsubasa",
    name: "Captain Tsubasa: Ace",
    image: "captaintsubasa.jpg",
    group: "game",
    fields: [
      {
        id: "gameId",
        label: "Player ID",
        placeholder: "Masukkan Player ID",
        required: true
      }
    ],
    products: []
  },

  {
    id: "racing-master",
    name: "Racing Master",
    image: "racingmaster.jpg",
    group: "game",
    fields: [
      {
        id: "gameId",
        label: "Player ID",
        placeholder: "Masukkan Player ID",
        required: true
      }
    ],
    products: []
  },

  {
    id: "mu-origin",
    name: "MU Origin 2",
    image: "muorigin.jpg",
    group: "game",
    fields: [
      {
        id: "gameId",
        label: "Character ID",
        placeholder: "Masukkan Character ID",
        required: true
      },
      {
        id: "server",
        label: "Server",
        placeholder: "Masukkan Server",
        required: true
      }
    ],
    products: []
  }
];

/* KATEGORI PC GAME DAN ENTERTAINMENT
   DILANJUTKAN DI BAGIAN 2 DAN 3 */

const additionalCatalog = [
  {
    id: "valorant",
    name: "VALORANT",
    image: "valorant.jpg",
    group: "pc",
    fields: [
      {
        id: "gameId",
        label: "Riot ID",
        placeholder: "Masukkan Riot ID",
        required: true
      }
    ],
    products: []
  },
  {
    id: "league-of-legends",
    name: "League of Legends - PC",
    image: "leagueoflegends.jpg",
    group: "pc",
    fields: [
      {
        id: "gameId",
        label: "Riot ID",
        placeholder: "Masukkan Riot ID",
        required: true
      },
      {
        id: "server",
        label: "Server / Region",
        placeholder: "Masukkan Region",
        required: true
      }
    ],
    products: []
  },
  {
    id: "marvel-rivals",
    name: "Marvel Rivals",
    image: "marvelrivals.jpg",
    group: "pc",
    fields: [
      {
        id: "gameId",
        label: "Player ID",
        placeholder: "Masukkan Player ID",
        required: true
      }
    ],
    products: []
  }
];

catalog.push(...additionalCatalog);

/* STATE PEMBELIAN */

let selectedCategory = null;
let selectedProduct = null;
let activePromo = null;
let currentOrder = null;
let navigationHistory = ["home"];

/* NAVIGASI HALAMAN */

function showPage(pageName) {
  const pages = document.querySelectorAll(".page");

  pages.forEach(page => {
    page.classList.remove("active");
  });

  const target = document.getElementById(pageName + "Page");

  if (!target) return;

  target.classList.add("active");

  document.querySelectorAll(".nav-item").forEach(item => {
    item.classList.toggle(
      "active",
      item.dataset.page === pageName
    );
  });

  if (pageName !== "detail" && pageName !== "form") {
    navigationHistory.push(pageName);
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  if (pageName === "proses") {
    renderOrderHistory();
  }

  if (pageName === "akun") {
    renderAccount();
  }

  if (pageName === "pilihan") {
    renderPilihan();
  }
}

/* KEMBALI KE HALAMAN SEBELUMNYA */

function goBack() {
  if (document.getElementById("formPage").classList.contains("active")) {
    showPage("detail");
    return;
  }

  if (document.getElementById("detailPage").classList.contains("active")) {
    showPage("home");
    return;
  }

  showPage("home");
}

/* RENDER KATEGORI */

function renderCategories(filter = "all", keyword = "") {
  const grid = document.getElementById("categoryGrid");

  if (!grid) return;

  const filtered = catalog.filter(category => {
    const matchesGroup =
      filter === "all" || category.group === filter;

    const matchesName =
      category.name.toLowerCase().includes(keyword.toLowerCase());

    return matchesGroup && matchesName;
  });

  grid.innerHTML = filtered.map(category => `
    <article
      class="category-card"
      onclick="openCategory('${category.id}')"
    >
      <span class="card-arrow">↗</span>

      <img
        src="${category.image}"
        alt="${category.name}"
        loading="lazy"
        onerror="this.style.opacity='.25'"
      >

      <div class="category-card-info">
        <h3>${escapeHTML(category.name)}</h3>
        <p>Lihat produk →</p>
      </div>
    </article>
  `).join("");

  const total = document.getElementById("categoryTotal");

  if (total) {
    total.textContent = filtered.length + " Produk";
  }
}

/* AMANKAN TEKS HTML */

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[character]);
}

/* BUKA KATEGORI */

function openCategory(categoryId) {
  const category = catalog.find(item => item.id === categoryId);

  if (!category) {
    showToast("Kategori tidak ditemukan.");
    return;
  }

  selectedCategory = category;
  selectedProduct = null;
  activePromo = null;

  showPage("detail");

  document.getElementById("detailCategoryName").textContent =
    category.name;

  document.getElementById("detailGameTitle").textContent =
    category.name;

  document.getElementById("detailCategoryImage").src =
    category.image;

  renderProducts();
}

/* RENDER PILIHAN */

function renderPilihan(keyword = "") {
  const grid = document.getElementById("pilihanGrid");

  if (!grid) return;

  const filtered = catalog.filter(category =>
    category.name.toLowerCase().includes(keyword.toLowerCase())
  );

  grid.innerHTML = filtered.map(category => `
    <article class="category-card"
      onclick="openCategory('${category.id}')">
      <img src="${category.image}"
        alt="${category.name}" loading="lazy">
      <div class="category-card-info">
        <h3>${escapeHTML(category.name)}</h3>
        <p>Pilih produk →</p>
      </div>
    </article>
  `).join("");
}

/* NOTIFIKASI */

function showToast(message) {
  const toast = document.getElementById("toast");

  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(window.lixeraToastTimer);

  window.lixeraToastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
      }
/* =========================================
   SCRIPT.JS - BAGIAN 2/5
   KATALOG PRODUK GAME
========================================= */

function addProducts(categoryId, products) {
  const category = catalog.find(item => item.id === categoryId);

  if (!category) return;

  category.products.push(
    ...products.map(([name, price]) => ({
      name,
      price
    }))
  );
}

/* MOBILE LEGENDS
   HARGA TETAP SESUAI DAFTAR ASLI
*/

addProducts("mobile-legends", [
  ["5 Diamonds",1785],
  ["10 Diamonds (9+1)",3579],
  ["12 Diamonds (11+1)",3949],
  ["19 Diamonds (17+2)",6341],
  ["28 Diamonds (25+3)",9509],
  ["44 Diamonds (40+4)",13753],
  ["54 Diamonds (50+4)",16350],
  ["71 Diamonds (64+7)",22165],
  ["74 Diamonds (67+7)",23250],
  ["85 Diamonds (77+8)",26218],
  ["88 Diamonds (80+8)",27306],
  ["110 Diamonds (100+10)",32945],
  ["113 Diamonds (102+11)",35144],
  ["128 Diamonds (117+11)",42385],
  ["148 Diamonds (134+14)",48616],
  ["170 Diamonds (154+16)",51863],
  ["176 Diamonds (160+16)",57984],
  ["184 Diamonds (167+17)",61576],
  ["222 Diamonds (200+22)",74198],
  ["240 Diamonds (217+23)",75016],
  ["258 Diamonds (233+25)",86204],
  ["277 Diamonds (250+27)",85657],
  ["284 Diamonds",86699],
  ["296 Diamonds",90132],
  ["301 Diamonds",94486],
  ["305 Diamonds",100630],
  ["333 Diamonds",103880],
  ["346 Diamonds",102127],
  ["356 Diamonds",111487],
  ["370 Diamonds",113183],
  ["384 Diamonds",116898],
  ["408 Diamonds",123698],
  ["424 Diamonds",130000],
  ["452 Diamonds",147108],
  ["518 Diamonds",169376],
  ["568 Diamonds",182853],
  ["601 Diamonds",192464],
  ["642 Diamonds",207000],
  ["716 Diamonds",229957],
  ["758 Diamonds",244565],
  ["790 Diamonds",255639],
  ["845 Diamonds",272849],
  ["875 Diamonds",279442],
  ["938 Diamonds",299998],
  ["966 Diamonds",309624],
  ["1.045 Diamonds",311799],
  ["1.136 Diamonds",363000],
  ["1.159 Diamonds",371996],
  ["1.443 Diamonds",460683],
  ["1.506 Diamonds",481239],
  ["1.704 Diamonds",544523],
  ["2.010 Diamonds",561429],
  ["2.232 Diamonds",689551],
  ["2.380 Diamonds",732449],
  ["2.578 Diamonds",796794],
  ["2.625 Diamonds",811951],
  ["3.453 Diamonds (2.985+468)",1076536],
  ["3.738 Diamonds",1167552],
  ["4.020 Diamonds",1231306],
  ["4.588 Diamonds",1230201],
  ["4.830 Diamonds",1327899],
  ["5.398 Diamonds",1625001],
  ["6.030 Diamonds",1846459],
  ["9.660 Diamonds",2886320],
  ["10.050 Diamonds",2674305],
  ["14.490 Diamonds",4330480],
  ["16.080 Diamonds",4922224],
  ["18.090 Diamonds",5539377],
  ["19.320 Diamonds",5774640],
  ["20.100 Diamonds",6151230],
  ["21.330 Diamonds",6389793],
  ["23.340 Diamonds",7004946],
  ["24.150 Diamonds",7220800],
  ["26.160 Diamonds",7833953],
  ["28.170 Diamonds",8448106],
  ["Twilight Pass",169120],
  ["Weekly Elite Bundle",17002],
  ["Monthly Epic Bundle",84430],
  ["Weekly Diamond Pass",30198],
  ["Weekly Diamond Pass x2",62255],
  ["Weekly Diamond Pass x3",94299]
]);

/* FREE FIRE */

addProducts("free-fire", [
  ["5 Diamonds",1000],
  ["10 Diamonds",2000],
  ["20 Diamonds",4000],
  ["50 Diamonds",8000],
  ["70 Diamonds",10000],
  ["140 Diamonds",20000],
  ["12 Diamonds",2200],
  ["25 Diamonds",5000],
  ["30 Diamonds",6000],
  ["55 Diamonds",9000],
  ["80 Diamonds",12000],
  ["100 Diamonds",17600],
  ["120 Diamonds",18000],
  ["130 Diamonds",19000],
  ["145 Diamonds",21000],
  ["150 Diamonds",22000],
  ["190 Diamonds",28000],
  ["200 Diamonds",30000],
  ["210 Diamonds",30000],
  ["280 Diamonds",40000],
  ["355 Diamonds",50000],
  ["420 Diamonds",59000],
  ["425 Diamonds",66000],
  ["475 Diamonds",68000],
  ["495 Diamonds",77000],
  ["500 Diamonds",71000],
  ["510 Diamonds",73000],
  ["545 Diamonds",78000],
  ["565 Diamonds",80000],
  ["600 Diamonds",85000],
  ["635 Diamonds",90000],
  ["720 Diamonds",100000],
  ["800 Diamonds",112000],
  ["860 Diamonds",132000],
  ["930 Diamonds",130000],
  ["1.000 Diamonds",140000],
  ["1.050 Diamonds",148000],
  ["1.075 Diamonds",166100],
  ["1.080 Diamonds",152000],
  ["1.440 Diamonds",218900],
  ["1.450 Diamonds",220000],
  ["2.160 Diamonds",327800],
  ["2.180 Diamonds",330000],
  ["7.290 Diamonds",1000000],
  ["36.500 Diamonds",5500000],
  ["73.100 Diamonds",11000000],
  ["Member Mingguan",28000],
  ["Member Bulanan",93500],
  ["BP Card",49500],
  ["Level Up Pass Level 6",5995],
  ["Level Up Pass Level 10",9999],
  ["Level Up Pass Level 15",9999],
  ["Level Up Pass Level 20",9999],
  ["Level Up Pass Level 25",9999],
  ["Level Up Pass Level 30",15994]
]);

/* MAGIC CHESS GOGO */

addProducts("magic-chess", [
  ["5 Diamonds",1865],
  ["Weekly Card",37296],
  ["12 Diamonds",4103],
  ["19 Diamonds",6340],
  ["28 Diamonds",9324],
  ["44 Diamonds",14918],
  ["59 Diamonds",19767],
  ["85 Diamonds",28718],
  ["170 Diamonds",57436],
  ["240 Diamonds",80932],
  ["296 Diamonds",95478],
  ["408 Diamonds",136876],
  ["568 Diamonds",187599],
  ["875 Diamonds",288671],
  ["2.010 Diamonds",637016],
  ["4.830 Diamonds",1492959]
]);

/* PUBG MOBILE */

addProducts("pubg-mobile", [
  ["60 UC",16793],
  ["120 UC",33587],
  ["300+25 UC",84730],
  ["600+60 UC",169650],
  ["1.500+300 UC",424412],
  ["3.000+850 UC",849015],
  ["6.000+2.100 UC",1698220],
  ["12.000+4.200 UC",3396440],
  ["18.000+6.300 UC",5094660],
  ["24.000+8.400 UC",6792880],
  ["36.000+12.600 UC",10189320],
  ["48.000+16.800 UC",13585768]
]);
/* =========================================
   SCRIPT.JS - BAGIAN 3/5
   KATALOG GAME LANJUTAN
========================================= */

/* EA SPORTS FC MOBILE */

addProducts("fc-mobile", [
  ["40 FC Points",6500],
  ["100 FC Points",16000],
  ["520 FC Points",77500],
  ["1.070 FC Points",155975],
  ["2.200 FC Points",322750],
  ["5.750 FC Points",783825],
  ["12.000 FC Points",1568600],
  ["39 Silver",6400],
  ["99 Silver",15700],
  ["499 Silver",77500],
  ["999 Silver",155975],
  ["1.999 Silver",322750],
  ["4.999 Silver",783825],
  ["9.999 Silver",1568600]
]);

/* HONOR OF KINGS */

addProducts("honor-of-kings", [
  ["80 Tokens",16000],
  ["240 Tokens",47000],
  ["400 Tokens",80000],
  ["800+30 Tokens",160000],
  ["2.400+108 Tokens",480000],
  ["4.000+180 Tokens",800000],
  ["8.000+360 Tokens",1599000]
]);

/* FOOTBALL MASTER 2 */

addProducts("football-master", [
  ["18 FMP",4272],
  ["95 FMP",21216],
  ["191 FMP",42726],
  ["382 FMP",85451],
  ["972 FMP",213628],
  ["1.944 FMP",427256],
  ["3.888 FMP",854512],
  ["9.900 FMP",2136280]
]);

/* DELTA FORCE */

addProducts("delta-force", [
  ["18+1 Delta Coins",5400],
  ["30+2 Delta Coins",8100],
  ["60+3 Delta Coins",15900],
  ["300+36 Delta Coins",79201],
  ["420+62 Delta Coins",108901],
  ["680+105 Delta Coins",152702],
  ["1.280+264 Delta Coins",305103],
  ["1.680+385 Delta Coins",381304],
  ["3.280+834 Delta Coins",762308],
  ["6.480+1.944 Delta Coins",1524615],
  ["12.960+3.888 Delta Coins",3049230],
  ["19.440+5.832 Delta Coins",4573846]
]);

/* ZEPETO */

addProducts("zepeto", [
  ["14 Zems",17000],
  ["28 Zems",30800],
  ["58 Zems",61800],
  ["128 Zems",131500],
  ["323 Zems",332600],
  ["1.000 Zems",1000000],
  ["4.680 Coins",15800],
  ["9.700 Coins",30800],
  ["25.200 Coins",77200],
  ["40.700 Coins",123700],
  ["110.000 Coins",324800],
  ["300.000 Coins",863600],
  ["Premium 1M",63800]
]);

/* UNDAWN */

addProducts("undawn", [
  ["Kartu Mingguan",27900],
  ["Kartu Bulanan",46300],
  ["Dana Elit",122900],
  ["Glory Pass Premium",139150],
  ["80 RC",14400],
  ["250 RC",43200],
  ["450 RC",72000],
  ["920 RC",143040],
  ["1.850 RC",287040],
  ["2.800 RC",431040],
  ["4.750 RC",719040],
  ["9.600 RC",1439040],
  ["33.000 RC",4800000],
  ["66.500 RC",9600000]
]);

/* CALL OF DUTY MOBILE */

addProducts("call-of-duty", [
  ["63 CP",10000],
  ["128 CP",20000],
  ["321 CP",50000],
  ["645 CP",100000],
  ["1.373 CP",200000],
  ["2.060 CP",300000],
  ["3.564 CP",500000],
  ["7.656 CP",1000000]
]);

/* ARENA OF VALOR */

addProducts("arena-of-valor", [
  ["40 Vouchers",10000],
  ["90 Vouchers",20000],
  ["230 Vouchers",50000],
  ["470 Vouchers",100000],
  ["950 Vouchers",200000],
  ["1.430 Vouchers",300000],
  ["2.390 Vouchers",500000]
]);

/* AFK JOURNEY */

addProducts("afk-journey", [
  ["21 Dragon Crystals",15624],
  ["126 Dragon Crystals",77144],
  ["294 Dragon Crystals",155264],
  ["588 Dragon Crystals",321269],
  ["1.554 Dragon Crystals",780224],
  ["3.150 Dragon Crystals",1561424],
  ["Classic Gazette",77144],
  ["Premium Gazette",243149],
  ["Growth Bundle",467744]
]);

/* CLOUD SONG */

addProducts("cloud-song", [
  ["0.99$ Tickets",11303],
  ["1.99$ Tickets",18836],
  ["2.99$ Tickets",33906],
  ["5.99$ Tickets",67812],
  ["11.99$ Tickets",135623],
  ["21.99$ Tickets",271248],
  ["29.99$ Tickets",339060],
  ["59.99$ Tickets",678119],
  ["99.99$ Tickets",1356238]
]);

/* MOB RUSH */

addProducts("mob-rush", [
  ["100 Diamonds",16093],
  ["300 Diamonds",48278],
  ["500 Diamonds",80464],
  ["1.000 Diamonds",160928],
  ["2.000 Diamonds",321856],
  ["3.000 Diamonds",482784],
  ["5.000 Diamonds",804640],
  ["10.000 Diamonds",1609280],
  ["Top Value Pack",4828],
  ["Super Value Hero Pack",16093],
  ["Diamond Benefits Weekly",19311],
  ["Diamond Benefits Monthly",38623],
  ["Account Growth Fund Normal",48278],
  ["Account Growth Fund Advanced",128742],
  ["BattlePass",80464]
]);
/* =========================================
   SCRIPT.JS - BAGIAN 4/5
   GAME, PC GAME, ENTERTAINMENT
========================================= */

/* HAGO */

addProducts("hago", [
  ["1.200 Diamonds",2145],
  ["9.200 Diamonds",16334],
  ["18.200 Diamonds",32667],
  ["45.600 Diamonds",81667],
  ["76.200 Diamonds",136112],
  ["183.000 Diamonds",326667],
  ["336.000 Diamonds",598891],
  ["672.400 Diamonds",1197780]
]);

/* PIXEL GUN 3D */

addProducts("pixel-gun", [
  ["50+5 Coins",14800],
  ["150+15 Coins",44698],
  ["250+25 Coins",74596],
  ["500+100 Coins",149341],
  ["1.000+300 Coins",298833],
  ["2.500+1.000 Coins",747305],
  ["50+5 Keys",14800],
  ["150+15 Keys",44698],
  ["250+25 Keys",74595],
  ["500+100 Keys",149341],
  ["1.000+300 Keys",298833],
  ["2.500+1.000 Keys",747305],
  ["90+10 Gems",44698],
  ["150+25 Gems",74595],
  ["300+75 Gems",149341],
  ["600+200 Gems",298833],
  ["1.500+700 Gems",747305],
  ["60+6 Pixel Pass Tickets",14800],
  ["180+20 Pixel Pass Tickets",44698],
  ["300+50 Pixel Pass Tickets",74595],
  ["600+150 Pixel Pass Tickets",149341],
  ["1.200+550 Pixel Pass Tickets",298833],
  ["3.000+1.500 Pixel Pass Tickets",747305],
  ["Basic Set",74596],
  ["Advanced Set",149341],
  ["Expert Set",298833],
  ["Winner Set",747305]
]);

/* CAPTAIN TSUBASA */

addProducts("captain-tsubasa", [
  ["6 Golden Ball Pack",1478],
  ["60+3 Golden Balls",14784],
  ["300+15 Golden Balls",72996],
  ["680+35 Golden Balls",146916],
  ["980+50 Golden Balls",230076],
  ["1.280+65 Golden Balls",303996],
  ["1.980+198 Golden Balls",442596],
  ["3.280+328 Golden Balls",738276],
  ["6.480+648 Golden Balls",1477476]
]);

/* RACING MASTER */

addProducts("racing-master", [
  ["70+4 Gems",16000],
  ["140+7 Gems",32000],
  ["210+11 Gems",48000],
  ["350+18 Gems",79000],
  ["700+35 Gems",159000],
  ["1.000+50 Gems",225000],
  ["1.400+70 Gems",315000],
  ["2.100+105 Gems",470000],
  ["3.400+170 Gems",760000],
  ["6.600+330 Gems",1469000]
]);

/* MU ORIGIN 2 */

addProducts("mu-origin", [
  ["35 Badges",4843],
  ["70 Badges",9687],
  ["109 Badges",15135],
  ["195 Badges",27243],
  ["325 Badges",45404],
  ["951 Badges",133187],
  ["1.621 Badges",227022],
  ["5.401 Badges",756741],
  ["17.283 Badges",2421570]
]);

/* VALORANT */

addProducts("valorant", [
  ["475 VP",52719],
  ["1.000 VP",112000],
  ["1.475 VP",158159],
  ["2.050 VP",224000],
  ["2.525 VP",263597],
  ["3.050 VP",316317],
  ["3.650 VP",366213],
  ["4.125 VP",418932],
  ["4.650 VP",471651],
  ["5.350 VP",526253],
  ["5.700 VP",577090],
  ["5.825 VP",578973],
  ["6.350 VP",631692],
  ["7.300 VP",732424],
  ["7.400 VP",737132],
  ["9.000 VP",892466],
  ["11.000 VP",1034620],
  ["11.475 VP",1087339],
  ["12.000 VP",1140059],
  ["13.050 VP",1245498],
  ["14.650 VP",1400833],
  ["15.100 VP",1456376],
  ["16.350 VP",1560873],
  ["16.700 VP",1611710],
  ["18.300 VP",1767044],
  ["20.000 VP",1927086],
  ["22.000 VP",2069240]
]);

/* LEAGUE OF LEGENDS PC */

addProducts("league-of-legends", [
  ["575 RP",66600],
  ["1.380 RP",136000],
  ["2.800 RP",272000],
  ["4.500 RP",427400],
  ["6.500 RP",602200],
  ["13.500 RP",1165400]
]);

/* MARVEL RIVALS */

addProducts("marvel-rivals", [
  ["100 Lattices",18065],
  ["500 Lattices",90523],
  ["1.000 Lattices",182435],
  ["2.180 Lattices",365069],
  ["5.680 Lattices",912969],
  ["11.680 Lattices",1826130]
]);

/* TAMBAHAN KATEGORI ENTERTAINMENT */

catalog.push(
  {
    id: "vidio",
    name: "Vidio",
    image: "vidio.jpg",
    group: "entertainment",
    fields: [
      {
        id: "buyerAccount",
        label: "Email / Akun Vidio",
        placeholder: "Masukkan email akun",
        required: true
      }
    ],
    products: []
  },
  {
    id: "poppo-live",
    name: "Poppo Live",
    image: "poppolive.jpg",
    group: "entertainment",
    fields: [
      {
        id: "gameId",
        label: "Poppo ID",
        placeholder: "Masukkan Poppo ID",
        required: true
      }
    ],
    products: []
  },
  {
    id: "bigo-live",
    name: "BIGO LIVE",
    image: "bigolive.jpg",
    group: "entertainment",
    fields: [
      {
        id: "gameId",
        label: "BIGO ID",
        placeholder: "Masukkan BIGO ID",
        required: true
      }
    ],
    products: []
  },
  {
    id: "like",
    name: "LIKE",
    image: "like.jpg",
    group: "entertainment",
    fields: [
      {
        id: "gameId",
        label: "User ID",
        placeholder: "Masukkan User ID",
        required: true
      }
    ],
    products: []
  },
  {
    id: "wetv",
    name: "WeTV",
    image: "wetv.jpg",
    group: "entertainment",
    fields: [
      {
        id: "buyerAccount",
        label: "Email Akun WeTV",
        placeholder: "Masukkan email akun",
        required: true
      }
    ],
    products: []
  },
  {
    id: "lita",
    name: "LITA",
    image: "lita.jpg",
    group: "entertainment",
    fields: [
      {
        id: "gameId",
        label: "LITA ID",
        placeholder: "Masukkan LITA ID",
        required: true
      }
    ],
    products: []
  },
  {
    id: "sugo",
    name: "SUGO",
    image: "sugo.jpg",
    group: "entertainment",
    fields: [
      {
        id: "gameId",
        label: "SUGO ID",
        placeholder: "Masukkan SUGO ID",
        required: true
      }
    ],
    products: []
  },
  {
    id: "loby",
    name: "Loby",
    image: "loby.jpg",
    group: "entertainment",
    fields: [
      {
        id: "gameId",
        label: "Loby ID",
        placeholder: "Masukkan Loby ID",
        required: true
      }
    ],
    products: []
  }
);

/* VIDIO */

addProducts("vidio", [
  ["Ultimate All Screen 1 Tahun",1514000],
  ["Ultimate Mobile 30 Hari",109000],
  ["Ultimate Mobile 1 Tahun",859000],
  ["Ultimate All Screen 30 Hari",238000],
  ["Ultimate Mobile 3 Bulan",263158],
  ["Platinum 30 Hari",54000],
  ["Platinum Extra 30 Hari",76000],
  ["Platinum 3 Bulan",118000],
  ["Platinum Extra 3 Bulan",187000],
  ["Platinum 1 Tahun",398000],
  ["Platinum Extra 1 Tahun",553000]
]);

/* POPPO LIVE */

addProducts("poppo-live", [
  ["1.000 Coins",2184],
  ["7.000 Coins",14690],
  ["21.000 Coins",44070],
  ["25.500 Coins",53599],
  ["43.500 Coins",91912],
  ["43.750 Coins",92508],
  ["70.000 Coins",146901],
  ["83.000 Coins",174891],
  ["88.000 Coins",185810],
  ["88.990 Coins",187993],
  ["178.000 Coins",375987],
  ["180.000 Coins",380553],
  ["210.000 Coins",440703],
  ["270.000 Coins",570730],
  ["273.000 Coins",576685],
  ["252.000 Coins",731725],
  ["350.000 Coins",734504],
  ["430.000 Coins",910785],
  ["450.000 Coins",950488],
  ["455.000 Coins",962201],
  ["700.000 Coins",1469009],
  ["1.050.000 Coins",2203513],
  ["1.400.000 Coins",2938017],
  ["1.750.000 Coins",3672522],
  ["2.100.000 Coins",4407026],
  ["2.450.000 Coins",5141530],
  ["2.800.000 Coins",5876035],
  ["3.150.000 Coins",6610539],
  ["3.500.000 Coins",7345044],
  ["4.200.000 Coins",8814052],
  ["4.900.000 Coins",10283061],
  ["5.600.000 Coins",11752070],
  ["6.300.000 Coins",13221078],
  ["7.000.000 Coins",14690087],
  ["8.750.000 Coins",18362609],
  ["10.500.000 Coins",22035131],
  ["12.250.000 Coins",25707652],
  ["14.000.000 Coins",29380174],
  ["15.750.000 Coins",33052696],
  ["17.500.000 Coins",36725218],
  ["19.250.000 Coins",40397739],
  ["21.000.000 Coins",44070261],
  ["24.500.000 Coins",51415305],
  ["28.000.000 Coins",58760348],
  ["31.500.000 Coins",66105392],
  ["35.000.000 Coins",73450435]
]);

/* BIGO LIVE */

addProducts("bigo-live", [
  ["25 Diamonds",8995],
  ["50 Diamonds",17989],
  ["100 Diamonds",35978],
  ["150 Diamonds",54172],
  ["200 Diamonds",72161],
  ["250 Diamonds",90150],
  ["300 Diamonds",108139],
  ["500 Diamonds",180299],
  ["750 Diamonds",270449],
  ["1.000 Diamonds",360598],
  ["2.000 Diamonds",720992],
  ["3.000 Diamonds",1081591],
  ["4.000 Diamonds",1441985],
  ["5.000 Diamonds",1802583],
  ["7.500 Diamonds",2703875],
  ["10.000 Diamonds",3605166],
  ["20.000 Diamonds",7210332],
  ["30.000 Diamonds",10815499],
  ["50.000 Diamonds",18025831]
]);

/* LIKE */

addProducts("like", [
  ["100 Diamonds",35777],
  ["200 Diamonds",71553],
  ["500 Diamonds",178491],
  ["1.000 Diamonds",356981],
  ["1.500 Diamonds",535472],
  ["2.000 Diamonds",713961],
  ["2.500 Diamonds",892452],
  ["3.000 Diamonds",1070942],
  ["3.500 Diamonds",1249433],
  ["4.000 Diamonds",1427923],
  ["4.500 Diamonds",1606414],
  ["5.000 Diamonds",1784706],
  ["10.000 Diamonds",3569414],
  ["20.000 Diamonds",7138828]
]);

/* WETV */

addProducts("wetv", [
  ["1 Month VIP",55000],
  ["3 Months VIP",136700],
  ["12 Months VIP",475700]
]);

/* LITA */

addProducts("lita", [
  ["300 Lita Coins",39188],
  ["600 Lita Coins",78377],
  ["1.000 Lita Coins",129695],
  ["2.000 Lita Coins",259389],
  ["5.000 Lita Coins",648473],
  ["10.000 Lita Coins",1296014]
]);

/* SUGO */

addProducts("sugo", [
  ["1.200 Coins",20238],
  ["2.400 Coins",40680],
  ["6.250 Coins",102006],
  ["12.500 Coins",204216],
  ["37.500 Coins",613058],
  ["65.000 Coins",1021900],
  ["130.000 Coins",2044004]
]);

/* LOBY */

addProducts("loby", [
  ["299 Coin",54216],
  ["650 Coin",90396],
  ["990 Coin",144504],
  ["2.500 Coin",324648],
  ["5.000 Coin",626832],
  ["10.000 Coin",1165860],
  ["20.000 Coin",2268216],
  ["50.000 Coin",5387688]
]);
/* =========================================
   SCRIPT.JS - BAGIAN 5/5
   SISTEM TRANSAKSI LENGKAP
========================================= */

/* KODE PROMO RAHASIA */

const promoCodes = [
  "seann",
  "c1",
  "lixerastore",
  "seantampan3",
  "diskonlixera4",
  "lixiexsandrapratama",
  "perusakhargatopup"
];

/* HARGA JUAL */

function getProductPrice(product) {
  const isMobileLegends =
    selectedCategory &&
    selectedCategory.id === "mobile-legends";

  return isMobileLegends
    ? product.price
    : product.price + 200;
}

/* RENDER SEMUA SUBKATEGORI */

function renderProducts() {
  if (!selectedCategory) return;

  const grid = document.getElementById("productGrid");

  if (!grid) return;

  const products = selectedCategory.products;

  grid.innerHTML = products.map((product, index) => {
    const price = getProductPrice(product);

    return `
      <article
        class="product-card ${
          selectedProduct === product ? "selected" : ""
        }"
        onclick="selectProduct(${index})"
      >
        <h3>${escapeHTML(product.name)}</h3>

        <div class="product-price">
          ${formatRupiah(price)}
        </div>

        <span class="product-select">
          ${
            selectedProduct === product
              ? "✓ Dipilih"
              : "Pilih produk →"
          }
        </span>
      </article>
    `;
  }).join("");

  updateSelectedProductBar();
}

/* PILIH PRODUK */

function selectProduct(index) {
  if (!selectedCategory) return;

  const product = selectedCategory.products[index];

  if (!product) return;

  selectedProduct = product;
  activePromo = null;

  renderProducts();
}

/* TAMPILKAN PRODUK YANG DIPILIH */

function updateSelectedProductBar() {
  const bar = document.getElementById("selectedProductBar");

  if (!bar) return;

  if (!selectedProduct) {
    bar.hidden = true;
    return;
  }

  bar.hidden = false;

  document.getElementById("selectedProductName").textContent =
    selectedProduct.name;

  document.getElementById("selectedProductPrice").textContent =
    formatRupiah(getProductPrice(selectedProduct));
}

/* LANJUT KE FORM */

function continueOrder() {
  if (!selectedCategory || !selectedProduct) {
    showToast("Pilih produk terlebih dahulu.");
    return;
  }

  activePromo = null;

  document.getElementById("promoCode").value = "";
  document.getElementById("promoMessage").textContent = "";
  document.getElementById("promoMessage").className = "";

  document.getElementById("formProductName").textContent =
    selectedCategory.name + " - " + selectedProduct.name;

  document.getElementById("formProductPrice").textContent =
    formatRupiah(getProductPrice(selectedProduct));

  renderGameFields();
  updatePriceSummary();

  showPage("form");
}

/* FORM SESUAI KATEGORI */

function renderGameFields() {
  const container = document.getElementById("gameFields");

  if (!container || !selectedCategory) return;

  container.innerHTML = selectedCategory.fields.map(field => `
    <div class="form-group game-field-group">

      <label for="${escapeHTML(field.id)}">
        ${escapeHTML(field.label)}
      </label>

      <input
        type="text"
        id="${escapeHTML(field.id)}"
        name="${escapeHTML(field.id)}"
        placeholder="${escapeHTML(field.placeholder)}"
        ${field.required ? "required" : ""}
        autocomplete="off"
      >

    </div>
  `).join("");
}

/* VALIDASI KODE PROMO */

function applyPromo() {
  const input = document.getElementById("promoCode");
  const message = document.getElementById("promoMessage");

  const code = input.value.trim().toLowerCase();

  if (!code) {
    activePromo = null;
    message.textContent = "Masukkan kode promo terlebih dahulu.";
    message.className = "error";
    updatePriceSummary();
    return;
  }

  if (activePromo) {
    message.textContent = "Satu pesanan hanya menggunakan satu kode promo.";
    message.className = "error";
    return;
  }

  if (promoCodes.includes(code)) {
    activePromo = code;

    message.textContent = "Kode promo berhasil digunakan. Diskon Rp100!";
    message.className = "success";

    updatePriceSummary();

    showToast("Kode promo berhasil digunakan!");
  } else {
    activePromo = null;

    message.textContent = "Kode promo tidak valid.";
    message.className = "error";

    updatePriceSummary();
  }
}

/* PERHITUNGAN HARGA */

function getOrderTotal() {
  if (!selectedProduct) return 0;

  const subtotal = getProductPrice(selectedProduct);
  const discount = activePromo ? CONFIG.promoDiscount : 0;

  return Math.max(0, subtotal - discount);
}

function updatePriceSummary() {
  if (!selectedProduct) return;

  const subtotal = getProductPrice(selectedProduct);
  const discount = activePromo ? CONFIG.promoDiscount : 0;
  const total = subtotal - discount;

  document.getElementById("subtotalPrice").textContent =
    formatRupiah(subtotal);

  document.getElementById("discountPrice").textContent =
    formatRupiah(discount);

  document.getElementById("finalPrice").textContent =
    formatRupiah(total);
}

/* DATA FORM PEMBELI */

function collectBuyerData() {
  const data = {};

  selectedCategory.fields.forEach(field => {
    const input = document.getElementById(field.id);

    data[field.id] = input ? input.value.trim() : "";
  });

  data.name = document.getElementById("buyerName").value.trim();
  data.phone = document.getElementById("buyerPhone").value.trim();

  return data;
}

/* SIMPAN INFORMASI PEMBELI */

function saveBuyerInfo(buyer) {
  saveLocal(CONFIG.buyerKey, {
    name: buyer.name,
    phone: buyer.phone
  });
}

/* SUBMIT FORM */

document.getElementById("buyerForm").addEventListener(
  "submit",
  function(event) {
    event.preventDefault();

    if (!selectedCategory || !selectedProduct) {
      showToast("Produk belum dipilih.");
      return;
    }

    const buyer = collectBuyerData();

    if (!buyer.name || !buyer.phone) {
      showToast("Lengkapi data pembeli.");
      return;
    }

    if (!/^[0-9+\-\s]{8,20}$/.test(buyer.phone)) {
      showToast("Nomor WhatsApp tidak valid.");
      return;
    }

    for (const field of selectedCategory.fields) {
      if (field.required && !buyer[field.id]) {
        showToast("Lengkapi " + field.label);
        return;
      }
    }

    saveBuyerInfo(buyer);

    currentOrder = {
      id: "LXR-" + Date.now(),
      category: selectedCategory.name,
      product: selectedProduct.name,
      buyer: buyer,
      subtotal: getProductPrice(selectedProduct),
      discount: activePromo ? CONFIG.promoDiscount : 0,
      total: getOrderTotal(),
      promo: activePromo,
      status: "Menunggu konfirmasi pembayaran",
      date: new Date().toLocaleString("id-ID")
    };

    openPaymentModal();
  }
);

/* POPUP QRIS */

function openPaymentModal() {
  if (!currentOrder) return;

  document.getElementById("paymentTotal").textContent =
    formatRupiah(currentOrder.total);

  document.getElementById("paymentProduct").textContent =
    currentOrder.category + " - " + currentOrder.product;

  document.getElementById("paymentBuyer").textContent =
    currentOrder.buyer.name;

  document.getElementById("paymentModal").classList.add("show");

  document.body.style.overflow = "hidden";
}

function closePaymentModal() {
  document.getElementById("paymentModal").classList.remove("show");

  document.body.style.overflow = "";
}

/* KONFIRMASI PEMBAYARAN */

function confirmPayment() {
  if (!currentOrder) return;

  const confirmation = confirm(
    "Apakah kamu sudah menyelesaikan pembayaran QRIS sebesar " +
    formatRupiah(currentOrder.total) + "?"
  );

  if (!confirmation) return;

  /*
    Website statis tidak dapat memverifikasi
    pembayaran QRIS secara otomatis.

    Status tetap menunggu pengecekan admin.
  */

  currentOrder.status = "Menunggu verifikasi admin";
  currentOrder.confirmedAt = new Date().toLocaleString("id-ID");

  const orders = getLocal(CONFIG.storageKey, []);

  orders.unshift(currentOrder);

  saveLocal(CONFIG.storageKey, orders);

  closePaymentModal();

  document.getElementById("successOrderId").textContent =
    currentOrder.id;

  document.getElementById("successModal").classList.add("show");

  renderOrderHistory();
}

/* PESAN WHATSAPP OTOMATIS */

function createWhatsAppMessage(order) {
  const buyer = order.buyer;

  let message =
    "HALO MIN LIXERA STORE!\n\n" +
    "Saya sudah melakukan pembayaran pesanan.\n\n" +
    "Nomor Pesanan: " + order.id + "\n" +
    "Produk: " + order.category + "\n" +
    "Subkategori: " + order.product + "\n";

  order.category === "Mobile Legends"
    ? message +=
        "ID ML: " + buyer.gameId + "\n" +
        "Server ML: " + buyer.server + "\n"
    : null;

  if (order.category !== "Mobile Legends") {
    order.category !== "Vidio" && order.category !== "WeTV"
      ? message += "ID Game: " + (buyer.gameId || "-") + "\n"
      : null;
  }

  if (buyer.server && order.category !== "Mobile Legends") {
    message += "Server: " + buyer.server + "\n";
  }

  if (buyer.buyerAccount) {
    message += "Akun: " + buyer.buyerAccount + "\n";
  }

  message +=
    "Nama Pembeli: " + buyer.name + "\n" +
    "Nomor WhatsApp: " + buyer.phone + "\n" +
    "Total Pembayaran: " + formatRupiah(order.total) + "\n" +
    "Kode Promo: " + (order.promo ? "Digunakan" : "Tidak digunakan") +
    "\n\nMohon dicek dan diproses. Terima kasih!";

  return message;
}

function openWhatsAppConfirmation() {
  if (!currentOrder) return;

  const message = createWhatsAppMessage(currentOrder);

  const whatsappURL =
    "https://wa.me/" +
    CONFIG.adminWhatsApp +
    "?text=" +
    encodeURIComponent(message);

  window.open(whatsappURL, "_blank");
}

/* SELESAI TRANSAKSI */

function finishOrder() {
  document.getElementById("successModal").classList.remove("show");

  document.body.style.overflow = "";

  currentOrder = null;
  selectedProduct = null;
  selectedCategory = null;
  activePromo = null;

  document.getElementById("buyerForm").reset();

  showPage("proses");
}

/* RIWAYAT PESANAN */

function renderOrderHistory() {
  const container = document.getElementById("orderHistory");

  if (!container) return;

  const orders = getLocal(CONFIG.storageKey, []);

  if (!orders.length) {
    container.innerHTML = `
      <div class="empty-state">
        <span>▤</span>
        <h3>Belum Ada Pesanan</h3>
        <p>Pesanan kamu akan muncul di sini.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = orders.map(order => `
    <article class="order-item">

      <div class="order-item-header">
        <h3>${escapeHTML(order.category)}</h3>
        <span>${escapeHTML(order.status)}</span>
      </div>

      <p>Nomor: ${escapeHTML(order.id)}</p>

      <p>Produk: ${escapeHTML(order.product)}</p>

      <p>Nama: ${escapeHTML(order.buyer.name)}</p>

      <p>Total: <strong>${formatRupiah(order.total)}</strong></p>

      <p>Tanggal: ${escapeHTML(order.date)}</p>

    </article>
  `).join("");
}

/* AKUN PEMBELI */

function renderAccount() {
  const buyer = getLocal(CONFIG.buyerKey, null);

  document.getElementById("accountName").textContent =
    buyer?.name || "Pembeli Lixera";

  document.getElementById("accountPhone").textContent =
    buyer?.phone || "Belum ada informasi pembeli";
}

/* PENCARIAN KATEGORI */

document.getElementById("categorySearch").addEventListener(
  "input",
  function() {
    const activeTab = document.querySelector(
      ".category-tab.active"
    );

    renderCategories(
      activeTab?.dataset.filter || "all",
      this.value
    );
  }
);

document.getElementById("productSearch").addEventListener(
  "input",
  function() {
    renderPilihan(this.value);
  }
);

/* FILTER KATEGORI */

document.querySelectorAll(".category-tab").forEach(button => {
  button.addEventListener("click", function() {
    document.querySelectorAll(".category-tab").forEach(tab => {
      tab.classList.remove("active");
    });

    this.classList.add("active");

    const keyword =
      document.getElementById("categorySearch").value;

    renderCategories(this.dataset.filter, keyword);
  });
});

/* SLIDER BANNER */

let currentSlide = 0;

function renderSliderDots() {
  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.getElementById("sliderDots");

  if (!slides.length || !dots) return;

  dots.innerHTML = [...slides].map((slide, index) => `
    <button
      class="slider-dot ${index === 0 ? "active" : ""}"
      onclick="changeSlide(${index})"
      aria-label="Banner ${index + 1}"
    ></button>
  `).join("");
}

function changeSlide(index) {
  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".slider-dot");

  if (!slides.length) return;

  currentSlide = index;

  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

setInterval(() => {
  const slides = document.querySelectorAll(".hero-slide");

  if (slides.length > 1) {
    changeSlide((currentSlide + 1) % slides.length);
  }
}, 5000);

/* INISIALISASI WEBSITE */

document.addEventListener("DOMContentLoaded", function() {
  renderCategories();
  renderPilihan();
  renderOrderHistory();
  renderAccount();
  renderSliderDots();

  console.log("LIXERA STORE TOP UP siap dijalankan.");
  console.log("Jumlah kategori:", catalog.length);

  const totalProducts = catalog.reduce(
    (total, category) => total + category.products.length,
    0
  );

  console.log("Jumlah seluruh subkategori:", totalProducts);
});
