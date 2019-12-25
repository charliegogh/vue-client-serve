var mongose =require('mongoose'),
    config=require('../config')
mongose.connect(config.dbUrl)
var MyModel = mongoose.model('Test', new Schema({ name: String }));
MyModel.findOne(function(error, result) {
    result
});
