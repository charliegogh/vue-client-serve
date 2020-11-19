const { visual } = require("../../models");
const router = require("koa-router")();
const base = "/visual/";
router.get(base + "list", async (ctx) => {
  try {
    // await visual.create({
    //   id:'123222',
    //   title:'123',
    // })
    const res = await visual.findAll();

    console.log(res);
    ctx.body = {
      result: "添加成功",
    };
  } catch (e) {
    console.log(e);
  }
});
module.exports = router.routes();
