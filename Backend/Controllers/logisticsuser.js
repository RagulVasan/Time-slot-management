const User=require('../Model/logisticsusers');    
exports.savelogisticsuserdata=(req, res, next) => {
    const post = new User({
      logisticsId:req.body.logisticsId,
        logisticsName:req.body.logisticsName,
    });
    post.save().then(createdPost => {
      res.status(201).json({
        message: "User added successfully"
      });
    }).catch(error=>{
      console.log(error);
      res.status(500).json({message:"User creation failed"});
    });
};