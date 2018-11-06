const Person = require('mongoose').model('Person');

module.exports = {
    index(request, response) {
        Person.find({})
        .then(people_db => {
            const people = people_db;
            response.json(people);
        })
        .catch(error => {
            response.json({ message: "Error", error: error });
        })
        // Person.find({})
        // .then(people => response.json(people))
        // .catch(error => response.json(error));
    },
    show(request, response) {
        Person.findOne({ name: request.params.name })
        .then(person_db => {
            const person = person_db;
            response.json(person);
        })
        .catch(error => {
            response.json({ message: "Error", error: error })
        })
    },
    create(request, response) {
        Person.create({name: request.params.name})
        .then(
            response.redirect('/')
        )
        .catch(error => {
            response.json({ message: "Error", error: error });
        })
        // Person.create(request.params)
        // .then(person => response.json(person))
        // .catch(error => response.json(error));
    },
    destroy(request, response) {
        Person.deleteOne({name: request.params.name})
        .then(
            response.redirect('/')
        )
        .catch(error => {
            response.json({message: "Error", error: error});
        })
    }
};