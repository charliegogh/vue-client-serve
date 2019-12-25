/**
 * @author charlie
 * @Description:
 */
'use strict';
/*实例化koa-router*/
const Koa=require('koa'),
    router=require('koa-router')(),
    bodyParser = require('koa-bodyparser'),
    render = require('koa-art-template'),
    path=require('path'),//路径
    cors = require('koa2-cors'), //配置跨域
    config=require('./config'),//主要配置
    app=new Koa();
    /**
     * bodyParser
     */
    app.use(bodyParser())

    /**
     * 配置跨域跨域
     */
    app.use(cors())

    /**
     * 路由
     */
  const index=require('./router/index')


    /**
     * 配置koa-art-template模板引擎   解.html文件
     */
    render(app, {
        root: path.join(__dirname, 'views'),
        extname: '.html',
        debug: process.env.NODE_ENV !== 'production'
    });

    /**
     * 路由的相关配置
     */
    router.use(index);
    /**
     * 启动路由
     */
    app.use(router.routes()).use(router.allowedMethods());
    const server=app.listen(config.port,on);
    function on() {
        const port = server.address().port
        console.log(`server port ${port} listening and open browser with http://localhost:${port}....` );
    }
