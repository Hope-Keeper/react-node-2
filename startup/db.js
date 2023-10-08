const mongoose=require('mongoose');
const debug=require('debug')('app:main');
const config=require('config');



module.exports=function (){
    mongoose.connect(config.get('db.address'))
.then((result) => {
   debug("connected"); 
}).catch((err) => {
    debug("not connected");
});
}