const { MongoClient } = require("mongodb");
const config = require("./dbConfig.json");

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;

// Connect to the database cluster
const client = new MongoClient(url);
const db = client.db("rental");
const collection = db.collection("house");

// Test connection to database asynchronously
(async function testConnection() {
  try {
    await db.command({ ping: 1 });
    console.log(`DB connected to ${config.hostname}`);
  } catch (ex) {
    console.log(
      `Unable to connect to database at ${url} because ${ex.message}`,
    );
    process.exit(1);
  }
})();



module.exports = {};
