import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesModule } from './movies/movies.module';
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [MoviesModule, CommentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
