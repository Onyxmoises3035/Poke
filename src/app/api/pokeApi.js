import axios from "axios";

const pokemonUrl = 'https://pokeapi.co/api/v2/pokemon/';
const speciesUrl = 'https://pokeapi.co/api/v2/pokemon-species/';

const listPokemon = async (total, inicio) => {
    const set = `?limit=${total}&offset=${inicio}`;
    const data = await axios.get(pokemonUrl + set).then(res => { return (res.data) });
    const dataGen = data.results.map((poke, index) => {
        const pokeId = index + 1;
        const generation = generaciones.find(gen =>
            pokeId >= gen.inicio && pokeId < gen.inicio + gen.totalPoke
        );

        return {
            id: poke.url.split('/').filter(Boolean).pop(),
            name: poke.name.charAt(0).toUpperCase() + poke.name.slice(1),
            generationId: generation ? generation.id : 0,
            generation: generation ? generation.nombre : "Otras Generaciones",
            generationColor: generation ? generation.region : "N/A",
            generationIcon: generation ? generation.image : "N/A"
        };
    })

    return dataGen;
}

const pokemon = async (id) => {
    const data = await axios.get(pokemonUrl + id).then(res => { return (res.data) });

    return {
        id: data.id,
        name: data.name,
        color: data.types[0].type.name,
        sprite: data.sprites.other['official-artwork'].front_default,
        height: (data.height / 10),
        weight: (data.weight / 10),
        types: data.types.map(type => ({ name: type.type.name })),
        stats: data.stats.map(stat => ({
            name: stat.stat.name,
            value: stat.base_stat
        }))
    };
}

const species = async (id) => {
    const data = await axios.get(speciesUrl + id).then(res => { return (res.data) });
    const text = data.flavor_text_entries.filter(entry => entry.language.name === 'en').pop();
    const vari = data.varieties.filter(entry => entry.is_default === false);

    return {
        description: text.flavor_text,
        variants: vari.map(variant => ({
            id: variant.pokemon.url.split('/').filter(Boolean).pop(),
            name: variant.pokemon.name
        }))
    };
}

const variants = async (list) => {
    const promises = list.map(pokemon => {
        return axios.get(pokemonUrl + pokemon.id).then(res => ({
            id: res.data.id,
            name: res.data.name,
            sprite: res.data.sprites.other['official-artwork'].front_default
        }));
    });

    return await Promise.all(promises);
}

const generaciones = [
    {
        id: 1,
        nombre: "Generación I (Kanto)",
        inicio: 1,
        totalPoke: 151,
        region: "Kanto",
        años: "1996-1999",
        image: '/icons/G1.svg',
    },
    {
        id: 2,
        nombre: "Generación II (Johto)",
        inicio: 152,
        totalPoke: 100,
        region: "Johto",
        años: "1999-2002",
        image: '/icons/G2.svg',
    },
    {
        id: 3,
        nombre: "Generación III (Hoenn)",
        inicio: 252,
        totalPoke: 135,
        region: "Hoenn",
        años: "2002-2006",
        image: '/icons/G3.svg',
    },
    {
        id: 4,
        nombre: "Generación IV (Sinnoh)",
        inicio: 387,
        totalPoke: 107,
        region: "Sinnoh",
        años: "2006-2010",
        image: '/icons/G4.svg',
    },
    {
        id: 5,
        nombre: "Generación V (Teselia/Unova)",
        inicio: 494,
        totalPoke: 156,
        region: "Unova",
        años: "2010-2013",
        image: '/icons/G5.svg',
    },
    {
        id: 6,
        nombre: "Generación VI (Kalos)",
        inicio: 650,
        totalPoke: 72,
        region: "Kalos",
        años: "2013-2016",
        image: '/icons/G6.svg',
    },
    {
        id: 7,
        nombre: "Generación VII (Alola)",
        inicio: 722,
        totalPoke: 88,
        region: "Alola",
        años: "2016-2019",
        image: '/icons/G7.svg',
    },
    {
        id: 8,
        nombre: "Generación VIII (Galar)",
        inicio: 810,
        totalPoke: 96,
        region: "Galar",
        años: "2019-2022",
        image: '/icons/G8.svg',
    },
    {
        id: 9,
        nombre: "Generación IX (Paldea)",
        inicio: 906,
        totalPoke: 120,
        region: "Paldea",
        años: "2022-presente",
        image: '/icons/G9.svg',
    }
];

export { pokemon, species, listPokemon, variants };