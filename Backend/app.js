const express= require ( 'express');
const cors=require("cors");
const bodyparser=require('body-parser');
app=express();
const mongoose=require('mongoose');
const orderroute=require('./routes/order');
const postsroute= require("./routes/appointment");
const logisticsusersroute= require("./routes/logisticsuser")
const slotsroute=require("./routes/slot");
const orderlist=require("./routes/orderlist");
const reschedule=require("./routes/reschedule");

mongoose.connect("mongodb+srv://ragul_20:hello@cluster0-dqexm.mongodb.net/timeslot?retryWrites=true&w=majority").
        then(()=>
        {
            console.log("Connected successfully");
        })
        .catch
        (()=>
            {
            console.log("Connection failed");
            }
        );

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

//app.use("/images",express.static(path.join("backend/images")));
app.use("/post",postsroute);
app.use("/post/order",orderroute);
app.use("/logistics",logisticsusersroute);
app.use("/slots",slotsroute);
app.use("/orderlist",orderlist);
app.use("/reschedule",reschedule);
module.exports=app; 