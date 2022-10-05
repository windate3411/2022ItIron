function snakeToCamel(str) {
  return str.replace(/((_)[a-z])/g, (group) => group[1].toUpperCase());
}

function camelToSnake(str) {
  return str.replace(/([A-Z])/g, "_$1").toLowerCase();
}

function getGCD(a, b) {
  // 取最大公因數
  if (a === 0) return b;
  return getGCD(b % a, a);
}

function getLCM(a, b) {
  // 取最小公倍數
  return (a * b) / getGCD(a, b);
}

function isObject(obj) {
  return (
    obj === Object(obj) && !Array.isArray(obj) && typeof obj !== "function"
  );
}

function isArray(obj) {
  return Array.isArray(obj);
}

export default {
  snakeToCamel,
  camelToSnake,
  getGCD,
  getLCM,
  isObject,
  isArray,
};
