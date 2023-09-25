const express=require('express')
const vechicleData=require('../models/data')
const router=new express.Router()

router.post("/event",async(req,res)=>{
    const alert = new vechicleData(req.body);

    try{
        await alert.save()
        res.status(200).send(alert)
    }catch(e){
        res.status(400).send(e)
    }
})

router.get("/alert/:alert_id",async(req,res)=>{
    const alertId=req.params.alert_id
    try{
        const alertData= await vechicleData.findById(alertId)
        res.status(200).send(alertData)
    }catch(e){
        res.status(400).send(e)
    }
})

module.exports=router
