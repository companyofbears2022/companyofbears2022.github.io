const ammo = require('./slice/ammo')
const tank = require('./slice/tank')
const gun = require('./slice/gun')
const infantry = require('./slice/infantry')
const unitInfo = require('./slice/unitInfo')

const extractors = {
  /* key = unitt 的值，value = 从 ini 文本里提取字段的函数 */
  0: infantry,
  1: gun,
  2: tank,
  101: ammo
  /* 示例：以后有 unitt:3 时再加
    3: txt => ({
      fta: Number(getTag(txt, '@global fta:')) || 0,
      hp : Number(getTag(txt, 'maxHp:'))      || 0,
      foo: Number(getTag(txt, 'foo:'))        || 0,
    }),
    */
};

const getUnitInfo = unitInfo
module.exports = { extractors, getUnitInfo }