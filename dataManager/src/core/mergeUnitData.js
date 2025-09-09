
function mergeUnitData(out_en, out_zh, anameToDataMap) {

    for( let i = 0; i < out_en.length; i++ ) {
        for( let j = 0; j < out_en[i].data.ammo.length; j++ ) {
            out_en[i].data.ammo[j] = anameToDataMap.get(out_en[i].data.ammo[j])
        }
    }
    for( let i = 0; i < out_zh.length; i++ ) {
        for( let j = 0; j < out_zh[i].data.ammo.length; j++ ) {
            out_zh[i].data.ammo[j] = anameToDataMap.get(out_zh[i].data.ammo[j])
        }
    }

}

module.exports = mergeUnitData