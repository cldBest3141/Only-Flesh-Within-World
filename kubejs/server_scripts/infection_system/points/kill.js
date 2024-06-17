/**感染点数随感染体击杀、被击杀而变化
 * 感染体击杀生物，感染点数增长（生命值/6+护甲值/3）*difficulty点
 * 生物击杀感染体，感染点数减少（生命值/3+护甲值）/difficulty点
 * 击杀血肉团，额外减少1000点
 * 击杀血肉母体，减少10%+500点，并减缓感染速度
 * @param {Internal.LivingEntityDeathEventJS} event
*/

function killInfection(event){
    let level = event.level
    let entity = event.entity
    let entityType = entity.type
    let source = event.source.getActual()
    let sourceType = source.type
    let entityTypeTags = entity.entityType.tags.toArray()[0].toString()
    let sourceTypeTags = source.entityType.tags.toArray()[0].toString()
    let difficulty = getData(level,DIFFICULTY)
    let modifier = getData(level,INFECTIONMODIFIER)
    let points = getPoints(level)

    if (entityType == "the_flesh_that_hates:plaqueincubatorone" || entityType == "the_flesh_that_hates:plaqueincubatorstart"){
        setData(level, INFECTIONMODIFIER, Math.max(0,modifier - 1))
        let sub = Math.floor(points*0.1 + 500)
        addPoints(level,-sub)
    }

    if (sourceTypeTags.search("the_flesh_that_hates:fleshy_entities") != -1){
        let add = Math.floor(entity.maxHealth/6 + entity.armorValue/3) * difficulty
        addPoints(level,add)
    }
    if (entityTypeTags.search("the_flesh_that_hates:fleshy_entities") != -1){
        let sub = Math.floor((entity.maxHealth/3 + entity.armorValue) / difficulty)
        addPoints(level,-sub)
    }

    if (entityType == "the_flesh_that_hates:flesh_community"){
        addPoints(level,-1000)
    }
}