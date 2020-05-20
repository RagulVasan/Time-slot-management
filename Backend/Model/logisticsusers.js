const mongoose = require("mongoose");

const logisticSchema = mongoose.Schema({
    logisticsId:{type:String,required:true},
    logisticsName:{type:String,required:true},
    
});
module.exports = mongoose.model("Logisticsuser", logisticSchema);