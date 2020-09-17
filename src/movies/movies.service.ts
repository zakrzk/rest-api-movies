import { NotFoundException, Injectable } from '@nestjs/common';

import { Movie } from './movie.model';
import { fetchMovieData, findMovie } from './movie.dao';
import { addMovieToDB, getAllMoviesFromDB } from '../app.db';

@Injectable()
export class MoviesService {
  async addMovie(title: string, year: number): Promise<Movie> {

    const foundMovieId = await findMovie(title, year);

    if (!foundMovieId) {
      throw new NotFoundException('Movie not found. Check title and the year.');
    }

    const newMovie = await fetchMovieData(foundMovieId).then(
      movieInfo => {
        return new Movie({
          id: foundMovieId,
          title: movieInfo['Title'],
          year: movieInfo['Year'],
          director: movieInfo['Director'],
          runtime: movieInfo['Runtime'],
          country: movieInfo['Country'],
          comments: [],
        });
      },
    );

    await addMovieToDB(newMovie);
    return newMovie;
  }

  async getMovies(): Promise<Movie[]> {
    return await getAllMoviesFromDB();
  }

}