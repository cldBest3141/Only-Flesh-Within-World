ItemEvents.rightClicked("dirt",event=>{
    let player = event.player
    let level = event.level
    player.tell('b')

    //entitySummon(level,"minecraft:zombie",new BlockPos(0,100,0),[0,0],"{'NoAI':1b,'CustomName':'\"a\"'}")
    addPoints(level,299)
    /*let level = event.level

    let x = Math.sqrt(getData(level,BOSSROOMPOS[0])-2023)
    let y = -Math.sqrt(getData(level,BOSSROOMPOS[1])+2024)
    let z = Math.sqrt(getData(level,BOSSROOMPOS[2])-2025)

    player.tell(x)
    player.tell(y)
    player.tell(z)*/

    //player.tell(getSize(event.level,"the_flesh_that_hates:spawnmouth"))    
    //placeStructInWorld(event.level,new BlockPos(0,100,0),"kubejs:a")
    player.tell('f')
})

