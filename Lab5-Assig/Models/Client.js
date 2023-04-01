const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ClientSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    FirstName: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true
    },
    PhoneNumber: {
        type: String,
        required: true
    },
    UserName: {
        type: String,
        unique: true
    }
})

const Client = mongoose.model('client', ClientSchema);
module.exports = Client;