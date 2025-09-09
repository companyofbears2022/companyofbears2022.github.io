const fs = require('fs')

const getUnitList = require('./core/getUnitList')
const parseUnitConfig = require('./core/parseUnitConfig')
const parseAmmoData = require('./core/parseAmmoData');
const mergeUnitData = require('./core/mergeUnitData');
const formatter = require('./core/formatter')

const { sourcePath, country, categery, outputPath_en, outputPath_zh } = require('./config')

const mod_path = sourcePath
// const mod_path = "E:/Projects/react/cobw2/companyofbears2022.github.io/TestData"
// "E:/Projects/react/cobw2/companyofbears2022.github.io/TestData"
// let li = getUnitList("D:/SteamLibrary/steamapps/common/Rusted Warfare/mods/units/COHP")
let li = getUnitList(mod_path)
// console.log(li);

let res = parseUnitConfig(li)
// console.log(res);

const { out_en, out_zh, ammos, unameToPathMap } = res

// console.log(unameToPathMap);

const anameToDataMap = parseAmmoData(ammos, unameToPathMap)

// console.log(anameToDataMap);

mergeUnitData(out_en, out_zh, anameToDataMap)


const { output_en, output_zh} = formatter(out_en, out_zh, country, categery)

fs.writeFileSync(outputPath_en, JSON.stringify(output_en), 'utf8');
fs.writeFileSync(outputPath_zh, JSON.stringify(output_zh), 'utf8');
