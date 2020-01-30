const express = require('express')
const bodyParser = require('body-parser')
// const db = require('./models_mongo')
const postRoutes = require('./app/api/post')
const authorRoutes = require('./app/api/author')
const authorModels = require('./models_mongo/author')
// const mongoose = require('mongoose')
const db = {
    Author : authorModels,
    postRoutes : postRoutes
}
const app = express()

const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://root:root@cluster0-tnzko.mongodb.net/test?retryWrites=true&w=majority").then(
    () => console.log("Connexion à la base OK"),
    err => console.error("Erreur lors de la connexion : "+err)
); 

// mongoose.connect("mongodb+srv://root:root@cluster0-tnzko.mongodb.net/test?retryWrites=true&w=majority")
// var db = mongoose.connection
// db.on('error', console.error.bind(console, 'Erreur lors de la connexion'))
// db.once('open', function (){
//     console.log("Connexion à la base OK"); 
// }); 

app.use(express.static('app/public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.get('/', (req, res) => {
    res.status(200).send('Hello.')
})

// app.get('/authors', async (req, res) => {
//     await db.Author.find(
//         {attributes: ['id', 'firstName', 'lastName']}
//     ).then((result) => {
//         return res.json(result)
//     })
// })

// app.post('/post', async (req, res) => {
//     await db.Post.create({
//         title: req.body.title,
//         content: req.body.content,
//         AuthorId: req.body.AuthorId,
//     }).then((result) => res.json(result))
// })

// app.post('/author', async (req, res) => {
//     await db.Author.create({
//         firstName: req.body.firstName,
//         lastName: req.body.lastName
//     }).then((result) => res.json(result))
// })  

// postRoutes(app, db)
authorRoutes(app, db)
module.exports = app