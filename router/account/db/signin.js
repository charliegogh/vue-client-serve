'use strict';
const router=require('koa-router')();
const userctrl  =require('../../controller/account/UserController')
router
    .post('/',userctrl.signin)
module.exports=router.routes();