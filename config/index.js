module.exports = {
    port: 3000, // 服务器端口
    sequelize:{
        username: 'root',
        password: 'fff123456',
        database: 'gcl_visual',
        host: "47.94.149.54",
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
