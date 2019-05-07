const express = require("express");
const eventsRouter = express.Router();
const expressGraphQL = require("express-graphql");
const { buildSchema } = require("graphql");
const Event = require("../models/event");

eventsRouter.use(
    "/graphql",
    expressGraphQL({
        schema: buildSchema(`
        type Event {
            _id: ID!
            title: String!
            description: String!
            price: Float!
            date: String!
        }

        input EventInput {
            title: String!
            description: String!
            price: Float!
            date: String!
        }

        type RootQuery {
            events: [Event!]!
        }

        type RootMutation {
            createEvent(eventInput: EventInput): Event
        }

        schema {
            query: RootQuery
            mutation: RootMutation
        }
    `),
        rootValue: {
            events: () => {
                return events;
            },
            createPhoto: args => {
                // const event = {
                //     _id: Math.random().toString(),
                //     title: args.eventInput.title,
                //     description: args.eventInput.description,
                //     price: +args.eventInput.price,
                //     date: args.eventInput.date
                // };
                const event = new Event({
                    title: args.eventInput.title,
                    description: args.eventInput.description,
                    price: +args.eventInput.price,
                    date: new Date(args.eventInput.date)
                })
                event.save()
                return event;
            }
        },
        graphiql: true
    })
);

module.exports = eventsRouter;
