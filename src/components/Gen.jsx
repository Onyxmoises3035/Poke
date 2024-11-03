'use client'
import Card from "./Card";
import axios from "axios";
import { useEffect, useState } from "react";

const Gen = ({ gen }) => {

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
    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        const lim = limGen[gen-1].lim;
        const data = async () => {
            let pokemon = [];
            for (let i = lim[0]; i <= lim[1] ; i++) {
                const data = await axios.get(url + i).then(res => {return(res.data)});
                pokemon.push(data)
            }
            return pokemon;
        }
        data().then(res => setPokemon(res));
    }, [gen])

    return (
        <div id="container" className="grid grid-cols-1 lg:grid-cols-5 mt-10">
            {pokemon.map(poke => (
                <Card key={poke.id} poke={poke} />
            ))}
        </div>
    )
}

export default Gen;