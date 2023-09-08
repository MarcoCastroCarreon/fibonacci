const { Router } = require('express');
const fibonacciRouter =  require('./fibonacci');

const router = Router();


router.use('/api', fibonacciRouter);

module.exports = router;