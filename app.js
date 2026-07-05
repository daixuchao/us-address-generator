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
    name: "Alabama",
    abbr: "AL",
    cities: [
      { city: "Birmingham", zipStart: 35201, zipEnd: 35298 },
      { city: "Montgomery", zipStart: 36101, zipEnd: 36191 },
      { city: "Mobile", zipStart: 36601, zipEnd: 36695 },
      { city: "Huntsville", zipStart: 35801, zipEnd: 35899 }
    ]
  },
  {
    name: "Alaska",
    abbr: "AK",
    cities: [
      { city: "Anchorage", zipStart: 99501, zipEnd: 99524 },
      { city: "Fairbanks", zipStart: 99701, zipEnd: 99790 },
      { city: "Juneau", zipStart: 99801, zipEnd: 99850 }
    ]
  },
  {
    name: "Arizona",
    abbr: "AZ",
    cities: [
      { city: "Phoenix", zipStart: 85001, zipEnd: 85099 },
      { city: "Tucson", zipStart: 85701, zipEnd: 85775 },
      { city: "Mesa", zipStart: 85201, zipEnd: 85277 },
      { city: "Scottsdale", zipStart: 85250, zipEnd: 85271 }
    ]
  },
  {
    name: "Arkansas",
    abbr: "AR",
    cities: [
      { city: "Little Rock", zipStart: 72201, zipEnd: 72295 },
      { city: "Fayetteville", zipStart: 72701, zipEnd: 72704 },
      { city: "Fort Smith", zipStart: 72901, zipEnd: 72919 },
      { city: "Jonesboro", zipStart: 72401, zipEnd: 72467 }
    ]
  },
  {
    name: "Colorado",
    abbr: "CO",
    cities: [
      { city: "Denver", zipStart: 80201, zipEnd: 80299 },
      { city: "Colorado Springs", zipStart: 80901, zipEnd: 80997 },
      { city: "Aurora", zipStart: 80010, zipEnd: 80047 },
      { city: "Boulder", zipStart: 80301, zipEnd: 80329 }
    ]
  },
  {
    name: "Connecticut",
    abbr: "CT",
    cities: [
      { city: "Hartford", zipStart: 6101, zipEnd: 6176 },
      { city: "New Haven", zipStart: 6501, zipEnd: 6540 },
      { city: "Stamford", zipStart: 6901, zipEnd: 6928 },
      { city: "Bridgeport", zipStart: 6601, zipEnd: 6699 }
    ]
  },
  {
    name: "Delaware",
    abbr: "DE",
    cities: [
      { city: "Wilmington", zipStart: 19801, zipEnd: 19899 },
      { city: "Dover", zipStart: 19901, zipEnd: 19906 },
      { city: "Newark", zipStart: 19702, zipEnd: 19726 }
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
    name: "Georgia",
    abbr: "GA",
    cities: [
      { city: "Atlanta", zipStart: 30301, zipEnd: 30398 },
      { city: "Savannah", zipStart: 31401, zipEnd: 31499 },
      { city: "Augusta", zipStart: 30901, zipEnd: 30999 },
      { city: "Athens", zipStart: 30601, zipEnd: 30683 }
    ]
  },
  {
    name: "Hawaii",
    abbr: "HI",
    cities: [
      { city: "Honolulu", zipStart: 96801, zipEnd: 96898 },
      { city: "Hilo", zipStart: 96720, zipEnd: 96721 },
      { city: "Kailua", zipStart: 96734, zipEnd: 96734 }
    ]
  },
  {
    name: "Idaho",
    abbr: "ID",
    cities: [
      { city: "Boise", zipStart: 83701, zipEnd: 83799 },
      { city: "Idaho Falls", zipStart: 83401, zipEnd: 83415 },
      { city: "Nampa", zipStart: 83651, zipEnd: 83687 },
      { city: "Coeur d'Alene", zipStart: 83814, zipEnd: 83816 }
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
    name: "Indiana",
    abbr: "IN",
    cities: [
      { city: "Indianapolis", zipStart: 46201, zipEnd: 46298 },
      { city: "Fort Wayne", zipStart: 46801, zipEnd: 46899 },
      { city: "Evansville", zipStart: 47701, zipEnd: 47750 },
      { city: "South Bend", zipStart: 46601, zipEnd: 46699 }
    ]
  },
  {
    name: "Iowa",
    abbr: "IA",
    cities: [
      { city: "Des Moines", zipStart: 50301, zipEnd: 50399 },
      { city: "Cedar Rapids", zipStart: 52401, zipEnd: 52499 },
      { city: "Davenport", zipStart: 52801, zipEnd: 52809 },
      { city: "Iowa City", zipStart: 52240, zipEnd: 52246 }
    ]
  },
  {
    name: "Kansas",
    abbr: "KS",
    cities: [
      { city: "Wichita", zipStart: 67201, zipEnd: 67278 },
      { city: "Topeka", zipStart: 66601, zipEnd: 66699 },
      { city: "Overland Park", zipStart: 66201, zipEnd: 66283 },
      { city: "Kansas City", zipStart: 66101, zipEnd: 66160 }
    ]
  },
  {
    name: "Kentucky",
    abbr: "KY",
    cities: [
      { city: "Louisville", zipStart: 40201, zipEnd: 40299 },
      { city: "Lexington", zipStart: 40502, zipEnd: 40598 },
      { city: "Bowling Green", zipStart: 42101, zipEnd: 42104 },
      { city: "Frankfort", zipStart: 40601, zipEnd: 40622 }
    ]
  },
  {
    name: "Louisiana",
    abbr: "LA",
    cities: [
      { city: "New Orleans", zipStart: 70112, zipEnd: 70199 },
      { city: "Baton Rouge", zipStart: 70801, zipEnd: 70898 },
      { city: "Shreveport", zipStart: 71101, zipEnd: 71166 },
      { city: "Lafayette", zipStart: 70501, zipEnd: 70598 }
    ]
  },
  {
    name: "Maine",
    abbr: "ME",
    cities: [
      { city: "Portland", zipStart: 4101, zipEnd: 4124 },
      { city: "Bangor", zipStart: 4401, zipEnd: 4402 },
      { city: "Augusta", zipStart: 4330, zipEnd: 4338 }
    ]
  },
  {
    name: "Maryland",
    abbr: "MD",
    cities: [
      { city: "Baltimore", zipStart: 21201, zipEnd: 21298 },
      { city: "Annapolis", zipStart: 21401, zipEnd: 21412 },
      { city: "Frederick", zipStart: 21701, zipEnd: 21709 },
      { city: "Rockville", zipStart: 20847, zipEnd: 20857 }
    ]
  },
  {
    name: "Massachusetts",
    abbr: "MA",
    cities: [
      { city: "Boston", zipStart: 2108, zipEnd: 2298 },
      { city: "Worcester", zipStart: 1601, zipEnd: 1655 },
      { city: "Springfield", zipStart: 1101, zipEnd: 1199 },
      { city: "Cambridge", zipStart: 2138, zipEnd: 2239 }
    ]
  },
  {
    name: "Michigan",
    abbr: "MI",
    cities: [
      { city: "Detroit", zipStart: 48201, zipEnd: 48288 },
      { city: "Grand Rapids", zipStart: 49501, zipEnd: 49599 },
      { city: "Lansing", zipStart: 48901, zipEnd: 48980 },
      { city: "Ann Arbor", zipStart: 48103, zipEnd: 48113 }
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
    name: "Minnesota",
    abbr: "MN",
    cities: [
      { city: "Minneapolis", zipStart: 55401, zipEnd: 55488 },
      { city: "Saint Paul", zipStart: 55101, zipEnd: 55175 },
      { city: "Rochester", zipStart: 55901, zipEnd: 55906 },
      { city: "Duluth", zipStart: 55801, zipEnd: 55816 }
    ]
  },
  {
    name: "Mississippi",
    abbr: "MS",
    cities: [
      { city: "Jackson", zipStart: 39201, zipEnd: 39296 },
      { city: "Gulfport", zipStart: 39501, zipEnd: 39507 },
      { city: "Hattiesburg", zipStart: 39401, zipEnd: 39407 },
      { city: "Biloxi", zipStart: 39530, zipEnd: 39535 }
    ]
  },
  {
    name: "Missouri",
    abbr: "MO",
    cities: [
      { city: "Kansas City", zipStart: 64101, zipEnd: 64199 },
      { city: "St. Louis", zipStart: 63101, zipEnd: 63199 },
      { city: "Springfield", zipStart: 65801, zipEnd: 65899 },
      { city: "Columbia", zipStart: 65201, zipEnd: 65218 }
    ]
  },
  {
    name: "Montana",
    abbr: "MT",
    cities: [
      { city: "Billings", zipStart: 59101, zipEnd: 59117 },
      { city: "Missoula", zipStart: 59801, zipEnd: 59812 },
      { city: "Great Falls", zipStart: 59401, zipEnd: 59406 },
      { city: "Bozeman", zipStart: 59715, zipEnd: 59719 }
    ]
  },
  {
    name: "Nebraska",
    abbr: "NE",
    cities: [
      { city: "Omaha", zipStart: 68101, zipEnd: 68198 },
      { city: "Lincoln", zipStart: 68501, zipEnd: 68588 },
      { city: "Grand Island", zipStart: 68801, zipEnd: 68803 }
    ]
  },
  {
    name: "Nevada",
    abbr: "NV",
    cities: [
      { city: "Las Vegas", zipStart: 89101, zipEnd: 89199 },
      { city: "Reno", zipStart: 89501, zipEnd: 89599 },
      { city: "Henderson", zipStart: 89002, zipEnd: 89077 },
      { city: "Carson City", zipStart: 89701, zipEnd: 89721 }
    ]
  },
  {
    name: "New Hampshire",
    abbr: "NH",
    cities: [
      { city: "Manchester", zipStart: 3101, zipEnd: 3111 },
      { city: "Nashua", zipStart: 3060, zipEnd: 3064 },
      { city: "Concord", zipStart: 3301, zipEnd: 3305 },
      { city: "Portsmouth", zipStart: 3801, zipEnd: 3804 }
    ]
  },
  {
    name: "New Jersey",
    abbr: "NJ",
    cities: [
      { city: "Newark", zipStart: 7101, zipEnd: 7199 },
      { city: "Jersey City", zipStart: 7302, zipEnd: 7399 },
      { city: "Trenton", zipStart: 8601, zipEnd: 8695 },
      { city: "Atlantic City", zipStart: 8401, zipEnd: 8406 }
    ]
  },
  {
    name: "New Mexico",
    abbr: "NM",
    cities: [
      { city: "Albuquerque", zipStart: 87101, zipEnd: 87199 },
      { city: "Santa Fe", zipStart: 87501, zipEnd: 87594 },
      { city: "Las Cruces", zipStart: 88001, zipEnd: 88013 },
      { city: "Roswell", zipStart: 88201, zipEnd: 88203 }
    ]
  },
  {
    name: "North Carolina",
    abbr: "NC",
    cities: [
      { city: "Charlotte", zipStart: 28201, zipEnd: 28299 },
      { city: "Raleigh", zipStart: 27601, zipEnd: 27699 },
      { city: "Greensboro", zipStart: 27401, zipEnd: 27499 },
      { city: "Durham", zipStart: 27701, zipEnd: 27722 }
    ]
  },
  {
    name: "North Dakota",
    abbr: "ND",
    cities: [
      { city: "Fargo", zipStart: 58102, zipEnd: 58126 },
      { city: "Bismarck", zipStart: 58501, zipEnd: 58507 },
      { city: "Grand Forks", zipStart: 58201, zipEnd: 58208 }
    ]
  },
  {
    name: "Ohio",
    abbr: "OH",
    cities: [
      { city: "Columbus", zipStart: 43085, zipEnd: 43299 },
      { city: "Cleveland", zipStart: 44101, zipEnd: 44199 },
      { city: "Cincinnati", zipStart: 45201, zipEnd: 45299 },
      { city: "Toledo", zipStart: 43601, zipEnd: 43699 }
    ]
  },
  {
    name: "Oklahoma",
    abbr: "OK",
    cities: [
      { city: "Oklahoma City", zipStart: 73101, zipEnd: 73199 },
      { city: "Tulsa", zipStart: 74101, zipEnd: 74199 },
      { city: "Norman", zipStart: 73019, zipEnd: 73072 },
      { city: "Lawton", zipStart: 73501, zipEnd: 73507 }
    ]
  },
  {
    name: "Oregon",
    abbr: "OR",
    cities: [
      { city: "Portland", zipStart: 97201, zipEnd: 97299 },
      { city: "Eugene", zipStart: 97401, zipEnd: 97408 },
      { city: "Salem", zipStart: 97301, zipEnd: 97317 },
      { city: "Bend", zipStart: 97701, zipEnd: 97709 }
    ]
  },
  {
    name: "Pennsylvania",
    abbr: "PA",
    cities: [
      { city: "Philadelphia", zipStart: 19101, zipEnd: 19197 },
      { city: "Pittsburgh", zipStart: 15201, zipEnd: 15295 },
      { city: "Harrisburg", zipStart: 17101, zipEnd: 17177 },
      { city: "Allentown", zipStart: 18101, zipEnd: 18195 }
    ]
  },
  {
    name: "Rhode Island",
    abbr: "RI",
    cities: [
      { city: "Providence", zipStart: 2901, zipEnd: 2940 },
      { city: "Warwick", zipStart: 2886, zipEnd: 2889 },
      { city: "Newport", zipStart: 2840, zipEnd: 2841 }
    ]
  },
  {
    name: "South Carolina",
    abbr: "SC",
    cities: [
      { city: "Charleston", zipStart: 29401, zipEnd: 29492 },
      { city: "Columbia", zipStart: 29201, zipEnd: 29292 },
      { city: "Greenville", zipStart: 29601, zipEnd: 29617 },
      { city: "Myrtle Beach", zipStart: 29572, zipEnd: 29588 }
    ]
  },
  {
    name: "South Dakota",
    abbr: "SD",
    cities: [
      { city: "Sioux Falls", zipStart: 57101, zipEnd: 57198 },
      { city: "Rapid City", zipStart: 57701, zipEnd: 57709 },
      { city: "Aberdeen", zipStart: 57401, zipEnd: 57402 }
    ]
  },
  {
    name: "Tennessee",
    abbr: "TN",
    cities: [
      { city: "Nashville", zipStart: 37201, zipEnd: 37250 },
      { city: "Memphis", zipStart: 38101, zipEnd: 38197 },
      { city: "Knoxville", zipStart: 37901, zipEnd: 37998 },
      { city: "Chattanooga", zipStart: 37401, zipEnd: 37450 }
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
    name: "Utah",
    abbr: "UT",
    cities: [
      { city: "Salt Lake City", zipStart: 84101, zipEnd: 84199 },
      { city: "Provo", zipStart: 84601, zipEnd: 84606 },
      { city: "Ogden", zipStart: 84401, zipEnd: 84415 },
      { city: "St. George", zipStart: 84770, zipEnd: 84791 }
    ]
  },
  {
    name: "Vermont",
    abbr: "VT",
    cities: [
      { city: "Burlington", zipStart: 5401, zipEnd: 5408 },
      { city: "Montpelier", zipStart: 5601, zipEnd: 5633 },
      { city: "Rutland", zipStart: 5701, zipEnd: 5702 }
    ]
  },
  {
    name: "Virginia",
    abbr: "VA",
    cities: [
      { city: "Richmond", zipStart: 23218, zipEnd: 23298 },
      { city: "Virginia Beach", zipStart: 23450, zipEnd: 23479 },
      { city: "Norfolk", zipStart: 23501, zipEnd: 23551 },
      { city: "Alexandria", zipStart: 22301, zipEnd: 22336 }
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
  },
  {
    name: "West Virginia",
    abbr: "WV",
    cities: [
      { city: "Charleston", zipStart: 25301, zipEnd: 25396 },
      { city: "Morgantown", zipStart: 26501, zipEnd: 26508 },
      { city: "Huntington", zipStart: 25701, zipEnd: 25779 }
    ]
  },
  {
    name: "Wisconsin",
    abbr: "WI",
    cities: [
      { city: "Milwaukee", zipStart: 53201, zipEnd: 53295 },
      { city: "Madison", zipStart: 53701, zipEnd: 53794 },
      { city: "Green Bay", zipStart: 54301, zipEnd: 54344 },
      { city: "Kenosha", zipStart: 53140, zipEnd: 53144 }
    ]
  },
  {
    name: "Wyoming",
    abbr: "WY",
    cities: [
      { city: "Cheyenne", zipStart: 82001, zipEnd: 82010 },
      { city: "Casper", zipStart: 82601, zipEnd: 82609 },
      { city: "Laramie", zipStart: 82070, zipEnd: 82073 }
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
const stateAreaCodes = {
  AL: ["205", "251", "256", "334"],
  AK: ["907"],
  AZ: ["480", "520", "602", "623"],
  AR: ["479", "501", "870"],
  CA: ["213", "310", "415", "619", "626", "650", "714", "818"],
  CO: ["303", "719", "720", "970"],
  CT: ["203", "475", "860", "959"],
  DE: ["302"],
  FL: ["305", "407", "561", "727", "813", "904"],
  GA: ["404", "470", "678", "706", "912"],
  HI: ["808"],
  ID: ["208", "986"],
  IL: ["217", "312", "630", "708", "773"],
  IN: ["219", "260", "317", "463", "812"],
  IA: ["319", "515", "563", "641"],
  KS: ["316", "620", "785", "913"],
  KY: ["270", "502", "606", "859"],
  LA: ["225", "318", "337", "504"],
  ME: ["207"],
  MD: ["240", "301", "410", "443"],
  MA: ["339", "413", "508", "617", "781"],
  MI: ["231", "248", "313", "517", "616"],
  MN: ["218", "320", "507", "612", "651"],
  MS: ["228", "601", "662", "769"],
  MO: ["314", "417", "573", "636", "816"],
  MT: ["406"],
  NE: ["308", "402", "531"],
  NV: ["702", "725", "775"],
  NH: ["603"],
  NJ: ["201", "609", "732", "848", "856", "908", "973"],
  NM: ["505", "575"],
  NC: ["252", "336", "704", "828", "910", "919", "984"],
  ND: ["701"],
  NY: ["212", "315", "347", "516", "585", "607", "718", "917"],
  OH: ["216", "330", "419", "440", "513", "614", "740"],
  OK: ["405", "539", "580", "918"],
  OR: ["503", "541", "971"],
  PA: ["215", "267", "412", "484", "570", "610", "717"],
  RI: ["401"],
  SC: ["803", "843", "864"],
  SD: ["605"],
  TN: ["423", "615", "731", "865", "901", "931"],
  TX: ["210", "214", "281", "512", "713", "817", "972"],
  UT: ["385", "435", "801"],
  VT: ["802"],
  VA: ["276", "434", "540", "703", "757", "804"],
  WA: ["206", "253", "360", "425", "509"],
  WV: ["304", "681"],
  WI: ["262", "414", "608", "715", "920"],
  WY: ["307"]
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

function formatUsPhone(stateAbbr) {
  const areaCode = randomItem(stateAreaCodes[stateAbbr] || ["202", "312", "415"]);
  return `(${areaCode}) ${randomNumber(200, 999)}-${String(randomNumber(0, 9999)).padStart(4, "0")}`;
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
    zip: padZip(randomNumber(cityData.zipStart, cityData.zipEnd)),
    phone: formatUsPhone(state.abbr)
  };
}

function addressToText(address, includeName = els.includeName.checked) {
  const lines = [];
  if (includeName) lines.push(address.name);
  lines.push(address.phone);
  lines.push(address.unit ? `${address.street}, ${address.unit}` : address.street);
  lines.push(`${address.city}, ${address.state} ${address.zip}`);
  lines.push("United States");
  return lines.join("\n");
}

function addressToCsvRow(address) {
  const values = [
    address.name,
    address.phone,
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
        <span>${address.stateName}</span>
        <span>${address.phone}</span>
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

  const header = '"name","phone","street","unit","city","state","zip","country"';
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

  const defaultState = document.body.dataset.defaultState;
  if (states.some((state) => state.abbr === defaultState)) {
    els.stateSelect.value = defaultState;
  }
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

els.addressList.addEventListener("click", async (event) => {
  const button = event.target.closest("[data-copy-index]");
  if (!button) return;
  await copyText(addressToText(currentAddresses[Number(button.dataset.copyIndex)]));
  button.textContent = labels.copied;
  setTimeout(() => {
    button.textContent = labels.copy;
  }, 1200);
});

initStateSelect();
generateBatch();