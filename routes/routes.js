const express = require('express');
const router = express.Router();

// Middleware
const loggingMiddleware = require('../middleware/logging-middleware');
const timeMiddleware = require('../middleware/time-middleware');
const pigLatinMiddleware = require('../middleware/pigLatin');

router.use(loggingMiddleware);

// Routes
router.get('/', (req, res) => {
  res.render('home');
});

router.get('/grads/:words', pigLatinMiddleware, (req, res) => {
  res.render('grads', { message: req.word });
});




module.exports = router;
