/* ---------- 两个小工具 ---------- */
// 取第一个 #@xxx: yyy 里的 yyy（自动 trim）
function getMarker(text, prefix) {
    const lines = text.split(/\r?\n/);
    for (const line of lines) {
      const m = line.match(new RegExp(
        '^\\s*' + escapeRegExp(prefix) + '\\s*([^\\r\\n]*)$',
        'i'
      ));
      if (m) return m[1].trim();
    }
    return null;
  }
  
  function getTag(text, tag) {
    const lines = text.split(/\r?\n/);
    for (const line of lines) {
      const m = line.match(new RegExp(
        '^\\s*' + escapeRegExp(tag) + '\\s*([^\\r\\n]*)$',
        'i'
      ));
      if (m) return m[1].trim();
    }
    return null;
  }
  
  function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  /**
 * 从字符串数组中提取第一个符合 "mttp+数字" 格式的元素中的数字
 * @param {string[]} arr
 * @returns {number|null} 提取到的数字；无匹配时返回 1
 */
  function getUnitRank(arr) {
    for (const str of arr) {
    const m = str.match(/^mttp(\d+)$/i);
      if (m) return Number(m[1]);
    }
    return 1;
  }


  module.exports = { getMarker, getTag, getUnitRank }