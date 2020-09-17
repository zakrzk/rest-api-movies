import { Injectable } from '@nestjs/common';
import { Comment } from './comment.model';
import { addCommentToDB } from '../app.db';

@Injectable()
export class CommentsService {

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