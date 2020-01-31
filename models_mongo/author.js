'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    firstName: String,
    lastName: String
});

AuthorSchema.methods.getPosts = async function() {
    return this.model('Posts').find({ AuthorId: this._id})
}

module.exports = mongoose.model("authors", AuthorSchema,"authors");