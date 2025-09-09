const { getTag } = require("../../utils/tools");

const infantry = (txt) => ({
  num: Number(getTag(txt, "#@num:")) || 4,
  hp: Number(getTag(txt, "@global ghp:")) || 0,
  lmSt: Number(getTag(txt, "@global lmSt:")) || 1,
  hitCoe: Number(getTag(txt, "@global hitCoe:")) || 0,
  hitRate: Number(getTag(txt, "@global hitRate:")) || 0,
  movDec: Number(getTag(txt, "@global movDec:")) || 0,
  hitCoe1: Number(getTag(txt, "@global hitCoe1:")) || 0,
  hitRate1: Number(getTag(txt, "@global hitRate1:")) || 0,
  movDec1: Number(getTag(txt, "@global movDec1:")) || 0,
  fogOfWarSightRange: Number(getTag(txt, "fogOfWarSightRange:")) || 0,
  armour: Number(getTag(txt, "armour:")) || 0,
  attackrange: Number(getTag(txt, "maxAttackRange:")) || 480,
});

module.exports = infantry;
