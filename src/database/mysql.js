const mysql = require('mysql')
const { dbconfig } = require('../config/dbConfig.js')




/*
 普通单线程连接 => 每当用户发起查询数据库等请求 都会为其连接一个数据库 如果连接量太过于庞大 会导致服务器宕机
const connection = mysql.createConnection(dbconfig)
 // 开始连接
connection.connect();
// 定义一个execSQL 函数 返回的是一个Promise 对象 为第二个参数[array]设置默认值 如果不传入 则为False 
function execSQL(sql,value = false) {
  const promise = new Promise((reslove, reject) => {
    // 调用connection.query方法 传入的值为 sql语句 值 和Callback 
    connection.query(sql,value, (err, result) => {
      if (err) {
        reject(err);
        return
      }
      reslove(result);
    })
  })
  return promise
}
*/

/* 
  方法二：连接池连接
  在'池'中创建一定数量的连接并保持连接状态 在用户需要在数据库中查询数据时 为其开辟一个连接 使用完毕后归还连接至"池"中 
  连接池的主要操作如下；
（1）建立数据库连接池对象（服务器启动）。
（2）按照事先指定的参数创建初始数量的数据库连接（即：空闲连接数）。
（3）对于一个数据库访问请求，直接从连接池中得到一个连接。如果数据库连接池对象中没有空闲的连接，且连接数没有达到最大（即：最大活跃连接数），创建一个新的数据库连接。
（4）存取数据库。
（5）关闭数据库，释放所有数据库连接（此时的关闭数据库连接，并非真正关闭，而是将其放入空闲队列中。如实际空闲连接数大于初始空闲连接数则释放连接）。
（6）释放数据库连接池对象（服务器停止、维护期间，释放数据库连接池对象，并释放所有连接）。
*/ 

const pool = mysql.createPool(dbconfig);

const execSQL = function(sql,value=false){
  return new Promise((reslove,reject)=>{
    pool.getConnection((err,connection)=>{
      if(err){
        reject(err);
      }else{
        connection.query(sql,value,(err2, result) => {
          if(err2){
            reject(err2)
          }else{
            reslove(result);
          }
          connection.release()
        })
      }
      
    })
  })
}





module.exports = {
  execSQL
}

