const http = require('http')
const {wwwSever} = require('../src/app')
// 端口号 3000
let prot =3000;
// 服务器内容
const server = http.createServer(wwwSever);
// 启动服务器
server.listen(prot,()=>{
  console.log(`Server runing at prot:${prot}....`);
})