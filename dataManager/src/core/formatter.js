
function formatter(en,zh,country,categery) {

    const output_en = []
    const output_zh = []

    for( let i = 0; i < country.length; i++ ) {
        output_en.push({
            name: country[i].name,
            categeries: categery.map((cat) => ({
                    id: cat.id,
                    name: cat.name,
                    units: en.filter((itm) => (itm.coun === i && itm.type === cat.id))
                }))
        })
    }
    
    for( let i = 0; i < country.length; i++ ) {
        output_zh.push({
            name: country[i].name_zh,
            categeries: categery.map((cat) => ({
                    id: cat.id,
                    name: cat.name_zh,
                    units: zh.filter((itm) => (itm.coun === i && itm.type === cat.id))
                }))
        })
    }

    return {output_en: output_en, output_zh: output_zh}
    
}


module.exports = formatter