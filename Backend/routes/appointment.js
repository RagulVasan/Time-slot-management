const express= require('express');
const router=express.Router();
const postcontroller=require('../Controllers/appointment');
router.post("",postcontroller.createpost);
router.get('',postcontroller.getposts);
router.get('/:appointmentid',postcontroller.getappointment);
router.put('/:appointmentid',postcontroller.update);
router.put('',postcontroller.updatebookingdetails);
router.delete("/:appointmentid",postcontroller.Delete);
module.exports = router; 

