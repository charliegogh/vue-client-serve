const router = require("koa-router")();
const jwt = require("jsonwebtoken");
const secret = "charlie"; // 加密key
const { sys_user } = require("../../models");
/**
 * 登录
 */
router.post("/login", async (ctx) => {
  try {
    const { username } = ctx.request.body;
    if (username === "admin") {
      const res = await sys_user.findOne({
        where: {
          username
        }
      })
      // 如果访问的是admin 种植cookie
      ctx.body = {
        code: "200",
        token: jwt.sign({ id: res.id }, secret, {
          /* 生成token的主题信息 */
          expiresIn: 2000, // 20min  过期
        }),
      };
    } else {
      ctx.body = {
        code: 201,
        data: "用户名不存在",
      };
    }
  } catch (e) {
    console.log(e);
  }
});
/**
 *  获取用户信息
 */
router.post("/getUserData", async (ctx) => {
  await jwtVerify(ctx);
  ctx.body = {
    code: "200",
  };
});

function jwtVerify(ctx) {
  const { token } = ctx.request.body;
  jwt.verify(token, secret, (err,decode) => {
    console.log(token+'token');
    // console.log(decode.id+'解析id');
    // 验证token的可靠性
    if (err) {
      // token 过期
      ctx.body = {
        code: 401,
        data: "token失效请重新登录",
      };
    }
  });
}

module.exports = router.routes();
