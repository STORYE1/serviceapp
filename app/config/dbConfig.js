require('dotenv').config();

console.log("Database Config:");
console.log("Host: ", process.env.DB_HOST);
console.log("User: ", process.env.DB_USER);
console.log("Port: ", process.env.DB_PORT);

module.exports = {
    database: process.env.DB_NAME || "railway",
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "EakNsAOzFpNoyIuKcUkWHwoLDpLxZHOL",
    host: process.env.DB_HOST || "postgres.railway.internal",
    port: process.env.DB_PORT || 5432,
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
};
