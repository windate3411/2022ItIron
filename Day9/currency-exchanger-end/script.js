// 選取顯示匯率、日期的元素
const title = document.querySelector(".title");
const subTitle = document.querySelector(".sub-title");
const date = document.querySelector(".date");

// 選取Select選單元素
const fromSelect = document.querySelector("#fromSelect");
const toSelect = document.querySelector("#toSelect");

// 選取Input欄位元素
const fromInput = document.querySelector("#fromInput");
const toInput = document.querySelector("#toInput");

// 建立匯率物件
const rateMapping = {};

fetchCurrencyData();

async function fetchCurrencyData() {
  const res = await fetch(`https://api.exchangerate-api.com/v4/latest/TWD`);
  const data = await res.json();
  rateMapping["JPY"] = data.rates["JPY"];
  rateMapping["TWD"] = (1 / Number(data.rates["JPY"])).toFixed(2);
  title.textContent = `${rateMapping["JPY"]} 日圓`;
  date.textContent = Intl.DateTimeFormat("zh-tw", {
    timeStyle: "long",
    dateStyle: "long",
  }).format(new Date());
}

function formatValue(value, rate) {
  return !!value ? Number(value) * Number(rate) : null;
}

fromInput.addEventListener("input", (e) => {
  toInput.value = formatValue(e.target.value, rateMapping[toSelect.value]);
});

toInput.addEventListener("input", (e) => {
  fromInput.value = formatValue(
    e.target.value,
    (1 / rateMapping[toSelect.value]).toFixed(2)
  );
});
