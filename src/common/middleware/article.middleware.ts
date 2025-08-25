import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class ArticleMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log("Before you see my greetings, Peace be unto you!")
    next();
  }
}
