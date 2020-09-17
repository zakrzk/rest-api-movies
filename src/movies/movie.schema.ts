import * as mongoose from 'mongoose';

export const MovieSchema = new mongoose.Schema({
  id: 'string',
  title: 'string',
  year: 'number',
  director: 'string',
  runtime: 'string',
  country: 'string',
  comments: 'array',
});

