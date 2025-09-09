const fs = require('fs')
const path = require('path')

/**
 * 递归扫描目录，返回所有 .ini 文件
 * @param {string} dirPath 要扫描的目录路径
 * @returns {Array<{name: string, path: string}>}
 */
const getUnitList = (dirPath) => {
  const results = [];

  function recurse(current) {
    const stat = fs.statSync(current);
    if (!stat.isDirectory()) return;

    const items = fs.readdirSync(current);
    for (const item of items) {
      const fullPath = path.join(current, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        recurse(fullPath); // 递归子目录
      } else if (item.toLowerCase().endsWith('.ini')) {
        results.push({
          name: item,
          path: fullPath
        });
      }
    }
  }

  recurse(path.resolve(dirPath));
  return results;
}




module.exports = getUnitList; 