// computed rarity in JSON file
let rarity = require("../data/rarity.json");

export const rarityStore = {
	getAll: () => rarity.rarity,
	getPage: ({ limit, offset, traitCount, traits, sortBy = "id" }) => {
		console.log(rarity.rarity)
		const dataStack =
			sortBy !== "id" ? rarity.ranked : Object.keys(rarity.rarity);
		console.log(dataStack)
		const data =
			traitCount && traitCount.length
				? dataStack.filter(
						(key) =>
							traitCount.indexOf(rarity.rarity[key].attributes.length) > -1
				  )
				: dataStack;

		console.log(data)
		const dataWithTraitFilter =
			traits && traits.length
				? data.filter((key) =>
						traits.find(
							(traitValue) =>
								!!rarity.rarity[key].attributes.find(
									(rarityAttribute) => rarityAttribute.value === traitValue
								)
						)
				  )
				: data;
		console.log(dataWithTraitFilter)
		// pagination
		const page = dataWithTraitFilter
			.slice(offset, offset + limit)
			.map((key, index) => {
				return rarity.rarity[key];
			});
		console.log(page)
		return {
			data: page,
			total: dataWithTraitFilter.length,
		};
	},
	getCount: () => rarity.traitCount,
	getTraits: () => rarity.traits,
	getRanks: () => rarity.ranked,
	getMeta: () => rarity.meta,
	getById: (id) => {
		return rarity.rarity.find((rar) => rar !== null && rar.id === Number(id));
	},
};
