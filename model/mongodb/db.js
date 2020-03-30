const mongoose =require('mongoose'),
    config=require('../../config')
const db = mongoose.createConnection(config.dbUrl) //建立与shop数据库的连接
// 模型通过Schema界面定义。
var Schema = mongoose.Schema;
const listSchema = new Schema({
    name: String,
})
const userSchema = new Schema({
    phone: Number,
    pwd: String,
})
const UserModel = db.model('users',userSchema);
module.exports = {
    db,
    listSchema,
    UserModel
}
