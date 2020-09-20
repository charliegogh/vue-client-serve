const router = require('koa-router')(),
    md5 = require('md5')
const {UserModel} = require('../../model/mongodb/db')
// 登录
router.post(
    '/wrap/login', async (ctx) => {
        const from = ctx.request.body
        const data = await findUser(from, 'login')
        if (data.state) {
            ctx.body = {
                code: '200',
                data: data.data._id
            }
        } else {
            ctx.body = {
                code: '400',
                msg: data.msg
            }
        }
    }
)
// 注册
router.post(
    '/wrap/register', async (ctx) => {
        let from = ctx.request.body
        from.pwd = md5(from.pwd)
        const isRegister = await findUser(from, 'register')
        /* 是否可以注册 */
        if (isRegister.state) {
            const {state,msg} = await addUser(from)
            if (state) {
                ctx.body = {
                    code: '200',
                    msg: msg
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
// 忘记密码
router.post(
    '/wrap/perInformation',async (ctx)=>{
        const {token}=ctx.request.body
        const data = await perInformation(token)
        ctx.body = {
            code: '200',
            data: data
        }
    }
)
function perInformation(userId) {
    return new Promise((resolve, reject) => {
        let _id=userId
        UserModel.find({_id}, (err, ret) => {
            resolve(ret[0])
        })
    })
}
/* 查找用户 */
function findUser(from, type) {
    return new Promise((resolve, reject) => {
        const {phone, pwd} = from
        UserModel.find({phone}, (err, ret) => {
            if (err) {
                console.log('查询失败')
            } else {
                if (type === 'login') {
                    /* 登录 */
                    if (ret && ret.length === 0) {
                        resolve({state: false, msg: '该账号尚未注册'})
                    } else {
                        if (md5(pwd) !== ret[0].pwd) {
                            resolve({state: false, msg: '密码错误'})
                        } else {
                            resolve({state: true, data: ret[0]})
                        }
                    }
                } else {
                    /* 注册 */
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
function addUser(from) {
    return new Promise((resolve, reject) => {
        const model = new UserModel(from)
        model.save(function (err, ret) {
            if (err) {
                console.log(err);
            } else {
                resolve({state: true, msg: '注册成功'})
            }
        })
    })
}

module.exports = router.routes()
