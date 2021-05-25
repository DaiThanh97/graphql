const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const typeDefs = require('./schema/schema');
const resolvers = require('./resolver/resolver');

const app = express();

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.applyMiddleware({ app });

app.listen(3000, () => console.log('Server is listening on port 3000!'));