/**用于读取结构的尺寸
 * @param {Internal.Level} level
 * @param {String} structName 
 */
function getSize(level, structName) {
    let server = level.server
    let size = new Vec3i(0,0,0)
    server.structureManager.get(structName)
        .ifPresent((ctx) => {
            size = ctx.getSize()
        })
    return size
}




/**用于处理结构放置
 * @param {Internal.Level} level
 * @param {Internal.BlockPos} pos
 * @param {String} structName 
 */
function placeStructInWorld(level, pos, structName) {
    let server = level.server
    server.structureManager.get(structName)
        .ifPresent((ctx) => {
            let size = ctx.getSize()
            let rotate = 'none'
            let spawnOffset = new BlockPos(-size.getX() / 2, 0, -size.getZ() / 2).rotate(rotate)
            let spawnPos = pos.offset(spawnOffset)
            ctx.placeInWorld(level, spawnPos, spawnPos, new $StructurePlaceSettings().setKeepLiquids(true).setIgnoreEntities(false).setRotation(rotate), level.getRandom(), 3)
        })
}

