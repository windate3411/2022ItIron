const title = document.querySelector(".title");
const subTitle = document.querySelector(".sub-title");
const date = document.querySelector(".date");
const fromSelect = document.querySelector("#fromSelect");
const toSelect = document.querySelector("#toSelect");
const fromInput = document.querySelector("#fromInput");
const toInput = document.querySelector("#toInput");
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
  fromInput.value = formatValue(e.target.value, rateMapping[fromSelect.value]);
});
