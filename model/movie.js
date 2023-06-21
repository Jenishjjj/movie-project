const mongoose = require('mongoose');
const multer = require('multer');
const imgPath = "/uplods/movieimg";
const path = require('path');

const movieSchema = mongoose.Schema({
    title :{
        type : String,
        require : true
    },
    image :{
        type : String,
        require : true
    },
    date:{
        type:String,
        require:true
    },
    plot:{
        type:String,
        require:true
    },
    language:{
        type:Array,
        require:true
    },
    budget:{
        type:String,
        require:true
    },
    genre:{
        type:Array,
        require:true
    },
    duration:{
        type:String,
        require:true
    },
    director:{
        type:String,
        require:true
    },
    cast:{
        type:String,
        require:true
    },
    rating:{
        type:String,
        require:true
    }
})

const storage = multer.diskStorage({
    destination : function(req,file,cb){
        cb(null,path.join(__dirname,"..",imgPath))
    },
    filename : function(req,file,cb){
        cb(null,file.fieldname+'-'+Date.now());
    }
})

movieSchema.statics.uploadedFile = multer({storage : storage}).single('image');
movieSchema.statics.mvimg = imgPath;

const Movie = mongoose.model('Movie',movieSchema);

module.exports = Movie;