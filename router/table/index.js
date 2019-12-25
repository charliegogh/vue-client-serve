const router = require('koa-router')()
// const DB = require('../../model/db.js');
router.get('/table', async (ctx) => {
  // const data=await DB.find('user', {
  //   userName:'charlie'
  // })
  ctx.body={
      userName:'charlie'
  }
})
module.exports = router.routes()
