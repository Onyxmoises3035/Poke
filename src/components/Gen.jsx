'use client'
import Card from "./Card";
import axios from "axios";
import { useEffect, useState } from "react";

const limGen = [
    { lim: [1, 151] },
    { lim: [152, 251] },
    { lim: [252, 386] },
    { lim: [387, 493] },
    { lim: [494, 649] },
    { lim: [650, 721] },
    { lim: [722, 809] },
    { lim: [810, 905] },
    { lim: [906, 1025] },
]

const url = 'https://pokeapi.co/api/v2/pokemon/';

const data = async (lim) => {
    let pokemon = [];
    for (let i = lim[0]; i <= lim[1]; i++) {
        const data = await axios.get(url + i).then(res => { return (res.data) });
        pokemon.push(data)
    }
    return pokemon;
}

const Gen = ({ gen }) => {

    const lim = limGen[gen - 1].lim;
    const [pokemon, setPokemon] = useState([])
    const [cont, setCont] = useState(20)

    useEffect(() => {
        setPokemon([]);
        data(lim).then(res => setPokemon(res));
        setCont(20);
    }, [gen])

    const p = () => {
        setCont(cont + 20);
    }

    return (
        <div className="flex">
            {pokemon != '' ?
                <div className="flex flex-col">
                    <div id="container" className="grid grid-cols-1 lg:grid-cols-5 mt-10">
                        {pokemon.slice(0, cont).map(poke => (
                            <Card key={poke.id} poke={poke} />
                        ))}
                    </div>

                    <button className="p-5 m-5" onClick={p}>MAS</button>
                </div>
                :
                <div className="flex min-h-dvh items-center">
                    <div className="size-36 border-8 border-gray-600 border-t-blue-500 rounded-full animate-spin"></div>
                </div>
            }
        </div>
    )
}

export default Gen;