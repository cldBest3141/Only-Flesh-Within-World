/**读取感染点数
 * @param {Internal.Level} level
 * @returns {Number}
 */

function getPoints(level){
    return getData(level,INFECTIONPOINTS)
}

/**设置感染点数
 * @param {Internal.Level} level
 * @param {Number} value
 */

function setPoints(level, value){
    let oldValue = getPoints(level)
    let server = level.server
    value = Math.max(0,value)
    value = Math.min(value,120000)

    if (getPhase(oldValue) != getPhase(value)){
        server.runCommandSilent(`title @a title {"text":"${getPhase(value)}"}`)
    }
    
    setData(level,INFECTIONPOINTS,value)
    
    let players = server.getPlayers()
    players.forEach(player=>{
        player.paint({infection_points:{type:'text', visible: 1, x: '$screenW*7/9', y: '-$screenH*7/9', alignX: 'left', alignY: 'bottom', text: `感染点数为：${value}`, scale: 1}})
    })
}

/**感染点数增长
 * @param {Internal.Level} level
 * @param {Number} value
 */

function addPoints(level, value){
    let modifier = getData(level,INFECTIONMODIFIER)/2 + 1
    value = getPoints(level) + Math.floor(value*modifier)
    setPoints(level,value)
}

/**获取感染阶段
 * 
 * @param {Number} value 
 * @returns {String}
 */
function getPhase(value){
    if (value>=0 && value<300) return 'EMBRYO'
    if (value>=300 && value<3000) return 'BIOGENSIS'
    if (value>=3000 && value<15000) return 'ENLIGHTENMENT'
    if (value>=15000 && value<50000) return 'BIOTRANSFORMATION'
    if (value>=50000 && value<100000) return 'SYNTHESIS'
    if (value>=100000) return 'EPIKULMINATION'
}