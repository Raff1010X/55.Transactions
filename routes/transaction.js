const express = require('express');
const router = express.Router();
const transaction = require('../controllers/transaction');

router.route('/report').post(transaction.report);

module.exports = router;
