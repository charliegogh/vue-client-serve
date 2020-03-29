/**
 * @author charlie
 * @Description:
 */
'use strict';
/*实例化koa-router*/
const Koa = require('koa'),
    router = require('koa-router')(),
    bodyParser = require('koa-bodyparser'),  // body 信息解析
    // render = require('koa-art-template'), // 模板引擎 解析文件信息
    // path = require('path'), // 路径
    cors = require('koa2-cors'), //跨域
    config = require('./config'), //全局配置
    app = new Koa();
/* bodyParser */
app.use(bodyParser())
/* 跨域 */
app.use(cors({
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}))


/* 模板引擎,解析.html文件*/
/*render(app, {
    root: path.join(__dirname, 'views'),
    extname: '.html',
    debug: process.env.NODE_ENV !== 'production'
});*/
/* api*/
const index = require('./router')
router.use(index);
app.use(router.routes()).use(router.allowedMethods());
const server = app.listen(config.port, on);

function on() {
    const port = server.address().port
    console.log(`server port ${port} listening and open browser with http://localhost:${port}....`);
}
