/**
 * @author charlie
 * @date 2019/2/17
 * @Description:
 * 数据库接口测试
 */
const DB=require('../model/db.js');
exports.users=async (ctx,next)=>{
    let result=await DB.find('userInfo',{})
    ctx.body = {
        success: true,
        result
    }
}
