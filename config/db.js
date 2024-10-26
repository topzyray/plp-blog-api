import mysql from "mysql2/promise";

const db = await mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

db.connect()
  .then((res) => console.log("Database connected successfully."))
  .catch((err) => console.log("Error connecting to database."));

export default db;
