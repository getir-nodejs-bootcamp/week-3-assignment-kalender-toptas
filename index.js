require('dotenv').config()
const express       = require('express');

const {
  requestLogger,
  errorHandler
}                   = require('./middlewares');
const usersRouter   = require('./routes/users');

const app           = express();
const port          = 3000;

app.use(express.json());
app.use(requestLogger);

app.use('/users', usersRouter);

app.all('*', (req, res) => {
  throw new Error(`The path (${req.originalUrl}) is not defined on the server.`);
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});