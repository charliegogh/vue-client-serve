// DB=require('../model/db.js'),
// const console = require('./console');
// const wrap = require('./wrap');

// const middle = require('./middle');
const router = require('koa-router')();
const models = require('../model/sequelize');
router
    .get('/test', async (ctx)  => {
        try {
            const res = await models.sys_user.findAll()
            ctx.body={
                result:res
            }
        }catch (e) {
            console.log(e);
        }
    })
// router.use(console);
// router.use(wrap);
// router.use(middle)




module.exports = router.routes();


