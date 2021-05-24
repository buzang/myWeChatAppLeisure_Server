const { execSQL } = require("../database/mysql")


getList = (goodsid) => {
  console.log(goodsid);
  const sql = `SELECT * FROM goods WHERE goods_id = ?;`
  return execSQL(sql,[goodsid])
}
module.exports = {
  getList
}