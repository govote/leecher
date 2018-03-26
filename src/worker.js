'use strict';

const Parties = require('./datasource/parties');
const Deputies = require('./datasource/deputies');
const Propositions = require('./datasource/propositions');

const init = async () => {
	const parties = await Parties.fetch();
	const deputies = await Deputies.fetch();

	for (const deputy of deputies) {
		const partyId = parties.find((x) => x.sigla === deputy.siglaPartido);
		const party = await Parties.getById(partyId);
		const propositions = await Propositions.fetchByDeputy(deputy.id);

		for (const prop of propositions) {
			const proposition = await Propositions.getById(prop.id);

			const model = {
				id: proposition.id,
				number: proposition.numero,
				year: proposition.year,
				description: proposition.ementa,
				type: proposition.siglaTipo,

			};
		}
	}
};
