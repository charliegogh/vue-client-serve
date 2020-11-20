const { visual } = require("../../models");
const router = require("koa-router")();
const base = "/visual/";
const uuid = require("uuid");

router.get(base + "list", async (ctx) => {
  try {
    const res = await visual.findAll();
    ctx.body = {
      code: 0,
      result: res,
    };
  } catch (e) {
    console.log(e);
  }
});
router.get(base + "find", async (ctx) => {
  const { id } = ctx.request.query;
  try {
    const res = await visual.findAll({
      where: {
        id: id,
      },
    });
    ctx.body = {
      code: 0,
      result: res[0],
    };
  } catch (e) {
    console.log(e);
  }
});
router.get(base + "add", async (ctx) => {
  const { id, title, pages } = ctx.request.query;
  try {
    const res = await visual.create({
      id: uuid.v1(),
      title: title,
      pages: pages,
    });
    ctx.body = {
      code: 0,
      result: res,
    };
  } catch (e) {
    console.log(e);
  }
});
router.get(base + "delete", async (ctx) => {
  const { id } = ctx.request.query;
  try {
    const res = await visual.destroy({
      where: {
        id: id,
      },
    });
    ctx.body = {
      code: 0,
      result: "删除成功",
    };
  } catch (e) {
    console.log(e);
  }
});
router.get(base + "edit", async (ctx) => {
  const { id, title, pages } = ctx.request.query;
  console.log(id);
  try {
    await visual.update(
      {
        title: title,
        pages: pages,
      },
      {
        where: {
          id: id,
        },
      }
    );
    ctx.body = {
      code: 0,
      id:id
    };
  } catch (e) {
    console.log(e);
  }
});
module.exports = router.routes();
