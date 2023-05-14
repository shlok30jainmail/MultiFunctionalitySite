const mongoose = require("mongoose");
const { response } = require("express");


const contactSchema = new mongoose.Schema({
    firstname:{
        type:String,
        reuired:true
    },
    lastname:{
        type:String,
        reuired:true
    },
    email:{
        type:String,
        reuired:true,
    },
    // gender:{
    //     type:String,
    //     reuired:true
    // },
    phone:{
        type:Number,
        reuired:true,

    },
    message:{
        type:String,
        reuired:true
    },
    rating:{
        type:String,
        reuired:true
    },
    
   

    
})



const Contact = new mongoose.model("Contact",contactSchema);
module.exports=Contact;