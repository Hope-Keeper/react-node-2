const {validationResult}=require('express-validator')
const User=require('./../models/user')
const auto=require('auto-bind')


module.exports=class{

    constructor(){
        auto(this)
        this.User=User
    }
    validationbody(req,res){
        const result=validationResult(req);
        if(!result.isEmpty()){
            const errors=result.array();
            const  m=[];
            errors.forEach(err=>m.push(err.msg));
            res.status(400).json({
                message:'validation error',
                data:m
            })
            return false;
        }
        return true;
    }








    validate(req,res,next){
        if(!this.validationbody(req,res)) {return}

        next();
    }




// sending response
//انسجام و فرمتی برای پاسخ ها
response({res,message,code=200,data={}}){
res.status(code).json({message,data});
}







}