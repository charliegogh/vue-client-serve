const Koa = require("koa");
const SocketServer = require("ws").Server;
app = new Koa();
/* 开启服务 */
const server = app.listen(8890, on);
const wss = new SocketServer({ server });
wss.on("open", function open() {
  console.log("connected");
});
wss.on("close", function open() {
  console.log("disconnected");
});
wss.on("connection", function open(ws) {
  //连接时执行此 console 提示
  console.log("Client connected"); // 对message设置监听，接收从客户端发送的消息
  //固定发送最新消息给客户端
  const sendNowTime = setInterval(() => {
    ws.send('哈哈哈');
  }, 1000);
  // ws.on("message", (data) => {
  //   //data为客户端发送的消息，将消息原封不动返回回去
  //   ws.send(data);
  // });
  // 当WebSocket的连接关闭时执行
  ws.on("close", () => {
    console.log("Close connected");
  });
});

function on() {
  const port = server.address().port;
  console.log(
    `server port ${port} listening and open browser with http://localhost:${port}....`
  );
}
