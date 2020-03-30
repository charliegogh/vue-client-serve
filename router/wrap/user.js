const router = require('koa-router')(),
    md5 = require('md5')
const {UserModel} = require('../../model/mongodb/db')
router.post(
    '/wrap/login', async (ctx) => {
        const from = ctx.request.body
        const data = await findUser(from, 'login')
        if (data.state) {
            ctx.body = {
                code: '200',
                data: data
            }
        } else {
            ctx.body = {
                code: '400',
                data: data.msg
            }
        }
    }
)
router.post(
    '/wrap/register', async (ctx) => {
        let from = ctx.request.body
        from.pwd = md5(from.pwd)
        const isRegister = await findUser(from, 'register')
        /* 是否可以注册 */
        if (isRegister.state) {
            const addUser = await addUser(from)
            if (addUser.state){
                ctx.body = {
                    code: '200',
                    msg: addUser.msg
                }
            }
        } else {
            ctx.body = {
                code: '400',
                msg: isRegister.msg
            }
        }

    }
)
/* 查找用户 */
function findUser(from, type) {
    return new Promise((resolve, reject) => {
        const {phone, pwd} = from
        UserModel.find({phone}, (err, ret) => {
            if (err) {
                console.log('查询失败')
            } else {
                if (type === 'login') {
                    if (ret && ret.length === 0) {
                        resolve({state: false, msg: '该账号尚未注册'})
                    } else {
                        if (pwd !== ret[0].pwd) {
                            resolve({state: false, msg: '密码错误'})
                        } else {
                            resolve({state: true, data: ret[0]})
                        }
                    }
                } else {
                    if (ret && ret.length !== 0) {
                        resolve({state: false, msg: '该账号已注册'})
                    } else {
                        resolve({state: true})
                    }
                }

            }
        })
    })
}
/*添加用户*/
function addUser (from){
    console.log(from);
    return new Promise((resolve, reject) => {
        UserModel.save(from,(err, ret) => {
            console.log(ret);
            resolve({state:true,msg:'注册成功'})
        })
    })
}
module.exports = router.routes()
