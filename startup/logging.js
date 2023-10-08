require('express-async-errors');
const winston=require('winston');
const debug=require('debug')('app:main');

module.exports=function (){
///////////////////////////////////// handling the errors of syncron outside of routes/////////
process.on('uncaughtException',(ex)=>{
   debug(ex);
    process.exit(1);
})
//////////////////////////////////////handling the errors of asyncron outside of routes////////////////////
process.on('unhandledRejection',(ex)=>{
    debug(ex);
    process.exit(1);
})
/////////////////////////////////
}