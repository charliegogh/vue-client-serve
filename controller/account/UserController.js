/**
 * @author charlie
 * @date 2019/3/3
 * @Description:
 * 注册
 */
let DB = require('../../model/db.js');

class UserController {
    // 用户注册
    async register(ctx) {
        /**
         * 登录
         * 查表
         */
        let account = ctx.request.body
        let phone = account.phone
        await DB.find('users', {
            phone
        }).then((res) => {
            if (!res.length) {
                var resData = {
                    'phone': account.phone,
                    'password': account.password
                }
                DB.insert('users', resData)
                ctx.body = {
                    code: 1000,
                    msg: '注册成功',
                    account: resData
                }
            } else {
                /*已经注册了*/
                ctx.body = {
                    code: 1001,
                    msg: '用户已注册',
                    account: res[0]
                }
            }
        })
    }

    async signin(ctx) {
        let account = ctx.request.body
        let phone = account.phone
        await DB.find('users', {
            phone
        }).then((res) => {
            if (!res.length) {
                ctx.body = {
                    code: 1002,
                    msg: '你未注册'
                }
            } else {
                /*已经注册了*/
                ctx.body = {
                    code: 1001,
                    account: res[0]
                }
            }
        })
    }
}

module.exports = new UserController();

