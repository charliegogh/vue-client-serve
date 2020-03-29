'use strict';
const register=require('./register'),
      signin=require('./signin'),
      router=require('koa-router')();
    router
        .get('/',(ctx)=>{
            ctx.body={
                "status":"ok"
            }
        })
    router.use('/register',register)
    router.use('/signin',signin)
module.exports=router.routes();
