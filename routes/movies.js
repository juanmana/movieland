const express = require("express");
const router = express.Router();
const axios = require("axios");
const User = require('../models/User');
const Movie = require('../models/movie');

router.get("/profile", (req, res, next) => {
  console.log(req.user)

  console.log(req.session.passport.user)
  res.render("movies/profile");
});


router.get("/info-movie/:imdbID", (req, res, next) => {
  Movie
    .find({
      imbdID: req.params.imdbID
    })
    .then(foundMovie => {
      if (foundMovie.length === 0) {
        axios.get(`https://www.omdbapi.com/?i=${req.params.imdbID}&apikey=507e1127&type=movie`)
          .then(movie => {
            console.log(movie)
            Movie
              .create(movie.data)
              .then(movieSaved => res.render("movies/info-movie", {
                movie
              }))
            // , want, watched
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
  //req.user.wantMovies.includes(req.params.id)
  console.log(req.session.passport.user)

  User.findByIdAndUpdate(req.user._id, {
      $push: {
        wantMovies: req.params.imdbID
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

      //res.render("movies/want", {data})

    })

})

router.get('/want', (req, res) => {

  /* const wantedMovies = []
  /* const wantedMovies = []
  
  req.user.wantMovies.forEach(oneMovie=>{

    axios.get(`https://www.omdbapi.com/?i=${oneMovie}&apikey=507e1127&type=movie`)
    .then(movie => {
        console.log(movie.data.Title)
        wantedMovies.push(movie.data.Title)
    })
  }) */
  req.user.wantMovies.forEach(oneMovie=>{

    axios.get(`https://www.omdbapi.com/?i=${oneMovie}&apikey=507e1127&type=movie`)
    .then(movie => {
        console.log(movie.data.Title)
        wantedMovies.push(movie.data.Title)
    })
  })
  data = req.user.wantMovies
  res.render("movies/want", {
    data
  })


})





module.exports = router;