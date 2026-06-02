export const Moves: import('../../../sim/dex-moves').ModdedMoveDataTable = {
	arcadeblast: {
		num: -1001,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Arcade Blast",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1,
		},
		secondary: {
			chance: 20,
			boosts: {
				spa: 1,
			},
		},
		target: "normal",
		type: "Normal",
		contestType: "Cool",
		shortDesc: "20% chance to raise the user's Sp. Atk by 1.",
	},
};