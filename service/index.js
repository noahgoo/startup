const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const express = require("express");
const uuid = require("uuid");
const app = express();

const authCookieName = "token";

// Put quizzes and users in memory
let quizzes = [];
let users = [];

// Service port and middleware
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// Serve static files from the "public" directory
app.use(express.static("public"));

// Middleware to parse JSON bodies and cookies
app.use(express.json());

// Use the cookie parser middleware for tracking authentication tokens
app.use(cookieParser());

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// Create a new user
apiRouter.post("auth/create", async (req, res) => {
  if (await findUser("email", req.body.email)) {
    res.status(409).send({ msg: "User already exists" });
  } else {
    const user = await createUser(req.body.email, req.body.password);

    setAuthCookie(res, user.token);
    res.send({ email: user.email });
  }
});

// Find user in storage
async function findUser(field, value) {
  if (!value) return null;

  return users.find((u) => u[field] == value);
}

// Create user in storage
async function createUser(email, password) {
  const hashPass = await bcrypt.hash(password, 12);

  const user = {
    email: email,
    password: hashPass,
    token: uuid.v4(),
  };
  return user;
}

// Set auth cookie
function setAuthCookie(res, token) {
  res.cookie(authCookieName, token, {
    maxAge: 1000 * 60 * 60 * 24 * 365,
    secure: true,
    httpOnly: true,
    sameSite: "strict",
  });
}
