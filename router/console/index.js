const account = require('./account'),
    getAreaData = require('./area')
    wechat = require('./area')
    goods =require('./goods')
router = require('koa-router')();
router.use(account);
router.use(getAreaData);
router.use(wechat);
router.use(goods);
const db = require('../../model/mongodb/db')
router.get('/', async (ctx, next) => {
    const params = ctx.request.body
    const Goods = db.db.model('goods', db.listSchema) //第一个‘db’是require来的自定义的，第二个‘db’是取到连接到mongodb的数据库，model代指实体数据(根据schema获取该字段下的数据，然后传给Goods))
    ctx.body = await new Promise((resolve, reject) => {//ctx.body是ctx.response.body的缩写,代指响应数据
        Goods.find({categoryId: params.id}, (err, docs) => {
            if (err) {
                reject(err)
            }
            resolve({
                code: 0,
                errMsg: 'success',
                data: docs
            })
        })
    })
})
module.exports = router.routes();
