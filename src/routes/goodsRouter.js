const { SuccessModel, ErrorModel } = require('../module/responseModel')
const { getGoodsList } = require('../controller/goodsController')
    // 处理goods路由

const hendleGoodsRoute = async(req, res) => {
    // 查询goods列表
    if (req.method === 'GET' && req.path === '/api/goods/list') {
        const listData = await getGoodsList()
        if (listData != '') {
            return new SuccessModel(listData);
        }
        return new ErrorModel(listData)
    } else {
        return
    }
}
module.exports = { hendleGoodsRoute }