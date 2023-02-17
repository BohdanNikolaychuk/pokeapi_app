export const MAIN_URL = 'https://pokeapi.co/api/v2/pokemon/'
export const FULL_LINK = MAIN_URL + '?limit=12'

export const searchByName = (name: string) => MAIN_URL + name
