const { Pool } = require("pg");

//internal await

const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "fredydlemus",
  password: "admin123",
  database: "my_store",
});

module.exports = pool;
