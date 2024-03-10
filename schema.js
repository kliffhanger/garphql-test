export const typeDefs = `#graphql
    type Author{
        id: ID!
        name: String!
        info: String!
    }
    type Category{
        id: ID!
        name: String!
        info: String!
    }
    type Article{
        id: ID!
        title: String!
        heading: String!
        paragraph: String!
        author: Author!
        category: Category!
    }
    type Query{
        authors: [Author]
        author(id: ID!): Author
        categories: [Category]
        category(id: ID!): Category
        articles: [Article]
        article(id: ID!): Article
    }
`