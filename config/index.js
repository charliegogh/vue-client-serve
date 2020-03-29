module.exports = {
    port: 3000, // 服务器端口
    // dbhost: '47.105.145.14',
    // dbPort: '3306',
    // dbUser: 'root',
    // dbPassword: 'lckj8520',
    // database: 'mysiteforme',  // 数据表
    dbUrl:'mongodb://localhost:27017/shop',  // 数据库
    token: "charlie",
    // mdomain: 'http://icharlie.club/',
    appID: 'wx730666522764a093',
    appScrect: '186c9f6fb21ca404aa447fc695ac27f0',
    apiDomain: "https://api.weixin.qq.com/",
    apiURL: {
        "accessTokenApi": "%scgi-bin/token?grant_type=client_credential&appid=%s&secret=%s",
        "getTicket": "%scgi-bin/ticket/getticket?access_token=%s"
    }
}
