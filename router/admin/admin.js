var router=require('koa-router')();
var user=require('./user.js');
var focus=require('./focus.js');
//配置admin的子路由  层级路由
router.get('/',(ctx)=>{
    ctx.body='后台管理系统首页'
});
router.use('/user',user);
router.use('/focus',focus);
module.exports=router.routes();