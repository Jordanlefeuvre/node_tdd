const express = require('express')
const bodyParser = require('body-parser')
const db = require('./models')
const postRoutes = require('./app/api/post')
const authorRoutes = require('./app/api/author')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(express.static('app/public'))

app.get('/', (req, res) => {
    res.status(200).send('Hello.')
})

// app.get('/authors', async (req, res) => {
//     await db.Author.findAll(
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

postRoutes(app, db)
authorRoutes(app, db)
module.exports = app