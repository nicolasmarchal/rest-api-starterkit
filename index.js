const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const Config = require('./app/config/Config');

const app = express();
const prefix = '/';
const env = Config.getEnv();

/*
  Morgan is used to log requests
 */
app.use(morgan('combined'));

/*
  BodyParser is used to parse body parameters in POST PUT
 */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '50mb' }));

app.use(prefix, (req, res) => {
  res.json({message: 'Hello World !'});
});

const server = app.listen(env.server.port, env.server.host, () => {
  console.log('server: http://%s:%s', server.address().address, server.address().port);
});

module.exports = server;
