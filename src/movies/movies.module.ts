import * as mongoose from 'mongoose';
import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';

@Module({
  controllers: [MoviesController],
  providers: [MoviesService],
})

export class MoviesModule {
}

export const movieSchema = new mongoose.Schema({
  id: 'string',
  title: 'string',
  year: 'number',
  director: 'string',
  runtime: 'string',
  country: 'string',
  comments: 'array',
});
