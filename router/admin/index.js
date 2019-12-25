'use strict';
const user=require('./user'),
      focus=require('./focus'),
      router=require('koa-router')();
router
    .get('/',(ctx)=>{
        ctx.body={
            "status":"ok"
        }
    })
router.use('/user',user)
router.use('/focus',focus)
module.exports=router.routes();
