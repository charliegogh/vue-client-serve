const request = require('request')
const util = require('util')
const fs = require('fs') //引入 fs 模块
const accessTokenJson = require('./access_token')//引入本地存储的 access_token
const Base64 = require("js-base64").Base64;
const sign = require("./sign.js");
const OAuth = require('wechat-oauth');
class wechat {
    constructor(config) {
        //设置 WeChat 对象属性 config
        this.config = config;
        //设置 WeChat 对象属性 token
        this.token = config.token;
        //设置 WeChat 对象属性 appID
        this.appID = config.appID;
        //设置 WeChat 对象属性 appScrect
        this.appScrect = config.appScrect;
        //设置 WeChat 对象属性 apiDomain
        this.apiDomain = config.apiDomain;
        //设置 WeChat 对象属性 apiURL
        this.apiURL = config.apiURL;
    }
    /*获取access_token*/
    getAccessToken() {
        // var that = this;
        return new Promise(resolve => {
            //获取当前时间
            let currentTime = new Date().getTime();
            //格式化请求地址
            let url = util.format(this.apiURL.accessTokenApi, this.apiDomain, this.appID, this.appScrect);
            /*判断有效期*/
            if (accessTokenJson.access_token === "" || accessTokenJson.expires_time < currentTime) {
                request.get(url, (error, response, body) => {
                    let data=JSON.parse(body)
                    if(error!==null){
                        reject("获取access_token失败 检查getAccessToken函数");
                    }else{
                        accessTokenJson.access_token = data.access_token;
                        accessTokenJson.expires_time = new Date().getTime() + (parseInt(data.expires_in) - 200) * 1000;
                        //更新本地存储的
                        fs.writeFile('./access_token.json', JSON.stringify(accessTokenJson));
                        resolve(accessTokenJson.access_token);
                    }
                })
            } else {
                //将本地存储的 access_token 返回

                resolve(accessTokenJson.access_token);
            }

        })
    }
    getTicket(access_token){
        let url = util.format(this.apiURL.getTicket, this.apiDomain,access_token) ;
        return new Promise((resolve,reject)=>{
            request.get(`${url}&type=jsapi`, function (error, response, body) {
                if(error!==null){
                    reject("获取api_ticket失败 检查getTicket函数");
                }
                resolve(JSON.parse(body));
            });
        });
    }
     async getConfigData(href){
        let configData;
        try{
            const accessTokenData = await this.getAccessToken();
            const ticketData = await this.getTicket(accessTokenData);
            const decodeHref = Base64.decode(href);
            configData = sign(ticketData.ticket,decodeHref);
            configData.appid = this.appID;
        }catch(err){
            //打印错误日志
            console.log(err);
            configData = {};
        }
        return configData;
    }
    login(){
        const client = new OAuth(this.appID,this.appScrect);
        const url = client.getAuthorizeURL(config.mdomain + 'api/wx/callback','','snsapi_userinfo');
        return url

    }
    getUserInfo(code){
        return  new Promise(resolve => {
            const client = new OAuth(this.appID,this.appScrect);
            client.getAccessToken(code, function (err, result) {
                let openid = result.data.openid;
                client.getUser(openid, function (err, result) {
                    resolve(result)
                });
            });
        })
    }
}

module.exports = wechat;
