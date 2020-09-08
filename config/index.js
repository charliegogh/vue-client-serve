module.exports = {
    port: 3000, // 服务器端口
    sequelize:{
        username: 'root',
        password: 'fff5201314',
        database: 'charlie',
        host: "39.106.80.125",
        dialect: 'mysql',
        define: {
            underscored: false,
            timestamps: false,  // 禁止时间戳
            paranoid: true,
        }
    },
    token: "charlie",
    // mdomain: 'http://icharlie.club/',
    appID: 'wx730666522764a093',
    targetUrl:'http://www.fiot-service.org.cn/api',  // 代理转发地址
}
