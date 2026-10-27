'use strict';

// Harga Mobile Legends tetap sesuai daftar sumber. Kategori lain otomatis +Rp200.
const ADMIN_WA = '628818238236';
const IMG = {
  'Mobile Legends':'mobilelegends.jpg','Free Fire':'freefire.jpg','Free Fire MAX':'freefiremax.jpg','Magic Chess: Go Go':'magicchesgogo.jpg','PUBG Mobile':'pubgmobile.jpg','EA SPORTS FC Mobile':'fcmobile.jpg','Honor of Kings':'honorofkings.jpg','Football Master 2':'footballmaster2.jpg','Delta Force':'deltaforce.jpg','ZEPETO':'zepeto.jpg','Undawn':'undawn.jpg','Call of Duty Mobile ID':'callofduty.jpg','Arena of Valor':'arenaofvalor.jpg','AFK Journey':'afkjourney.jpg','Cloud Song: Saga of Skywalkers':'cloudsongsagaofskywalkers.jpg','Mob Rush':'mobrush.jpg','HAGO':'hago.jpg','Pixel Gun 3D':'pixelgun3d.jpg','Captain Tsubasa: Ace':'captaintsubasa.jpg','Racing Master':'racingmaster.jpg','MU Origin 2':'muorigin.jpg','VALORANT':'valorant.jpg','League of Legends - PC':'leagueoflegends.jpg','Marvel Rivals':'marvelrivals.jpg','Vidio':'vidio.jpg','Poppo Live':'poppolive.jpg','BIGO LIVE':'bigolive.jpg','LIKE':'like.jpg','WeTV':'wetv.jpg','LITA':'lita.jpg','SUGO':'sugo.jpg','Loby':'loby.jpg'
};
const product = (name, price, oldPrice = null) => ({ name, price, oldPrice });
const ml = [
  ['5 Diamonds',1785],['10 Diamonds (9+1)',3579],['12 Diamonds (11+1)',3949],['19 Diamonds (17+2)',6341],['28 Diamonds (25+3)',9509],['44 Diamonds (40+4)',13753],['54 Diamonds (50+4)',16350],['71 Diamonds (64+7)',22165],['74 Diamonds (67+7)',23250],['85 Diamonds (77+8)',26218],['88 Diamonds (80+8)',27306],['110 Diamonds (100+10)',32945],['113 Diamonds (102+11)',35144],['128 Diamonds (117+11)',42385],['148 Diamonds (134+14)',48616],['170 Diamonds (154+16)',51863],['176 Diamonds (160+16)',57984],['184 Diamonds (167+17)',61576],['222 Diamonds (200+22)',74198],['240 Diamonds (217+23)',75016],['258 Diamonds (233+25)',86204],['277 Diamonds (250+27)',85657],['284 Diamonds',86699],['296 Diamonds',90132],['301 Diamonds',94486],['305 Diamonds',100630],['333 Diamonds',103880],['346 Diamonds',102127],['356 Diamonds',111487],['370 Diamonds',113183],['384 Diamonds',116898],['408 Diamonds',123698],['424 Diamonds',130000],['452 Diamonds',147108],['518 Diamonds',169376],['568 Diamonds',182853],['601 Diamonds',192464],['642 Diamonds',207000],['716 Diamonds',229957],['758 Diamonds',244565],['790 Diamonds',255639],['845 Diamonds',272849],['875 Diamonds',279442],['938 Diamonds',299998],['966 Diamonds',309624],['1045 Diamonds',311799],['1136 Diamonds',363000],['1159 Diamonds',371996],['1443 Diamonds',460683],['1506 Diamonds',481239],['1704 Diamonds',544523],['2010 Diamonds',561429],['2232 Diamonds',689551],['2380 Diamonds',732449],['2578 Diamonds',796794],['2625 Diamonds',811951],['3453 Diamonds (2985+468)',1076536],['3738 Diamonds',1167552],['4020 Diamonds',1231306],['4588 Diamonds',1230201],['4830 Diamonds',1327899],['5398 Diamonds',1625001],['6030 Diamonds',1846459],['9660 Diamonds',2886320],['10050 Diamonds',2674305],['14490 Diamonds',4330480],['16080 Diamonds',4922224],['18090 Diamonds',5539377],['19320 Diamonds',5774640],['20100 Diamonds',6151230],['21330 Diamonds',6389793],['23340 Diamonds',7004946],['24150 Diamonds',7220800],['26160 Diamonds',7833953],['28170 Diamonds',8448106],['Twilight Pass',169120],['Weekly Elite Bundle (1x/minggu)',17002],['Monthly Epic Bundle (1x/bulan)',84430],['Weekly Diamond Pass',30198],['Weekly Diamond Pass x2',62255],['Weekly Diamond Pass x3',94299]
].map(([name,price])=>product(name,price));
const gameCategories = [
 {name:'Mobile Legends',group:'Game',products:ml},
   {name:'Free Fire',group:'Game',products:[['5 Diamonds',884,1000],['10 Diamonds',1762,2000],['20 Diamonds',3518,4000],['50 Diamonds',7150,8000],['70 Diamonds',9150,10000],['140 Diamonds',18350,20000],['12 Diamonds',1870,2200],['25 Diamonds',4897,5000],['30 Diamonds',5561,6000],['55 Diamonds',7860,9000],['80 Diamonds',11754,12000],['100 Diamonds',13980,17600],['120 Diamonds',17632,18000],['130 Diamonds',18791,19000],['145 Diamonds',20567,21000],['150 Diamonds',21549,22000],['190 Diamonds',27426,28000],['200 Diamonds',29385,30000],['210 Diamonds',29826,30000],['280 Diamonds',39179,40000],['355 Diamonds',46850,50000],['420 Diamonds',57866,59000],['425 Diamonds',58771,66000],['475 Diamonds',66607,68000],['495 Diamonds',68565,77000],['500 Diamonds',69543,71000],['510 Diamonds',71503,73000],['545 Diamonds',76401,78000],['565 Diamonds',78360,80000],['600 Diamonds',85218,85000],['635 Diamonds',88154,90000],['720 Diamonds',95000,100000],['800 Diamonds',108106,112000],['860 Diamonds',117540,132000],['930 Diamonds',127335,130000],['1000 Diamonds',137129,140000],['1050 Diamonds',141950,148000],['1075 Diamonds',151000,166100],['1080 Diamonds',147909,152000],['1440 Diamonds',199000,218900],['1450 Diamonds',200000,220000],['2160 Diamonds',298000,327800],['2180 Diamonds',300000,330000],['7290 Diamonds',981460,1000000],['36500 Diamonds',5000000,5500000],['73100 Diamonds',10000000,11000000],['Member Mingguan',27700,28000],['Member Bulanan',91215,93500],['BP Card',45608,49500],['Level Up Pass Level 6',5498,5995],['Level Up Pass Level 10',9162,9999],['Level Up Pass Level 15',9162,9999],['Level Up Pass Level 20',9162,9999],['Level Up Pass Level 25',9162,9999],['Level Up Pass Level 30',14659,15994]].map(([n,p,o])=>product(n,p,o))},
 {name:'Free Fire MAX',group:'Game',products:[]},
 {name:'Magic Chess: Go Go',group:'Game',products:[['5 Diamonds',1580,1865],['Weekly Card',31500,37296],['12 Diamonds (11+1)',4103],['19 Diamonds (17+2)',6340],['28 Diamonds (25+3)',9324],['44 Diamonds (40+4)',14918],['59 Diamonds (53+6)',19767],['85 Diamonds (77+8)',28718],['170 Diamonds (154+16)',57436],['240 Diamonds (217+23)',80932],['296 Diamonds (256+40)',95478],['408 Diamonds (367+41)',136876],['568 Diamonds (503+65)',187599],['875 Diamonds (774+101)',288671],['2010 Diamonds (1708+302)',637016],['4830 Diamonds (4003+827)',1492959]].map(([n,p,o])=>product(n,p,o))},
 {name:'PUBG Mobile',group:'Game',products:[['60 UC',16793],['120 UC',33587],['300+25 Bonus UC',84730],['600+60 Bonus UC',169650],['1500+300 Bonus UC',424412],['3000+850 Bonus UC',849015],['6000+2100 Bonus UC',1698220],['12000+4200 Bonus UC',3396440],['18000+6300 Bonus UC',5094660],['24000+8400 Bonus UC',6792880],['36000+12600 Bonus UC',10189320],['48000+16800 Bonus UC',13585760]].map(([n,p])=>product(n,p))},
 {name:'EA SPORTS FC Mobile',group:'Game',products:[['40 FC Points',6400,6500],['100 FC Points',15700,16000],['520 FC Points',77500],['1070 FC Points',155975],['2200 FC Points',322750],['5750 FC Points',783825],['12000 FC Points',1568600],['39 Silver',6400],['99 Silver',15700],['499 Silver',77500],['999 Silver',155975],['1999 Silver',322750],['4999 Silver',783825],['9999 Silver',1568600]].map(([n,p,o])=>product(n,p,o))},
 {name:'Honor of Kings',group:'Game',products:[['80 Tokens',16000],['240 Tokens',47000],['400 Tokens',80000],['800+30 Tokens',160000],['2400+108 Tokens',480000],['4000+180 Tokens',800000],['8000+360 Tokens',1599000]].map(([n,p])=>product(n,p))},
 {name:'Football Master 2',group:'Game',products:[['18 FMP',4272],['95 FMP',21216],['191 FMP',42726],['382 FMP',85451],['972 FMP',213628],['1944 FMP',427256],['3888 FMP',854512],['9900 FMP',2136280]].map(([n,p])=>product(n,p))},
 {name:'Delta Force',group:'Game',products:[['18+1 Delta Coins',5400],['30+2 Delta Coins',8100],['60+3 Delta Coins',15900],['300+36 Delta Coins',79201],['420+62 Delta Coins',108901],['680+105 Delta Coins',152702],['1280+264 Delta Coins',305103],['1680+385 Delta Coins',381304],['3280+834 Delta Coins',762308],['6480+1944 Delta Coins',1524615],['12960+3888 Delta Coins',3049230],['19440+5832 Delta Coins',4573846]].map(([n,p])=>product(n,p))},
 {name:'ZEPETO',group:'Game',products:[['14 Zems',14500,17000],['28 Zems',30800],['58 Zems',61800],['128 Zems',131500],['323 Zems',332600],['1000 Zems',1000000],['4680 Coins',15800],['9700 Coins',30800],['25200 Coins',77200],['40700 Coins',123700],['110000 Coins',324800],['300000 Coins',863600],['Premium (1M)',63800]].map(([n,p,o])=>product(n,p,o))},
 {name:'Undawn',group:'Game',products:[['Kartu Mingguan',27900],['Kartu Bulanan',46300],['Dana Elit (REBATE LV 80)',122900],['Glory Pass Premium',139150],['80 RC',14400],['250 RC',43200],['450 RC',72000],['920 RC',143040],['1850 RC',287040],['2800 RC',431040],['4750 RC',719040],['9600 RC',1439040],['33000 RC',4800000],['66500 RC',9600000]].map(([n,p])=>product(n,p))},
   {name:'Call of Duty Mobile ID',group:'Game',products:[['63 CP',9500,10000],['128 CP',20000],['321 CP',50000],['645 CP',100000],['1373 CP',200000],['2060 CP',300000],['3564 CP',500000],['7656 CP',1000000]].map(([n,p,o])=>product(n,p,o))},
 {name:'Arena of Valor',group:'Game',products:[['40 Vouchers',10000],['90 Vouchers',20000],['230 Vouchers',50000],['470 Vouchers',100000],['950 Vouchers',200000],['1430 Vouchers',300000],['2390 Vouchers',500000]].map(([n,p])=>product(n,p))},
 {name:'AFK Journey',group:'Game',products:[['21 Dragon Crystals (20+1)',15624],['126 Dragon Crystals (120+6)',77144],['294 Dragon Crystals (280+14)',155264],['588 Dragon Crystals (560+28)',321269],['1554 Dragon Crystals (1480+74)',780224],['3150 Dragon Crystals (3000+150)',1561424],['Esperia Monthly - Classic Gazette',77144],['Esperia Monthly - Premium Gazette',243149],['Growth Bundle',467744]].map(([n,p])=>product(n,p))},
 {name:'Cloud Song: Saga of Skywalkers',group:'Game',products:[['0.99$ Tickets',11303],['1.99$ Tickets',18836],['2.99$ Tickets',33906],['5.99$ Tickets',67812],['11.99$ Tickets',135623],['21.99$ Tickets',271248],['29.99$ Tickets',339060],['59.99$ Tickets',678119],['99.99$ Tickets',1356238]].map(([n,p])=>product(n,p))},
 {name:'Mob Rush',group:'Game',products:[['100 Diamonds',16093],['300 Diamonds',48278],['500 Diamonds',80464],['1000 Diamonds',160928],['2000 Diamonds',321856],['3000 Diamonds',482784],['5000 Diamonds',804640],['10000 Diamonds',1609280],['Top Value Pack',4828],['Super Value Hero Pack',16093],['Diamond Benefits Weekly',19311],['Diamond Benefits Monthly',38623],['Account Growth Fund (Normal)',48278],['Account Growth Fund (Advanced)',128742],['BattlePass',80464]].map(([n,p])=>product(n,p))},
 {name:'HAGO',group:'Game',products:[['1200 Diamonds',2145],['9200 Diamonds',16334],['18200 Diamonds',32667],['45600 Diamonds',81667],['76200 Diamonds',136112],['183000 Diamonds',326667],['336000 Diamonds',598891],['672400 Diamonds',1197780]].map(([n,p])=>product(n,p))},
 {name:'Pixel Gun 3D',group:'Game',products:[['50+5 Coins',14800],['150+15 Coins',44698],['250+25 Coins',74596],['500+100 Coins',149341],['1000+300 Coins',298833],['2500+1000 Coins',747305],['50+5 Keys',14800],['150+15 Keys',44698],['250+25 Keys',74595],['500+100 Keys',149341],['1000+300 Keys',298833],['2500+1000 Keys',747305],['90+10 Gems',44698],['150+25 Gems',74595],['300+75 Gems',149341],['600+200 Gems',298833],['1500+700 Gems',747305],['60+6 Pixel Pass Tickets',14800],['180+20 Pixel Pass Tickets',44698],['300+50 Pixel Pass Tickets',74595],['600+150 Pixel Pass Tickets',149341],['1200+550 Pixel Pass Tickets',298833],['3000+1500 Pixel Pass Tickets',747305],['Basic Set',74596],['Advanced Set',149341],['Expert Set',298833],['Winner Set',747305]].map(([n,p])=>product(n,p))},
 {name:'Captain Tsubasa: Ace',group:'Game',products:[['6 Golden Ball Pack',1478],['60+3 Golden Balls',14784],['300+15 Golden Balls',72996],['680+35 Golden Balls',146916],['980+50 Golden Balls',230076],['1280+65 Golden Balls',303996],['1980+198 Golden Balls',442596],['3280+328 Golden Balls',738276],['6480+648 Golden Balls',1477476]].map(([n,p])=>product(n,p))},
 {name:'Racing Master',group:'Game',products:[['70+4 Gems',16000],['140+7 Gems',32000],['210+11 Gems',48000],['350+18 Gems',79000],['700+35 Gems',159000],['1000+50 Gems',225000],['1400+70 Gems',315000],['2100+105 Gems',470000],['3400+170 Gems',760000],['6600+330 Gems',1469000]].map(([n,p])=>product(n,p))},
 {name:'MU Origin 2',group:'Game',products:[['35 Badges',4843],['70 Badges',9687],['109 Badges',15135],['195 Badges',27243],['325 Badges',45404],['951 Badges',133187],['1621 Badges',227022],['5401 Badges',756741],['17283 Badges',2421571]].map(([n,p])=>product(n,p))},
 {name:'VALORANT',group:'PC Game',products:[['475 VP',52719],['1000 VP',105439,112000],['1475 VP',158159],['2050 VP',210878,224000],['2525 VP',263597],['3050 VP',316317],['3650 VP',366213],['4125 VP',418932],['4650 VP',471651],['5350 VP',526253],['5700 VP',577090],['5825 VP',578973],['6350 VP',631692],['7300 VP',732424],['7400 VP',737132],['9000 VP',892466],['11000 VP',1034620],['11475 VP',1087339],['12000 VP',1140059],['13050 VP',1245498],['14650 VP',1400833],['15100 VP',1456376],['16350 VP',1560873],['16700 VP',1611710],['18300 VP',1767044],['20000 VP',1927086],['22000 VP',2069240]].map(([n,p,o])=>product(n,p,o))},
 {name:'League of Legends - PC',group:'PC Game',products:[['575 RP',58300,66600],['1380 RP',136000],['2800 RP',272000],['4500 RP',427400],['6500 RP',602200],['13500 RP',1165400]].map(([n,p,o])=>product(n,p,o))},
 {name:'Marvel Rivals',group:'PC Game',products:[['100 Lattices',18065],['500 Lattices',90523],['1000 Lattices',182435],['2180 Lattices',365069],['5680 Lattices',912969],['11680 Lattices',1826137]].map(([n,p])=>product(n,p))},
   {name:'Vidio',group:'Entertainment',fields:['Email / Nomor Vidio'],products:[['Ultimate All Screen 1 Tahun',1379000,1514000],['Ultimate Mobile 30 Hari',105000,109000],['Ultimate Mobile 1 Tahun',765000,859000],['Ultimate All Screen 30 Hari',200000,238000],['Ultimate Mobile 3 Bulan',263158],['Platinum 30 Hari',54000],['Platinum Extra 30 Hari',76000],['Platinum 3 Bulan',118000],['Platinum Extra 3 Bulan',187000],['Platinum 1 Tahun',398000],['Platinum Extra 1 Tahun',553000]].map(([n,p,o])=>product(n,p,o))},
 {name:'Poppo Live',group:'Entertainment',fields:['User ID'],products:[['1000 Coins',2184],['7000 Coins',14690],['21000 Coins',44070],['25500 Coins',53599],['43500 Coins',91912],['43750 Coins',92508],['70000 Coins',146901],['83000 Coins',174891],['88000 Coins',185810],['88990 Coins',187993],['178000 Coins',375987],['180000 Coins',380553],['210000 Coins',440703],['270000 Coins',570730],['273000 Coins',576685],['252000 Coins',731725],['350000 Coins',734504],['430000 Coins',910785],['450000 Coins',950488],['455000 Coins',962201],['700000 Coins',1469009],['1050000 Coins',2203513],['1400000 Coins',2938017],['1750000 Coins',3672522],['2100000 Coins',4407026],['2450000 Coins',5141530],['2800000 Coins',5876035],['3150000 Coins',6610539],['3500000 Coins',7345044],['4200000 Coins',8814052],['4900000 Coins',10283061],['5600000 Coins',11752070],['6300000 Coins',13221078],['7000000 Coins',14690087],['8750000 Coins',18362609],['10500000 Coins',22035131],['12250000 Coins',25707652],['14000000 Coins',29380174],['15750000 Coins',33052696],['17500000 Coins',36725218],['19250000 Coins',40397739],['21000000 Coins',44070261],['24500000 Coins',51415305],['28000000 Coins',58760348],['31500000 Coins',66105392],['35000000 Coins',73450435]].map(([n,p])=>product(n,p))},
 {name:'BIGO LIVE',group:'Entertainment',fields:['User ID'],products:[['25 Diamonds',8995],['50 Diamonds',17989],['100 Diamonds',35978],['150 Diamonds',54172],['200 Diamonds',72161],['250 Diamonds',90150],['300 Diamonds',108139],['500 Diamonds',180299],['750 Diamonds',270449],['1000 Diamonds',360598],['2000 Diamonds',720992],['3000 Diamonds',1081591],['4000 Diamonds',1441985],['5000 Diamonds',1802583],['7500 Diamonds',2703875],['10000 Diamonds',3605166],['20000 Diamonds',7210332],['30000 Diamonds',10815499],['50000 Diamonds',18025831]].map(([n,p])=>product(n,p))},
 {name:'LIKE',group:'Entertainment',fields:['User ID'],products:[['100 Diamonds',35777],['200 Diamonds',71553],['500 Diamonds',178491],['1000 Diamonds',356981],['1500 Diamonds',535472],['2000 Diamonds',713961],['2500 Diamonds',892452],['3000 Diamonds',1070942],['3500 Diamonds',1249433],['4000 Diamonds',1427923],['4500 Diamonds',1606414],['5000 Diamonds',1784706],['10000 Diamonds',3569414],['20000 Diamonds',7138828]].map(([n,p])=>product(n,p))},
 {name:'WeTV',group:'Entertainment',fields:['Email / ID akun WeTV'],products:[['1 Month VIP',48000,55000],['3 Months VIP',136700],['12 Months VIP',475700]].map(([n,p,o])=>product(n,p,o))},
 {name:'LITA',group:'Entertainment',fields:['User ID'],products:[['300 Lita Coins',39188],['600 Lita Coins',78377],['1000 Lita Coins',129695],['2000 Lita Coins',259389],['5000 Lita Coins',648473],['10000 Lita Coins',1296014]].map(([n,p])=>product(n,p))},
 {name:'SUGO',group:'Entertainment',fields:['User ID'],products:[['1200 Coins',20238],['2400 Coins',40680],['6250 Coins',102006],['12500 Coins',204216],['37500 Coins',613058],['65000 Coins',1021900],['130000 Coins',2044004]].map(([n,p])=>product(n,p))},
 {name:'Loby',group:'Entertainment',fields:['User ID'],products:[['299 Coin',54216],['650 Coin',90396],['990 Coin',144504],['2500 Coin',324648],['5000 Coin',626832],['10000 Coin',1165860],['20000 Coin',2268216],['50000 Coin',5387688]].map(([n,p])=>product(n,p))}
];

// Free Fire MAX mengikuti daftar yang dikirim; 1000 dan 7290 Diamonds memakai harga khusus FF MAX.
const ff = gameCategories.find(c=>c.name==='Free Fire');
const ffmax = gameCategories.find(c=>c.name==='Free Fire MAX');
ffmax.products = ff.products.filter(p=>p.name!=='12 Diamonds').map(p=>{
  if(p.name==='1000 Diamonds') return product(p.name,128800,140000);
  if(p.name==='7290 Diamonds') return product(p.name,920000,1000000);
  return product(p.name,p.price,p.oldPrice);
});

let activeGroup = 'Game';
let selected = null;
let selectedCategory = null;
let selectedImage = null;
let pendingMessage = '';
const categoryGrid = document.getElementById('categoryGrid');
const searchInput = document.getElementById('searchInput');
const tabs = [...document.querySelectorAll('.tab')];
const orderForm = document.getElementById('orderForm');
const dialog = document.getElementById('paymentDialog');

function finalPrice(item, category) {
  if (item.price == null) return null;
  return category === 'Mobile Legends' ? item.price : item.price + 200;
}
function rupiah(value) { return value == null ? 'Harga belum diisi' : 'Rp' + Math.round(value).toLocaleString('id-ID'); }
function escapeHtml(value) { return String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function categoryImage(name) { return IMG[name] || 'logolixerastore.jpg'; }
function renderCategories() {
  const query = searchInput.value.trim().toLocaleLowerCase('id');
  const list = gameCategories.filter(c=>c.group===activeGroup && c.name.toLocaleLowerCase('id').includes(query));
  categoryGrid.innerHTML = '';
  document.getElementById('emptyState').classList.toggle('hidden', list.length > 0);
  list.forEach(category=>{
    const card = document.createElement('article'); card.className='category-card';
    const button = document.createElement('button'); button.type='button'; button.className='category-button'; button.setAttribute('aria-expanded','false');
    button.innerHTML = `<div class="category-image-wrap"><img class="category-image" loading="lazy" src="${categoryImage(category.name)}" alt="${escapeHtml(category.name)}" onerror="this.onerror=null;this.src='logolixerastore.jpg'"></div><div class="category-card-title"><span>${escapeHtml(category.name)}</span><span class="chevron">⌄</span></div>`;
    const panel=document.createElement('div');panel.className='product-panel hidden';
    panel.innerHTML=`<div class="product-panel-head">Pilih nominal / paket</div><div class="product-list"></div>`;
    const listEl=panel.querySelector('.product-list');
    category.products.forEach((item,index)=>{
      const price=finalPrice(item,category.name);
      const old=item.oldPrice;
      const btn=document.createElement('button');btn.type='button';btn.className='product-option';
      const shownName=item.name;
      btn.innerHTML=`<span class="product-option-name">${escapeHtml(shownName)}</span><span class="product-prices"><span class="product-price">${rupiah(price)}</span>${old && old > price?`<span class="old-price">${rupiah(old)}</span>`:''}</span>`;
      if(price==null){btn.title='Harga belum dimasukkan';btn.disabled=true;btn.style.opacity='.55';}
      else btn.addEventListener('click',()=>chooseProduct(category,item,btn));
      listEl.appendChild(btn);
    });
    button.addEventListener('click',()=>{
      const willOpen=panel.classList.contains('hidden');
      categoryGrid.querySelectorAll('.product-panel').forEach(p=>p.classList.add('hidden'));
      categoryGrid.querySelectorAll('.category-card').forEach(c=>{c.classList.remove('expanded');const b=c.querySelector('.category-button');if(b)b.setAttribute('aria-expanded','false');});
      if(willOpen){panel.classList.remove('hidden');card.classList.add('expanded');button.setAttribute('aria-expanded','true');}
    });
    card.append(button,panel);categoryGrid.appendChild(card);
  });
}
function chooseProduct(category,item,btn){
  selected={...item,finalPrice:finalPrice(item,category.name)};selectedCategory=category.name;selectedImage=categoryImage(category.name);
  categoryGrid.querySelectorAll('.product-option').forEach(b=>b.classList.remove('selected'));btn.classList.add('selected');
  document.getElementById('summaryEmpty').classList.add('hidden');document.getElementById('summaryDetails').classList.remove('hidden');
  document.getElementById('summaryImage').src=selectedImage;document.getElementById('summaryProduct').textContent=item.name;document.getElementById('summaryCategory').textContent=category.name;
  document.getElementById('summaryPrice').textContent=rupiah(selected.finalPrice);document.getElementById('summaryTotal').textContent=rupiah(selected.finalPrice);
  renderGameFields(category);
  document.getElementById('pesanan').scrollIntoView({behavior:'smooth',block:'start'});
}
function renderGameFields(category){
  const host=document.getElementById('gameFields');host.innerHTML='';
  let fields=category.fields;
  if(!fields){
    if(category.name==='Mobile Legends') fields=['User ID','Server / Zone ID'];
    else if(['Free Fire','Free Fire MAX','PUBG Mobile','Honor of Kings','Delta Force','Call of Duty Mobile ID','Arena of Valor','AFK Journey','Cloud Song: Saga of Skywalkers','Pixel Gun 3D','Captain Tsubasa: Ace','Racing Master','MU Origin 2','VALORANT','League of Legends - PC','Marvel Rivals'].includes(category.name)) fields=['User ID'];
    else fields=['User ID'];
  }
  fields.forEach((name,i)=>{const label=document.createElement('label');label.className='dynamic-label';label.textContent=name;const input=document.createElement('input');input.name='playerField'+i;input.id='playerField'+i;input.required=true;input.autocomplete='off';input.placeholder='Masukkan '+name.toLowerCase();input.maxLength=100;label.appendChild(input);host.appendChild(label);});
}
function showToast(message){const old=document.querySelector('.toast');if(old)old.remove();const el=document.createElement('div');el.className='toast';el.textContent=message;document.body.appendChild(el);setTimeout(()=>el.remove(),3000);}
orderForm.addEventListener('submit',event=>{
  event.preventDefault();
    if(!selected){showToast('Pilih kategori dan produk terlebih dahulu.');document.getElementById('katalog').scrollIntoView({behavior:'smooth'});return;}
  if(!orderForm.reportValidity())return;
  const buyer=document.getElementById('buyerName').value.trim();const contact=document.getElementById('buyerContact').value.trim();const note=document.getElementById('buyerNote').value.trim();
  const fields=[...document.querySelectorAll('#gameFields input')].map(input=>`${input.closest('label').childNodes[0].textContent.trim()}: ${input.value.trim()}`);
  pendingMessage=[
    '*PESANAN LIXERA STORE*','',`Nama: ${buyer}`,contact?`Kontak: ${contact}`:null,`Kategori: ${selectedCategory}`,`Produk: ${selected.name}`,`Harga: ${rupiah(selected.finalPrice)}`,...fields,note?`Catatan: ${note}`:null,'','Saya akan melakukan pembayaran melalui QRIS. Mohon bantu cek pesanan ini.'
  ].filter(Boolean).join('\n');
  document.getElementById('dialogTotal').textContent=rupiah(selected.finalPrice);
  if(typeof dialog.showModal==='function')dialog.showModal();else showToast('Browser tidak mendukung popup. Coba buka di browser terbaru.');
});
document.getElementById('closeDialog').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close();});
document.getElementById('confirmWhatsApp').addEventListener('click',()=>{
  if(!pendingMessage)return;const url=`https://wa.me/${ADMIN_WA}?text=${encodeURIComponent(pendingMessage)}`;window.open(url,'_blank','noopener,noreferrer');
});
tabs.forEach(tab=>tab.addEventListener('click',()=>{activeGroup=tab.dataset.group;tabs.forEach(t=>t.classList.toggle('active',t===tab));renderCategories();}));
searchInput.addEventListener('input',renderCategories);
document.getElementById('menuToggle').addEventListener('click',()=>document.getElementById('mainNav').classList.toggle('open'));
document.querySelectorAll('#mainNav a').forEach(a=>a.addEventListener('click',()=>document.getElementById('mainNav').classList.remove('open')));
// Slider banner otomatis + tombol navigasi dan dots.
const slides=[...document.querySelectorAll('.hero-slide')];const dotsHost=document.getElementById('sliderDots');let slideIndex=0;let slideTimer;
slides.forEach((_,i)=>{const dot=document.createElement('button');dot.type='button';dot.setAttribute('aria-label',`Lihat banner ${i+1}`);dot.addEventListener('click',()=>showSlide(i));dotsHost.appendChild(dot);});
function showSlide(i){slideIndex=(i+slides.length)%slides.length;slides.forEach((s,j)=>s.classList.toggle('active',j===slideIndex));[...dotsHost.children].forEach((d,j)=>d.classList.toggle('active',j===slideIndex));clearInterval(slideTimer);slideTimer=setInterval(()=>showSlide(slideIndex+1),5000);}
document.getElementById('slidePrev').addEventListener('click',()=>showSlide(slideIndex-1));document.getElementById('slideNext').addEventListener('click',()=>showSlide(slideIndex+1));showSlide(0);
document.getElementById('year').textContent=new Date().getFullYear();
renderCategories();
