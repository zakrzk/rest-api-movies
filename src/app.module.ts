import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesModule } from './movies/movies.module';
import { CommentsModule } from './comments/comments.module';
import { MongooseModule } from '@nestjs/mongoose';
import { connectionString } from './app.db';

console.log('URL mongo: \n ' + connectionString);


@Module({
  imports: [MoviesModule, CommentsModule, MongooseModule.forRoot(connectionString)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
