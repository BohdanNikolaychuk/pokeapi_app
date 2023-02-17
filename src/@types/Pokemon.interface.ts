export interface IPokemonData {
	number?: number
	name: string
	url: string
}

export interface IPokemonInfo {
	name: string
	id: string
	sprites: Image
}

export interface Image {
	front_default: string
}
