


function home(app){
app.get('/',(req,res)=>{
    res.send("hi from our server")

})
}
module.exports=home