const mongoose = require("mongoose");

const slots = mongoose.Schema({
    date:{type:String,required:true},
    nine:{type:Object,required:true},
    ten:{type:Object,required:true},
    eleven:{type:Object,required:true},
    one:{type:Object,required:true},
    two:{type:Object,required:true},
    three:{type:Object,required:true},
    four:{type:Object,required:true},
    five:{type:Object,required:true},  

});
module.exports = mongoose.model("Slot", slots);