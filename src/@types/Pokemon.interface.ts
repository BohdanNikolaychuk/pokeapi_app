export interface IPokemonResponse {
	count?: number
	previous: string
	next: string
	results: IPokemonData[]
}

export interface IPokemonData {
	name: string
	url: string
}

export interface IPokemonInfo {
	name: string
	id: string
	sprites: {
		front_default: string
	}
	abilities: Array<{ ability: { name: string } }>
	types: Array<{ type: { name: string } }>
}

export interface IPokemonResponseData {}
