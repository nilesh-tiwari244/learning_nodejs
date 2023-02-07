const express = require('express');
const router=express.Router();

const {updatepeople,deletepeople}=require('../controller/apipostman');

router.put('/people/:id',updatepeople)
router.delete('/people/:id',deletepeople);

module.exports=router;