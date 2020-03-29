const router = require('koa-router')()
const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: '47.105.145.14',
  port: '3306',
  user: 'root',
  password: 'lckj8520',
  database: 'mysiteforme'
})
connection.connect(function (err) {
  if (err) {
    console.error('连接失败: ' + err.stack);
    return;
  }
  console.log('连接成功 id ' + connection.threadId);
});
router.get('/table', async (ctx) => {
  const res =await queryData()
  ctx.body ={
    code: "200",
    data:res[0]
  }
})

function queryData() {
  return new Promise(resolve => {
    connection.query('SELECT * FROM electricity_company WHERE id = "1196264120971632641"', (err, results, fields) => {
      if (err) {
        console.log(err);
      }
      resolve(results)
    })
  })
}

module.exports = router.routes()