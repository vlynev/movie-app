const mongoose = require('mongoose');
const {Schema} = mongoose;
const {parseMovie, findByMovieDBId: findMovieById} = require('./movies');
const debug = require('debug')('server:model:user');

const UserSchema = new Schema({
  id: Number,
  username: {
    type: String,
    unique: true,
    index: true,
  },
  password: String,
  favoriteMovies: [{type: Schema.Types.ObjectId, ref: 'Movie'}]
});

const User = mongoose.model('User', UserSchema);

async function findByName(username) {
  return await User.findOne({username: username});
}

async function findById(id) {
  return await User.findOne({_id: id});
}

async function create({username, password}) {
  const user = new User({username, password});
  await user.save();
}

function isMovieAleadyAdded(movie_Id, user) {
  return user.favoriteMovies
    .map(movieId => movieId.toString())
    .includes(movie_Id.toString());
}

function removeFavorite(user, movie_Id) {
  const favoriteIndex = user.favoriteMovies
    .map(movieId => movieId.toString())
    .indexOf(movie_Id);

  user.favoriteMovies.splice(favoriteIndex, 1);
}

async function addFavoriteMovie(user, movieDBId) {
  const movie = await findMovieById(movieDBId);
  // if no movie found an not found exception will be throw

  if (!isMovieAleadyAdded(movie._id, user)) {
    user.favoriteMovies.push(movie._id);
    debug(`saving user ${user._id} with new movie ${movie.id}`);
    return await user.save();
  }

  return false;
}

async function removeFavoriteMovie(user, movieDBId) {
  const movie = await findMovieById(movieDBId);
  // if no movie found an not found exception will be throw

  removeFavorite(user, movie._id);

  debug(`saving user ${user._id} without movie ${movie.id}`);
  return await user.save();
}

async function getFavoriteMovies(id) {
  const {favoriteMovies} = await User
    .findOne({_id: id})
    .populate('favoriteMovies');
  return favoriteMovies.map(parseMovie);
}

module.exports = {
  findByName,
  findById,
  create,
  isMovieAleadyAdded,
  removeFavorite,
  addFavoriteMovie,
  removeFavoriteMovie,
  getFavoriteMovies
};