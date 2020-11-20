const router = require("koa-router")();
const fs = require("fs");
const path = require("path");
const basename = path.basename(__filename);
fs.readdirSync(__dirname)
  .filter((file) => {
    const result =
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) !== ".js";
    return result;
  })
  .forEach((file) => {
    router.use(require("./" + file));
  });
router.get('/',(ctx) => {
    ctx.body = {
        code: "200",
    };
});
module.exports = router.routes();
