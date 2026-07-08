const countries = [
  {
    code: "SG",
    name: "Singapore",
    localName: "Singapore",
    phoneCode: "+65",
    postalPattern: "six_digit",
    cities: [
      { city: "Singapore", region: "Central Region", postalStart: 100000, postalEnd: 199999, streets: ["Orchard Road", "Cecil Street", "Tanjong Pagar Road", "Beach Road"] },
      { city: "Singapore", region: "East Region", postalStart: 400000, postalEnd: 529999, streets: ["Tampines Avenue 5", "Changi Road", "Bedok North Road", "Marine Parade Road"] },
      { city: "Singapore", region: "West Region", postalStart: 600000, postalEnd: 649999, streets: ["Jurong West Street 64", "Boon Lay Way", "Clementi Avenue 3", "Bukit Batok Street 21"] },
      { city: "Singapore", region: "North Region", postalStart: 730000, postalEnd: 769999, streets: ["Woodlands Avenue 6", "Yishun Ring Road", "Sembawang Drive", "Admiralty Road"] }
    ],
    firstNames: ["Wei Jie", "Mei Ling", "Arjun", "Nur Aisyah", "Daniel", "Siti", "Hui Min", "Ravi"],
    lastNames: ["Tan", "Lim", "Lee", "Ng", "Koh", "Wong", "Rahman", "Pillai"],
    unitLabels: ["Unit", "Floor", "Tower"]
  },
  {
    code: "MY",
    name: "Malaysia",
    localName: "Malaysia",
    phoneCode: "+60",
    postalPattern: "five_digit",
    cities: [
      { city: "Kuala Lumpur", region: "Wilayah Persekutuan", postalStart: 50000, postalEnd: 59999, streets: ["Jalan Bukit Bintang", "Jalan Ampang", "Jalan Tun Razak", "Jalan Sultan Ismail"] },
      { city: "Petaling Jaya", region: "Selangor", postalStart: 46000, postalEnd: 47830, streets: ["Jalan SS 2/24", "Jalan Universiti", "Jalan Gasing", "Persiaran Tropicana"] },
      { city: "George Town", region: "Penang", postalStart: 10000, postalEnd: 11900, streets: ["Lebuh Chulia", "Jalan Burma", "Jalan Macalister", "Gurney Drive"] },
      { city: "Johor Bahru", region: "Johor", postalStart: 80000, postalEnd: 81100, streets: ["Jalan Wong Ah Fook", "Jalan Tebrau", "Jalan Skudai", "Jalan Austin Heights"] }
    ],
    firstNames: ["Aiman", "Nurul", "Wei Han", "Mei Yee", "Arif", "Siti Aminah", "Raj Kumar", "Priya"],
    lastNames: ["Abdullah", "Tan", "Lim", "Lee", "Rahman", "Wong", "Kumar", "Ismail"],
    unitLabels: ["Unit", "Tingkat", "Blok"]
  },
  {
    code: "TH",
    name: "Thailand",
    localName: "ประเทศไทย",
    phoneCode: "+66",
    postalPattern: "five_digit",
    cities: [
      { city: "Bangkok", region: "Bangkok", postalStart: 10100, postalEnd: 10900, streets: ["Sukhumvit Road", "Silom Road", "Rama IV Road", "Phahon Yothin Road"] },
      { city: "Chiang Mai", region: "Chiang Mai", postalStart: 50000, postalEnd: 50300, streets: ["Nimmanahaeminda Road", "Chang Klan Road", "Huay Kaew Road", "Tha Phae Road"] },
      { city: "Phuket", region: "Phuket", postalStart: 83000, postalEnd: 83150, streets: ["Patong Beach Road", "Thepkasattri Road", "Chaofa Road", "Ratsada Road"] },
      { city: "Pattaya", region: "Chon Buri", postalStart: 20150, postalEnd: 20260, streets: ["Beach Road", "Second Road", "Sukhumvit Road", "North Pattaya Road"] }
    ],
    firstNames: ["Niran", "Anong", "Somchai", "Kanya", "Chaiwat", "Mali", "Preecha", "Siriporn"],
    lastNames: ["Srisai", "Phanich", "Wongchai", "Kittisak", "Chanthep", "Sukjai", "Boonmee", "Rattanaporn"],
    unitLabels: ["Room", "Floor", "Building"]
  },
  {
    code: "VN",
    name: "Vietnam",
    localName: "Việt Nam",
    phoneCode: "+84",
    postalPattern: "six_digit",
    cities: [
      { city: "Ho Chi Minh City", region: "Ho Chi Minh City", postalStart: 700000, postalEnd: 729999, streets: ["Nguyen Hue", "Le Loi", "Dien Bien Phu", "Vo Van Tan"] },
      { city: "Hanoi", region: "Hanoi", postalStart: 100000, postalEnd: 129999, streets: ["Pho Hue", "Hang Bong", "Tran Hung Dao", "Kim Ma"] },
      { city: "Da Nang", region: "Da Nang", postalStart: 500000, postalEnd: 559999, streets: ["Bach Dang", "Nguyen Van Linh", "Tran Phu", "Le Duan"] },
      { city: "Can Tho", region: "Can Tho", postalStart: 900000, postalEnd: 949999, streets: ["Nguyen Trai", "Hoa Binh", "Tran Phu", "30 Thang 4"] }
    ],
    firstNames: ["Minh", "Linh", "Anh", "Trang", "Duc", "Huong", "Quang", "Thao"],
    lastNames: ["Nguyen", "Tran", "Le", "Pham", "Hoang", "Phan", "Vu", "Dang"],
    unitLabels: ["Can ho", "Tang", "Phong"]
  },
  {
    code: "ID",
    name: "Indonesia",
    localName: "Indonesia",
    phoneCode: "+62",
    postalPattern: "five_digit",
    cities: [
      { city: "Jakarta", region: "DKI Jakarta", postalStart: 10110, postalEnd: 14540, streets: ["Jalan Sudirman", "Jalan Thamrin", "Jalan Gatot Subroto", "Jalan Rasuna Said"] },
      { city: "Surabaya", region: "East Java", postalStart: 60111, postalEnd: 60299, streets: ["Jalan Pemuda", "Jalan Basuki Rahmat", "Jalan Darmo", "Jalan Tunjungan"] },
      { city: "Bandung", region: "West Java", postalStart: 40111, postalEnd: 40619, streets: ["Jalan Asia Afrika", "Jalan Dago", "Jalan Riau", "Jalan Setiabudi"] },
      { city: "Denpasar", region: "Bali", postalStart: 80111, postalEnd: 80239, streets: ["Jalan Teuku Umar", "Jalan Gatot Subroto", "Jalan Diponegoro", "Jalan Imam Bonjol"] }
    ],
    firstNames: ["Budi", "Sari", "Andi", "Dewi", "Rizky", "Ayu", "Agus", "Putri"],
    lastNames: ["Santoso", "Wijaya", "Saputra", "Lestari", "Pratama", "Hidayat", "Nugroho", "Permata"],
    unitLabels: ["Unit", "Lantai", "Blok"]
  },
  {
    code: "PH",
    name: "Philippines",
    localName: "Philippines",
    phoneCode: "+63",
    postalPattern: "four_digit",
    cities: [
      { city: "Manila", region: "Metro Manila", postalStart: 1000, postalEnd: 1018, streets: ["Roxas Boulevard", "Taft Avenue", "Rizal Avenue", "Escolta Street"] },
      { city: "Quezon City", region: "Metro Manila", postalStart: 1100, postalEnd: 1128, streets: ["Commonwealth Avenue", "Quezon Avenue", "Katipunan Avenue", "Timog Avenue"] },
      { city: "Cebu City", region: "Central Visayas", postalStart: 6000, postalEnd: 6000, streets: ["Osmena Boulevard", "Colon Street", "Gorordo Avenue", "General Maxilom Avenue"] },
      { city: "Davao City", region: "Davao Region", postalStart: 8000, postalEnd: 8000, streets: ["Roxas Avenue", "Quimpo Boulevard", "J.P. Laurel Avenue", "Matina Crossing"] }
    ],
    firstNames: ["Miguel", "Maria", "Jose", "Angela", "Paolo", "Isabella", "Carlo", "Sofia"],
    lastNames: ["Santos", "Reyes", "Cruz", "Bautista", "Garcia", "Mendoza", "Ramos", "Torres"],
    unitLabels: ["Unit", "Floor", "Room"]
  }
];

const seaAddressStyles = ["standard", "unit", "building", "district"];
const buildingNames = ["Central Residences", "Harbour Court", "City Tower", "Orchid Plaza", "Riverside Suites", "Market Square"];
const districts = ["District 1", "Business District", "Old Town", "City Centre", "North District", "South District"];

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
  countrySelect: document.querySelector("#countrySelect"),
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

function pad(value, length) {
  return String(value).padStart(length, "0");
}

function formatPostalCode(country, city) {
  const value = randomNumber(city.postalStart, city.postalEnd);
  if (country.postalPattern === "four_digit") return pad(value, 4);
  if (country.postalPattern === "six_digit") return pad(value, 6);
  return pad(value, 5);
}

function formatPhone(country) {
  if (country.code === "SG") return `${country.phoneCode} ${randomNumber(8000, 9999)} ${randomNumber(1000, 9999)}`;
  if (country.code === "MY") return `${country.phoneCode} ${randomNumber(10, 19)}-${randomNumber(100, 999)} ${randomNumber(1000, 9999)}`;
  if (country.code === "TH") return `${country.phoneCode} ${randomNumber(80, 99)} ${randomNumber(100, 999)} ${randomNumber(1000, 9999)}`;
  if (country.code === "VN") return `${country.phoneCode} ${randomNumber(90, 99)} ${randomNumber(100, 999)} ${randomNumber(1000, 9999)}`;
  if (country.code === "ID") return `${country.phoneCode} ${randomNumber(811, 899)}-${randomNumber(1000, 9999)}-${randomNumber(1000, 9999)}`;
  if (country.code === "PH") return `${country.phoneCode} ${randomNumber(905, 999)} ${randomNumber(100, 999)} ${randomNumber(1000, 9999)}`;
  return `${country.phoneCode} ${randomNumber(100, 999)} ${randomNumber(100, 999)} ${randomNumber(1000, 9999)}`;
}

function selectedCountryPool() {
  if (els.countrySelect.value === "all") return countries;
  return countries.filter((country) => country.code === els.countrySelect.value);
}

function buildStreetLine(country, city) {
  const style = randomItem(seaAddressStyles);
  const street = randomItem(city.streets);
  const number = randomNumber(1, 288);
  const unit = `${randomItem(country.unitLabels)} ${randomNumber(1, 35)}-${randomNumber(1, 28)}`;
  const building = randomItem(buildingNames);
  const district = randomItem(districts);

  if (style === "building") {
    return {
      addressStyle: style,
      streetLine: `${building}, ${number} ${street}`,
      detailLine: unit,
      street,
      building,
      unit
    };
  }

  if (style === "unit") {
    return {
      addressStyle: style,
      streetLine: `${number} ${street}`,
      detailLine: unit,
      street,
      building: "",
      unit
    };
  }

  if (style === "district") {
    return {
      addressStyle: style,
      streetLine: `${number} ${street}`,
      detailLine: district,
      street,
      building: "",
      unit: district
    };
  }

  return {
    addressStyle: style,
    streetLine: `${number} ${street}`,
    detailLine: "",
    street,
    building: "",
    unit: ""
  };
}

function generateAddress() {
  const country = randomItem(selectedCountryPool());
  const city = randomItem(country.cities);
  const streetParts = buildStreetLine(country, city);
  return {
    name: `${randomItem(country.firstNames)} ${randomItem(country.lastNames)}`,
    phone: formatPhone(country),
    countryCode: country.code,
    country: country.name,
    localCountryName: country.localName,
    region: city.region,
    city: city.city,
    postalCode: formatPostalCode(country, city),
    addressStyle: streetParts.addressStyle,
    street: streetParts.street,
    streetLine: streetParts.streetLine,
    detailLine: streetParts.detailLine,
    building: streetParts.building,
    unit: streetParts.unit
  };
}

function addressLines(address, includeName = els.includeName.checked) {
  const lines = [];
  if (includeName) lines.push(address.name);
  lines.push(address.phone);
  lines.push(address.streetLine);
  if (address.detailLine) lines.push(address.detailLine);
  lines.push(`${address.city} ${address.postalCode}`);
  lines.push(address.region);
  lines.push(address.country);
  return lines;
}

function addressToText(address, includeName = els.includeName.checked, format = els.formatSelect.value) {
  const lines = addressLines(address, includeName);
  if (format === "compact") return lines.join(", ");
  return lines.join("\n");
}

function addressToCsvRow(address) {
  const values = [
    address.name,
    address.phone,
    address.countryCode,
    address.country,
    address.localCountryName,
    address.addressStyle,
    address.streetLine,
    address.detailLine,
    address.postalCode,
    address.city,
    address.region,
    address.building,
    address.unit
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
        <span>${address.countryCode}</span>
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
  const header = '"name","phone","country_code","country","local_country_name","address_style","street_line","detail_line","postal_code","city","region","building","unit"';
  const csv = [header, ...currentAddresses.map(addressToCsvRow)].join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "southeast-asia-addresses.csv";
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function initCountrySelect() {
  countries.forEach((country) => {
    const option = document.createElement("option");
    option.value = country.code;
    option.textContent = `${country.name} (${country.code})`;
    els.countrySelect.append(option);
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

initCountrySelect();
generateBatch();