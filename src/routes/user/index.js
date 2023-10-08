//this file would have all of the routers of authrization
const express=  require('express')
const router=express.Router();
const controller=require('./controller')




router.get('/',

controller.dashboard.bind(controller) //we don t call it bc it is a callback func
)


router.get('/me',

controller.me.bind(controller) //we don t call it bc it is a callback func
)


module.exports=router;