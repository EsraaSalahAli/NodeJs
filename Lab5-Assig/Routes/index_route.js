module.exports=(app)=>{
    app.get('/',(req,res)=>{
        res.send("welcome to Uber")
    })
}