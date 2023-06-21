const express = require('express');
const routes = express.Router();
const moviectr = require('../controller/moviectr')
const Movie = require('../model/movie');

routes.get('/',moviectr.add_movie)

routes.post('/addDetail',Movie.uploadedFile,moviectr.addDetail);

routes.get('/viewMovie',moviectr.viewMovie)

routes.get('/detailView/:id',Movie.uploadedFile,moviectr.detailView)

module.exports = routes;