const mongoose = require('mongoose');
const Accordion = require('./models/accordion');

const url = 'mongodb://0.0.0.0:27017/accordion_apocalypse';
const connect = mongoose.connect(url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

connect.then(() => {

    console.log('Connected correctly to server');

    const newAccordion = new Accordion({
        name: 'React Lake Campground',
        description: 'test'
    });

    newAccordion.save()
    .then(accordion => {
        console.log(accordion);
        return Accordion.find();
    })
    .then(accordions => {
        console.log(accordions);
        return Accordion.deleteMany();
    })
    .then(() => {
        return mongoose.connection.close();
    })
    .catch(err => {
        console.log(err);
        mongoose.connection.close();
    });
});