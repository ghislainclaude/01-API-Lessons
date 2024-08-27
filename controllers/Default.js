'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.customersCustomerIdAccountNumberDELETE = function customersCustomerIdAccountNumberDELETE (req, res, next, customerId, accountNumber) {
  Default.customersCustomerIdAccountNumberDELETE(customerId, accountNumber)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.customersCustomerIdAccountNumberGET = function customersCustomerIdAccountNumberGET (req, res, next, customerId, accountNumber) {
  Default.customersCustomerIdAccountNumberGET(customerId, accountNumber)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.customersCustomerIdAccountNumberPOST = function customersCustomerIdAccountNumberPOST (req, res, next, body, customerId, accountNumber) {
  Default.customersCustomerIdAccountNumberPOST(body, customerId, accountNumber)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.customersCustomerIdAccountNumberPUT = function customersCustomerIdAccountNumberPUT (req, res, next, body, customerId, accountNumber) {
  Default.customersCustomerIdAccountNumberPUT(body, customerId, accountNumber)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.customersCustomerIdDELETE = function customersCustomerIdDELETE (req, res, next, customerId) {
  Default.customersCustomerIdDELETE(customerId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.customersCustomerIdGET = function customersCustomerIdGET (req, res, next, customerId) {
  Default.customersCustomerIdGET(customerId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.customersCustomerIdHomeaddressPUT = function customersCustomerIdHomeaddressPUT (req, res, next, body, customerId) {
  Default.customersCustomerIdHomeaddressPUT(body, customerId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.customersCustomerIdPUT = function customersCustomerIdPUT (req, res, next, body, customerId) {
  Default.customersCustomerIdPUT(body, customerId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.customersCustomerIdPostaladdressPUT = function customersCustomerIdPostaladdressPUT (req, res, next, body, customerId) {
  Default.customersCustomerIdPostaladdressPUT(body, customerId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.customersGET = function customersGET (req, res, next) {
  Default.customersGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.customersPOST = function customersPOST (req, res, next, body) {
  Default.customersPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
