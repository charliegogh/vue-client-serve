const wss = new WebSocket.Server({ port: 8889 });
module.exports=wss=>{
    wss.on('open', function open() {
        console.log('connected');
    });
    wss.on('close', function open() {
        console.log('disconnected');
    });
    wss.on('connection', function open() {
        const ip = req.connection.remoteAddress;
        const port = req.connection.remotePort;
        const clientName = ip + port;

        console.log('%s is connected', clientName)

        // 发送欢迎信息给客户端
        ws.send("Welcome " + clientName);

        ws.on('message', function incoming(message) {
            console.log('received: %s from %s', message, clientName);

            // 广播消息给所有客户端
            server.clients.forEach(function each(client) {
                if (client.readyState === WebSocket.OPEN) {
                    client.send( clientName + " -> " + message);
                }
            });

        });
    });
}
