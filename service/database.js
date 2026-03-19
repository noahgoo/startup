const { MongoClient } = require("mongodb");
const config = require("../dbConfig.json");

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;

// Connect to the database cluster
const client = new MongoClient(url);
const db = client.db("startup");
const userCollection = db.collection("users");
const quizCollection = db.collection("quizzes");

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

function getUser(email) {
  return userCollection.findOne({ email: email });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function addUser(user) {
  await userCollection.insertOne(user);
}

async function updateUser(user) {
  await userCollection.updateOne({ email: user.email }, { $set: user });
}

async function updateUserRemoveAuth(user) {
  await userCollection.updateOne(
    { email: user.email },
    { $unset: { token: "" } },
  );
}

// Quizzes

function getQuiz(email) {
  return quizCollection.findOne({ email: email });
}

async function addQuiz(quizSet) {
  await quizCollection.insertOne(quizSet);
}

async function updateQuiz(quizSet) {
  await quizCollection.updateOne({ email: quizSet.email }, { $set: quizSet });
}

module.exports = {
  getUser,
  getUserByToken,
  addUser,
  updateUser,
  updateUserRemoveAuth,
  getQuiz,
  addQuiz,
  updateQuiz,
};
