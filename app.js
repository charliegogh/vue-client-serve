/**
 * @author charlie
 * @Description:
 */
'use strict';
const Koa = require('koa'),
    router = require('koa-router')(),
    bodyParser = require('koa-bodyparser'),  // body 信息解析
    cors = require('koa2-cors'), //跨域
    config = require('./config'), //全局配置
    app = new Koa()
/* bodyParser */
app.use(bodyParser({
    enableTypes: ['json', 'form', 'text']
}))
/* 跨域 */
app.use(cors({
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}))
/* 路由 */
router.use(require('./router'));
// 开启路由 (必须项)
app.use(router.routes()).use(router.allowedMethods());
/* 开启服务 */
const server = app.listen(config.port, on);
function on() {
    const port = server.address().port
    console.log(`server port ${port} listening and open browser with http://localhost:${port}....`);
}
