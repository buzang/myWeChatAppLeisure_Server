const { SuccessModel, ErrorModel } = require('../module/responseModel')
const { getUserList, createUserinfo } = require('../controller/userController')
    // 处理USER路由

const hendleUsersRoute = async(req, res) => {
    /* 
        小微信授权登陆
          判断->  如果是第一次登陆(if(该openid已经存在))，将用户的数据添加至数据库中
                  如果不是第一次登陆,获取该用户的发布和收藏列表数据     
    */
    if (req.method === 'GET' && req.path === '/api/user/login') {
        let obj = {
            user_openid: 45,
            user_wxname: 'chenshupei',
            user_city: '温州',
            user_province: '浙江',
            user_gender: '2',
            // user_createDate: '2021-05-25 10:29:00'
        }
        let userinfo = await createUserinfo(obj)

        userinfo.message = '恭喜你，这是一条成功消息';
        console.log(userinfo);
        if (userinfo != '') {
            return new SuccessModel(userinfo)
        }
        return new ErrorModel(userinfo)
    }
    // 查询userinfo 列表
    if (req.method === 'GET' && req.path === '/api/user/getlist') {
        let userData = await getUserList()
        if (userData != '') {
            return new SuccessModel(userData)
        }
        return new ErrorModel(userData)
    }

    return null
}




module.exports = { hendleUsersRoute }