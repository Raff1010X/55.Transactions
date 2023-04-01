const transaction = require('../models/transaction');

exports.report = (req, res, next) => {
    const response = transaction.report(req.body);
    res.status(200).send(response);
};
