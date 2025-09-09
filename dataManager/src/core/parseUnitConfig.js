const fs = require('fs')
const { getMarker, getTag, getUnitRank } = require('../utils/tools')
const { extractors, getUnitInfo } = require('../extractor/index');
const parseDependency = require('./parseDependency')


/**
 * 根据传入的文件列表，从有效的配置文件中提取单位的数据并返回
 * @param {Array<{name: string, path: string}>} iniFiles 文件列表
 * @returns {Array<{id: number, type: number, name: string, desc: string, data: object}>, Array<{id: number, type: number, name: string, desc: string, data: object}>}
 */
function parseUnitConfig(iniFiles) {

  let count = 0;

  const out_en = [];
  const out_zh = [];
  const ammos = [];
  const unameToPathMap = new Map();

  for (const { path: file } of iniFiles) {
    let txt = fs.readFileSync(file, 'utf8');

    /* 必须包含那三个标记，否则跳过 */
    const unitt = getMarker(txt, '#@unitt:');
    const coun  = getMarker(txt, '#@coun:');
    const ammo  = getMarker(txt, '#@ammo:');
    const uname  = getMarker(txt, 'name:');

    unameToPathMap.set(uname, file)
    if (unitt == null || coun == null || ammo == null) continue;

    const dependencies  = getMarker(txt, 'copyFrom:')?.split(',');
    console.log('parsing unit:',uname);
    
    if(dependencies && dependencies.length > 0) {
      txt += parseDependency(file, dependencies)
    }

    /* 根据 unitt 拿到对应的字段提取函数，没有就跳过 */
    const fn = extractors[unitt];
    if (!fn) continue;

    const unitTags = getMarker(txt, 'tags:')?.split(',')
    const unitRank = getUnitRank(unitTags)

    const unitInfo = getUnitInfo(txt)

    addUnique(ammos, ammo.split(',').map(s => s.trim()).filter((itm)=>itm!=''))
    const extra = fn(txt);   // { fta:..., hp:... }
    out_en.push({
      id: count,
      mt: unitRank,
      coun: Number(coun),
      type : Number(unitt),
      name: unitInfo.name,
      desc: unitInfo.desc,
      data: {
        ...extra,
        ammo : ammo.split(',').map(s => s.trim()).filter((itm)=>itm!=''),
      }
    });

    out_zh.push({
      id: count,
      mt: unitRank,
      coun: Number(coun),
      type : Number(unitt),
      name: unitInfo.name_zh,
      desc: unitInfo.desc_zh,
      data: {
        ...extra,
        ammo : ammo.split(',').map(s => s.trim()).filter((itm)=>itm!=''),
      }
    });

    count++;
  }
  return { out_en, out_zh, ammos, unameToPathMap };
  // return out_en;
}


/**
 * 把一批字符串一次性安全地加入目标数组（跳过已存在的）
 * @param {string[]} arr 目标数组
 * @param {string[]} strArr 要添加的字符串数组
 */
function addUnique(arr, strArr) {
  for (const str of strArr) {
    if (!arr.includes(str)) arr.push(str);
  }
}

module.exports = parseUnitConfig 