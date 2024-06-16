PlayerEvents.loggedIn(event=>{
    let level = event.level
    let player = event.player
    if (getData(level,GAMESTAGE)==0){

        setData(level,GAMESTAGE,1)
        setData(level,DIFFICULTY,1)
        setData(level,SCALE,1)

        let bossRoomSize = getSize(level,BOSSROOM)
        let bossRoomX = Math.floor((Math.random() + Math.random() - 1) * (1000 - bossRoomSize.getX()))
        let bossRoomZ = Math.floor((Math.random() + Math.random() - 1) * (1000 - bossRoomSize.getZ()))
        let bossRoomY = Math.floor(-Math.random()*60)
        placeStructInWorld(level,new BlockPos(bossRoomX,bossRoomY,bossRoomZ),BOSSROOM)
        setData(level,BOSSROOMPOS[0],bossRoomX*bossRoomX+2023)
        setData(level,BOSSROOMPOS[1],bossRoomY*bossRoomY-2024)
        setData(level,BOSSROOMPOS[2],bossRoomZ*bossRoomZ+2025)
        
        setPoints(level,0)

        setData(level,DAY,0)
        setData(level,HOUR,6)
        setData(level,TICK,0)
        player.persistentData.putInt(DAY,0)
        player.persistentData.putInt(HOUR,0)
        player.persistentData.putInt(TICK,0)
    }
})

