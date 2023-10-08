const jwt=require("jsonwebtoken")
const config=require('config')
const User=require('./../models/user')

async function isLoggin(req,res,next){// f developer should send token with a key in header
let userToken=req.header("x-auth-token")
if(!userToken) res.status(401).send('access denied');

try {
    const decode=jwt.verify(userToken,config.get("jwt_key"));
    const user=await User.findById(decode._id);
    console.log(user);
    req.user=user;
    next();
} catch (ex) {
    res.status(400).send('invalid token')
}




}





async function isAdmin(req,res,next){


if(!req.user.isAdmin){
    res.status(403).send('access just for admins ');
    
}next();
}

module.exports={
    isLoggin,isAdmin
}