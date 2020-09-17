import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Comment } from './comment.model';
import { addCommentToDB } from '../app.db';
import { Movie } from '../movies/movie.model';

@Injectable()
export class CommentsService {

  constructor(@InjectModel(Comment.name) private commentModel: Model<Comment>) {
  }

  async addComment(id: string, comment: string) {

    const newComment = new Comment({
      movieId: id,
      movieComment: comment,
    });

    await addCommentToDB(newComment).then(() => {
      return newComment;
    });

  }

  getComments() {
    return [];
    // todo get movies with comments from DB

  }

}