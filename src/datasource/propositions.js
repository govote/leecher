'use strict';

const HttpClient = require('../libs/httpclient');
const PagedFetcher = require('./pagedFetcher');
const Config = require('../config');

const ITEMS_PER_PAGE = 100;

module.exports.fetchByDeputy = async (deputyId) =>
	PagedFetcher.fetchPagedData(`${Config.congress.baseURI}/proposicoes?idAutor=${deputyId}&pagina=1&itens=${ITEMS_PER_PAGE}`);

module.exports.getById = async (id) =>
	HttpClient.getJSON({ uri: `${Config.congress.baseURI}/proposicoes/${id}` });
