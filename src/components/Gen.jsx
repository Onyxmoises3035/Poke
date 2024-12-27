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
    const lim = limGen[gen - 1].lim;
    const [pokemon, setPokemon] = useState([])
    const [pokeLim1, setPokeLim1] = useState()
    const [pokeLim2, setPokeLim2] = useState()
    const [pokeStop, setPokeStop] = useState(true)
    const [spin, setSpin] = useState(false)
    const [cont, setCont] = useState(0)

    useEffect(() => {
        setSpin(false)
        const data = async () => {
            let pokemon = [];
            for (let i = lim[0]; i <= (lim[0] + 19); i++) {
                const data = await axios.get(url + i).then(res => { return (res.data) });
                pokemon.push(data)
            }
            return pokemon;
        }
        data().then(res => setPokemon(res));
        setPokeLim1(lim[0] + 20)
        setPokeLim2(lim[1])
        setCont(0)
        setPokeStop(true)
        setSpin(true)
    }, [gen])

    useEffect(() => {
        setSpin(false)
        if (pokeStop) {
            if (cont != 0) {
                if ((pokeLim1 + 20) > pokeLim2) {
                    const data = async () => {
                        let pokemon = [];
                        for (let i = pokeLim1; i <= pokeLim2; i++) {
                            const data = await axios.get(url + i).then(res => { return (res.data) });
                            pokemon.push(data)
                        }
                        return pokemon;
                    }
                    data().then(res => setPokemon(res));
                    setPokeStop(false)
                } else {
                    const data = async () => {
                        let pokemon = [];
                        for (let i = pokeLim1; i <= (pokeLim1 + 19); i++) {
                            const data = await axios.get(url + i).then(res => { return (res.data) });
                            pokemon.push(data)
                        }
                        return pokemon;
                    }
                    data().then(res => setPokemon(res));
                }
                setPokeLim1(pokeLim1 + 20)
            }
        }
        setSpin(true)
    }, [cont])

    const morePokemon = () => {
        setCont(cont + 1)
    }

    return (
        <div className="flex">
            {spin ?
                <div>
                    <div id="container" className="grid grid-cols-1 lg:grid-cols-5 mt-10">
                        {pokemon.map(poke => (
                            <Card key={poke.id} poke={poke} />
                        ))
                        }
                    </div>
                    {pokeStop ? <button className="bg-black bg-opacity-30 p-3 rounded-lg text-center" onClick={morePokemon}>mas</button> : <></>}
                </div>
                :
                <div className="h-dvh flex items-center">
                    <div className="size-36 border-8 border-gray-600 border-t-blue-500 rounded-full animate-spin"></div>
                </div>
            }
        </div>
    )
}

export default Gen;