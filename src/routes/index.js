// managing all routes

const express= require('express')
const router=express.Router();
const authRouter=require('./auth')
const userRouter=require('./auth')
const {isLoggin,isAdmin}=require('./../middlewares/auth')
const adminRouter=require('./admin')
const error=require('./../middlewares/error')


router.use('/auth',authRouter);

router.use('/user',isLoggin,userRouter);

router.use('/admin',isLoggin,isAdmin,adminRouter);

router.use(error);

module.exports=router;