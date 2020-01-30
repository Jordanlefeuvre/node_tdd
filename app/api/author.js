module.exports = (app, db) => {
    app.post('/author', async (req, res) => {
        let authors = new db.Author({
            firstName: req.body.firstName,
            lastName: req.body.lastName
        })
        await authors.save().then((result) => res.json(result))
    })
  
    app.get('/authors', async (req, res) => {
      await db.Author.find().select("_id firstname lastname")
      .exec()
      .then((result) => {
        return res.json(result)
      })
    })
}