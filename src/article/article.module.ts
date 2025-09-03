import { Module,Global  } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleController } from './article.controller';

@Global()
@Module({
  controllers: [ArticleController],
  providers: [ArticleService],
  exports:[ArticleService]
})
export class ArticleModule {}
