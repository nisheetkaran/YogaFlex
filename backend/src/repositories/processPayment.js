const db = require('../database');

const queryAsync = (sql, values) => {
    return new Promise((resolve, reject) => {
        db.query(sql, values, (err, results) => {
            if (err) reject(err);
            resolve(results);
        });
    });
};

async function checkAndCreateUser(name, age, email, batch) {
    const checkUserQuery = 'SELECT * FROM users WHERE email = ?';
    const userResults = await queryAsync(checkUserQuery, [email]);

    if (userResults.length === 0) {
        const createUserQuery =
            'INSERT INTO users (name, age, email, batch) VALUES (?, ?, ?, ?)';
        await queryAsync(createUserQuery, [name, age, email, batch]);
    }
};

async function checkIfAlreadyPaid(month, email) {
    const checkUserQuery = 'SELECT * FROM payments WHERE email = ? AND month = ?';
    const userResults = await queryAsync(checkUserQuery, [email, month]);
    if (userResults.length) return true;
    return false;
}

async function processPayment(req) {
    const { name, month, batch, amountPaid, age, email } = req.body;
    await checkAndCreateUser(name, age, email, batch);
    const isalreadyPaid = await checkIfAlreadyPaid(month, email);
    if(isalreadyPaid) return "payment is already done!";
    const paymentQuery = 'INSERT INTO payments (email, month, amountPaid) VALUES (?, ?, ?)';
    await queryAsync(paymentQuery, [email, month, amountPaid]);
    return "payment done!";
}

module.exports = processPayment;