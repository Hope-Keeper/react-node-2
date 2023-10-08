//this file would have all of the routers of authrization
const express=  require('express')
const router=express.Router();
const controller=require('./controller')
const validator=require('./validator')



router.post('/register',
validator.registerValidator(),
controller.validate,
controller.register.bind(controller) //we don t call it bc it is a callback func
)


router.post('/login',
validator.loginValidator(),
controller.validate,
controller.login.bind(controller) //we don t call it bc it is a callback func
)


module.exports=router;