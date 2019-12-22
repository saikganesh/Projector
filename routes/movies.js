var express = require('express');
var moviesController = require('../controllers/moviesController');
var router = express.Router();


 router.get('/all',moviesController.getAllMovies);

router.post('/add',moviesController.addNewMovie);

router.get('/:name',moviesController.getMoviedetail);


module.exports = router;
