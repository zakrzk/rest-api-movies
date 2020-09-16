export class Comment {

  movieId: string;
  movieComment: string;

  constructor(commentObj) {
    this.movieId = commentObj.movieId;
    this.movieComment = commentObj.movieComment;
  }

}