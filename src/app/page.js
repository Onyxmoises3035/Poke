import Gen from "@/components/Gen";

const Pokedex = async () => {

  const url = 'https://pokeapi.co/api/v2/pokemon/';
  const pokemonTotal = 1025;
  let pokemon = [];

  for (let i = 1000; i <= pokemonTotal; i++) {
    let data = await fetch(url + i).then(res => res.json());
    pokemon.push(data);
  }

  return (
      <Gen pokemon={pokemon} />
  );
}

export default Pokedex;