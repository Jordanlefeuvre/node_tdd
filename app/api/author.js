module.exports = (app, db) => {
  app.post('/author', async (req, res) => {
    let authors = new db.Author({
      firstName: req.body.firstName,
      lastName: req.body.lastName
    })
    authors.save().then((result) => res.json(result))
  })
  
  app.get('/authors', async (req, res) => {
    await db.Author.aggregate([
      {$match: {}},
      {$project: {_id: 1, firstName: 1, lastName: 1}}
    ])
    .exec()
    .then((result) => {
      return res.json(result)
    })
  })
}