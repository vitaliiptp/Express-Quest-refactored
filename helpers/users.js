const crypto = require('crypto');

const PRIVATE_KEY = process.env.PRIVATE_KEY;

const calculateToken = (userEmail = "") => {
    return crypto.createHash('md5').update(userEmail + PRIVATE_KEY).digest("hex");
}

// now some tests:

calculateToken('firstEmail@gmail.com');
// returns 731f04b6e83c8e911e0520a1994afaae

calculateToken('otherEmail@gmail.com');
// returns add347e092ce4da01f669b41b0b5354b

calculateToken('firstEmail@gmail.com')
// returns 731f04b6e83c8e911e0520a1994afaae (just as the first string)

module.exports = { calculateToken };