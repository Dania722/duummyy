const express = require ('express');
const mongoose = require('mongoose');
const cors = require("cors")
const app = express () ; 
const BioModel = require('./models/Bio')



app.use(express.json());
app.use(cors);
mongoose.connect("'mongodb://localhost:27017/Bio" , {
    useNewUrlParser:true , 
});

app.post("/insert" ,async(req,res) => {

 const Name=req.body.Name
 const emai = req.body.emai

    
const bio = new BioModel ({Name:Name , email:emai}) ;
try{
    await bio.save();
    res.send("inserted data") ; 
}
catch(err){
    console.log(err)
}
});


app.get("/insert" ,async(req,res) => {
BioModel.find({} ,(err, result) =>{
    if(err) {
        res,send (err)
    }
    res,send(result)
})
   });
   

app.listen (3001 , () =>{
    console.log('server running on port 3001...')
});