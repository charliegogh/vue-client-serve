const mongoose =require('mongoose'),
    config=require('../../config')
const db = mongoose.createConnection(config.dbUrl) //建立与shop数据库的连接
// 模型通过Schema界面定义。
var Schema = mongoose.Schema;
const userSchema = new Schema({
    phone: Number,
    pwd: String,
})
const goodsSchema = new Schema({
    goodsName: String,
    originalPrice: Number,
    goodsPrice:Number,
    goodsStock: Number,
    goodsPic: String,
    goodsSlide: String
})
const UserModel = db.model('users',userSchema);
const goodsModel = db.model('goods',goodsSchema);
module.exports = {
    db,
    UserModel,
    goodsModel
}
