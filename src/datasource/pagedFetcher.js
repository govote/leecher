'use strict';

const HttpClient = require('../libs/httpclient');

module.exports.fetchPagedData = async (uri, prior = []) => {
	const data = prior;
	const response = await HttpClient.getJSON({ uri: uri });

	const next = (response.links || []).find(x => x.rel === 'next');

	if (next) {
		return exports.fetchPagedData(next.href, data.concat(response.dados));
	}

	return data.concat(response.dados || []);
};
