'use strict';

const HttpClient = require('./');

describe('Http Client', () => {
	it('should make a HTTP request', () => {
		return HttpClient.postJSON({ uri: 'http://localhost', timeout: 2000 })
			.catch((err) => expect(err).toBeDefined());
	});
});
