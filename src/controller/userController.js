const { execSQL } = require('../database/mysql')
    // 获取用户列表数据
getUserList = () => {
        let sql = `SELECT * FROM userinfo;`
        return execSQL(sql)
    }
    // 创建用户
createUserinfo = (obj) => {
    const user_openid = obj.user_openid;
    const user_wxname = obj.user_wxname;
    const user_city = obj.user_city;
    const user_province = obj.user_province;
    const user_gender = obj.user_gender;
    // const user_createDate = obj.user_createDate;
    let sql = `INSERT INTO userinfo (user_openid, user_wxname, user_city, user_province, user_gender) 
    VALUES (${user_openid}, '${user_wxname}', '${user_city}', '${user_province}', '${user_gender}')`
    return execSQL(sql, obj)
        // .then(insertedResult => {
        //     console.log('insertedResult', insertedResult);
        //     return {
        //         id: insertedResult.insertId,
        //         message: '添加成功'
        //     }
        // })
}

module.exports = {
    getUserList,
    createUserinfo
}