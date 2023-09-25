const mongoose=require('mongoose')


const vechicleScheme=new mongoose.Schema({
    is_overspeeding:{
        type:Boolean,
        required:true,
        trim:true
    },
    vehicle_id:{
        type:String,
        trim:true,
        lowercase:true
    },
    location_type:{
        type:String,
        trim:true
    },
},{
    timestamps:true
})

const vechicleData=mongoose.model('VechicleScheme',vechicleScheme)

module.exports=vechicleData