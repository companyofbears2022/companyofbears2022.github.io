const { getTag } = require("../../utils/tools");

const unitInfo = (txt) => ({
  name: getTag(txt, "displayText:") || '',
  name_zh: getTag(txt, "displayText_zh:") || '',
  desc: getTag(txt, "displayDescription:") || '',
  desc_zh: getTag(txt, "displayDescription_zh:") || '',
});

module.exports = unitInfo;
