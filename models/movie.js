const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema(
  {
    Title: { type: String },
    Year: { type: String },
    Releaser: { type: Date },
    Runtime: { type: String },
    Genre: { type: String },
    Director: { type: String },
    Actors: { type: String },
    Plot: { type: String },
    Language: { type: String },
    Country: { type: String },
    Poster: { type: String },
    imbdRating: { type: String },
    imdbID: { type: String },
    Website: { type: String }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;
