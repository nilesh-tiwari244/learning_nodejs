const express = require('express');
const router=express.Router();

const {allpeople,addpeople}=require('../controller/apipeople');

router.get('/',allpeople)
router.post('/',addpeople);

module.exports=router;