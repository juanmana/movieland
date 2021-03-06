const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: String,
    password: String,
    wantMovies: [{ type: Schema.Types.ObjectId, ref: "Movie" }],
    watchedMovies: [{ type: Schema.Types.ObjectId, ref: "Movie" }]
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
