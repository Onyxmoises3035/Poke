import Card from "@/components/Card";

const Pokedex = async () => {

  const url = 'https://pokeapi.co/api/v2/pokemon/';
  const pokemonTotal = 1025;
  let pokemon = [];

  for (let i = 1000; i <= pokemonTotal; i++) {
    let data = await fetch(url + i).then(res => res.json());
    pokemon.push(data);
  }

  return (
    <div className="flex w-full justify-center content-center bg-fixed bg-gradient-to-tr from-gray-400 to-gray-300">
      <div className="fixed z-30 flex p-3 bg-white rounded-full">
        <h1>1 generación</h1>
        <h1>2 generación</h1>
        <h1>3 generación</h1>
        <h1>4 generación</h1>
        <h1>5 generación</h1>
        <h1>6 generación</h1>
        <h1>7 generación</h1>
        <h1>8 generación</h1>
        <h1>9 generación</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-5 mt-10">
        {pokemon.map(poke => (
          <Card key={poke.id} poke={poke} />
        ))}
      </div>
    </div>
  );
}

export default Pokedex;