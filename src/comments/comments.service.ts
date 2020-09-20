import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Comment } from './comment.model';
import { addCommentToDB, getCommentsFromDB } from '../app.db';

@Injectable()
export class CommentsService {

  constructor(@InjectModel(Comment.name) private commentModel: Model<Comment>) {
  }

  async addComment(id: string, comment: string): Promise<Comment> {

    const newComment = new Comment({
      movieId: id,
      movieComment: comment,
    });

    await addCommentToDB(newComment);
    return newComment;

  }

  async getComments() {
    const copy = await getCommentsFromDB();
    return copy;

  }

}