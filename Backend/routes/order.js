const express= require('express');
const router=express.Router();
const ordercontroller=require('../Controllers/order');

router.get('/:orderid',ordercontroller.getorderdetails);
router.post("",ordercontroller.postorder);


module.exports = router;
