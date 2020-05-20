const Post=require('../Model/appointment');  
const Order=require('../Model/order');  
exports.postorder=(req, res, next) => {
  const post = new Order({
    orderId:req.body.orderId,
      companyName:req.body.companyName,
      date:req.body.date,
      storename:req.body.storename,
      landmark:req.body.landmark,
      location:req.body.location,
      slot:req.body.slot,
      timeslot:req.body.time,
      vehicleNo:req.body.vehicleNo,
      driverName:req.body.driverName,
  });
  post.save().then(createdPost => {
    res.status(201).json({
      message: "Post added successfully"
    });
  }).catch(error=>{
    console.log(error);
    res.status(500).json({message:"Post creation failed"});
  });
};

exports.getorderdetails=(req,res,next)=>{
    console.log(req.params.orderid);
      Post.findOne({orderId:req.params.orderid}).then(post=>{
        console.log(post);
        if(post)
        {
         res.status(200).json(post);
        }
        else
        {
          res.status(404).json({message:"Post not found"});
        }
      }).catch(error=>{
        console.log(error);
        res.status(500).json({message:'Unable to find the Order details'});
      });
    };

    
  