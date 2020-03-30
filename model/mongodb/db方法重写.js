/*DB*/
let   MongoDB=require('mongodb'),
      MongoClient =MongoDB.MongoClient,
      ObjectID = MongoDB.ObjectID;
      config=require('../config');
class Db {
    static getInstance(){   /*单例   如果实例存在进行实例化,如果不存在不去实例化*/
        if(!Db.instance){
            Db.instance=new Db();
        }
        return  Db.instance;
    }

    constructor(){
        this.dbClient='';/*属性 放db对象*/
        this.connect()
    }
    connect(){
        let _that=this;
        return new Promise((resolve,reject)=>{
            if(!_that.dbClient){     /*解决数据库多次连接的问题*/
                MongoClient.connect(config.dbUrl,config.option,(err,client)=>{
                    if(err){
                        reject(err)
                    }else{
                        _that.dbClient=client.db(config.dbName);
                        resolve(_that.dbClient)
                    }
                })
            }else{
                resolve(_that.dbClient);
            }

        })
    }
    find(collectionName,json){
        return new Promise((resolve,reject)=>{
            this.connect().then((db)=>{
                var result=db.collection(collectionName).find(json);
                result.toArray(function(err,docs){
                    if(err){
                        reject(err);
                        return;
                    }
                    resolve(docs);
                })
            })
        })
    }
    insert(collectionName,json){
        return new Promise((resolve,reject)=>{
            this.connect().then((db)=>{
                db.collection(collectionName).insertOne(json,(err,result)=>{
                    if (err){
                        reject(err)
                    }else {
                        resolve(result)
                    }
                })
            })
        })
    }
    update(collectionName,json1,json2){
        return new Promise((resolve,reject)=>{
            this.connect().then((db)=>{
                db.collection(collectionName).updateOne(json1,{$set:json2},(err,result)=>{
                    if (err){
                        reject(err)
                    }else {
                        resolve(result)
                    }
                })
            })
        })

    }
    remove(collectionName,json){
        return new Promise((resolve,reject)=>{
            this.connect().then((db)=>{
                db.collection(collectionName).removeOne(json,(err,result)=>{
                    if (err){
                        reject(err)
                    }else {
                        resolve(result)
                    }
                })
            })
        })
    }
    getObjectId(id){

        return new ObjectID(id);
    }
}
module.exports=Db.getInstance();
