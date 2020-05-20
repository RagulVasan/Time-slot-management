const Post=require('../Model/appointment');    
exports.createpost=(req, res, next) => {
    const post = new Post({
      orderId:req.body.orderId,
        companyName:req.body.companyName,
        date:req.body.date,
        storename:req.body.storename,
        landmark:req.body.landmark,
        location:req.body.location,
        bookingstatus:req.body.bookingstatus,
    });
    post.save().then(createdPost => {
      res.status(201).json({
        message: "Post added successfully",
        post: {
          ...createdPost,
          id: createdPost._id
        }
      });
    }).catch(error=>{
      console.log(error);
      res.status(500).json({message:"Post creation failed"});
    });

  };
  exports.getposts=(req,res,next)=>{
    Post.find().then(documents=>{
      res.status(200).json({
        message:"Posts fetched successfully",
        posts:documents
      });
    }).catch(error=>{
      res.status(500).json({message:"Unable to get post"});
    });
   };

exports.getappointment=(req,res,next)=>{
  console.log(req.params.appointmentid);
    Post.findById(req.params.appointmentid).then(post=>{
      console.log(post.orderId);
      if(post)
      {
       res.status(200).json(post);
      }
      else
      {
        res.status(404).json({message:"Post not found"});
      }
    }).catch(error=>{
      res.status(500).json({message:'Unable to delete the post'});
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
  
  exports.update=(req, res, next) => {
    const post = new Post({
      orderId:req.body.orderId,
        companyName:req.body.companyName,
        date:req.body.date,
        storename:req.body.storename,
        landmark:req.body.landmark,
        location:req.body.location,
        bookingstatus:req.body.bookingstatus,
        _id:req.params.appointmentid
    });
    Post.updateOne({ _id: req.params.appointmentid}, post).then(result => {
      if(result.n>0)
      res.status(200).json({ message: "Update successful!" });
      else
      res.status(401).json({ message: "Unauthorized user!" });
    }).catch(error=>{
      consoel.log(error);
      res.status(500).json({message:"Post updation failed"});
    });
 };
 exports.updatebookingdetails=(req, res, next) => {
  var data={};
  data["bookingstatus"]="Not Booked";
  var query={};
  query["$set"]=data;
  Post.updateOne({ orderId: req.body.orderId}, query).then(result => {
    console.log(result);
    if(result.n>0)
    res.status(200).json({ message: "Update successful!" });
    else
    res.status(401).json({ message: "Unauthorized user!" });
  }).catch(error=>{
    console.log(error);
    res.status(500).json({message:"Post updation failed"});
  });
};
 exports.Delete=(req,res,next)=>{
   console.log(req.params);
  Post.deleteOne({_id:req.params.appointmentid }).then(result=>{
    if(result.n>0)
      res.status(200).json({ message: "Deleted successfully!" });
      else
      res.status(401).json({ message: "Unauthorized user!" });
  });
  //res.status(200).json({message:"post delted successfully"});
 };