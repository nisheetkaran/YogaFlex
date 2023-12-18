const express = require('express');
const validatePayRequest = require('../middlewares/validatePayRequest');
const makePayment = require('../controllers/makePayment');

const router = express.Router();

router.post('/make-payment', validatePayRequest, makePayment);
// router.post('/make-payment', (req, res)=> {
//     console.log(req.body);
// });


module.exports = router;