import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleModule } from './article/article.module';
import {MiddlewareConsumer, NestModule} from '@nestjs/common'
import { ArticleMiddleware } from './common/middleware/article.middleware';
import { ArticleService } from './article/article.service';

@Module({
  imports: [ArticleModule, ArticleService],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
      consumer.apply(ArticleMiddleware).forRoutes('/')
  }
}
