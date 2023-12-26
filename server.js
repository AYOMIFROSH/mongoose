require('dotenv').config();

// importing the mongoose
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://rhymeanabel:Spammer44$@cluster0.drhtxqs.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });

// Defined the Person schema
const personSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: Number,
    favoriteFoods: [String]
});

// Creating the Person model
const Person = mongoose.model('Person', personSchema);

// Creating a new Person document instance
const person = new Person({
    name: 'Olumade Temitayo',
    age: 20,
    favoriteFoods: ['Noodles', 'Meat']
});

// Save the document to the database
person.save()
    .then(() => {
        console.log('Person saved successfully!');
}).catch((err) => {
    console.error(err);
});

Person.find({ name: 'Olumade Temitayo' })
    .then((people) => {
        console.log('People found successfully!');
        console.log(people);
    }).catch((err) => {
    console.error(err);
});