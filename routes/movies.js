const express = require("express");
const router = express.Router();
const axios = require("axios");
const User = require('../models/User');
const Movie = require('../models/movie');

router.get("/profile", (req, res, next) => {
  User.findById(req.user.id)
    .then(user => {
      res.render("movies/profile", {user})
    });
});

router.get('/want', (req, res) => {

  User.findById(req.user.id)
    .populate("wantMovies")
    .then(userInfo => {
      const movies = userInfo.wantMovies
      res.render("movies/want", {
        movies
      })
    })
    .catch(error => console.log(error))
})

router.get('/watched', (req, res) => {

  User.findById(req.user.id)
    .populate("watchedMovies")
    .then(userInfo => {
      const moviesWatched = userInfo.watchedMovies
      res.render("movies/watched", {
        moviesWatched
      })
    })
    .catch(error => console.log(error))
})



router.get("/info-movie/:imdbID", (req, res, next) => {
  Movie
    .find({
      imbdID: req.params.imdbID
    })
    .then(foundMovie => {
      if (foundMovie.length === 0) {
        axios.get(`https://www.omdbapi.com/?i=${req.params.imdbID}&apikey=507e1127&type=movie`)
          .then(movie => {
            Movie
              .create(movie.data)
              .then(movieSaved => res.render("movies/info-movie", {
                movie
              }))
          })
      } else {
        res.render("movies/info-movie", {
          foundMovie
        })
      }
    })




    .catch(error => console.log(error))
})

router.post('/want/:imdbID', (req, res) => {

  Movie.findOne({
      imdbID: req.params.imdbID
    })
    .then(movie => {
      let id = movie._id;
      console.log(movie)
      User.findByIdAndUpdate(req.user._id, {
          $push: {
            wantMovies: id,
          }
        }, {
          new: true
        })
        .then((usermod) => {
          res.json({
            movieAssociated: true,
            movieID: req.params.imdbID,
            userID: req.user._id
          })
        })
    })
})


router.post('/watched/:imdbID', (req, res) => {

  Movie.findOne({
      imdbID: req.params.imdbID
    })
    .then(movie => {
      let id = movie._id;
      console.log(movie)
      User.findByIdAndUpdate(req.user._id, {
          $push: {
            watchedMovies: id,
          }
        }, {
          new: true
        })
        .then((usermod) => {
          res.json({
            movieAssociated: true,
            movieID: req.params.imdbID,
            userID: req.user._id
          })
        })
    })






































})





module.exports = router;