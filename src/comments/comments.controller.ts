import { BadRequestException, Body, Controller, Get, Post } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { Comment } from './comment.model';

@Controller('comments')

export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {

  }

  @Post()
  async addComment(
    @Body('movieId') movieId: string,
    @Body('movieComment') movieComment: string,
  ): Promise<Comment> {
    if (movieComment.length < 2) {
      throw new BadRequestException('Comment too short, should be at least 3 characters long.');
    }
    const newComment: Comment = await this.commentsService.addComment(movieId, movieComment);
    return newComment;

  }

  @Get()
  getComments() {
    return this.commentsService.getComments();
  }
}