
const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/profile", (req, res, next) => {
  res.render("movies/profile");
});


router.get("/info-movie/:imdbID", (req, res, next) => {
  axios.get(`https://www.omdbapi.com/?i=${req.params.imdbID}&apikey=507e1127&type=movie`)
  .then(movie => {
    res.render("movies/info-movie", {movie})
    // , want, watched
  })


  .catch(error => console.log(error))
})







module.exports = router;
