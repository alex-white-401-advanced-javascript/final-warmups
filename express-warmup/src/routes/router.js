'use strict';

const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.post('/save', (req, res) => {
  res.render(json(req.body));
});

router.get('*', (req, res) => {
  res.status(404);
  res.statusMessage = 'Not Found';
  res.render('not-found', { request: req });
});

router.use((err, req, res, next) => {
  res.status(500);
  res.statusMessage = 'Server Error';
  res.render('error', { request: req, error: err });
});

module.exports = router;