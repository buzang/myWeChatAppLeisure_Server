const { execSQL } = require("../database/mysql")


getGoodsList = () => {
    const sql = `SELECT * FROM goods;`
    return execSQL(sql)
}







module.exports = {
    getGoodsList
}