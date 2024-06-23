var express = require('express');
const cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var bookRouter = require('./routes/bookRoutes');
var studentRouter = require('./routes/studentRoutes');
var transactionRouter = require('./routes/transactionRoutes');
var authRouter = require('./routes/authRoutes');
var inventoryRouter = require('./routes/inventoryRoutes');

var app = express();

app.use(cors({
  origin: 'http://localhost:3001',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/books', bookRouter);
app.use('/api/students', studentRouter);
app.use('/api/transactions', transactionRouter);
app.use('/api/auth', authRouter);
app.use('/api/inventories', inventoryRouter);

module.exports = app;
