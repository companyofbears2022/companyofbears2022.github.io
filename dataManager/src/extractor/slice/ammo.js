const { getTag } = require("../../utils/tools");

const ammo = (txt) => ({
  type: Number(getTag(txt, "#@am_type:")) || 0,
  modDa: Number(getTag(txt, "@global modDa:")) || 0,
  dmP: Number(getTag(txt, "@global dmP:")) || 0,
  norDa: Number(getTag(txt, "@global norDa:")) || 0,
  pene: Number(getTag(txt, "@global pene:")) || 0,
  decayCoe: Number(getTag(txt, "@global decayCoe:")) || 0,
});

module.exports = ammo;
