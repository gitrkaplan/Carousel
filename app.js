const express = require('express')
const { MongoClient } = require('mongodb')
const url = 'mongodb://localhost/carousel'
const app = express()

MongoClient.connect(url, (err, db) => {
  if (err) {
    console.error(err)
  }
  app.use(express.static('./public'))
  const images = db.collection('images')

  app.get('/carousel/images', (req, res) => {
    images
      .find()
      .toArray()
      .then(list => res.json(list))
      .catch(err => {
        console.error(err)
        res.sendStatus(500)
      })
  })
})

app.listen(3000, () => {
  console.log('Listening on port 3000!')
})
