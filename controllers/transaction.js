const transaction = require('../models/transaction');

exports.report = (req, res, next) => {
    const data = req.body;
    const response = transaction.report(data);
    res.status(200).send(response);
};
