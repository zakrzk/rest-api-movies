import {Injectable} from "@nestjs/common";
import {Comment} from './comment.model';


@Injectable()
export class CommentsService {

  async addComment(id: string, comment: string) {


    const newComment = new Comment({
      movieId: id,
      movieComment: comment
    });

    return newComment; // todo save this to DB

  }

  getComments() {
    return [];
    // todo get movies with comments from DB

  }

}