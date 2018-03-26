'use strict';

const RequestPromise = require('request-promise');

module.exports.request = (options) => request(options);

module.exports.getJSON = (options) =>
	request(Object.assign({}, options, { method: 'GET', json: true }));

module.exports.postJSON = (options) =>
	request(Object.assign({}, options, { method: 'POST', json: true }));

const request = (options) => RequestPromise(options);
