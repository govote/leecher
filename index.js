'use strict';

const Deputies = require('./src/datasource/deputies');

async function teste() {
	const res = await Deputies.fetch();

	console.log(JSON.stringify(res, 4, 4));
	console.log(res.length);
}

teste();
