'use strict';

const PagedFetcher = require('./pagedFetcher');
const Config = require('../config');

const ITEMS_PER_PAGE = 100;
const DEFAULT_ORDER = 'nome';

module.exports.fetch = async () =>
	PagedFetcher.fetchPagedData(`${Config.congress.baseURI}/deputados?pagina=1&itens=${ITEMS_PER_PAGE}&ordenarPor=${DEFAULT_ORDER}`);
