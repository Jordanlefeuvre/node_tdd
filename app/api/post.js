module.exports = (app, db) => {
  app.post('/post', async (req, res) => {
    let posts = new db.Post({
      title: req.body.title,
      content: req.body.content,
      AuthorId: req.body.AuthorId,
    })
    posts.save().then((result) => res.json(result))
  })
}