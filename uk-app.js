const areas = [
  {
    name: "London",
    region: "Greater London",
    postcodeAreas: ["EC1A", "W1A", "SW1A", "N1", "E1"],
    localities: ["Westminster", "Camden", "Shoreditch", "Kensington", "Islington"]
  },
  {
    name: "Manchester",
    region: "Greater Manchester",
    postcodeAreas: ["M1", "M2", "M3", "M4", "M15"],
    localities: ["Deansgate", "Northern Quarter", "Ancoats", "Salford Quays", "Chorlton"]
  },
  {
    name: "Birmingham",
    region: "West Midlands",
    postcodeAreas: ["B1", "B2", "B3", "B15", "B18"],
    localities: ["Jewellery Quarter", "Digbeth", "Edgbaston", "Moseley", "Harborne"]
  },
  {
    name: "Edinburgh",
    region: "Scotland",
    postcodeAreas: ["EH1", "EH2", "EH3", "EH6", "EH12"],
    localities: ["Old Town", "New Town", "Leith", "Haymarket", "Stockbridge"]
  },
  {
    name: "Glasgow",
    region: "Scotland",
    postcodeAreas: ["G1", "G2", "G3", "G11", "G12"],
    localities: ["Merchant City", "Finnieston", "West End", "Partick", "Dennistoun"]
  },
  {
    name: "Cardiff",
    region: "Wales",
    postcodeAreas: ["CF10", "CF11", "CF14", "CF23", "CF24"],
    localities: ["Cathays", "Cardiff Bay", "Roath", "Canton", "Pontcanna"]
  },
  {
    name: "Bristol",
    region: "South West England",
    postcodeAreas: ["BS1", "BS2", "BS3", "BS8", "BS16"],
    localities: ["Clifton", "Redcliffe", "Bedminster", "Stokes Croft", "Temple Meads"]
  },
  {
    name: "Leeds",
    region: "West Yorkshire",
    postcodeAreas: ["LS1", "LS2", "LS6", "LS10", "LS11"],
    localities: ["City Centre", "Headingley", "Holbeck", "Chapel Allerton", "Roundhay"]
  },
  {
    name: "Liverpool",
    region: "Merseyside",
    postcodeAreas: ["L1", "L2", "L3", "L8", "L17"],
    localities: ["Ropewalks", "Baltic Triangle", "Toxteth", "Aigburth", "Anfield"]
  },
  {
    name: "Belfast",
    region: "Northern Ireland",
    postcodeAreas: ["BT1", "BT2", "BT7", "BT9", "BT12"],
    localities: ["Cathedral Quarter", "Queen's Quarter", "Titanic Quarter", "Lisburn Road", "Ormeau"]
  }
];

const streetNames = [
  "High", "Station", "Church", "Victoria", "King", "Queen", "Market", "Mill",
  "Park", "Bridge", "Castle", "George", "Oxford", "Albert", "New"
];

const streetTypes = ["Street", "Road", "Avenue", "Lane", "Close", "Way", "Square", "Place"];
const buildingNames = ["Oak House", "The Old Mill", "Victoria Court", "Kingfisher House", "Station Chambers"];
const flatTypes = ["Flat", "Apartment", "Unit", "Studio"];
const ukAddressStyles = ["standard", "flat", "building", "flat_building", "number_suffix"];
const firstNames = ["Oliver", "Amelia", "George", "Isla", "Harry", "Ava", "Noah", "Freya"];
const lastNames = ["Smith", "Jones", "Taylor", "Brown", "Williams", "Wilson", "Evans", "Thomas"];
const areaPhoneCodes = {
  London: ["020"],
  Manchester: ["0161"],
  Birmingham: ["0121"],
  Edinburgh: ["0131"],
  Glasgow: ["0141"],
  Cardiff: ["029"],
  Bristol: ["0117"],
  Leeds: ["0113"],
  Liverpool: ["0151"],
  Belfast: ["028"]
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
  areaSelect: document.querySelector("#areaSelect"),
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

function randomLetters(length) {
  const letters = "ABCDEFGHJKLMNPRSTUWXYZ";
  return Array.from({ length }, () => randomItem(letters)).join("");
}

function formatPostcode(areaCode) {
  return `${areaCode} ${randomNumber(1, 9)}${randomLetters(2)}`;
}

function formatUkPhone(areaName) {
  const areaCode = randomItem(areaPhoneCodes[areaName] || ["020"]);
  if (areaCode === "020" || areaCode === "029" || areaCode === "028") {
    return `${areaCode} ${randomNumber(2000, 8999)} ${String(randomNumber(0, 9999)).padStart(4, "0")}`;
  }
  return `${areaCode} ${randomNumber(200, 999)} ${String(randomNumber(0, 9999)).padStart(4, "0")}`;
}

function buildUkPremise() {
  const style = randomItem(ukAddressStyles);
  const streetNumber = style === "number_suffix"
    ? `${randomNumber(1, 188)}${randomItem(["A", "B", "C"])}`
    : String(randomNumber(1, 188));
  const street = `${streetNumber} ${randomItem(streetNames)} ${randomItem(streetTypes)}`;
  const flat = style === "flat" || style === "flat_building"
    ? `${randomItem(flatTypes)} ${randomNumber(1, 42)}`
    : "";
  const building = style === "building" || style === "flat_building"
    ? randomItem(buildingNames)
    : "";

  return {
    addressStyle: style,
    flat,
    building,
    street,
    includeRegion: Math.random() > 0.42
  };
}

function selectedAreaPool() {
  if (els.areaSelect.value === "all") {
    return areas;
  }

  return areas.filter((area) => area.name === els.areaSelect.value);
}

function generateAddress() {
  const area = randomItem(selectedAreaPool());
  const premise = buildUkPremise();

  return {
    name: `${randomItem(firstNames)} ${randomItem(lastNames)}`,
    phone: formatUkPhone(area.name),
    addressStyle: premise.addressStyle,
    flat: premise.flat,
    building: premise.building,
    street: premise.street,
    locality: randomItem(area.localities),
    city: area.name,
    region: area.region,
    includeRegion: premise.includeRegion,
    postcode: formatPostcode(randomItem(area.postcodeAreas)),
    country: "United Kingdom"
  };
}

function addressLines(address, includeName = els.includeName.checked) {
  const lines = [];
  if (includeName) lines.push(address.name);
  lines.push(address.phone);
  if (address.flat) lines.push(address.flat);
  if (address.building) lines.push(address.building);
  lines.push(address.street);
  lines.push(address.locality);
  lines.push(address.city.toUpperCase());
  if (address.includeRegion) lines.push(address.region);
  lines.push(address.postcode);
  lines.push(address.country);
  return lines;
}

function addressToText(address, includeName = els.includeName.checked, format = els.formatSelect.value) {
  const lines = addressLines(address, includeName);
  if (format === "uk") {
    return lines.join("\n");
  }
  return lines.join("\n");
}

function addressToCsvRow(address) {
  const values = [
    address.name,
    address.phone,
    address.addressStyle,
    address.flat,
    address.building,
    address.street,
    address.locality,
    address.city,
    address.region,
    address.includeRegion ? "yes" : "no",
    address.postcode,
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
        <span>${address.city}</span>
        <span>${address.phone}</span>
        <span>${address.postcode}</span>
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

  const header = '"name","phone","address_style","flat","building","street","locality","city","region","region_in_output","postcode","country"';
  const csv = [header, ...currentAddresses.map(addressToCsvRow)].join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "uk-addresses.csv";
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function initAreaSelect() {
  areas.forEach((area) => {
    const option = document.createElement("option");
    option.value = area.name;
    option.textContent = `${area.name} (${area.region})`;
    els.areaSelect.append(option);
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

initAreaSelect();
generateBatch();
