/**用于读取游戏数据
 * @param {Internal.Level} level
 * @param {String} name
 * @returns {Int}
 */

function getData(level,name){
    let dataStorage = $DataStorage.getData(level)
    return dataStorage.getNumber(name)
}

/**用于保存游戏数据
 * @param {Internal.Level} level
 * @param {String} name
 * @param {Int} value
 */

function setData(level,name,value){
    let dataStorage = $DataStorage.getData(level)
    dataStorage.setNumber(name,value)
}