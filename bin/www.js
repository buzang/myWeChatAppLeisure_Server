const http = require('http')
const { severHendle } = require('../app')
    // 端口号 3000
let prot = 3000;
// 服务器内容
const server = http.createServer(severHendle);
// 启动服务器
server.listen(prot, () => {
    console.log(`Server runing at prot:${prot}....`);
})