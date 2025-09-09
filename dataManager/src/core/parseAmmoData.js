const fs = require('fs')
const { extractors, } = require('../extractor/index');

function parseAmmoData(ammos, map) {

    const anameToDataMap = new Map();

    const fn = extractors[101];

    for(am of ammos) {
        const am_path = map.get(am)
        console.log(am,am_path);
        
        let txt = fs.readFileSync(am_path, 'utf8');
        const extra = fn(txt)
        anameToDataMap.set(am,extra)
    }

    return anameToDataMap
}

module.exports = parseAmmoData