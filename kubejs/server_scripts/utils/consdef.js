//常量定义

//加载库
const $StructurePlaceSettings = Java.loadClass("net.minecraft.world.level.levelgen.structure.templatesystem.StructurePlaceSettings")
const $LevelResource = Java.loadClass("net.minecraft.world.level.storage.LevelResource")
const $DataStorage = Java.loadClass("mcjty.incontrol.data.DataStorage")

//数据名
const GAMESTAGE = 'OFWW_gameStage' //用0，1，2来区分游戏的生成、进行和结束阶段
const DIFFICULTY = 'OFWW_difficulty' //游戏难度，默认为1
const SCALE = 'OFWW_mapScale' //地图大小，用于限制生物生成和玩家行动，默认为1，地图为边长1000*scale的正方形
const BOSSROOMPOS = ['OFWW_bossRoomX','OFWW_bossRoomY','OFWW_bossRoomZ'] //用于存储boss房位置，取一次平方再加2024后存储
const INFECTIONPOINTS = 'OFWW_infectionPoints' //感染点数
const DAY = 'OFWW_gameDay' //用于存储游戏过了几日
const HOUR = 'OFWW_gameHour' //用于存储一日的第几小时
const TICK = 'OFWW_gameTick' //用于存储游戏刻，总游戏时间计算方法：DAY*24*3000+HOUR*3000+TICK

//结构名
const BOSSROOM = 'kubejs:boss_room' //boss房

