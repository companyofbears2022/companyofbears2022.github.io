const fs = require("fs");
const path = require("path");
/**
 * 从给定的依赖数组中筛选出以 .base 或 .ini 并按由前到后的顺序合并为一个字符串返回
 * @param {string[]} arr 依赖数组
 * @returns {string} res 合并后的字符串
 */
function parseDependency(file, arr) {
  const fileDir = path.dirname(file);
  const deps = getBaseOrIniFiles(arr).map((itm) => (fileDir + '\\' + itm));

  console.log(file, deps);

  let res = "";

  if (deps.length === 0) {
    return res;
  }

  for (const file of deps) {
    let txt = fs.readFileSync(file, "utf8");
    res = txt + res
  }

  return res;
}

/**
 * 从给定的路径数组中筛选出以 .base 或 .ini 结尾的元素
 * @param {string[]} arr 要筛选的字符串数组
 * @returns {string[]} 匹配到的后缀结尾元素数组（空数组表示无匹配）
 */
function getBaseOrIniFiles(arr) {
  return arr.filter((item) => /\.(?:base|ini)$/i.test(item));
}

module.exports = parseDependency;
