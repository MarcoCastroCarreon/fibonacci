const fibonacciService = require('../services/fibonacci.service');

const calculateFibonacci = async (req, res) => {
    try {
        const { n } = req.params;

        if(n == null || n == undefined) {
            res.status(400).json({ message: 'n is required to calculated fibonacci number' });
        } 

        const result =  fibonacciService.fibonacciRecursive(n);

        res.status(200).json({ message: 'Fibonacci Successfully Calculated', data: result });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    calculateFibonacci
}