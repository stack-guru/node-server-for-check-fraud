const { isIPAddress, isIPV6Address, isIPV4Address, ipVersion } = require('ip-address-validator');
const DeviceDetector = require('node-device-detector');
const DeviceHelper = require('node-device-detector/helper');
const minFraud = require('@maxmind/minfraud-api-node');

const client = new minFraud.Client(process.env.minfraudAccountId, process.env.minfraudApiKey);

const detector = new DeviceDetector({
    clientIndexes: true,
    deviceIndexes: true,
    deviceAliasCode: false,
});

exports.checkIp = (req, res) => {
    if (!req.query.ip) {
        return res.status(400).send("No Ip address")
    }

    const ipAdress = req.query.ip

    if (!isIPAddress(ipAdress)) {
        return res.status(400).send("Ip address is not valid")
    }

    let transaction
    try {
        transaction = new minFraud.Transaction({
            device: new minFraud.Device({
                ipAddress: ipAdress,
            }),
            // email: new minFraud.Email({
            //     address: 'betrebekke@gufum.com',
            //     domain: 'gufum.com',
            // }),
        });
    } catch (error) {
        console.log('minfraund transcation error = ', error)        
        return res.status(503).send(error)
    }

    // minFraud Score
    // client.score(transaction).then(scoreResponse => {
    //     console.log('score = ', scoreResponse)
    //     res.status(200).send(scoreResponse)
    // }).catch(error => {
    //     console.log('score error =', error)
    //     return res.status(503).send(error)
    // });
    // minFraud Insights
    client.insights(transaction).then(insightsResponse => {
        // console.log('insights = ', insightsResponse)
        res.status(200).send(insightsResponse)
    }).catch(error => {
        console.log('insights error =', error)
        return res.status(503).send(error)
    });

    // // minFraud Factors
    // client.factors(transaction).then(factorsResponse => {
    //     // console.log('factors = ', factorsResponse)
    //     // res.status(200).send(factorsResponse)
    // }).catch(error => console.log('factors error =', error));

    // return res.status(200).send(detail)
}

exports.checkMail = (req, res) => {
    if (!req.query.email) {
        return res.status(400).send("No Email")
    }

    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const email = req.query.email

    if (!email.match(validRegex)) {
        return res.status(400).send("Email is not valid")
    }

    let transaction
    try {
        transaction = new minFraud.Transaction({
            email: new minFraud.Email({
                address: email,
                domain: email.split('@').pop(),
            })
        });
    } catch (error) {
        // console.log('minfraund transcation error = ', error)        
        return res.status(503).send(error)
    }

    // minFraud Insights
    client.insights(transaction).then(insightsResponse => {
        // console.log('insights = ', insightsResponse)
        res.status(200).send(insightsResponse)
    }).catch(error => {
        // console.log('insights error =', error)
        return res.status(503).send(error)
    });
}

exports.checkBin = (req, res) => {
    if (!req.query.issuerIdNumber) {
        return res.status(400).send("No issuerIdNumber")
    }

    const issuerIdNumber = req.query.issuerIdNumber

    let transaction
    try {
        transaction = new minFraud.Transaction({
            creditCard: new minFraud.CreditCard({
                issuerIdNumber,
            })
        });
    } catch (error) {
        // console.log('minfraund transcation error = ', error)        
        return res.status(503).send(error)
    }

    // minFraud Insights
    client.insights(transaction).then(insightsResponse => {
        // console.log('insights = ', insightsResponse)
        res.status(200).send(insightsResponse)
    }).catch(error => {
        // console.log('insights error =', error)
        return res.status(503).send(error)
    });
}

exports.checkMobile = (req, res) => {
    const result = detector.detect(req.headers['user-agent']);
    return res.send(DeviceHelper.isMobile(result))
}

exports.checkDesktop = (req, res) => {
    const result = detector.detect(req.headers['user-agent']);
    return res.send(DeviceHelper.isDesktop(result))
}

