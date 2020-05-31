const router = require('koa-router')()
const {goodsModel} = require('../../../model/mongodb/db')
/**
 * 添加商品
 */
router
    .post('/addGoods',async (ctx)=>{
        const {state,msg} = await addGoods( ctx.request.body)
        if (state) {
            ctx.body = {
                code: '200',
                msg: msg
            }
        }
    })


/**
 * 获取商品列表
 */
router
    .post('/getGoodsList',async (ctx)=>{
        const {pageNo,pageSize}=ctx.query
        return new Promise((resolve, reject) => {
            goodsModel.find((err, ret) => {
                resolve(
                    ctx.body={
                        code:'200',
                        data:ret
                    }
                )
            })
              /*  .skip(Number(pageNo) * Number(pageSize))
                .limit(Number(pageNo))
                .sort({'_id':-1})*/
        })
    })

/**
 * 分页查找商品
 * @param pageNo
 * @param pageSize
 * @returns {Promise<unknown>}
 */
function findGoods(pageNo,pageSize) {
    return new Promise((resolve, reject) => {
        goodsModel.find()
            .skip(pageNo * 5)
            .limit(pageNo)
            .sort({'_id':-1})
        // goodsModel.find((err, ret) => {
        //     console.log(ret);
        //     resolve({state: true, data: ret})
        // })
    })
}
function addGoods(from) {
    return new Promise((resolve, reject) => {
        const model = new goodsModel(from)
        model.save(function (err, ret) {
            if (err) {
                console.log(err);
            } else {
                resolve({state: true, msg: '添加成功'})
            }
        })
    })
}
module.exports=router.routes()
