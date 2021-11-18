const User = require('./models/user');

User.verifyPassword(
    'myPlainPassword',
    '$argon2id$v=19$m=65536,t=5,p=1$6F4WFjpSx9bSq9k4lp2fiQ$cjVgCHF/voka5bZI9YAainiaT+LkaQxfNN638b/h4Q'
).then((passwordIsCorrect) => {
    console.log(passwordIsCorrect);
});