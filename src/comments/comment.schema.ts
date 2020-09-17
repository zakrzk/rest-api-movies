import * as mongoose from 'mongoose';

export const CommentSchema = new mongoose.Schema({
  movieId: 'string',
  movieComment: 'string',
});

