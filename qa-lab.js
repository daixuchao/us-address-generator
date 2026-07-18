const qaCases = [
  { id: "US-POSTAL-01", country: "us", countryName: "美国", scenario: "postal", title: "保留 ZIP Code 前导零", input: "City: Boston | State: MA | ZIP Code: 02108", action: "创建地址、重新编辑，再导出 CSV。", expected: "页面、API、数据库和 CSV 始终保存 02108。", risk: "邮编被数字化后变成 2108。", priority: "高" },
  { id: "US-POSTAL-02", country: "us", countryName: "美国", scenario: "postal", title: "同时接受 ZIP 与 ZIP+4", input: "10001；10001-1234", action: "分别提交 5 位和 ZIP+4 格式。", expected: "两种业务允许的格式均通过，ZIP+4 连字符被保留。", risk: "校验器错误地只接受其中一种。", priority: "高" },
  { id: "US-OPTIONAL-01", country: "us", countryName: "美国", scenario: "optional", title: "Address Line 2 留空", input: "Line 1: 455 Market Street | Line 2: 空", action: "提交后查看详情页和打印布局。", expected: "允许提交且不显示空白行或多余逗号。", risk: "可选字段被误设为必填。", priority: "高" },
  { id: "US-OPTIONAL-02", country: "us", countryName: "美国", scenario: "optional", title: "保留字母数字单元号", input: "Apt 8B", action: "保存、搜索并导出单元号。", expected: "Apt 8B 完整保留。", risk: "系统只保留数字 8。", priority: "中" },
  { id: "JP-UNICODE-01", country: "jp", countryName: "日本", scenario: "unicode", title: "完整保存日文地址", input: "東京都千代田区丸の内1丁目2-3 テストビル405号室", action: "创建、编辑、搜索并导出。", expected: "汉字、假名、丁目和号室字符完全一致。", risk: "编码或正规化导致搜索与导出乱码。", priority: "高" },
  { id: "JP-POSTAL-01", country: "jp", countryName: "日本", scenario: "postal", title: "日本邮编前导零与连字符", input: "060-0001", action: "通过表单、JSON 和 CSV 往返处理邮编。", expected: "前导零和连字符均保留。", risk: "电子表格删除首位零。", priority: "高" },
  { id: "JP-SWITCH-01", country: "jp", countryName: "日本", scenario: "switch", title: "从美国切换到日本", input: "先选择 United States，再切换 Japan。", action: "观察州、都道府县和邮编标签。", expected: "州规则被清理，显示都道府县和日本邮编规则。", risk: "旧州值残留并被提交。", priority: "高" },
  { id: "UK-POSTAL-01", country: "uk", countryName: "英国", scenario: "postal", title: "规范化 UK Postcode", input: "sw1a   1aa", action: "输入小写和多个空格后离开字段。", expected: "显示为 SW1A 1AA，中央保留一个空格。", risk: "删除所有空格或拒绝小写输入。", priority: "高" },
  { id: "UK-OPTIONAL-01", country: "uk", countryName: "英国", scenario: "optional", title: "County 不应全局必填", input: "Post Town: LONDON | County: 空 | Postcode: SW1A 1AA", action: "提交英国地址。", expected: "在业务不要求 County 时允许提交。", risk: "照搬美国 State 必填规则。", priority: "中" },
  { id: "UK-EXCHANGE-01", country: "uk", countryName: "英国", scenario: "exchange", title: "房屋名与 Flat 的 CSV 导出", input: "Flat 4, Rose House", action: "导出并重新导入含逗号的 premise。", expected: "CSV 正确引用，字段不被拆列。", risk: "逗号导致列错位。", priority: "高" },
  { id: "KR-POSTAL-01", country: "kr", countryName: "韩国", scenario: "postal", title: "韩国 5 位邮编前导零", input: "04524", action: "保存并通过电子表格查看。", expected: "始终显示五个字符。", risk: "变成 4524。", priority: "高" },
  { id: "KR-UNICODE-01", country: "kr", countryName: "韩国", scenario: "unicode", title: "韩文道路名搜索", input: "서울특별시 중구 세종대로 110", action: "保存后按完整和部分韩文搜索。", expected: "搜索可找到记录且原文未变化。", risk: "Unicode 正规化不一致。", priority: "高" },
  { id: "KR-OPTIONAL-01", country: "kr", countryName: "韩国", scenario: "optional", title: "详细地址允许为空", input: "道路名地址完整 | 建筑/房间号: 空", action: "提交并重新编辑。", expected: "主道路地址保留，空详细地址不产生占位符。", risk: "系统错误覆盖主地址。", priority: "中" },
  { id: "EU-POSTAL-01", country: "eu", countryName: "欧盟", scenario: "postal", title: "荷兰字母数字邮编", input: "1012 AB", action: "在国家为 Netherlands 时提交。", expected: "接受 4 位数字、空格和 2 个字母。", risk: "全局 numeric 规则拒绝输入。", priority: "高" },
  { id: "EU-POSTAL-02", country: "eu", countryName: "欧盟", scenario: "postal", title: "爱尔兰 Eircode", input: "D02 X285", action: "保存、搜索并导出 Eircode。", expected: "字母、数字和空格完整保留。", risk: "套用欧盟 5 位数字假设。", priority: "高" },
  { id: "EU-UNICODE-01", country: "eu", countryName: "欧盟", scenario: "unicode", title: "保留重音和变音字符", input: "München | Île-de-France | Łódź", action: "分别创建、搜索和 CSV 往返。", expected: "字符和大小写显示正确。", risk: "去音符处理改变原始地址。", priority: "高" },
  { id: "EU-SWITCH-01", country: "eu", countryName: "欧盟", scenario: "switch", title: "欧盟成员国规则切换", input: "Germany → Netherlands → Ireland", action: "连续切换国家并观察邮编提示。", expected: "每次加载对应格式，旧规则不继续拦截。", risk: "把欧盟误当成统一地址格式。", priority: "高" },
  { id: "SEA-POSTAL-01", country: "sea", countryName: "东南亚", scenario: "postal", title: "新加坡 6 位邮编", input: "079903", action: "保存、导出和重新导入。", expected: "六位邮编及前导零保持不变。", risk: "变成 79903。", priority: "高" },
  { id: "SEA-UNICODE-01", country: "sea", countryName: "东南亚", scenario: "unicode", title: "泰文地址完整往返", input: "กรุงเทพมหานคร เขตปทุมวัน", action: "创建、编辑、搜索和导出。", expected: "泰文完整保留且界面正常换行。", risk: "字体、编码或搜索分词失败。", priority: "高" },
  { id: "SEA-UNICODE-02", country: "sea", countryName: "东南亚", scenario: "unicode", title: "越南语声调字符", input: "Thành phố Hồ Chí Minh", action: "按原文和不带声调文本执行搜索。", expected: "原文保持不变；搜索行为与产品说明一致。", risk: "静默删除声调字符。", priority: "中" },
  { id: "SEA-OPTIONAL-01", country: "sea", countryName: "东南亚", scenario: "optional", title: "新加坡 Unit 标识", input: "#12-05", action: "保存、复制和 CSV 导出。", expected: "井号与连字符均保留。", risk: "井号被当成注释或 URL 锚点。", priority: "高" },
  { id: "ALL-EXCHANGE-01", country: "all", countryName: "全球", scenario: "exchange", title: "UTF-8 CSV 往返", input: "混合日文、韩文、泰文、变音字符和逗号。", action: "导出 CSV，再导入测试环境并逐列比较。", expected: "字段数量、顺序和字符与原始数据一致。", risk: "编码、引号或换行导致数据损坏。", priority: "高" },
  { id: "ALL-MOBILE-01", country: "all", countryName: "全球", scenario: "mobile", title: "320px 移动端地址输入", input: "最长标签、长地址行和字段错误信息。", action: "在 320 CSS 像素宽度下完成输入与提交。", expected: "标签、输入框、错误和按钮不重叠。", risk: "横向溢出遮挡提交操作。", priority: "高" },
  { id: "ALL-MOBILE-02", country: "all", countryName: "全球", scenario: "mobile", title: "键盘与错误焦点", input: "缺少所有必填地址字段。", action: "仅使用键盘提交并修复错误。", expected: "焦点移至首个错误，错误文本可被辅助技术读取。", risk: "只用颜色提示或焦点顺序混乱。", priority: "高" }
];

const elements = {
  country: document.querySelector("#countrySelect"), scenario: document.querySelector("#scenarioSelect"), count: document.querySelector("#countInput"), seed: document.querySelector("#seedInput"), list: document.querySelector("#caseList"), resultCount: document.querySelector("#resultCount"), generate: document.querySelector("#generateBtn"), reset: document.querySelector("#resetBtn"), copy: document.querySelector("#copyBtn"), csv: document.querySelector("#csvBtn"), json: document.querySelector("#jsonBtn")
};
let currentCases = [];

function seedNumber(text) { let h = 2166136261; for (const char of text) { h ^= char.charCodeAt(0); h = Math.imul(h, 16777619); } return h >>> 0; }
function randomFromSeed(seed) { return function () { seed |= 0; seed = seed + 0x6d2b79f5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
function shuffled(items, seedText) { const result = [...items], random = randomFromSeed(seedNumber(seedText)); for (let i = result.length - 1; i > 0; i--) { const j = Math.floor(random() * (i + 1)); [result[i], result[j]] = [result[j], result[i]]; } return result; }
function escapeHtml(value) { return value.replace(/[&<>"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[char]); }
function matchingCases() { return qaCases.filter(item => (elements.country.value === "all" || item.country === elements.country.value || item.country === "all") && (elements.scenario.value === "all" || item.scenario === elements.scenario.value)); }
function render() {
  const count = Math.max(1, Math.min(12, Number(elements.count.value) || 6)); elements.count.value = count;
  const seed = elements.seed.value.trim() || "global-address"; elements.seed.value = seed;
  currentCases = shuffled(matchingCases(), `${seed}|${elements.country.value}|${elements.scenario.value}`).slice(0, count);
  elements.resultCount.textContent = `${currentCases.length} 条`;
  if (!currentCases.length) { elements.list.innerHTML = '<p class="notice">当前筛选组合没有匹配用例，请选择“全部场景”。</p>'; return; }
  elements.list.innerHTML = currentCases.map(item => `<article class="qa-case"><div class="qa-case__head"><div><span class="qa-id">${escapeHtml(item.id)}</span><h3>${escapeHtml(item.title)}</h3></div><span class="qa-priority qa-priority--${item.priority === "高" ? "high" : "medium"}">${escapeHtml(item.priority)}优先级</span></div><div class="qa-case__meta"><span>${escapeHtml(item.countryName)}</span><span>${escapeHtml(item.scenario)}</span></div><dl class="qa-fields"><div><dt>测试输入</dt><dd>${escapeHtml(item.input)}</dd></div><div><dt>操作步骤</dt><dd>${escapeHtml(item.action)}</dd></div><div><dt>预期结果</dt><dd>${escapeHtml(item.expected)}</dd></div><div><dt>失败风险</dt><dd>${escapeHtml(item.risk)}</dd></div></dl></article>`).join("");
}
function textOutput() { return currentCases.map(x => `${x.id} ${x.title}\n国家: ${x.countryName}\n输入: ${x.input}\n操作: ${x.action}\n预期: ${x.expected}\n风险: ${x.risk}`).join("\n\n"); }
function csvValue(value) { return `"${String(value).replaceAll('"', '""')}"`; }
function download(name, type, content) { const url = URL.createObjectURL(new Blob([content], { type })), link = document.createElement("a"); link.href = url; link.download = name; link.click(); URL.revokeObjectURL(url); }
async function copyAll() { if (!currentCases.length) return; await navigator.clipboard.writeText(textOutput()); const old = elements.copy.textContent; elements.copy.textContent = "已复制"; setTimeout(() => elements.copy.textContent = old, 1200); }
function exportCsv() { const header = ["id", "country", "scenario", "priority", "title", "input", "action", "expected", "risk"], rows = currentCases.map(x => [x.id, x.countryName, x.scenario, x.priority, x.title, x.input, x.action, x.expected, x.risk].map(csvValue).join(",")); download("address-qa-cases.csv", "text/csv;charset=utf-8", `\uFEFF${header.join(",")}\n${rows.join("\n")}`); }
function exportJson() { download("address-qa-cases.json", "application/json", JSON.stringify({ seed: elements.seed.value, country: elements.country.value, scenario: elements.scenario.value, cases: currentCases }, null, 2)); }

elements.generate.addEventListener("click", render); elements.reset.addEventListener("click", () => { elements.country.value = "all"; elements.scenario.value = "all"; elements.count.value = 6; elements.seed.value = "global-address"; render(); }); elements.copy.addEventListener("click", copyAll); elements.csv.addEventListener("click", exportCsv); elements.json.addEventListener("click", exportJson); render();
