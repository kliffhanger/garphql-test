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
    },
    Article:{
        author(parent){
            return db.authors.find((a)=> a.id === parent.author_id)
        },
        category(parent){
            return db.categories.find((c)=> c.id === parent.category_id)
        }
    },
    Author:{
        articles(parent){
            return db.articles.filter((a)=> a.author_id === parent.id)
        }
    },
    Category:{
        articles(parent){
            return db.articles.filter((a)=> a.category_id === parent.id)
        }
    },
    Mutation:{
        deleteCategory(_, args){
            db.categories = db.categories.filter((c)=> c.id !== args.id)
            return db.categories
        },
        addCategory(_, args){
            let cat = {
                ...args.category,
                id: Math.floor(Math.random()*100).toString()
            }
            db.categories.push(cat)
            return cat
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