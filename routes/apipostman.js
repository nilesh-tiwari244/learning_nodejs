const express = require('express');
const router=express.Router();

const {addpeople,updatepeople,deletepeople}=require('../controller/apipostman');

router.post('/people',addpeople)
router.put('/people/:id',updatepeople)
router.delete('/people/:id',deletepeople);

/* another method:
 router.route('/people').post(addpeople);
 router.route('/people/:id').put(updatepeople).delete(deletepople);
*/
module.exports=router;