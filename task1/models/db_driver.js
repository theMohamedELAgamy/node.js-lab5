let mongoose=require('mongoose')
let schema=mongoose.Schema
const DriverSchema = new schema({
    email:{
        type:String,
        required:true
    },
    fisrt_name:{
        type:String
    },
    last_name:{
        type:String
    },
    phone:{
        type:String
    },
    username:{
        type:String,
        unique:true
    }


})
let emp =mongoose.model('emp',DriverSchema)
module.exports=emp