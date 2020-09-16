import {Body, Controller, Get, Post} from "@nestjs/common";
import {CommentsService} from "./comments.service";

@Controller('comments')

export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {

  }

  @Post()
  addComment(
    @Body('movieId') movieId: string,
    @Body('movieComment') movieComment: string
  ): any {
    return this.commentsService.addComment(movieId, movieComment);

  }

  @Get()
  getComments() {
    return this.commentsService.getComments();
  }
}