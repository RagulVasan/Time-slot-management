var Order=require('../Model/order');

exports.getorders=(req,res,next)=>{
    Order.find().then(documents=>{
      res.status(200).json({
        message:"Orders fetched successfully",
        orders:documents
      });
    }).catch(error=>{
      res.status(500).json({message:"Unable to get orders"});
    });
   };

exports.getorder=(req,res,next)=>{
    Order.findById(req.params.orderid).then(post=>{
      console.log(post.orderId);
      if(post)
      {
       res.status(200).json(post);
      }
      else
      {
        res.status(404).json({message:"Orders not found"});
      }
    }).catch(error=>{
      res.status(500).json({message:'Unabel to get order'});
    });
  };
exports.updateorder=(req,res,next)=>{
  const post = new Order({
    orderId:req.body.orderId,
      companyName:req.body.companyName,
      date:req.body.date,
      storename:req.body.storename,
      landmark:req.body.landmark,
      location:req.body.location,
      slot:req.body.loadingslot,
      timeslot:req.body.timeslot,
      vehicleNo:req.body.vehicleNo,
      driverName:req.body.driverName,
      _id:req.params.orderid,
  });
  Order.updateOne({ _id: req.params.orderid}, post).then(result => {
    if(result.n>0)
    res.status(200).json({ message: "Order Update successful!" });
    else
    res.status(401).json({ message: "Unauthorized user!" });
  }).catch(error=>{
    console.log(error);
    res.status(500).json({message:"Order updation failed"});
  });
};
exports.Deleteorder=(req,res,next)=>{
 Order.deleteOne({_id:req.params.orderid }).then(result=>{
   if(result.n>0)
     res.status(200).json({ message: "Deleted successfully!" });
     else
     res.status(401).json({ message: "Unauthorized user!" });
 }).catch(error=>{
  console.log(error);
  res.status(500).json({message:"Order deletion failed"});
});
 
};