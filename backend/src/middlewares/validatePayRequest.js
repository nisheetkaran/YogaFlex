function validatePayRequest(req, res, next) {
    const {paymentInfo, age } = req.body;
    if(age < 18 || age > 65) {
        return res.status(400).json({
            'error': 'Your age is not eligible for enrolment',
        });
    }
    else if(paymentInfo != 500) {
   
        return res.status(400).json({
            'error': 'Payment amount should be equal to 500'
        });
    }
    next();
}

module.exports = validatePayRequest;