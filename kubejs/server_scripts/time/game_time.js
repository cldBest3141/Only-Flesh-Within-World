/**
 * @param {Internal.SimpleLevelEventJS} event
 */

function gameTime(event){
    let level = event.level
    let day = getData(level,DAY)
    let hour = getData(level,HOUR)
    let tick = getData(level,TICK)
    let players = level.server.getPlayers()

    if (tick == 2999){
        if (hour == 23){
            day = day + 1
            hour = 0
            setData(level,DAY,day)
        }
        else{
            hour = hour + 1
        }
        tick = 0
        setData(level,HOUR,hour)    
        players.forEach(player=>{
            player.paint({game_time:{type:'text', visible: 1, x: '$screenW*7/9', y: '-$screenH*7/9 + 10', alignX: 'left', alignY: 'bottom', text: `现在是：第 ${day} 日 ${hour} 时`, scale: 1}})
        })
    }
    else{
        tick = tick + 1
    }
    setData(level,TICK,tick)

    players.forEach(player=>{
        let pday = player.persistentData.getInt(DAY)
        let phour = player.persistentData.getInt(HOUR)
        let ptick = player.persistentData.getInt(TICK)
      
        if (ptick == 2999){
            if (phour == 23){
                pday = pday + 1
                phour = 0
                player.persistentData.putInt(DAY,pday)
            }
            else{
                phour = phour + 1
            }
            ptick = 0
            player.persistentData.putInt(HOUR,phour)  
            player.paint({player_time:{type:'text', visible: 1, x: '$screenW*7/9', y: '-$screenH*7/9 + 20', alignX: 'left', alignY: 'bottom', text: `你存活了 ${pday} 日 ${phour} 时`, scale: 1}})
        }
        else{
            ptick = ptick + 1
        }
        player.persistentData.putInt(TICK,ptick)
    })

}