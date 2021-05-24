
const http = require('http')
const querystring = require('querystring')

const wwwSever =(req,res)=>{
  const url = req.url;
  // 忽略图标请求favicon.con
  if(url != '/favicon.ico'){
    // 以问号为分割 将传入的值保存在req中
    req.query = querystring.parse(url.split('?')[1]) || ''
    // console.log(req.query);
    console.log(req);
    res.end('hello')
  }
}

module.exports={
  wwwSever
}