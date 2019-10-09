const express = require('express');
const knex = require('knex');

const knexConfig = require('../knexfile.js');

const db = knex(knexConfig.development);

      //or
// const db = knex({  //this was place in knex.js file
//   client: 'sqlite3',
//   connection: {
//     filename: './data/produce.db3'
//   },
//   useNullAsDefault: true
// });

const router = express.Router();

router.get('/', (req, res) => {
  db('cars')
    .then(cars => {
      res.json(cars);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to retrieve cars' });
    });
});

router.post('/', (req, res) => {
  const carData = req.body;
  db('cars')
    .insert(carData)
    .then(ids => {
      db('cars')
        .where({ id: ids[0] })
        .then(newCarEntry => {
          res.status(201).json(newCarEntry);
        });
    })
    .catch(err => {
      console.log('POST error', err);
      res.status(500).json({ message: 'Failed to store data' });
    });
});


router.put('/:id', (req, res) => {
  const newCarData = req.body

  db('cars')
      .where({ id: req.params.id })
      .update(newCarData)
      .then(car => res.status(200).json(car))
      .catch(err => res.send(err))
})


router.delete('/:id', (req, res) => {
  db('cars')
      .where({ id: req.params.id })
      .del()
      .then(car => res.status(200).json(car))
      .catch(err => res.send(err))
})

module.exports = router;