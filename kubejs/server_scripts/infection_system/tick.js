/**感染点数随时间的变化
 * 默认为每50s增加0.5%+10，每点难度提供1%的概率额外增加10%
 * @param {Internal.SimpleLevelEventJS} event
 */

function tickInfection(event){
    let level = event.level
    let tick = getData(level,TICK)
    let points = getPoints(level)
    let difficulty = getData(level,DIFFICULTY)
    if (tick%1000 == 0){
        let add = points*0.005 + 10
        if (Math.random()<difficulty/100){
            add = add + points*0.1
        }
        addPoints(level,Math.floor(add))
    }
}