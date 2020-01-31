'use strict';

/**
 * Module dependencies.
 */
const authorModels = require('./author')
const postModels = require('./post')

const db = {
  Author : authorModels,
  Post : postModels
}
const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://root:root@cluster0-tnzko.mongodb.net/test?retryWrites=true&w=majority").then(
  () => console.log("Connexion à la base OK"),
  err => console.error("Erreur lors de la connexion : "+err)
); 

db.close = async () => {
  await db.mongoose.close()
};

module.exports = db;