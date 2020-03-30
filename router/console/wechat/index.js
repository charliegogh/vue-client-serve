'use strict';
const  router=require('koa-router')();
const  wechat=require('../../model/wechat')
const config=require('../../config')
const Wechat = new wechat(config); //实例wechat 模块
const OAuth = require('wechat-oauth');
const client = new OAuth(config.appID,config.appScrect);
let DB=require('../../model/db.js');
router
    /*获取微信数据接口*/
    .get('/configdata', async (ctx)=>{
        let href=ctx.query.href;
        await Wechat.getConfigData(href).then(data=>{
           ctx.body=JSON.stringify(data)
        })

    })
    .get('/wx_login',async (ctx)=>{
        await ctx.response.redirect(Wechat.login())
    })
    .get('/callback', async (ctx)=>{
        let code = ctx.query.code;
        await Wechat.getUserInfo(code).then(data=>{
            ctx.body=JSON.stringify(data)
            // ctx.response.redirect('http://icharlie.club/#/home')
            // console.log(data);
        })
    })

module.exports=router.routes();
