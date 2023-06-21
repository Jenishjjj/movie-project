const fs = require('fs');
const Movie = require('../model/movie');
const path = require('path');
const { response } = require('express');

module.exports.add_movie = (req,res)=>{
    
    Movie.find({})
    .then((response)=>{
        return res.render('viewMovie',{
            'movieData':response
        })
    })
    .catch((err)=>{
        console.log(err);
    })
}
module.exports.addDetail = (req,res)=>{
    var image="";
    if(req.file.filename){
        image = Movie.mvimg+'/'+req.file.filename;
    }
    req.body.image=image;
    Movie.create(req.body)
    .then((data)=>{
        return res.redirect('/');
    })
    .catch((err)=>{
        console.log(err);
    })
}
module.exports.viewMovie = (req,res)=>{
    return res.render('add_movie');
}
module.exports.detailView = (req,res)=>{
    Movie.findById(req.params.id)
    .then((data)=>{
        return res.render('detailView',{
            'data':data
        })
    })
    .catch((err)=>{
        console.log(err);
    })
}
