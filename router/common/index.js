const router = require("koa-router")();
const upload = require("../../utils/upload.js")
router.post('/upload', upload.single('file'), async (ctx, next) => {
  ctx.body = {
    path: 'http://47.94.149.54:83/file/'+ctx.req.file.filename
  }
})


module.exports = router.routes();
