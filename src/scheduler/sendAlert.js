const cron = require('node-cron');
const vechicleData=require("../models/data")

const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);

const cronJob= cron.schedule('1 * * * * *',async function() {
    console.log("working")    
    const finalData=await vechicleData.find({ createdAt: { $gte: fiveMinutesAgo },is_overspeeding:true})
   
    let vechicleIds={}
    for (const element of finalData) {
        if(element.vehicle_id in vechicleIds){
            vechicleIds[element.vehicle_id].push(element)
        }else{
            vechicleIds[element.vehicle_id]=[element]
        }
    }
    //console.log(vechicleIds,"cff")
    for(key in vechicleIds){
        let value=vechicleIds[key]
        let highway = 0
        let city_center = 0
        let commercial = 0
        let residential = 0 
        for(ele of value){
            if(ele.location_type === "highway") highway+=1
            if(ele.location_type === "city_center") city_center+=1
            if(ele.location_type === "commercial") commercial+=1
            if(ele.location_type === "residential") residential+=1
        }
        if(highway>=4 || city_center>=3 || commercial>=2 || residential>=1){
            console.log("alert for Id ", key)
        }
    }
});

module.exports=cronJob