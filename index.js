const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

/*
  Morgan is used to log requests
 */
app.use(morgan('combined'));

/*
  BodyParser is used to parse body parameters in POST PUT
 */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '50mb' }));

const prefix = '/';


app.use(prefix, (req, res) => {
  res.json({message: 'Hello World !'});
});

const server = app.listen(3000, '127.0.0.1', () => {
  console.log('server: http://%s:%s', server.address().address, server.address().port);
});

module.exports = server;
