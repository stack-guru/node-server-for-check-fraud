const auth = require("./middleware/auth");
const user = require('./controller/user');
const api = require('./controller/api');

module.exports = function(app) {
    app.post('/login', user.login);
    app.post('/register', user.register);

    app.get('/api/check-ip', api.checkIp);
    app.get('/api/check-disposal-email', api.checkMail);
    app.get('/api/check-bin', api.checkBin);
    app.get('/api/check-mobile', api.checkMobile);
    app.get('/api/check-desktop', api.checkDesktop);
}