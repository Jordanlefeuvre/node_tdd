'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: { type: String, default: ''},
    content: { type: String, default: ''},
    AuthorId: { type: Schema.Types.ObjectId, default: ''},
});

module.exports = mongoose.model("Post", PostSchema, "post");