'use strict';
const router=require('koa-router')();
const userctrl  =require('../../controller/account/UserController')
router
    .post('/',userctrl.register)
module.exports=router.routes();