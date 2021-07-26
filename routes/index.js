var express = require('express');
var router = express.Router();
const { generateOTP } = require('../services/otpgeneraor');
const { validateMobileNumber } = require('../services/validator');


/* GET home page. */
router.get('/', function (req, res, next) {
  res.status(200);
  res.json({ message: "Hello from server" }).end();
});

router.post('/generateOTP', function (req, res, next) {
  let response = validateMobileNumber(req.body.mobileNumber);
  let apiResponseMsg = {
    message: response.message
  }
  if (response.status === 200) {
    apiResponseMsg.OTP = generateOTP(req.body.mobileNumber);
  }
  res.status(response.status);
  res.json(apiResponseMsg).end();
});

router.get('/generateOTP/:mobileNumber', function (req, res, next) {
  let response = validateMobileNumber(req.params.mobileNumber);
  let apiResponseMsg = {
    message: response.message
  }
  if (response.status === 200) {
    apiResponseMsg.OTP = generateOTP(req.params.mobileNumber);
  }
  res.status(response.status);
  res.json(apiResponseMsg).end();
});

module.exports = router;
