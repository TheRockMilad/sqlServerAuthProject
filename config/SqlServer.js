const sql = require("mssql");

const config = {
  server: process.env.SERVER,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  user: process.env.USER,
  options: {
    trustedConnection: false,
    trustServerCertificate: true,
  },
};

const poolPromis = new sql.ConnectionPool(config)
  .connect()
  .then((pool) => {
    console.log("connected to pool");
    return pool;
  })
  .catch((err) => {
    console.log("Error : ", err);
  });

module.exports = poolPromis;
