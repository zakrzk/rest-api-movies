import { NotFoundException, Injectable } from '@nestjs/common';

import { Movie } from './movie.model';
import {findMovie} from './movie.dao';

@Injectable()
export class MoviesService {
  movies: Movie[] = [];

  async addMovie(title: string, year: number) {

    const movieTitle: string = title;
    const movieYear: number = year;

    const foundMovieId = await findMovie(title, year);

    if (!foundMovieId) {
      throw new NotFoundException('Movie not found. Check title and the year.');
    }
    // todo fetch this from API
    const newMovie = new Movie({
      id: '123',
      title: movieTitle,
      year: movieYear,
      director: 'someone',
      runtime: '2hrs',
      country: 'usa',
      comments: [],
    });


    this.movies.push(newMovie);
    console.log('newMovie' + JSON.stringify(newMovie))
    return newMovie;
  }

  getMovies(){
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