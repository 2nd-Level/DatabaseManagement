
 //changes to make on the db schema
 exports.up = function(knex) {

    //must use return
     return knex.schema.createTable('cars', function(tbl) {
                        //or
      // return knex.schema.createTable('cars', tbl => {
      // VIN, make, model, mileage, title status, and transmission type
       // a Primary Key, named 'id' that is and integer and
       // auto-increments
          tbl.increments();
      
          tbl.string('make', 128)
              .notNullable();
  
          tbl.string('model', 128)
            .notNullable();
  
          tbl.integer('VIN')
            .unique().notNullable();
  
          tbl.decimal('mileage')
            .notNullable();
  
          tbl.string('trans_type', 128);
          
          tbl.boolean('clean_title');
  
     });
   };
   
   // how to undo the changes made to the db schema
   // manual undo
   exports.down = function(knex) {
     return knex.schema.dropTableIfExists('cars');
   };