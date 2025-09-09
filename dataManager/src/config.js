const sourcePath = "D:/SteamLibrary/steamapps/common/Rusted Warfare/mods/units/COHP";
const country = [{name: 'British Forces', name_zh: '英军'}, {name: 'Oberkommando West', name_zh: '西线德军'}, {name: 'Soviet', name_zh: '苏联红军'}, {name: 'Wehrmacht', name_zh: '东线德军'}]
const categery = [{name: 'Infantry', name_zh: '步兵单位', id: 0}, {name: 'Emplaced Weapon', name_zh: '架设单位', id: 1}, {name: 'Tank', name_zh: '装甲单位', id: 2}, {name: 'Building', name_zh: '建筑单位', id: 3}, {name: 'Emplacement', name_zh: '阵地单位', id: 4}]
const outputPath_en = '../cobw3/public/data/doc/en/index.json'
const outputPath_zh = '../cobw3/public/data/doc/zhCn/index.json'

module.exports = { sourcePath, country, categery, outputPath_en, outputPath_zh }