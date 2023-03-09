const auth = require("./middleware/auth");
const checkApikey = require("./middleware/apikey");
const user = require('./controller/user');
const api = require('./controller/api');

module.exports = function(app) {
    app.get('/getUsers', auth, user.getUsers);
    app.get('/getApikey', auth, user.getApikey);
    app.post('/login', user.login);
    app.post('/register', user.register);
    app.post('/generateApikey', user.generateApikey);

    app.get('/api/check-ip', checkApikey, api.checkIp);
    app.get('/api/check-disposal-email', checkApikey, api.checkMail);
    app.get('/api/check-phonenumber', checkApikey, api.checkPhoneNumber);
    app.get('/api/check-bin', checkApikey, api.checkBin);
    app.get('/api/check-mobile', checkApikey, api.checkMobile);
    app.get('/api/check-desktop', checkApikey, api.checkDesktop);
}