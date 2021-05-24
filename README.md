# myWeChatAppLeisure_Server

#### 介绍
wechatApp: Leisuer 服务器端

#### 软件架构


##### node.js 内置模块 =>[http,querystring] 


##### npm包 =>[nodemon,mysql]


#### 安装教程

1.yarn install

#### 使用说明

1.yarn run dev

#### 目录结构
|  文件夹 | 文件名 | 说明 |
| :----: | :----: |:----|
| bin | - | 可执行文件目录 |
| - | www.js | 主要执行文件,web服务器入口 |
| scr/config | - | 配置文件目录 |
| - | dbConfig.js | 数据库配置文件 |
| scr/controller | - | 放置数据库操作类文件目录 |
| - | goodsController.js | 保存对指向goods路由,操作数据库时使用到的自定义函数 |
| - | userController.js | 保存对指向user路由,操作数据库时使用到的自定义函数 |
| scr/database | - | 可执行文件目录 |
|- | mysql.js | 执行连接数据库的JavaScript文件 |
| scr/module | - | 保管数据模型的文件夹目录 |
| - | responseModel.js | 将数据库拿到的数据通过此模型统一包装后返回 |
| scr/routes | - | 路由分化文件目录 |
| - | goodsRouter.js | 通过/goods/的路由请求统一由该JS文件处理 |
| - | usersRouter.js | 通过/users/的路由请求统一由该JS文件处理 |
| ../ | app.js | 处理业务逻辑代码,设置响应头\路由分化等功能 |
