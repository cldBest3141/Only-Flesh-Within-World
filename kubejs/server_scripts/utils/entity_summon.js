/**生物放置
 * @param {Internal.Level} level
 * @param {String} id 
 * @param {BlockPos} pos
 * @param {Array<Number>} rotation
 * @param {NBT} nbt
 */
function entitySummon(level,id,pos,rotation,nbt){
    let entity = level.createEntity(id)
    entity.setPositionAndRotation(pos.getX(),pos.getY(),pos.getZ(),rotation[0],rotation[1])
    entity.mergeNbt(nbt)
    entity.spawn()
}