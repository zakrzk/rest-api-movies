import * as mongoose from 'mongoose';

export const connectionString = `mongodb://${process.env.DB_USER_NAME}:${process.env.DB_USER_PASSWORD}@movies-api-db:27017/${process.env.MONGO_INITDB_DATABASE}`;

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });

const movieSchema = new mongoose.Schema({
  id: 'string',
  title: 'string',
  year: 'number',
  director: 'string',
  runtime: 'string',
  country: 'string',
  comments: 'array',
});
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
    console.log('Movie already in the DB.');
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

