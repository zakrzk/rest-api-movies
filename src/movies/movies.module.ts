import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';
import { MovieSchema } from './movie.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Movie } from './movie.model';

@Module({
  imports: [MongooseModule.forFeature([{name: Movie.name, schema: MovieSchema }])],
  controllers: [MoviesController],
  providers: [MoviesService],
})

export class MoviesModule {
}


