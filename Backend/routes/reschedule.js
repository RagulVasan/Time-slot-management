const express= require('express');
const router=express.Router();
const rescheduleorder=require('../Controllers/slot');
router.put("",rescheduleorder.reschedule);
router.put("/:slot",rescheduleorder.deleteslotdetail);
module.exports = router; 