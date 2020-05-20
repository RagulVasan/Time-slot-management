const express= require('express');
const router=express.Router();
const logisticsusercontroller=require('../Controllers/logisticsuser');
router.post("",logisticsusercontroller.savelogisticsuserdata);
module.exports = router;