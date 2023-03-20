const auth = require("./middleware/auth");
const admin = require("./middleware/admin");

const checkApikey = require("./middleware/apikey");
const user = require('./controller/user');
const package = require('./controller/package');
const shortlink = require('./controller/shortlink');
const api = require('./controller/api');

module.exports = function(app) {
    // users routes
    app.get('/getUsers', auth, user.getUsers);
    app.get('/getApikey', auth, user.getApikey);
    app.post('/login', user.login);
    app.post('/register', user.register);
    app.post('/generateApikey', auth, user.generateApikey);
    app.post('/changeActive', admin, user.changeActive);
    app.post('/changeRole', admin, user.changeRole);

    // package routes
    app.get('/getPackages', admin, package.readPackage);
    app.post('/addPackage', admin, package.createPackage);
    app.post('/deletePackage', admin, package.deletePackage);
    app.post('/updatePackage', admin, package.updatePackage);

    // shortlink routes
    app.get('/getShortlinks', auth, shortlink.readShortlinks);
    app.post('/addShortlink', auth, shortlink.createShortlink);
    app.post('/deleteShortlink', auth, shortlink.deleteShortlink);

    // api routes
    app.get('/api/check-ip', checkApikey, api.checkIp);
    app.get('/api/check-disposal-email', checkApikey, api.checkMail);
    app.get('/api/check-phonenumber', checkApikey, api.checkPhoneNumber);
    app.get('/api/check-bin', checkApikey, api.checkBin);
    app.get('/api/check-mobile', checkApikey, api.checkMobile);
    app.get('/api/check-desktop', checkApikey, api.checkDesktop);

    // shortlink routes
    app.get('/:shortlink', shortlink.redirect);

    app.get('/api/test', (req, res) => res.send("Hello World!"))
}