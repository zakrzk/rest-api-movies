import { NotFoundException, Injectable, BadRequestException } from '@nestjs/common';

import { Movie } from './movie.model';
import { fetchMovieData, findMovie } from './movie.dao';
import { addMovieToDB } from '../app.db';

@Injectable()
export class MoviesService {
  movies: Movie[] = [];

  async addMovie(title: string, year: number) {

    const foundMovieId = await findMovie(title, year);

    if (!foundMovieId) {
      throw new NotFoundException('Movie not found. Check title and the year.');
    }
    if (this.movieAlreadyInDb(foundMovieId)) {
      throw new BadRequestException('Movie already in the database.');
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

    this.movies.push(newMovie);
    await addMovieToDB(newMovie);
    return newMovie;
  }


  private movieAlreadyInDb(foundMovieId: string) {
    // TODO: check if the movie is already in the DB, if so return 400 Bad Request
    return false;
  }

  getMovies() {
    return [...this.movies];
  }

  // private findMovie(id: string): Movie {
  //   const movieId = this.movies.findIndex(movie => movie.id === id);
  //   const movie = this.movies[movieId];
  //   if (!movie) {
  //     throw new NotFoundException('Movie not in the DB. Please add it first.')
  //   }
  //   return movie;
  // }
}