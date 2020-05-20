const Slot=require('../Model/slot');    
exports.generateslots=(req, res, next) => {
    const post = new Slot({
      date:req.body.date,
      nine:req.body.nine,
      ten:req.body.ten,
      eleven:req.body.eleven,
      one:req.body.one,
      two:req.body.two,
      three:req.body.three,
      four:req.body.four,
      five:req.body.five,  
    });
    console.log(req.body.slot+"  "+req.body.time);
    console.log(post);
    post.save().then(createdPost => {
      res.status(201).json({
        message: "Slots generated successfully"
      });
    }).catch(error=>{
      console.log(error);
      res.status(500).json({message:"Slots generation failed"});
    });
};

exports.getslotdetails=(req,res,next)=>{
        console.log("Hello world");
        Slot.findOne({date:req.params.date}).then(post=>{
        console.log(post);
        if(post)
        {
             res.status(200).json(post);
        }
        else
        {
             res.status(404).json({message:"Slot not found"});
        }
        }).catch(error=>{
            console.log(error);
            res.status(500).json({message:'Unable to find the Slot details'});
        });
    };

exports.update=(req, res, next) => {
  
  console.log(req.body.loadingslot);
  console.log(req.body.date);
  console.log(req.body.timeslot);
  console.log(req.body.id);
  console.log(req.body.time);
  var query={};
  //var id={};
  query["_id"]=req.body.id;
  var update={};
  query[req.body.timeslot+"."+"slot."+req.body.loadingslot]="Not Booked";
  console.log(query);
  var data={}
    data[req.body.timeslot+".slot."+req.body.loadingslot]="Booked";
    data[req.body.timeslot+".time."+req.body.loadingslot]=req.body.time;
    data[req.body.timeslot+".orderId."+req.body.loadingslot]=req.body.orderId;
    console.log(data)
    update["$set"]=data;
    var dec={};
    dec[req.body.timeslot+".availableslots"]=-1;
    
    update["$inc"]=dec;
    console.log(update);      
    Slot.updateOne(query,update).then(result => {
      console.log(result);
        if(result.n>0)
        res.status(200).json({ message: "Update successful!" });
        else
        res.status(200).json({ message: "Slot is already booked" });
      }).catch(error=>{
        console.log(error);
        res.status(500).json({message:"Post updation failed"});
      });
   };

   exports.deleteslotdetail=(req, res, next) => {
    //console.log(req.body)
   var query={};
   query[req.body.timeslot+"."+"slot."+req.params.slot]="Not Booked";
   query[req.body.timeslot+".time."+req.params.slot]="Not Booked";
   query[req.body.timeslot+".orderId."+req.params.slot]="Not Booked";
   var update={};
   //query[req.body.timeslot+"."+"slot."+req.body.loadingslot]="Not Booked";
   console.log(query);
     update["$set"]=query;
     var dec={};
     dec[req.body.timeslot+".availableslots"]=1;
     
     update["$inc"]=dec;
     console.log(update);
     
     Slot.updateOne({date:req.body.date},update).then(result => {
       console.log(result);
         if(result.n>0)
         res.status(200).json({ message: "Update successful!" });
         else
         res.status(200).json({ message: "Slot is already booked" });
       }).catch(error=>{
         console.log(error);
         res.status(500).json({message:"Post updation failed"});
       });
};

   exports.reschedule=(req, res, next) => {
     //console.log(req.body)
    var query={};
    query["_id"]=req.body.slotid;
    query[req.body.timeslot+"."+"slot."+req.body.loadingslot]="Not Booked";
    var update={};
    //query[req.body.timeslot+"."+"slot."+req.body.loadingslot]="Not Booked";
    console.log(query);
    var data={}
      data[req.body.timeslot+".slot."+req.body.loadingslot]="Booked";
      data[req.body.timeslot+".time."+req.body.loadingslot]=req.body.time;
      data[req.body.timeslot+".orderId."+req.body.loadingslot]=req.body.orderId;
      data[req.body.oldtimeslot+".slot."+req.body.oldslot]="Not Booked";
      data[req.body.oldtimeslot+".time."+req.body.oldslot]="";
      data[req.body.oldtimeslot+".orderId."+req.body.oldslot]="";
      console.log(data)
      update["$set"]=data;
      var dec={};
      dec[req.body.oldtimeslot+".availableslots"]=1;
      dec[req.body.timeslot+".availableslots"]=-1;
      
      update["$inc"]=dec;
      console.log(update);
      
      Slot.updateOne(query,update).then(result => {
        console.log(result);
          if(result.n>0)
          res.status(200).json({ message: "Update successful!" });
          else
          res.status(200).json({ message: "Slot is already booked" });
        }).catch(error=>{
          console.log(error);
          res.status(500).json({message:"Post updation failed"});
        });
};
