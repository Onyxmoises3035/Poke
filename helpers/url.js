export const allPokemon = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0";

export const onePokemon = (poke) => {
    const pokemon = `https://pokeapi.co/api/v2/pokemon/${poke}`
    return pokemon;
}