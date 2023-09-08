const router = require('express').Router();
const fibonacciController = require('../../controllers/fibonacci.controller');

router.get('/fibonacci/:n', fibonacciController.calculateFibonacci);

module.exports = router;