const express=require('express')
require('./db/moongose')
const router=require("./router/alert")
const cronJob=require("./scheduler/sendAlert")

const app=express()
const port=process.env.PORT || 3000

app.use(express.json())
app.use(router)
cronJob.start()


app.listen(port,()=>{
    console.log('Server is up on the port '+port)
})