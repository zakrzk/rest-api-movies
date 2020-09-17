import * as mongoose from 'mongoose';
import { BadRequestException } from '@nestjs/common';
import { movieSchema } from './movies/movies.module';
import { commentSchema } from './comments/comments.module';

export const connectionString = `mongodb://${process.env.DB_USER_NAME}:${process.env.DB_USER_PASSWORD}@${process.env.DB_HOST}:27017/${process.env.MONGO_INITDB_DATABASE}`;

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });


const Movie = mongoose.model('Movie', movieSchema);
export const addMovieToDB = async movie => {


  const doc = new Movie({
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
    doc.save().then(() => console.log(`${movie.title} has been saved in the database.`));
  }

};

export const getMoviesFromDB = () => {
  return Movie.find(function(err, movies) {
    if (err) return console.error(err);
    console.log('GET /movies');
    return movies;
  });
};

