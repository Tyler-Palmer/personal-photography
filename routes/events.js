const express = require("express");
const eventsRouter = express.Router();
const expressGraphQL = require("express-graphql");
const graphQLSchema = require('./../graphql/schema/index')
const graphQLResolvers = require('./../graphql/resolvers/index')

eventsRouter.use(
    "/graphql",
    expressGraphQL({
        schema: graphQLSchema,
        rootValue: graphQLResolvers,
        graphiql: true
    })
);

module.exports = eventsRouter;
