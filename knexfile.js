// Update with your config settings.

module.exports = {

  development: {
    // client -> API -> Knex -> db driver -> db
    client: 'sqlite3',
    useNullAsDefault: true, // for sqlite
    connection: {
      filename: './data/car-dealer.db3'
      // db file will be created when the migration is created
    },
    migrations: {
      directory: './data/migrations'
    },
    useNullAsDefault: true, // <<< add this
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },


  
  // defining the required configuration
  // that knex needs to connect to production
  production: {
    client: 'postgresql', // changed and installed pg
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
