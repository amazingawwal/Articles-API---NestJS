import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import Articles from './interfaces/article.interface';
import { error } from 'console';

// interface Articles {
//     id ?: number // unique identifier
//     title : string // - article title
//     content : string // - article body content
//     author : string // - author name
//     createdAt ? : Date  //- creation timestamp
//     updatedAt ? : Date  // last update timestamp
// }


@Injectable()
export class ArticleService {

  private articles: Articles[] = []

  create(createArticleDto: CreateArticleDto) {

    let idList = this.articles.map((article) => (article.id ?? 0))
    let id = idList.length? Math.max(...idList) + 1 : 1;
    let title = createArticleDto.title;
    let content = createArticleDto.content;
    let author = createArticleDto.author ;
    let createdAt = new Date();
    let updatedAt = new Date()

    this.articles.push({id, title, content, author, createdAt, updatedAt})
    console.log(this.articles)
  }

  findAll() {
    return this.articles;
  }

  findOne(id: number) {
    // return `This action returns a #${id} article`;
    return this.articles.find(article => article.id === id)
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    // return `This action updates a #${id} article`;
    let article = this.articles.find(article => article.id === id);
    if (!article) {
      throw error
    }
    article.title = updateArticleDto.title;
    article.content = updateArticleDto.content;
    article.author = updateArticleDto.author;
    article.updatedAt = new Date();

    console.log(article)
    // const updatedArticle = {...article}
    // console.log(updatedArticle)
  }

  remove(id: number) {
    // return `This action removes a #${id} article`;
    const updatedArticle = this.articles.filter(article => article.id !== id)
    console.log(updatedArticle)
  }
}
