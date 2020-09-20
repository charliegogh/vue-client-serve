const { goods } = require("../../models");
const router = require("koa-router")();
const base = "/goods/";
router.get(base + "add", async (ctx) => {
  try {
    const res = await goods.findAll();
    console.log(res);
    ctx.body = {
      result: "添加成功",
    };
  } catch (e) {
    console.log(e);
  }
});
module.exports = router.routes();
