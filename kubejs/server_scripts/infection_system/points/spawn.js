/**感染体生成所引发的感染点数变动
 * 每生成一只感染体，增加1点感染点
 * 生成血肉团时额外增加500点
 * 感染母体存在时，每只感染母体使感染点数额外增加50%
 * @param {Internal.EntitySpawnedEventJS} event
 */

function spawnInfection(event){
    let level = event.level
    let entity = event.entity
    let entityType = entity.type
    let entityTypeTags = entity.entityType.tags.toArray()[0].toString()
    let modifier = getData(level,INFECTIONMODIFIER)

    if (entityType == "the_flesh_that_hates:plaqueincubatorone" || entityType == "the_flesh_that_hates:plaqueincubatorstart"){
        setData(level,INFECTIONMODIFIER,modifier + 1)
    }

    if (entityTypeTags.search("the_flesh_that_hates:fleshy_entities") != -1){
        addPoints(level,1)
    }

    if (entityType == "the_flesh_that_hates:flesh_community"){
        addPoints(level,500)
    }
}