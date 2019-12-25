'use strict'
const router = require('koa-router')()
const jwt = require('jsonwebtoken')
const secret = 'charlie' // 加密key
/**
 * 用户权限信息
 */
router
  .post('/login', (ctx) => {
      const { username } = ctx.request.body
    if (username === 'admin') { // 如果访问的是admin 种植cookie
      ctx.body = {
        code: 'success',
        username: 'admin',
        token: jwt.sign({ username: 'admin' }, secret, { /* 生成token的主题信息 */
          expiresIn: 2000 // 20min  过期
        })
      }
    } else {
      ctx.body = {
        code: 1,
        data: '用户名不存在'
      }
    }
  })
router
  .post('/getUserData', (ctx) => {
    const { token } = ctx.request.body
    jwt.verify(token, secret, (err, decode) => { // 验证token的可靠性
      if (err) { // token 过期
        ctx.body = {
          code: 1,
          data: 'token失效请重新登录'
        }
      }
      ctx.body = {
        code: 'success',
        username: 'admin'
      }
    })
  })
router
    .get('/roleAuth', (ctx) => {
        ctx.body = {
            menuList: [
                /*      {
                  pid: -1,
                  name: '首页',
                  id: 1,
                  auth: 'index',
                }, */
                {
                    pid: -1,
                    name: '权限测试',
                    id: 2,
                    auth: 'auth_test'
                },
                {
                    pid: 2,
                    name: '页面权限',
                    id: 3,
                    auth: 'page_auth'
                },
                {
                    pid: 2,
                    name: '角色权限',
                    id: 4,
                    auth: 'role_auth'
                }
            ]
        }
    })
module.exports = router.routes()
