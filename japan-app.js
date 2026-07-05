const prefectures = [
  {
    name: "東京都",
    romanized: "Tokyo",
    postalStart: 1000001,
    postalEnd: 1920999,
    areas: [
      { city: "千代田区", town: "丸の内" },
      { city: "新宿区", town: "西新宿" },
      { city: "渋谷区", town: "道玄坂" },
      { city: "港区", town: "赤坂" },
      { city: "台東区", town: "上野" }
    ]
  },
  {
    name: "大阪府",
    romanized: "Osaka",
    postalStart: 5300001,
    postalEnd: 5999999,
    areas: [
      { city: "大阪市北区", town: "梅田" },
      { city: "大阪市中央区", town: "難波" },
      { city: "堺市堺区", town: "南瓦町" },
      { city: "吹田市", town: "江坂町" },
      { city: "豊中市", town: "本町" }
    ]
  },
  {
    name: "神奈川県",
    romanized: "Kanagawa",
    postalStart: 2100001,
    postalEnd: 2599999,
    areas: [
      { city: "横浜市西区", town: "みなとみらい" },
      { city: "横浜市中区", town: "山下町" },
      { city: "川崎市川崎区", town: "駅前本町" },
      { city: "藤沢市", town: "鵠沼石上" },
      { city: "鎌倉市", town: "小町" }
    ]
  },
  {
    name: "愛知県",
    romanized: "Aichi",
    postalStart: 4400001,
    postalEnd: 4999999,
    areas: [
      { city: "名古屋市中区", town: "栄" },
      { city: "名古屋市中村区", town: "名駅" },
      { city: "豊田市", town: "西町" },
      { city: "岡崎市", town: "康生通西" },
      { city: "一宮市", town: "栄" }
    ]
  },
  {
    name: "北海道",
    romanized: "Hokkaido",
    postalStart: 100001,
    postalEnd: 999999,
    areas: [
      { city: "札幌市中央区", town: "大通西" },
      { city: "札幌市北区", town: "北七条西" },
      { city: "函館市", town: "若松町" },
      { city: "旭川市", town: "宮下通" },
      { city: "小樽市", town: "稲穂" }
    ]
  },
  {
    name: "福岡県",
    romanized: "Fukuoka",
    postalStart: 8000001,
    postalEnd: 8399999,
    areas: [
      { city: "福岡市博多区", town: "博多駅前" },
      { city: "福岡市中央区", town: "天神" },
      { city: "北九州市小倉北区", town: "浅野" },
      { city: "久留米市", town: "東町" },
      { city: "太宰府市", town: "宰府" }
    ]
  },
  {
    name: "京都府",
    romanized: "Kyoto",
    postalStart: 6000001,
    postalEnd: 6299999,
    areas: [
      { city: "京都市中京区", town: "烏丸通" },
      { city: "京都市下京区", town: "東塩小路町" },
      { city: "京都市左京区", town: "吉田本町" },
      { city: "宇治市", town: "宇治" },
      { city: "亀岡市", town: "追分町" }
    ]
  },
  {
    name: "兵庫県",
    romanized: "Hyogo",
    postalStart: 6500001,
    postalEnd: 6799999,
    areas: [
      { city: "神戸市中央区", town: "三宮町" },
      { city: "神戸市灘区", town: "六甲町" },
      { city: "姫路市", town: "駅前町" },
      { city: "西宮市", town: "甲風園" },
      { city: "尼崎市", town: "南塚口町" }
    ]
  },
  {
    name: "埼玉県",
    romanized: "Saitama",
    postalStart: 3300001,
    postalEnd: 3699999,
    areas: [
      { city: "さいたま市大宮区", town: "桜木町" },
      { city: "さいたま市浦和区", town: "高砂" },
      { city: "川越市", town: "新富町" },
      { city: "所沢市", town: "日吉町" },
      { city: "越谷市", town: "南越谷" }
    ]
  },
  {
    name: "千葉県",
    romanized: "Chiba",
    postalStart: 2600001,
    postalEnd: 2999999,
    areas: [
      { city: "千葉市中央区", town: "中央" },
      { city: "船橋市", town: "本町" },
      { city: "柏市", town: "柏" },
      { city: "浦安市", town: "舞浜" },
      { city: "松戸市", town: "松戸" }
    ]
  },
  {
    name: "広島県",
    romanized: "Hiroshima",
    postalStart: 7300001,
    postalEnd: 7399999,
    areas: [
      { city: "広島市中区", town: "基町" },
      { city: "広島市南区", town: "松原町" },
      { city: "福山市", town: "東桜町" },
      { city: "呉市", town: "中央" },
      { city: "東広島市", town: "西条町" }
    ]
  },
  {
    name: "宮城県",
    romanized: "Miyagi",
    postalStart: 9800001,
    postalEnd: 9899999,
    areas: [
      { city: "仙台市青葉区", town: "中央" },
      { city: "仙台市宮城野区", town: "榴岡" },
      { city: "石巻市", town: "穀町" },
      { city: "名取市", town: "増田" },
      { city: "多賀城市", town: "中央" }
    ]
  }
];

const buildingNames = [
  "サクラハイツ",
  "グリーンコート",
  "メゾン中央",
  "パークレジデンス",
  "リバーサイドビル",
  "アーバンテラス",
  "シティハイム",
  "プレミール"
];

const familyNames = ["佐藤", "鈴木", "高橋", "田中", "伊藤", "渡辺", "山本", "中村"];
const givenNames = ["太郎", "花子", "健", "美咲", "翔太", "結衣", "直樹", "葵"];
const prefecturePhoneCodes = {
  "東京都": ["03", "042"],
  "大阪府": ["06", "072"],
  "神奈川県": ["044", "045", "0466"],
  "愛知県": ["052", "0565"],
  "北海道": ["011", "0138", "0166"],
  "福岡県": ["092", "093", "0942"],
  "京都府": ["075", "0774"],
  "兵庫県": ["078", "079", "06"],
  "埼玉県": ["048", "049"],
  "千葉県": ["043", "047"],
  "広島県": ["082", "084"],
  "宮城県": ["022", "0225"]
};

let currentAddresses = [];
const locale = document.body.dataset.locale === "en" ? "en" : "zh";
const labels = {
  zh: {
    empty: "点击“生成地址”开始。",
    address: "地址",
    copied: "已复制",
    copy: "复制",
    copyAll: "复制全部",
    countUnit: "条"
  },
  en: {
    empty: "Click “Generate addresses” to start.",
    address: "Address",
    copied: "Copied",
    copy: "Copy",
    copyAll: "Copy all",
    countUnit: "items"
  }
}[locale];

const els = {
  prefectureSelect: document.querySelector("#prefectureSelect"),
  countInput: document.querySelector("#countInput"),
  formatSelect: document.querySelector("#formatSelect"),
  includeName: document.querySelector("#includeName"),
  generateBtn: document.querySelector("#generateBtn"),
  copyBtn: document.querySelector("#copyBtn"),
  downloadBtn: document.querySelector("#downloadBtn"),
  clearBtn: document.querySelector("#clearBtn"),
  addressList: document.querySelector("#addressList"),
  resultCount: document.querySelector("#resultCount")
};

function randomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function formatPostalCode(value) {
  const padded = String(value).padStart(7, "0");
  return `${padded.slice(0, 3)}-${padded.slice(3)}`;
}

function formatJapanPhone(prefectureName) {
  const areaCode = randomItem(prefecturePhoneCodes[prefectureName] || ["03"]);
  if (areaCode.length === 2) {
    return `${areaCode}-${randomNumber(2000, 9999)}-${String(randomNumber(0, 9999)).padStart(4, "0")}`;
  }
  return `${areaCode}-${randomNumber(200, 999)}-${String(randomNumber(0, 9999)).padStart(4, "0")}`;
}

function selectedPrefecturePool() {
  if (els.prefectureSelect.value === "all") {
    return prefectures;
  }

  return prefectures.filter((prefecture) => prefecture.name === els.prefectureSelect.value);
}

function generateAddress() {
  const prefecture = randomItem(selectedPrefecturePool());
  const area = randomItem(prefecture.areas);
  const chome = randomNumber(1, 5);
  const block = randomNumber(1, 28);
  const building = randomItem(buildingNames);
  const room = randomNumber(101, 1208);

  return {
    name: `${randomItem(familyNames)} ${randomItem(givenNames)}`,
    phone: formatJapanPhone(prefecture.name),
    postalCode: formatPostalCode(randomNumber(prefecture.postalStart, prefecture.postalEnd)),
    prefecture: prefecture.name,
    prefectureRomanized: prefecture.romanized,
    city: area.city,
    town: area.town,
    block: `${chome}-${block}-${randomNumber(1, 30)}`,
    building,
    room,
    country: "Japan"
  };
}

function addressToText(address, includeName = els.includeName.checked, format = els.formatSelect.value) {
  const streetLine = `${address.prefecture}${address.city}${address.town}${address.block}`;
  const buildingLine = `${address.building} ${address.room}号室`;

  if (format === "multiline") {
    const lines = [];
    if (includeName) lines.push(address.name);
    lines.push(address.phone);
    lines.push(`〒${address.postalCode}`);
    lines.push(streetLine);
    lines.push(buildingLine);
    lines.push(address.country);
    return lines.join("\n");
  }

  const lines = [];
  if (includeName) lines.push(address.name);
  lines.push(address.phone);
  lines.push(`〒${address.postalCode} ${streetLine} ${buildingLine}`);
  lines.push(address.country);
  return lines.join("\n");
}

function addressToCsvRow(address) {
  const values = [
    address.name,
    address.phone,
    address.postalCode,
    address.prefecture,
    address.city,
    address.town,
    address.block,
    address.building,
    address.room,
    address.country
  ];

  return values.map((value) => `"${String(value).replaceAll('"', '""')}"`).join(",");
}

async function copyText(text) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.append(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}

function renderAddresses() {
  els.resultCount.textContent = `${currentAddresses.length} ${labels.countUnit}`;

  if (!currentAddresses.length) {
    els.addressList.innerHTML = `<div class="empty-state">${labels.empty}</div>`;
    return;
  }

  els.addressList.innerHTML = currentAddresses.map((address, index) => `
    <article class="address-card">
      <div class="address-card__top">
        <strong>${labels.address} ${index + 1}</strong>
        <button class="mini-button" type="button" data-copy-index="${index}">${labels.copy}</button>
      </div>
      <address class="address-lines">${addressToText(address).replaceAll("\n", "<br>")}</address>
      <div class="meta">
        <span>${address.prefectureRomanized}</span>
        <span>${address.phone}</span>
        <span>〒${address.postalCode}</span>
      </div>
    </article>
  `).join("");
}

function generateBatch() {
  const count = Math.min(Math.max(Number(els.countInput.value) || 1, 1), 20);
  els.countInput.value = count;
  currentAddresses = Array.from({ length: count }, generateAddress);
  renderAddresses();
}

function downloadCsv() {
  if (!currentAddresses.length) return;

  const header = '"name","phone","postal_code","prefecture","city","town","block","building","room","country"';
  const csv = [header, ...currentAddresses.map(addressToCsvRow)].join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "japan-addresses.csv";
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function initPrefectureSelect() {
  prefectures.forEach((prefecture) => {
    const option = document.createElement("option");
    option.value = prefecture.name;
    option.textContent = `${prefecture.name} (${prefecture.romanized})`;
    els.prefectureSelect.append(option);
  });
}

els.generateBtn.addEventListener("click", generateBatch);

els.copyBtn.addEventListener("click", async () => {
  if (!currentAddresses.length) return;
  await copyText(currentAddresses.map((address) => addressToText(address)).join("\n\n"));
  els.copyBtn.textContent = labels.copied;
  setTimeout(() => {
    els.copyBtn.textContent = labels.copyAll;
  }, 1200);
});

els.downloadBtn.addEventListener("click", downloadCsv);

els.clearBtn.addEventListener("click", () => {
  currentAddresses = [];
  renderAddresses();
});

els.includeName.addEventListener("change", renderAddresses);
els.formatSelect.addEventListener("change", renderAddresses);

els.addressList.addEventListener("click", async (event) => {
  const button = event.target.closest("[data-copy-index]");
  if (!button) return;
  await copyText(addressToText(currentAddresses[Number(button.dataset.copyIndex)]));
  button.textContent = labels.copied;
  setTimeout(() => {
    button.textContent = labels.copy;
  }, 1200);
});

initPrefectureSelect();
generateBatch();