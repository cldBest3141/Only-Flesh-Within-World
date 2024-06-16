/**控制玩家只能在特定范围内活动
 * @param {Internal.SimplePlayerEventJS} event
 */

function playerControl(event){
    let level = event.level
    let player = event.player
    let server = level.server
    let x = player.x
    let z = player.z
    let scale = getData(level,SCALE)


    if (Math.abs(x) <= 500*scale && Math.abs(z) <= 500*scale) return

    let distance = (Math.max(0,Math.abs(x) - 500*scale) + Math.max(0,Math.abs(z) - 500*scale))
    if (distance < 10){
        server.runCommandSilent(`title ${player.name.getString()} title {"text":"${"你想要离开吗？"}"}`)
        player.potionEffects.add("minecraft:nausea",100,0,true,false)
    }
    if (distance >= 10 && distance < 20){
        server.runCommandSilent(`title ${player.name.getString()} title {"text":"${"不，你不能离开"}"}`)
        player.potionEffects.add("minecraft:nausea",100,1,true,false)
        player.potionEffects.add("minecraft:slowness",100,1,true,false)
        player.potionEffects.add("minecraft:poison",300,0,true,false)
    }
    if (distance >= 20 && distance < 30){
        server.runCommandSilent(`title ${player.name.getString()} title {"text":"${"你以为你能跑掉吗？"}"}`)
        player.potionEffects.add("minecraft:nausea",100,2,true,false)
        player.potionEffects.add("minecraft:slowness",100,2,true,false)
        player.potionEffects.add("minecraft:wither",300,0,true,false)
    }
    if (distance >= 30){
        player.setHealth(0)
    }

}