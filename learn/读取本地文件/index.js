const router = require('koa-router')();
var fs=require('fs');
/**
 * 用户权限信息
 */
router.get('/china', async (ctx) => {
    const result =await readFile()
    ctx.body = result
})
function readFile(){
    return new Promise(resolve=>{
        fs.readFile(__dirname+'/data.json','utf8',function (err,data) {
            if (err){
                return false
            }
            console.log('中国地图数据读取成功~~~~~~~~~~~~~~~~~~~~');
            resolve(JSON.parse(data))
        })
    })
}
module.exports = router.routes()
