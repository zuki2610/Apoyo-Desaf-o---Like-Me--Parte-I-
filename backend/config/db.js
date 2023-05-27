const { Pool } = require("pg");
const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "MatiN26ip",
  database: "likeme",
  allowExitOnIdle: true,
});

const getDate = async () => {
  const result = await pool.query("SELECT NOW()");
  console.log(result);
};

module.exports = { pool, getDate };
