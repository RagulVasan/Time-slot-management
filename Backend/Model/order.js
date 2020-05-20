const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    orderId:{type:String,required:true},
    companyName:{type:String,required:true},
    date:{type:String,required:true},
    slot:{type:String,required:true},
    timeslot:{type:String,required:true},
    storename:{type:String,required:true},
    landmark:{type:String,required:true},
    location:{type:String,required:true},
    vehicleNo:{type:String,required:true},
    driverName:{type:String,required:true},
    
});
module.exports = mongoose.model("Order", postSchema);