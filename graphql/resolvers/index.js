const Event = require("../../models/event");
const Customer = require("../../models/customer");
const bcrypt = require("bcryptjs");

const events = eventIds => {
    return Event.find({ _id: { $in: eventIds } })
        .then(events => {
            return events.map(event => {
                return {
                    ...event._doc,
                    creator: customer.bind(this, event.creator)
                };
            });
        })
        .catch(err => {
            throw err;
        });
};

const customer = customerID => {
    return Customer.findById(customerID)
        .then(customer => {
            return {
                ...customer._doc,
                createdEvents: events.bind(this, customer._doc.createdEvents)
            };
        })
        .catch(err => {
            throw err;
        });
};

module.exports = {
    events: () => {
        return Event.find()
            .then(events => {
                return events.map(event => {
                    return {
                        ...event._doc,
                        creator: customer.bind(this, event._doc.creator)
                    };
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
        });
        let createdEvent;
        return event
            .save()
            .then(result => {
                createdEvent = {
                    ...result._doc,
                    creator: customer.bind(this, result._doc.creator)
                };
                return Customer.findById("5cd33c7f04bcd026b752e034");
            })
            .then(customer => {
                if (!customer) {
                    throw new Error("Customer not found");
                }
                customer.createdEvents.push(event);
                return customer.save();
            })
            .then(result => {
                return createdEvent;
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
}