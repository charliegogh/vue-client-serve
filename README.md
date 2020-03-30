#### 项目结构
|-- koa2 
    |-- .babelrc
    |-- .gitignore
    |-- app.js 
    |-- config 配置
    |   |-- index.js
    |-- controller 控制器
    |   |-- test.js
    |   |-- account 账户
    |       |-- UserController.js
    |-- model
    |   |-- wechat  处理微信登录
    |   |   |-- wechat.js   
    |   |-- db.js
    |   |-- dbmongose.js
    |-- public
    |-- router 路由
    |   |-- index.js
    |   |-- account
    |   |   |-- index.js
    |   |   |-- register.js
    |   |   |-- signin.js
    |   |-- admin
    |       |-- admin.js
    |       |-- focus.js
    |       |-- index.js
    |       |-- user.js
    |-- run 日志
    |-- views 视图渲染
        |-- admin
        |   |-- focus
        |   |   |-- add.html
        |   |   |-- edit.html
        |   |   |-- index.html
        |   |-- newscate
        |   |-- user
        |       |-- add.html
        |       |-- edit.html
        |       |-- index.html
        |-- default
            |-- about.html
            |-- case.html
            |-- index.html
#### 
node app

2020年3月30日08:24:59
> 数据库运行 
```javascript
mongod --dbpath D:\mongodb_data\db
```
