'use client'
import Card from "./Card";
import axios from "axios";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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

    const container = {
        hidden: { rotate: 90 },
        show: {
            rotate: 0,
            transition: { staggerChildren: 0.1, delayChildren: 0.3 }
        }
    };

    const itemA = {
        hidden: { scale: 0, top: 100 },
        show: { scale: 1, top: 30 }
    };

    const itemB = {
        hidden: { scale: 0, top: 200 },
        show: { scale: 1, top: 80 }
    };

    return (
        <motion.div 
            variants={container}
            initial='hidden'
            animate='show'
            id="container" className="grid grid-cols-1 lg:grid-cols-5 mt-10"
        >
            {pokemon.map(poke => (
                <motion.div
                    variants={itemB}
                    key={poke.id}
                >
                    <Card  poke={poke} />
                </motion.div>
            ))}
        </motion.div>
    )
}

export default Gen;