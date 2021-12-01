const express       = require('express');
const bearerToken   = require('express-bearer-token');

const {
  requestLogger,
  authorizationChecker,
  errorHandler
}                   = require('./middlewares');
const usersRouter   = require('./routes/users');

const app           = express();
const port          = 3000;

/* Middlewares */
app.use(express.json());
app.use(bearerToken());
app.use(requestLogger);
app.use(authorizationChecker);

/* Routers */
app.use('/users', usersRouter);

/* Handling Undefined Routes & Delegating the Error to the Global Error-Handling Middleware */
app.all('*', (req, res) => {
  throw new Error(`The path (${req.originalUrl}) is not defined on the server.`);
});

/* Global Error-Handling Middleware */
app.use(errorHandler);

/* Server configs */
app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});