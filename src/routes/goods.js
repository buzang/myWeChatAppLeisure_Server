// 处理goods路由
const querystring = require('querystring')
const handleGoodsRoute = (req, res) => {
    if (req.method === 'GET' && req.path == '/api/goods/list') {
        return {
            message: 'goods_data'
        }
    }
}
module.exports = { handleGoodsRoute }