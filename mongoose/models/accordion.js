const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accordionSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Accordion = mongoose.model('Accordion', accordionSchema);

module.exports = Accordion;