
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate() //resets the id primary key whne things are deleted
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
        make: 'Chevy', 
        model: 'Tahoe', 
        VIN: 1234567891011121314, 
        mileage: 20.0000, 
        trans_type: 'V67', 
        clean_title: true
      }
      ]);
    });
};
