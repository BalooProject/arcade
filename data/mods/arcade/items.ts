export const Items: import('../../../sim/dex-items').ModdedItemDataTable = {
	arcadedarkmask: {
		name: "Arcade Dark Mask",
		shortDesc: "Forces Dark Tera Type. Adds/replaces Dark typing. Gives Sniper. On Tera, becomes Special Aspect and gains +1 Sp. Atk.",
		onTakeItem: false,
		itemUser: ["Ogerpon"],
		num: -1003,
		gen: 9,
		isNonstandard: null,

		// Arcade custom mask fields
		arcadeMaskType: "Dark",
		arcadeMaskForceTera: true,
		arcadeMaskChangeTypes: true,
		arcadeMaskPreTeraAbility: "sniper",
		arcadeMaskTeraAbility: "arcadespecialaspect",
	} as any,

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
	moustillonite: {
		name: "Moustillonite",
		spritenum: 578,
		megaStone: {
			Oshawott: "Oshawott-Mega",
		},
		itemUser: ["Oshawott"],
		onTakeItem: false,
		num: -1002,
		gen: 9,
		isNonstandard: null,
		shortDesc: "If held by Oshawott, this item allows it to Mega Evolve in battle.",
	},

};