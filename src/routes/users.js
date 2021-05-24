// 处理USER路由
const querystring = require('querystring')
const hendleUsersRoute = (req, res) => {
    if (req.method === 'GET' && req.path == '/api/user/list') {
        return {
            message: '001'
        }
    }
}


module.exports = { hendleUsersRoute }