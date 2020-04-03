const router = require('koa-router')()
router.post(
    '/upload',async (ctx) =>{
        const from = ctx.request.body
        ctx.body = {
            code: '200',
            msg: 'success'
        }
    }
)
module.exports = router.routes();
