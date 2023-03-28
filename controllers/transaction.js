const transaction = require('../models/transaction');
const example = require('../example/example_request.json')

exports.report = (req, res, next) => {
    let data = req.body;
    if (!data) data = example;
    const response = transaction.report(data);
    res.status(200).send(response);
};
