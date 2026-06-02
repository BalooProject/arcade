export const Items: import('../../../sim/dex-items').ModdedItemDataTable = {
	arcadeorb: {
		name: "Arcade Orb",
		spritenum: 0,
		fling: {
			basePower: 30,
		},
		onModifyAtkPriority: 1,
		onModifyAtk(atk, pokemon) {
			if (pokemon.baseSpecies.baseSpecies === 'Pikachu') {
				return this.chainModify(1.3);
			}
		},
		num: -1001,
		gen: 9,
		shortDesc: "If held by Pikachu, its Attack is multiplied by 1.3.",
	},
};