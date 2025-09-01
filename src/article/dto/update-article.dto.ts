// import { PartialType } from '@nestjs/mapped-types';
// import { CreateArticleDto } from './create-article.dto';

// export class UpdateArticleDto extends PartialType(CreateArticleDto) {}

export class UpdateArticleDto {
    id  : number // unique identifier
    title : string // - article title
    content : string // - article body content
    author : string // - author name
    createdAt : Date  //- creation timestamp
    updatedAt : Date // last update timestamp
}
