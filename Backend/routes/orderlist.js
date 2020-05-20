const express= require('express');
const router=express.Router();
const ordercontroller=require('../Controllers/orderlist');

router.get('/:orderid',ordercontroller.getorder);
router.get("",ordercontroller.getorders);
router.put('/:orderid',ordercontroller.updateorder);
router.delete('/:orderid',ordercontroller.Deleteorder);

module.exports = router;