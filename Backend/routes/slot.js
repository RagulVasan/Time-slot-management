const express= require('express');
const router=express.Router();
const slotgeneration=require('../Controllers/slot');
router.post("",slotgeneration.generateslots);
router.get('/:date',slotgeneration.getslotdetails);
router.put('',slotgeneration.update);
module.exports = router;