// DB=require('../model/db.js'),
const account = require('./account'),
    table = require('./table')
// area = require('./area')
// goods=require('./goods')
router = require('koa-router')();
router.get('/', (ctx) => {
    ctx.body = {
        "status": "跨域测试"
    }
});
router.use(account);
// router.use(area);
// router.use('/wx',wx);  //微信接口授权
router.use(table);
module.exports = router.routes();
