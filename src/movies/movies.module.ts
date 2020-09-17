import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';

@Module({
  controllers: [MoviesController],
  providers: [MoviesService],
})

export class MoviesModule {
}

export const movieSchemaObj = {
  id: 'string',
  title: 'string',
  year: 'number',
  director: 'string',
  runtime: 'string',
  country: 'string',
  comments: 'array',
};

