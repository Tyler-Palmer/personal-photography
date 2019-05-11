const { buildSchema } = require('graphql')


module.exports = buildSchema(`
type Event {
    _id: ID!
    title: String!
    description: String!
    price: Float!
    date: String!
    creator: Customer!
}

type Customer {
    _id: ID!
    email: String!
    password: String
    createdEvents: [Event!]
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
`)