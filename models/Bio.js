const moongose = require ('moongose');
const BioSchema = new moongose.Schema ({
    Name:{
        type:String,
        require:true ,
    }, 
    email:{
        type:String , 
        require:true
    } ,
}); 

const Bio = moongose.model("Bio" , BioSchema);
module.exports = Bio ; 
