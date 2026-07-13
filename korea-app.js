const regions = [
  {
    nameKo: "서울특별시",
    nameEn: "Seoul",
    postalStart: 1000,
    postalEnd: 8999,
    phoneCodes: ["02"],
    areas: [
      { city: "강남구", district: "역삼동", roads: ["테헤란로", "강남대로", "언주로"] },
      { city: "마포구", district: "상암동", roads: ["월드컵북로", "성암로", "매봉산로"] },
      { city: "종로구", district: "청진동", roads: ["종로", "삼봉로", "우정국로"] },
      { city: "중구", district: "명동", roads: ["퇴계로", "명동길", "남대문로"] },
      { city: "송파구", district: "잠실동", roads: ["올림픽로", "송파대로", "백제고분로"] }
    ]
  },
  {
    nameKo: "부산광역시",
    nameEn: "Busan",
    postalStart: 46000,
    postalEnd: 49599,
    phoneCodes: ["051"],
    areas: [
      { city: "해운대구", district: "우동", roads: ["해운대로", "센텀중앙로", "마린시티2로"] },
      { city: "부산진구", district: "부전동", roads: ["중앙대로", "서전로", "동천로"] },
      { city: "수영구", district: "광안동", roads: ["광안해변로", "수영로", "남천바다로"] },
      { city: "동구", district: "초량동", roads: ["중앙대로", "초량상로", "고관로"] }
    ]
  },
  {
    nameKo: "인천광역시",
    nameEn: "Incheon",
    postalStart: 21000,
    postalEnd: 23199,
    phoneCodes: ["032"],
    areas: [
      { city: "연수구", district: "송도동", roads: ["송도과학로", "센트럴로", "컨벤시아대로"] },
      { city: "남동구", district: "구월동", roads: ["인주대로", "예술로", "성말로"] },
      { city: "중구", district: "운서동", roads: ["공항로", "영종대로", "하늘달빛로"] },
      { city: "부평구", district: "부평동", roads: ["부평대로", "시장로", "경원대로"] }
    ]
  },
  {
    nameKo: "경기도",
    nameEn: "Gyeonggi-do",
    postalStart: 10000,
    postalEnd: 18599,
    phoneCodes: ["031"],
    areas: [
      { city: "성남시 분당구", district: "삼평동", roads: ["판교역로", "대왕판교로", "분당내곡로"] },
      { city: "수원시 영통구", district: "이의동", roads: ["광교중앙로", "센트럴타운로", "도청로"] },
      { city: "고양시 일산동구", district: "장항동", roads: ["중앙로", "정발산로", "호수로"] },
      { city: "용인시 기흥구", district: "구갈동", roads: ["기흥로", "강남로", "중부대로"] },
      { city: "화성시", district: "동탄", roads: ["동탄대로", "동탄순환대로", "메타폴리스로"] }
    ]
  },
  {
    nameKo: "대구광역시",
    nameEn: "Daegu",
    postalStart: 41000,
    postalEnd: 43099,
    phoneCodes: ["053"],
    areas: [
      { city: "중구", district: "동성로", roads: ["동성로", "국채보상로", "중앙대로"] },
      { city: "수성구", district: "범어동", roads: ["달구벌대로", "동대구로", "범어천로"] },
      { city: "달서구", district: "월성동", roads: ["월배로", "상원로", "조암로"] }
    ]
  },
  {
    nameKo: "대전광역시",
    nameEn: "Daejeon",
    postalStart: 34000,
    postalEnd: 35499,
    phoneCodes: ["042"],
    areas: [
      { city: "유성구", district: "봉명동", roads: ["대학로", "온천북로", "문화원로"] },
      { city: "서구", district: "둔산동", roads: ["둔산로", "대덕대로", "청사로"] },
      { city: "중구", district: "은행동", roads: ["중앙로", "대종로", "보문로"] }
    ]
  },
  {
    nameKo: "광주광역시",
    nameEn: "Gwangju",
    postalStart: 61000,
    postalEnd: 62499,
    phoneCodes: ["062"],
    areas: [
      { city: "서구", district: "치평동", roads: ["상무중앙로", "시청로", "상무대로"] },
      { city: "동구", district: "충장로", roads: ["충장로", "금남로", "제봉로"] },
      { city: "북구", district: "용봉동", roads: ["용봉로", "우치로", "서암대로"] }
    ]
  },
  {
    nameKo: "울산광역시",
    nameEn: "Ulsan",
    postalStart: 44000,
    postalEnd: 44999,
    phoneCodes: ["052"],
    areas: [
      { city: "남구", district: "삼산동", roads: ["삼산로", "화합로", "돋질로"] },
      { city: "중구", district: "성남동", roads: ["젊음의거리", "중앙길", "문화의거리"] },
      { city: "북구", district: "진장동", roads: ["진장유통로", "산업로", "명촌로"] }
    ]
  },
  {
    nameKo: "제주특별자치도",
    nameEn: "Jeju",
    postalStart: 63000,
    postalEnd: 63644,
    phoneCodes: ["064"],
    areas: [
      { city: "제주시", district: "연동", roads: ["신대로", "노연로", "삼무로"] },
      { city: "서귀포시", district: "서귀동", roads: ["중정로", "태평로", "이중섭로"] },
      { city: "제주시", district: "아라동", roads: ["아란로", "중앙로", "첨단로"] }
    ]
  }
];

const buildingNames = ["한빛빌딩", "센트럴타워", "그린아파트", "리버파크", "스카이오피스텔", "삼성하이츠", "월드빌", "해오름타워"];
const familyNames = ["김", "이", "박", "최", "정", "강", "조", "윤", "장", "임"];
const givenNames = ["민준", "서연", "지훈", "하윤", "도윤", "서준", "지우", "수빈", "예준", "민서"];
const koreaAddressStyles = ["road", "jibun", "building_inline", "apartment"];

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
  regionSelect: document.querySelector("#regionSelect"),
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
  return String(value).padStart(5, "0");
}

function formatKoreaPhone(region) {
  const code = randomItem(region.phoneCodes);
  if (code === "02") {
    return `${code}-${randomNumber(2000, 9999)}-${String(randomNumber(0, 9999)).padStart(4, "0")}`;
  }
  return `${code}-${randomNumber(200, 999)}-${String(randomNumber(0, 9999)).padStart(4, "0")}`;
}

function selectedRegionPool() {
  if (els.regionSelect.value === "all") {
    return regions;
  }

  return regions.filter((region) => region.nameKo === els.regionSelect.value);
}

function buildKoreaAddressLines(region, area) {
  const style = randomItem(koreaAddressStyles);
  const road = randomItem(area.roads);
  const buildingNumber = randomNumber(1, 220);
  const lotMain = randomNumber(1, 900);
  const lotSub = randomNumber(1, 80);
  const building = randomItem(buildingNames);
  const room = `${randomNumber(101, 2405)}호`;
  const roadLine = `${region.nameKo} ${area.city} ${road} ${buildingNumber}`;
  const jibunLine = `${region.nameKo} ${area.city} ${area.district} ${lotMain}-${lotSub}`;

  if (style === "jibun") {
    return {
      addressStyle: style,
      streetLine: jibunLine,
      detailLine: `${building} ${room}`,
      road,
      buildingNumber,
      building,
      room
    };
  }

  if (style === "building_inline") {
    return {
      addressStyle: style,
      streetLine: `${roadLine}, ${building} ${room}`,
      detailLine: "",
      road,
      buildingNumber,
      building,
      room
    };
  }

  if (style === "apartment") {
    return {
      addressStyle: style,
      streetLine: roadLine,
      detailLine: `${building} ${randomNumber(101, 1307)}동 ${room}`,
      road,
      buildingNumber,
      building,
      room
    };
  }

  return {
    addressStyle: style,
    streetLine: roadLine,
    detailLine: `${building} ${room}`,
    road,
    buildingNumber,
    building,
    room
  };
}

function generateAddress() {
  const region = randomItem(selectedRegionPool());
  const area = randomItem(region.areas);
  const addressParts = buildKoreaAddressLines(region, area);

  return {
    name: `${randomItem(familyNames)}${randomItem(givenNames)}`,
    phone: formatKoreaPhone(region),
    postalCode: formatPostalCode(randomNumber(region.postalStart, region.postalEnd)),
    region: region.nameKo,
    regionRomanized: region.nameEn,
    city: area.city,
    district: area.district,
    road: addressParts.road,
    buildingNumber: addressParts.buildingNumber,
    building: addressParts.building,
    room: addressParts.room,
    addressStyle: addressParts.addressStyle,
    streetLine: addressParts.streetLine,
    detailLine: addressParts.detailLine,
    country: "South Korea"
  };
}

function addressToText(address, includeName = els.includeName.checked, format = els.formatSelect.value) {
  if (format === "multiline") {
    const lines = [];
    if (includeName) lines.push(address.name);
    lines.push(address.phone);
    lines.push(`(${address.postalCode})`);
    lines.push(address.streetLine);
    if (address.detailLine) lines.push(address.detailLine);
    lines.push(address.country);
    return lines.join("\n");
  }

  const lines = [];
  if (includeName) lines.push(address.name);
  lines.push(address.phone);
  lines.push(`(${address.postalCode}) ${address.streetLine}${address.detailLine ? `, ${address.detailLine}` : ""}`);
  lines.push(address.country);
  return lines.join("\n");
}

function addressToCsvRow(address) {
  const values = [
    address.name,
    address.phone,
    address.addressStyle,
    address.postalCode,
    address.region,
    address.city,
    address.district,
    address.road,
    address.buildingNumber,
    address.building,
    address.room,
    address.streetLine,
    address.detailLine,
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
        <span>${address.regionRomanized}</span>
        <span>${address.phone}</span>
        <span>${address.postalCode}</span>
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

  const header = '"name","phone","address_style","postal_code","region","city","district","road","building_number","building","room","street_line","detail_line","country"';
  const csv = [header, ...currentAddresses.map(addressToCsvRow)].join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "korea-addresses.csv";
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function initRegionSelect() {
  regions.forEach((region) => {
    const option = document.createElement("option");
    option.value = region.nameKo;
    option.textContent = `${region.nameKo} (${region.nameEn})`;
    els.regionSelect.append(option);
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

initRegionSelect();
generateBatch();
