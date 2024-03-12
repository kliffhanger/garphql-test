import { ApolloServer } from "@apollo/server";
import {startStandaloneServer} from '@apollo/server/standalone'

import { typeDefs } from "./schema.js";

import db from './_db.js'

const resolvers = {
    Query:{
        authors(){
            return db.authors
        },
        categories(){
            return db.categories
        },
        articles(){
            return db.articles
        },
        author(_, args){
            return db.authors.find((author)=> author.id === args.id)
        },
        category(_, args){
            return db.categories.find((item)=> item.id === args.id)
        },
        article(_, args){
            return db.articles.find((item)=> item.id === args.id)
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

const {url} = await startStandaloneServer(server,{
    listen: {port: 4000}
})

console.log('server is running on port', 4000)