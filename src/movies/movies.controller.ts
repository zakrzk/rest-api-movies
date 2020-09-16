import { Body, Controller, Get, Post } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './movie.model';


@Controller('movies')

export class MoviesController {

  constructor(private readonly moviesService: MoviesService) {
  }

  @Post()
  addMovie(
    @Body('title') movieTitle: string,
    @Body('year') movieYear: number,
  ): object {
    const newMovie: Movie = this.moviesService.addMovie(movieTitle, movieYear);
    return newMovie;
  }

  @Get()
  getMovies() {
    return this.moviesService.getMovies();
  }
}
