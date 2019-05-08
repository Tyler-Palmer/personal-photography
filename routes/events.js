const express = require("express");
const eventsRouter = express.Router();
const expressGraphQL = require("express-graphql");
const { buildSchema } = require("graphql");
const Event = require("../models/event");
const Customer = require("../models/customer");
const bcrypt = require("bcryptjs");

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

        type Customer {
            _id: ID!
            email: String!
            password: String
        }

        input CustomerInput {
            email: String!
            password: String!
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
            createCustomer(customerInput: CustomerInput): Customer
        }

        schema {
            query: RootQuery
            mutation: RootMutation
        }
    `),
        rootValue: {
            events: () => {
                return Event.find()
                    .then(events => {
                        return events.map(event => {
                            return { ...event._doc };
                        });
                    })
                    .catch(err => {
                        console.log(err);
                        throw err;
                    });
            },
            createEvent: args => {
                const event = new Event({
                    title: args.eventInput.title,
                    description: args.eventInput.description,
                    price: +args.eventInput.price,
                    date: new Date(args.eventInput.date),
                    creator: "5cd33c7f04bcd026b752e034"
                })
                let createdEvent;
                return event
                    .save()
                    .then(result => {
                        createdEvent = { ...result._doc }
                        return Customer.findById('5cd33c7f04bcd026b752e034')
                    })
                    .then(customer => {
                        if (!customer) {
                            throw new Error("Customer not found");
                        }
                        customer.createdEvents.push(event)
                        return customer.save()
                    })
                    .then(result => {
                        return createdEvent
                    })
                    .catch(err => {
                        console.log(err);
                        throw err;
                    });
            },

            createCustomer: args => {
                return Customer.findOne({ email: args.customerInput.email })
                    .then(customer => {
                        if (customer) {
                            throw new Error("User exists already");
                        }
                        return bcrypt.hash(args.customerInput.password, 12);
                    })
                    .then(hashedPassword => {
                        const customer = new Customer({
                            email: args.customerInput.email,
                            password: hashedPassword
                        });
                        return customer.save();
                    })
                    .then(result => {
                        return { ...result._doc, password: null };
                    })
                    .catch(err => {
                        console.log(err);
                        throw err;
                    });
            }
        },
        graphiql: true
    })
);

module.exports = eventsRouter;
