export const Abilities: import('../../../sim/dex-abilities').ModdedAbilityDataTable = {
	arcadespecialaspect: {
		onStart(pokemon) {
			if (pokemon.terastallized) {
				this.boost({spa: 1}, pokemon);
			}
		},
		flags: {failroleplay: 1, noreceiver: 1, noentrain: 1, notrace: 1, failskillswap: 1, notransform: 1},
		name: "Special Aspect",
		shortDesc: "If this Pokemon has Terastallized, its Sp. Atk is raised by 1 stage.",
		rating: 3.5,
		num: -1001,
		gen: 9,
		isNonstandard: null,
	},
};
