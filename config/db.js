require('dotenv').config(); // get 'mongoURI' from environment value
// pick a database - release connection to sql db when finished running a query!

// PostgreSQL
const { Pool, Client } = require('pg');

// const client = new Client({
const pool = new Pool({
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  max: 10
});

// get client from pool
pool.connect((err, client, release) => {
  if (err) {
    return console.error("Connection to Postgres db failed...", err.stack);
  }
  client.query('SELECT * FROM demo_table', (err, result) => {
    release();
    if (err) {
      return console.error("Connection to Postgres db failed...", err.stack);
    }
    console.log(result.rows);
  });
})

// (async function() {
//   const client = await pool.connect()
//   await client.query('SELECT NOW()')
//   client.release()
// })()

// with promise
// pool
//   .query('SELECT $1::text as name', ['Serah'])
//   .then(res => console.log(res.rows[0].name)) // Serah
//   .catch(err => console.error('Error executing query', err.stack))

pool.on("connect", () => {
  console.log('Connected to postgres database...');
});
pool.on('error', (err) => {
  console.error("Postgres db error...", err.message, err.stack)
});
pool.on("end", () => {
  console.log('Connection to postgres database ended...');
});

// Testing --- do not use pool.query as it may lead to problems, instead access the individual client in tthe pool
// example here: https://node-postgres.com/features/transactions

// ========================================
// MySQL
/*
const mysql = require('mysql2'); // for connection pool
// const mysql = require('mysql2/promise'); // if only using createConnection()

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  waitForConnections: true,
  connectionLimit: 10
  // queueLimit: 0
});

pool.connect((err) => {
  if (!err) {
    console.log('Connected to MySQL!');
  } else {
    console.log('Connection to MySQL failed!');
  }
}) 
*/
// =======================================

// MongoDB - ATLAS
/*
const mongoose = require('mongoose');
// const config = require('config');  // use config or dotenv
// const db = config.get('mongoURI'); // get 'mongoURI' value from config/default.json

const db = process.env.MONGO_URI;


const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected....');
  } catch(err) {
    console.log(err.message);
    // exit process w/failure
    process.exit(1);
  }
};
*/

// module.exports = connectDB; // mongodb
// module.exports = pool; // postgres
// module.exports = {
  // query: (text, params) => pool.query(text,params)
// }; 
// module.exports = pool.promise(); // mysql