/**每日6时，同步tfth的感染点数与本系统覆写的感染系统
 * @param {Internal.SimpleLevelEventJS} event
 */

function syncInfection(event){
    let level = event.level
    let server = level.server
    let day = getData(level,DAY)
    let hour = getData(level,HOUR)
    let tick = getData(level,TICK)
    let points = getPoints(level)
    if (day != 0 && hour == 6 && tick == 0){
        server.runCommandSilent(`/tfth:points_reset`)
        server.runCommandSilent(`/tfth:points_add ${points}`)
    }
}