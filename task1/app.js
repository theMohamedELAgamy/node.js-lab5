let express =require('express')
let indexrout=require('./routes/home.js')
let db_routes=require('./routes/db_rout.js')
let mongoose=require('mongoose')
var app=express()
mongoose.connect('mongodb://localhost/employess',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.json())
indexrout(app)
db_routes(app)


module.exports=app