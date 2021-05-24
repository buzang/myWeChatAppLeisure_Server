const { hendleUsersRoute } = require('./src/routes/usersRouter') //处理user路由
const { handleGoodsRoute } = require('./src/routes/goodsRouter')
const querystring = require('querystring')
const severHendle = (req, res) => {
    // 设置相应头
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    // res.setHeader = ('Content-Type', 'application/json;charset=utf-8')
        // 为req添加属性path 内容是 将url用?分割后的前段内容 
    req.path = req.url.split('?')[0]
        // 为req添加属性query 内容是 将url用?分割后的后段内容 并且用querystring转换为对象 
    req.query = querystring.parse(req.url.split('?')[1])
        //调用 handleUserRoute 函数实现路由分化　将返回回来的内容保存在userData中
    const userData = hendleUsersRoute(req, res)
    if (userData) { // 如果内容不为空 
        res.end(JSON.stringify(userData));
        return;
    }
    const  goodsData = handleGoodsRoute(req, res)
    if  (goodsData) {
    //    const awaitGoodsData =  goodsData;
    //    console.log(awaitGoodsData);
        goodsData.then((goodsData)=>{
            res.end(JSON.stringify(goodsData));
        })
        return;
    }
    // 如果没有命中路由 返回404
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write('404,Not Found.....');
    res.end();
}

module.exports = {
    severHendle
}