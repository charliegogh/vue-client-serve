const router = require('koa-router')()
/**
 * 用户权限信息
 */
router.get('/goods', (ctx) => {
    ctx.body = {
        sku_list: [
            {
                "id":2,
                "price":77.76,
                "discount_price":null,
                "online":true,
                "img":"",
                "title":"金属灰·七龙珠",
                "spu_id":2,
                "category_id":17,
                "root_category_id":3,
                "specs":[
                    {
                        "key_id":1,
                        "key":"颜色",
                        "value_id":45,
                        "value":"金属灰"
                    },
                    {
                        "key_id":3,
                        "key":"图案",
                        "value_id":9,
                        "value":"七龙珠"
                    },
                    {
                        "key_id":4,
                        "key":"尺码",
                        "value_id":14,
                        "value":"小号 S"
                    }
                ],
                "code":"2$1-45#3-9#4-14",
                "stock":5
            },
        ],
    }
})
module.exports = router.routes()
