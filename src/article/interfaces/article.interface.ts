interface Articles {
    id ?: number // unique identifier
    title : string // - article title
    content : string // - article body content
    author : string // - author name
    createdAt ? : Date  //- creation timestamp
    updatedAt ? : Date  // last update timestamp
}

export default Articles;