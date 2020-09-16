import { Injectable } from '@nestjs/common';

import { Movie } from './movie.model';

@Injectable()
export class MoviesService {
  movies: Movie[] = [];

  addMovie(title: string, year: number) {

    const movieTitle: string = title;
    const movieYear: number = year;

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
    return newMovie;
  }

  getMovies(){
    return [...this.movies];
  }
}