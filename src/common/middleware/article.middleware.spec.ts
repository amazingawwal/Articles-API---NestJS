import { ArticleMiddleware } from "./article.middleware";

describe('ArticleMiddleware', () => {
  it('should be defined', () => {
    expect(new ArticleMiddleware()).toBeDefined();
  });
});

