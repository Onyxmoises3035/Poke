import Gen from "@/components/Gen";

const Pokedex = async ({ params }) => {

  const { num } = await params;
  const lim = num.split('_');

  const url = 'https://pokeapi.co/api/v2/pokemon/';
  let pokemon = [];

  for (let i = lim[0]; i <= lim[1]; i++) {
    let data = await fetch(url + i).then(res => res.json());
    pokemon.push(data);
  }

  return (
      <Gen pokemon={pokemon} />
  );
}

export default Pokedex;