import { BadRequestException, Body, Controller, Get, Post } from '@nestjs/common';
import {CommentsService} from "./comments.service";

@Controller('comments')

export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {

  }

  @Post()
  addComment(
    @Body('movieId') movieId: string,
    @Body('movieComment') movieComment: string
  ): Promise<void> {
    if (movieComment.length < 2) {
      throw new BadRequestException('Comment too short, should be at least 3 characters long.')
    }
    return this.commentsService.addComment(movieId, movieComment);

  }

  @Get()
  getComments() {
    return this.commentsService.getComments();
  }
}