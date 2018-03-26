'use strict';

const HttpClient = require('../libs/httpclient');
const PagedFetcher = require('./pagedFetcher');
const Config = require('../config');

const ITEMS_PER_PAGE = 100;

module.exports.fetch = async () =>
	PagedFetcher.fetchPagedData(`${Config.congress.baseURI}/partidos?itens=${ITEMS_PER_PAGE}&ordenarPor=sigla`);

module.exports.getById = async (id) =>
	HttpClient.getJSON(`${Config.congress.baseURI}/partidos/${id}`);
