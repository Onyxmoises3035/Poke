import axios from "axios";
import { useEffect, useState } from "react";

const lstGen = [
    { id: 1, inicio: 0, totalPoke: 151 },
    { id: 2, inicio: 151, totalPoke: 100 },
    { id: 3, inicio: 251, totalPoke: 135 },
    { id: 4, inicio: 386, totalPoke: 107 },
    { id: 5, inicio: 493, totalPoke: 156 },
    { id: 6, inicio: 649, totalPoke: 72 },
    { id: 7, inicio: 721, totalPoke: 88 },
    { id: 8, inicio: 809, totalPoke: 96 },
    { id: 9, inicio: 905, totalPoke: 120 },
]

const url = 'https://pokeapi.co/api/v2/pokemon/';

const data = async (inicio, total) => {
    const set = `?limit=${total}&offset=${inicio}`;
    console.log(url + set);
    const data = await axios.get(url + set).then(res => { return (res.data) });
    return data;
}

const Lista = ({ gen, selPoke }) => {

    const [pokemon, setPokemon] = useState([]);
    const [pokeSel, setPokeSel] = useState();

    useEffect(() => {
        const inicio = lstGen[gen - 1].inicio;
        const total = lstGen[gen - 1].totalPoke;
        data(inicio, total).then(res => setPokemon(res.results));
    }, [gen])

    const setId = (id) => {
        selPoke(id)
        setPokeSel(id)
    }

    return (
        <div className="flex flex-col items-end h-full w-1/4 ml-5">
            <div className="w-full overflow-y-auto overflow-x-hidden bg-white bg-opacity-40 m-5 px-5 py-3 rounded-lg no-scrollbar">
                {pokemon.map(poke => (
                    <div className={`group rounded-full m-1 px-1 w-full cursor-pointer justify-between flex items-center 
                                ${(poke.url.split('/').filter(Boolean).pop() === pokeSel) ? 'bg-diagonal-three-colors-black' : 'hover:bg-diagonal-three-colors-black'}`}
                        onClick={() => setId(poke.url.split('/').filter(Boolean).pop())}
                        key={poke.url.split('/').filter(Boolean).pop()}>

                        <div className="">
                            <h1 className={`text-3xl ml-1 truncate ${(poke.url.split('/').filter(Boolean).pop() === pokeSel) ? 'text-white' : 'group-hover:text-white'}`}>
                                N.º {poke.url.split('/').filter(Boolean).pop()}
                            </h1>
                        </div>

                        <div className="text-center text-black mr-2 overflow-hidden relative">
                            <h1 className={`text-3xl whitespace-nowrap ${(poke.url.split('/').filter(Boolean).pop() === pokeSel) ? 'text-white' : 'group-hover:text-white'} ${poke.name.length > 15 ? 'animate-marquee' : ''}`}>
                                {poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}
                            </h1>
                        </div>

                        <div className="mr-1">
                            <svg className={`${(poke.url.split('/').filter(Boolean).pop() === pokeSel) ? 'fill-white' : 'group-hover:fill-white'}`} xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 32 32">
                                <path d="M20.9 17a5 5 0 0 1-9.8 0H2.051a13.984 13.984 0 0 0 27.9 0zm-9.8-2a5 5 0 0 1 9.8 0h9.05a13.984 13.984 0 0 0-27.9 0z" className="svgShape color000000-1 selectable" />
                                <circle cx="16" cy="16" r="3" className="svgShape color000000-2 selectable" />
                            </svg>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Lista;