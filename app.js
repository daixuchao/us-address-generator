const states = [
  {
    name: "California",
    abbr: "CA",
    cities: [
      { city: "Los Angeles", zipStart: 90001, zipEnd: 90089 },
      { city: "San Diego", zipStart: 92101, zipEnd: 92199 },
      { city: "San Francisco", zipStart: 94102, zipEnd: 94188 },
      { city: "Sacramento", zipStart: 95811, zipEnd: 95899 }
    ]
  },
  {
    name: "New York",
    abbr: "NY",
    cities: [
      { city: "New York", zipStart: 10001, zipEnd: 10282 },
      { city: "Brooklyn", zipStart: 11201, zipEnd: 11256 },
      { city: "Buffalo", zipStart: 14201, zipEnd: 14280 },
      { city: "Rochester", zipStart: 14602, zipEnd: 14694 }
    ]
  },
  {
    name: "Texas",
    abbr: "TX",
    cities: [
      { city: "Austin", zipStart: 73301, zipEnd: 78799 },
      { city: "Dallas", zipStart: 75201, zipEnd: 75398 },
      { city: "Houston", zipStart: 77001, zipEnd: 77299 },
      { city: "San Antonio", zipStart: 78201, zipEnd: 78299 }
    ]
  },
  {
    name: "Florida",
    abbr: "FL",
    cities: [
      { city: "Miami", zipStart: 33101, zipEnd: 33299 },
      { city: "Orlando", zipStart: 32801, zipEnd: 32899 },
      { city: "Tampa", zipStart: 33601, zipEnd: 33694 },
      { city: "Jacksonville", zipStart: 32099, zipEnd: 32290 }
    ]
  },
  {
    name: "Illinois",
    abbr: "IL",
    cities: [
      { city: "Chicago", zipStart: 60601, zipEnd: 60827 },
      { city: "Springfield", zipStart: 62701, zipEnd: 62796 },
      { city: "Peoria", zipStart: 61601, zipEnd: 61656 },
      { city: "Naperville", zipStart: 60540, zipEnd: 60567 }
    ]
  },
  {
    name: "Washington",
    abbr: "WA",
    cities: [
      { city: "Seattle", zipStart: 98101, zipEnd: 98199 },
      { city: "Spokane", zipStart: 99201, zipEnd: 99299 },
      { city: "Tacoma", zipStart: 98401, zipEnd: 98499 },
      { city: "Bellevue", zipStart: 98004, zipEnd: 98015 }
    ]
  }
];

const streetNames = [
  "Main", "Oak", "Maple", "Cedar", "Pine", "Washington", "Lake", "Hill",
  "Park", "Sunset", "Highland", "Riverside", "Market", "Franklin", "Broadway",
  "Madison", "Lincoln", "Adams", "Jefferson", "Willow"
];

const streetTypes = ["St", "Ave", "Blvd", "Dr", "Rd", "Ln", "Way", "Ct"];
const unitTypes = ["Apt", "Suite", "Unit"];
const firstNames = ["Alex", "Taylor", "Jordan", "Morgan", "Casey", "Jamie", "Riley", "Cameron"];
const lastNames = ["Smith", "Johnson", "Brown", "Garcia", "Miller", "Davis", "Wilson", "Anderson"];

let currentAddresses = [];

const els = {
  stateSelect: document.querySelector("#stateSelect"),
  countInput: document.querySelector("#countInput"),
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

function padZip(value) {
  return String(value).padStart(5, "0");
}

function selectedStatePool() {
  if (els.stateSelect.value === "all") {
    return states;
  }

  return states.filter((state) => state.abbr === els.stateSelect.value);
}

function generateAddress() {
  const state = randomItem(selectedStatePool());
  const cityData = randomItem(state.cities);
  const hasUnit = Math.random() > 0.58;
  const unit = hasUnit ? `${randomItem(unitTypes)} ${randomNumber(100, 899)}` : "";
  const street = [
    randomNumber(100, 9999),
    randomItem(streetNames),
    randomItem(streetTypes)
  ].join(" ");

  return {
    name: `${randomItem(firstNames)} ${randomItem(lastNames)}`,
    street,
    unit,
    city: cityData.city,
    state: state.abbr,
    stateName: state.name,
    zip: padZip(randomNumber(cityData.zipStart, cityData.zipEnd))
  };
}

function addressToText(address, includeName = els.includeName.checked) {
  const lines = [];
  if (includeName) lines.push(address.name);
  lines.push(address.unit ? `${address.street}, ${address.unit}` : address.street);
  lines.push(`${address.city}, ${address.state} ${address.zip}`);
  lines.push("United States");
  return lines.join("\n");
}

function addressToCsvRow(address) {
  const values = [
    address.name,
    address.street,
    address.unit,
    address.city,
    address.state,
    address.zip,
    "United States"
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
  els.resultCount.textContent = `${currentAddresses.length} 条`;

  if (!currentAddresses.length) {
    els.addressList.innerHTML = '<div class="empty-state">点击“生成地址”开始。</div>';
    return;
  }

  els.addressList.innerHTML = currentAddresses.map((address, index) => `
    <article class="address-card">
      <div class="address-card__top">
        <strong>地址 ${index + 1}</strong>
        <button class="mini-button" type="button" data-copy-index="${index}">复制</button>
      </div>
      <address class="address-lines">${addressToText(address).replaceAll("\n", "<br>")}</address>
      <div class="meta">
        <span>${address.stateName}</span>
        <span>ZIP ${address.zip}</span>
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

  const header = '"name","street","unit","city","state","zip","country"';
  const csv = [header, ...currentAddresses.map(addressToCsvRow)].join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "us-addresses.csv";
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function initStateSelect() {
  states.forEach((state) => {
    const option = document.createElement("option");
    option.value = state.abbr;
    option.textContent = `${state.name} (${state.abbr})`;
    els.stateSelect.append(option);
  });
}

els.generateBtn.addEventListener("click", generateBatch);

els.copyBtn.addEventListener("click", async () => {
  if (!currentAddresses.length) return;
  await copyText(currentAddresses.map((address) => addressToText(address)).join("\n\n"));
  els.copyBtn.textContent = "已复制";
  setTimeout(() => {
    els.copyBtn.textContent = "复制全部";
  }, 1200);
});

els.downloadBtn.addEventListener("click", downloadCsv);

els.clearBtn.addEventListener("click", () => {
  currentAddresses = [];
  renderAddresses();
});

els.includeName.addEventListener("change", renderAddresses);

els.addressList.addEventListener("click", async (event) => {
  const button = event.target.closest("[data-copy-index]");
  if (!button) return;
  await copyText(addressToText(currentAddresses[Number(button.dataset.copyIndex)]));
  button.textContent = "已复制";
  setTimeout(() => {
    button.textContent = "复制";
  }, 1200);
});

initStateSelect();
generateBatch();
