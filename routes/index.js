const express = require('express');
const app = express();

app.use(require('./students'));
app.use(require('./teachers'));
app.use(require('./matters'));
app.use(require('./relations'));
app.use(require('./questions'));
app.use(require('./users'));
app.use(require('./session'));
app.use(require('./login'));

module.exports = app;