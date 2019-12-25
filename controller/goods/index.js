/**
 * @author charlie
 * @date 2019/2/17
 * @Description:
 * 数据库接口测试
 */
const DB=require('../../model/db.js');
class GoodsControl{
    async getGoods(ctx){
        await DB.find('goods').then(res=>ctx.body={code:0,data:res})
    }
    async getGoodsDetail(ctx){
        let goods=ctx.request.query
        let id=goods.id
        await DB.find('details',{
            id
        }).then(res=>{
            ctx.body={
                code:0,
                data:res
            }
        })
    }
}
module.exports=new GoodsControl()
