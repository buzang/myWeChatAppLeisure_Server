const {SuccessModel,ErrorModel} = require('../module/responseModel')
const {getList} = require('../controller/goodsController')
// 处理goods路由

const handleGoodsRoute = async (req, res) => {
     if (req.method === 'GET' && req.path == '/api/goods/list') {
         const goodsid = req.query.goodsid 
        const listData = await getList(goodsid)
        return new SuccessModel(listData);
    }
}
module.exports = { handleGoodsRoute }