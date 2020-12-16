// require('dotenv').config();
const express = require('express');

// DATABASE
// const connectDB = require('./congif/db'); or set as ->  require(process.env.MONGO_URI);

// Postgres
const pool = require('./config/db');
// const client = require('./config/db');

const query = async () => {
  await client.connect();
}

// sample query
client.query('SELECT * FROM demo_table WHERE id = $1', [4], (err, result) => {
  if(!err) {
    console.log(result.rows); // print all rows of table
  }
  // console.log(err, result);
  client.end();
});

// execute above query
query();

/*
// alt version
(async () => { 
  await client.connect();
  const result = await client.query('SELECT * FROM demo_table WHERE id = $1', [2]);
  const result2 = await client.query('INSERT INTO demo_table(name, address) VALUES($1, $2) RETURNING *', ['Momoka', '2331 N. Lavender Ave.']);
  console.log(result2.rows);
  console.log(result2.rowCount);
  client.end();
})();
*/
// ========================================
// mysql2
/* examples
const db = require('./config/db');
db.execute('SELECT * FROM demo_table')
  .then(result => {
    console.log(result);
    console.log(result[0], result[1]);
  })
  .catch(err => {
    console.log(err);
  })
*/
// db.execute(
  // "INSERT INTO demo_table (title, price, description, imageUrl) VALUES (?, ?, ?, ?)",
  // [this.title, this.price, this.description, this.imageUrl]
// );

// inject value into db via [], return all columns with the selected product id
// db.execute("SELECT * FROM demo_table WHERE demo_table.id = ?", [id]);
// ========================================
// database connection (mongodb)
// connectDB();

// MIDDLEWARE
const cors = require('cors');
const app = express();
app.use(cors());

// register views engine - if using ejs template engine
// app.set('view engine', 'ejs');
// set views directory
// app.set('views', './src/views');


// Init Middleware /Parse JSON
app.use(express.json({
  // extended: false
}));

// Routes



// routes
// const authRoutes = require('./routes/api/authRoutes');

// send data
app.get('/', (req, res, next) => res.send("API is running..."));

// define routes (to controllers) - change proxy to reflect url
// app.use('/auth', authRoutes);
// app.use('/api/auth', authRoutes);

// database server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));