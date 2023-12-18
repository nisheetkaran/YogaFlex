const processPayment = require('../repositories/processPayment');

async function makePayment(req, res) {
    try{
        const msg = await processPayment(req);
        return res.status(200).json({
            msg,
        });
    } catch(error) {
        return res.status(400).json({
            'error': 'payment failed!'
        });
    }
}

module.exports = makePayment;