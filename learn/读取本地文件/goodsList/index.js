const router = require('koa-router')();
var fs=require('fs');
/**
 * 用户权限信息
 */
router.get('/goodsList', async (ctx) => {
    //fs.writeFile写入文件
    console.log('读取文件');
    const result =await readFile()
    ctx.body = result
})

function readFile(){
    return new Promise(resolve=>{
        fs.readFile(__dirname+'/data.json','utf8',function (err,data) {
            console.log(__dirname+'data.json');
            
            if (err){
                return false
            }
            resolve(JSON.parse(data))
        })
    })
}
module.exports = router.routes()
