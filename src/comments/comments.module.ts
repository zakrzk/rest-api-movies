import * as mongoose from 'mongoose';
import { Module } from '@nestjs/common';

import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';

@Module({
  controllers: [CommentsController],
  providers: [CommentsService],
})

export class CommentsModule {
}

export const commentSchema = new mongoose.Schema({
  movieID: 'string',
  movieComment: 'string',
});