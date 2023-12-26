const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://rhymeanabel:Spammer44$@cluster0.drhtxqs.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });

// Define the Person schema
const personSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: Number,
    favoriteFoods: [String]
});

// Create the Person model
const Person = mongoose.model('Person', personSchema);

// Create an array of people
const arrayOfPeople = [
    { name: 'Princewill', age: 19, favoriteFoods: ['yam', 'cassava'] },
    { name: 'Martin', age: 25, favoriteFoods: ['Rice', 'potato'] },
    { name: 'Rasheed', age: 43, favoriteFoods: ['Bread', 'BushMeat'] }
];

// Save the array of people to the database
Person.create(arrayOfPeople)
    .then((people) => {
        console.log('People saved successfully!');
        console.log(people);
    }).catch((err) => {
        console.error(err);
    });