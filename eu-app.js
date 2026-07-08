const countries = [
  {
    code: "DE",
    name: "Germany",
    localName: "Deutschland",
    phoneCode: "+49",
    postalPattern: "germany",
    cities: [
      { city: "Berlin", region: "Berlin", postalStart: 10115, postalEnd: 14199, streets: ["Friedrichstrasse", "Invalidenstrasse", "Kantstrasse", "Torstrasse"] },
      { city: "Munich", region: "Bavaria", postalStart: 80331, postalEnd: 81929, streets: ["Leopoldstrasse", "Sonnenstrasse", "Maximilianstrasse", "Brienner Strasse"] },
      { city: "Hamburg", region: "Hamburg", postalStart: 20095, postalEnd: 22769, streets: ["Mönckebergstrasse", "Reeperbahn", "Jungfernstieg", "Lange Reihe"] },
      { city: "Frankfurt am Main", region: "Hesse", postalStart: 60311, postalEnd: 65936, streets: ["Zeil", "Mainzer Landstrasse", "Bockenheimer Landstrasse", "Berliner Strasse"] }
    ],
    firstNames: ["Lukas", "Mia", "Felix", "Emma", "Noah", "Hannah", "Leon", "Sofia"],
    lastNames: ["Müller", "Schmidt", "Schneider", "Fischer", "Weber", "Meyer", "Wagner", "Becker"],
    streetTypes: ["Strasse", "Allee", "Weg", "Platz"],
    unitLabels: ["Wohnung", "Etage", "Haus"]
  },
  {
    code: "FR",
    name: "France",
    localName: "France",
    phoneCode: "+33",
    postalPattern: "france",
    cities: [
      { city: "Paris", region: "Île-de-France", postalStart: 75001, postalEnd: 75020, streets: ["Rue de Rivoli", "Boulevard Saint-Germain", "Avenue Victor Hugo", "Rue Lafayette"] },
      { city: "Lyon", region: "Auvergne-Rhône-Alpes", postalStart: 69001, postalEnd: 69009, streets: ["Rue de la République", "Cours Lafayette", "Quai Saint-Antoine", "Rue Garibaldi"] },
      { city: "Marseille", region: "Provence-Alpes-Côte d'Azur", postalStart: 13001, postalEnd: 13016, streets: ["La Canebière", "Rue Paradis", "Boulevard Longchamp", "Rue de Rome"] },
      { city: "Toulouse", region: "Occitanie", postalStart: 31000, postalEnd: 31500, streets: ["Rue d'Alsace Lorraine", "Allées Jean Jaurès", "Rue de Metz", "Boulevard Carnot"] }
    ],
    firstNames: ["Lucas", "Emma", "Hugo", "Chloé", "Louis", "Léa", "Jules", "Camille"],
    lastNames: ["Martin", "Bernard", "Dubois", "Thomas", "Robert", "Richard", "Petit", "Moreau"],
    streetTypes: ["Rue", "Avenue", "Boulevard", "Impasse"],
    unitLabels: ["Appartement", "Étage", "Bâtiment"]
  },
  {
    code: "IT",
    name: "Italy",
    localName: "Italia",
    phoneCode: "+39",
    postalPattern: "italy",
    cities: [
      { city: "Rome", region: "Lazio", postalStart: 1000, postalEnd: 1999, streets: ["Via Nazionale", "Via del Corso", "Viale Trastevere", "Via Appia Nuova"] },
      { city: "Milan", region: "Lombardy", postalStart: 20121, postalEnd: 20162, streets: ["Corso Buenos Aires", "Via Torino", "Via Brera", "Viale Monza"] },
      { city: "Florence", region: "Tuscany", postalStart: 50121, postalEnd: 50145, streets: ["Via Roma", "Via dei Calzaiuoli", "Borgo Ognissanti", "Viale Europa"] },
      { city: "Naples", region: "Campania", postalStart: 80121, postalEnd: 80147, streets: ["Via Toledo", "Corso Umberto I", "Via Chiaia", "Via Foria"] }
    ],
    firstNames: ["Luca", "Giulia", "Marco", "Sofia", "Matteo", "Aurora", "Alessandro", "Chiara"],
    lastNames: ["Rossi", "Russo", "Ferrari", "Esposito", "Bianchi", "Romano", "Colombo", "Ricci"],
    streetTypes: ["Via", "Viale", "Corso", "Piazza"],
    unitLabels: ["Scala", "Interno", "Piano"]
  },
  {
    code: "ES",
    name: "Spain",
    localName: "España",
    phoneCode: "+34",
    postalPattern: "spain",
    cities: [
      { city: "Madrid", region: "Community of Madrid", postalStart: 28001, postalEnd: 28055, streets: ["Calle de Alcalá", "Gran Vía", "Calle Mayor", "Paseo de la Castellana"] },
      { city: "Barcelona", region: "Catalonia", postalStart: 8001, postalEnd: 8038, streets: ["Carrer de Mallorca", "Avinguda Diagonal", "Carrer d'Aragó", "Passeig de Gràcia"] },
      { city: "Valencia", region: "Valencian Community", postalStart: 46001, postalEnd: 46026, streets: ["Carrer de Colón", "Avinguda del Port", "Carrer de Xàtiva", "Gran Via del Marqués"] },
      { city: "Seville", region: "Andalusia", postalStart: 41001, postalEnd: 41020, streets: ["Calle Sierpes", "Avenida de la Constitución", "Calle Feria", "Calle San Jacinto"] }
    ],
    firstNames: ["Daniel", "Lucía", "Hugo", "Sofía", "Pablo", "Martina", "Alejandro", "Valeria"],
    lastNames: ["García", "Rodríguez", "González", "Fernández", "López", "Martínez", "Sánchez", "Pérez"],
    streetTypes: ["Calle", "Avenida", "Paseo", "Plaza"],
    unitLabels: ["Piso", "Puerta", "Escalera"]
  },
  {
    code: "NL",
    name: "Netherlands",
    localName: "Nederland",
    phoneCode: "+31",
    postalPattern: "netherlands",
    cities: [
      { city: "Amsterdam", region: "North Holland", postalStart: 1011, postalEnd: 1109, streets: ["Prinsengracht", "Keizersgracht", "Damrak", "Overtoom"] },
      { city: "Rotterdam", region: "South Holland", postalStart: 3011, postalEnd: 3089, streets: ["Coolsingel", "Westblaak", "Witte de Withstraat", "Blaak"] },
      { city: "Utrecht", region: "Utrecht", postalStart: 3511, postalEnd: 3585, streets: ["Oudegracht", "Biltstraat", "Amsterdamsestraatweg", "Lange Jansstraat"] },
      { city: "Eindhoven", region: "North Brabant", postalStart: 5611, postalEnd: 5658, streets: ["Demer", "Vestdijk", "Stratumseind", "Boschdijk"] }
    ],
    firstNames: ["Daan", "Emma", "Milan", "Sophie", "Bram", "Julia", "Lucas", "Tess"],
    lastNames: ["de Vries", "Jansen", "van den Berg", "Bakker", "Visser", "Smit", "Meijer", "de Boer"],
    streetTypes: ["straat", "laan", "weg", "plein"],
    unitLabels: ["Appartement", "Etage", "Unit"]
  },
  {
    code: "PL",
    name: "Poland",
    localName: "Polska",
    phoneCode: "+48",
    postalPattern: "poland",
    cities: [
      { city: "Warsaw", region: "Masovian", postalStart: 0, postalEnd: 499, streets: ["Marszałkowska", "Nowy Świat", "Aleje Jerozolimskie", "Puławska"] },
      { city: "Kraków", region: "Lesser Poland", postalStart: 30000, postalEnd: 30999, streets: ["Floriańska", "Grodzka", "Karmelicka", "Długa"] },
      { city: "Gdańsk", region: "Pomeranian", postalStart: 80000, postalEnd: 80999, streets: ["Długa", "Grunwaldzka", "Kartuska", "Rajski"] },
      { city: "Wrocław", region: "Lower Silesian", postalStart: 50000, postalEnd: 54999, streets: ["Świdnicka", "Piłsudskiego", "Kazimierza Wielkiego", "Legnicka"] }
    ],
    firstNames: ["Jakub", "Zofia", "Jan", "Maja", "Antoni", "Hanna", "Adam", "Julia"],
    lastNames: ["Nowak", "Kowalski", "Wiśniewski", "Wójcik", "Kowalczyk", "Kamiński", "Lewandowski", "Zieliński"],
    streetTypes: ["ul.", "al.", "plac", "os."],
    unitLabels: ["m.", "lok.", "piętro"]
  },
  {
    code: "SE",
    name: "Sweden",
    localName: "Sverige",
    phoneCode: "+46",
    postalPattern: "sweden",
    cities: [
      { city: "Stockholm", region: "Stockholm County", postalStart: 11120, postalEnd: 16899, streets: ["Drottninggatan", "Sveavägen", "Birger Jarlsgatan", "Hornsgatan"] },
      { city: "Gothenburg", region: "Västra Götaland", postalStart: 41101, postalEnd: 42699, streets: ["Avenyn", "Östra Hamngatan", "Linnégatan", "Vasagatan"] },
      { city: "Malmö", region: "Skåne", postalStart: 21110, postalEnd: 21899, streets: ["Södra Förstadsgatan", "Amiralsgatan", "Regementsgatan", "Föreningsgatan"] },
      { city: "Uppsala", region: "Uppsala County", postalStart: 75120, postalEnd: 75699, streets: ["Drottninggatan", "Kungsgatan", "Sysslomansgatan", "Vaksalagatan"] }
    ],
    firstNames: ["William", "Alice", "Liam", "Elsa", "Noah", "Astrid", "Lucas", "Alma"],
    lastNames: ["Andersson", "Johansson", "Karlsson", "Nilsson", "Eriksson", "Larsson", "Olsson", "Persson"],
    streetTypes: ["gatan", "vägen", "gränd", "torg"],
    unitLabels: ["Lgh", "Vån", "Port"]
  },
  {
    code: "IE",
    name: "Ireland",
    localName: "Éire",
    phoneCode: "+353",
    postalPattern: "ireland",
    cities: [
      { city: "Dublin", region: "County Dublin", postalStart: 1, postalEnd: 24, streets: ["O'Connell Street", "Dame Street", "Pearse Street", "Camden Street"] },
      { city: "Cork", region: "County Cork", postalStart: 1, postalEnd: 99, streets: ["Oliver Plunkett Street", "South Mall", "Washington Street", "MacCurtain Street"] },
      { city: "Galway", region: "County Galway", postalStart: 1, postalEnd: 99, streets: ["Shop Street", "Eyre Square", "Dominick Street", "College Road"] },
      { city: "Limerick", region: "County Limerick", postalStart: 1, postalEnd: 99, streets: ["O'Connell Street", "Henry Street", "William Street", "Mallow Street"] }
    ],
    firstNames: ["Conor", "Aoife", "Sean", "Saoirse", "Liam", "Niamh", "Cian", "Ciara"],
    lastNames: ["Murphy", "Kelly", "O'Sullivan", "Walsh", "Smith", "O'Brien", "Byrne", "Ryan"],
    streetTypes: ["Street", "Road", "Avenue", "Lane"],
    unitLabels: ["Apt", "Floor", "Unit"]
  }
];

const euAddressStyles = ["standard", "apartment", "building", "care_of"];
const buildingNames = ["Central House", "Riverside Court", "Europa Plaza", "Green Residence", "Market Hall", "Station House", "City Point"];

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

function randomLetters(length) {
  const letters = "ABCDEFGHJKLMNPQRSTUVWXYZ";
  return Array.from({ length }, () => randomItem(letters)).join("");
}

function pad(value, length) {
  return String(value).padStart(length, "0");
}

function formatPostalCode(country, city) {
  const value = randomNumber(city.postalStart, city.postalEnd);
  if (country.postalPattern === "netherlands") return `${pad(value, 4)} ${randomLetters(2)}`;
  if (country.postalPattern === "poland") return `${pad(Math.floor(value / 1000), 2)}-${pad(value % 1000, 3)}`;
  if (country.postalPattern === "sweden") return `${pad(Math.floor(value / 100), 3)} ${pad(value % 100, 2)}`;
  if (country.postalPattern === "ireland") return `${randomItem(["D", "T", "H", "P"])}${randomNumber(1, 24)} ${randomLetters(1)}${randomNumber(10, 99)}${randomLetters(2)}`;
  if (country.postalPattern === "italy") return pad(value, 5);
  if (country.postalPattern === "spain") return pad(value, 5);
  return pad(value, 5);
}

function formatPhone(country) {
  const subscriber = `${randomNumber(100, 999)} ${randomNumber(100, 999)} ${randomNumber(100, 999)}`;
  if (country.code === "FR") return `${country.phoneCode} ${randomNumber(1, 9)} ${randomNumber(10, 99)} ${randomNumber(10, 99)} ${randomNumber(10, 99)} ${randomNumber(10, 99)}`;
  if (country.code === "DE") return `${country.phoneCode} ${randomNumber(30, 89)} ${randomNumber(100000, 999999)}`;
  if (country.code === "IT") return `${country.phoneCode} ${randomNumber(2, 9)} ${randomNumber(1000000, 9999999)}`;
  if (country.code === "ES") return `${country.phoneCode} ${randomNumber(600, 699)} ${randomNumber(100, 999)} ${randomNumber(100, 999)}`;
  if (country.code === "NL") return `${country.phoneCode} ${randomNumber(10, 99)} ${randomNumber(1000000, 9999999)}`;
  if (country.code === "IE") return `${country.phoneCode} ${randomNumber(1, 99)} ${randomNumber(1000000, 9999999)}`;
  return `${country.phoneCode} ${subscriber}`;
}

function selectedCountryPool() {
  if (els.countrySelect.value === "all") return countries;
  return countries.filter((country) => country.code === els.countrySelect.value);
}

function buildStreetLine(country, city) {
  const style = randomItem(euAddressStyles);
  const street = randomItem(city.streets);
  const number = randomNumber(1, 240);
  const unitLabel = randomItem(country.unitLabels);
  const unit = `${unitLabel} ${randomNumber(1, 42)}`;
  const building = randomItem(buildingNames);

  if (style === "building") {
    return {
      addressStyle: style,
      streetLine: `${building}, ${street} ${number}`,
      detailLine: unit,
      street,
      building,
      unit
    };
  }

  if (style === "apartment") {
    return {
      addressStyle: style,
      streetLine: `${street} ${number}`,
      detailLine: unit,
      street,
      building: "",
      unit
    };
  }

  if (style === "care_of") {
    return {
      addressStyle: style,
      streetLine: `${street} ${number}`,
      detailLine: `c/o ${building}`,
      street,
      building,
      unit: ""
    };
  }

  return {
    addressStyle: style,
    streetLine: `${street} ${number}`,
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
  lines.push(`${address.postalCode} ${address.city}`);
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
  link.download = "eu-addresses.csv";
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