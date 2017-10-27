const { MongoClient } = require('mongodb')
const url = 'mongodb://localhost/carousel'

MongoClient.connect(url, (err, db) => {
  if (err) {
    console.error(err)
  }
  const images = db.collection('images')

  images
    .insertMany([
      {
        url:
          'http://www.designerspics.com/wp-content/uploads/2015/01/tablet_free_photo1.jpg'
      },
      {
        url:
          'http://www.designerspics.com/wp-content/uploads/2014/10/tablet_book_2_free_photo.jpg'
      },
      {
        url:
          'http://www.designerspics.com/wp-content/uploads/2014/09/laptop_free_photo.jpg'
      }
    ])
    .then(() => db.close())
    .catch(error => console.error(error))
})
