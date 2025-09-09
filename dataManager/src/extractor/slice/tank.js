const { getTag } = require("../../utils/tools");

const tank = (txt) => ({
  fta: Number(getTag(txt, "@global fta:")) || 0,
  sda: Number(getTag(txt, "@global sda:")) || 0,
  bka: Number(getTag(txt, "@global bka:")) || 0,
  tra: Number(getTag(txt, "@global tra:")) || 0,
  eng: Number(getTag(txt, "@global eng:")) || 0,
  front: Number(getTag(txt, "@global front:")) || 0,
  side: Number(getTag(txt, "@global side:")) || 0,
  back: Number(getTag(txt, "@global back:")) || 0,
  ftang:
    Math.round(
      Math.acos(Number(getTag(txt, "@global ftang:") || 1)) * (180 / Math.PI)
    ),
  sdang:
    Math.round(
      Math.acos(Number(getTag(txt, "@global sdang:") || 1)) * (180 / Math.PI)
    ),
  bkang:
    Math.round(
      Math.acos(Number(getTag(txt, "@global bkang:") || 1)) * (180 / Math.PI)
    ),
  frontAW: Number(getTag(txt, "@global frontAW:")) || 0,
  frontAWP: Number(getTag(txt, "@global frontAWP:")) || 0,
  sideAW: Number(getTag(txt, "@global sideAW:")) || 0,
  sideAWP: Number(getTag(txt, "@global sideAWP:")) || 0,
  backAW: Number(getTag(txt, "@global backAW:")) || 0,
  backAWP: Number(getTag(txt, "@global backAWP:")) || 0,
  ftang1:
    Math.round(
      Math.acos(Number(getTag(txt, "@global ftang1:") || 1)) * (180 / Math.PI)
    ),
  sdang1:
    Math.round(
      Math.acos(Number(getTag(txt, "@global sdang1:") || 1)) * (180 / Math.PI)
    ),
  bkang1:
    Math.round(
      Math.acos(Number(getTag(txt, "@global bkang1:") || 1)) * (180 / Math.PI)
    ),
  seizedp: Number(getTag(txt, "@global seizedp:")) || 0,
  hp: Number(getTag(txt, "maxHp:")) || 0,
  attackrange: Number(getTag(txt, "maxAttackRange:")) || 500,
  shootdelay: getTag(txt, "shootDelay:") || '0s',
  fogOfWarSightRange: Number(getTag(txt, "fogOfWarSightRange:")) || 0,
  movespeed: Number(getTag(txt, "moveSpeed:")) || 0,
  moveaccele: Number(getTag(txt, "moveAccelerationSpeed:")) || 0,
  movedecele: Number(getTag(txt, "moveDecelerationSpeed:")) || 0,
  turnspeed: Number(getTag(txt, "maxTurnSpeed:")) || 0,
  turnaccele: Number(getTag(txt, "turnAcceleration:")) || 0,
  reverspeed: Number(getTag(txt, "reverseSpeedPercentage:")) || 1,
});

module.exports = tank;
