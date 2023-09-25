const mongoose=require('mongoose')

mongoose.connect("mongodb://localhost:27017/alerts",{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false
})