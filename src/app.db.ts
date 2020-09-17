import * as mongoose from 'mongoose';
import { BadRequestException } from '@nestjs/common';
import { MovieSchema } from './movies/movie.schema';
import { CommentSchema } from './comments/comment.schema';

const Movie = mongoose.model('Movie', MovieSchema);
const Comment = mongoose.model('Comment', CommentSchema);
let currentComments = [];

export const connectionString = `mongodb://${process.env.DB_USER_NAME}:${process.env.DB_USER_PASSWORD}@${process.env.DB_HOST}:27017/${process.env.MONGO_INITDB_DATABASE}`;

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });


export const addMovieToDB = async movie => {

  const docMovie = new Movie({
    id: movie.id,
    title: movie.title,
    year: movie.year,
    director: movie.director,
    runtime: movie.runtime,
    country: movie.country,
    comments: movie.comments,
  });

  const movieAlreadyInDB = await Movie.exists({ id: movie.id });
  if (movieAlreadyInDB) {
    throw new BadRequestException('Movie already in the database.');
  } else {
    docMovie.save().then(() => console.log(`${movie.title} has been saved in the database.`));
  }
};

export const getAllMoviesFromDB = () => {
  return Movie.find(function(err, movies) {
    if (err) throw new BadRequestException('Server error.');
    console.log('GET /movies');
    return movies;
  });
};

export const addCommentToDB = async comment => {

  let doc = new Comment({
    movieId: comment.movieId,
    movieComment: comment.movieComment,
  });

  const movieAlreadyInDB = await Movie.exists({ id: comment.movieId });

  if (!movieAlreadyInDB) {
    throw new BadRequestException('Movie not in the database yet. Please add it first.');
  } else {
    currentComments = await getCurrentComments();
    console.log('currentComments:' + currentComments);
    let newComments;
    currentComments.push(comment.movieComment);
    newComments = [...currentComments];
    Movie.findOneAndUpdate(
      { id: comment.movieId },
      { comments: newComments },
      { useFindAndModify: false },
      function(err, ok) {
        doc.save().then(() => {
          console.log('POST /comments');
          //todo return comment object in body response
        });
      });
  }

  async function getCurrentComments() {
    let currentComments = await Movie.find({ id: doc.movieID }, function(err, obj) {
      return obj;
    });
    console.log('currentComments: ' + currentComments);
    if (currentComments[0]) {
      return currentComments[0].toObject().comments;
    }
    return [];
  }
};