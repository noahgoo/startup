const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const express = require("express");
const uuid = require("uuid");
const app = express();
const DB = require("./database.js");

const authCookieName = "token";

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

// Middleware to verify auth
const verifyAuth = async (req, res, next) => {
  const user = await findUser("token", req.cookies[authCookieName]);
  if (user) {
    req.user = user;
    next();
  } else {
    res.status(401).send({ msg: "Unauthorized" });
  }
};

// -------------------------------
// API routes
// -------------------------------

// Create a new user
apiRouter.post("/auth/create", async (req, res) => {
  if (await findUser("email", req.body.email)) {
    res.status(409).send({ msg: "User already exists" });
  } else {
    const user = await createUser(req.body.email, req.body.password);

    setAuthCookie(res, user.token);
    res.send({ email: user.email });
  }
});

// Login existing user
apiRouter.post("/auth/login", async (req, res) => {
  const user = await findUser("email", req.body.email);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      user.token = uuid.v4();
      await DB.updateUser(user);
      setAuthCookie(res, user.token);
      res.send({ email: user.email });
      return;
    }
  }
  return res.status(401).send({ msg: "No user found" });
});

// Logout a user
apiRouter.delete("/auth/logout", async (req, res) => {
  const user = await findUser("token", req.cookies[authCookieName]);
  if (user) {
    await DB.updateUserRemoveAuth(user);
  }
  res.clearCookie(authCookieName);
  res.status(204).end();
});

// Get current user
apiRouter.get("/auth/me", async (req, res) => {
  const user = await findUser("token", req.cookies[authCookieName]);
  if (user) {
    res.send({ email: user.email });
  } else {
    res.send({ email: null });
  }
});

// Create quiz array
apiRouter.post("/quiz/create", verifyAuth, async (req, res) => {
  const quizArray = await getQuizArray(req.user.email);
  // Check if quiz already exists and just need to be updated
  if (req.body.quizId) {
    const index = quizArray.findIndex((q) => q.id === Number(req.body.quizId));
    if (index !== -1) {
      quizArray[index] = {
        id: Number(req.body.quizId),
        title: req.body.title,
        questions: req.body.questions,
      };
    }
  } else {
    quizArray.push({
      id: Date.now(),
      title: req.body.title,
      questions: req.body.questions,
    });
  }
  await createQuiz(req.user.email, quizArray);
  res
    .status(200)
    .json({ id: req.body.quizId || quizArray[quizArray.length - 1].id });
});

// Get quiz array
apiRouter.get("/quiz/get", verifyAuth, async (req, res) => {
  res.status(200).json(await getQuizArray(req.user.email));
});

// Delete quiz
apiRouter.delete("/quiz/delete", verifyAuth, async (req, res) => {
  const quizArray = await getQuizArray(req.user.email);
  const updatedQuizzes = quizArray.filter(
    (q) => q.id !== Number(req.body.quizId),
  );
  await createQuiz(req.user.email, updatedQuizzes);
  res.status(204).end();
});

// Default error handler
app.use(function (err, req, res, next) {
  res.status(500).send({ type: err.name, message: err.message });
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile("index.html", { root: "public" });
});

// -------------------------------
// Helper functions
// -------------------------------

// Find user
async function findUser(field, value) {
  if (!value) return null;

  if (field === "token") {
    return DB.getUserByToken(value);
  }
  return DB.getUser(value);
}

// Create user
async function createUser(email, password) {
  const hashPass = await bcrypt.hash(password, 12);

  const user = {
    email: email,
    password: hashPass,
    token: uuid.v4(),
  };
  await DB.addUser(user);

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

// Create quiz
async function createQuiz(email, quizArray) {
  const existing = await DB.getQuiz(email);
  const quizSet = {
    email: email,
    quizArray: quizArray,
  };
  if (existing) {
    await DB.updateQuiz(quizSet);
  } else {
    await DB.addQuiz(quizSet);
  }
}

// Get quiz array
async function getQuizArray(email) {
  const quizDoc = await DB.getQuiz(email);
  return quizDoc ? quizDoc.quizArray : [];
}

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
