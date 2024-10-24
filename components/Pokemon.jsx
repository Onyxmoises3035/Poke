"use client";
import { useFetch, getData } from "@hooks/useFetch";
import { CardPokemon } from "./CardPokemon";
import { allPokemon } from "@/helpers/url";
import { useState, useEffect } from "react";

export const Pokemon = () => {

    const { data, loading, error } = useFetch(allPokemon);
    const [ info, setInfo ] = useState(null);

    const infoPoke = (e) => {
        const data = getData(e.target.value);
        setInfo(data);
        console.log(data);
    }

    return (
        <>
            <ul>
                {error && <li>Error: {error}</li>}
                {loading && <li>Cargando...</li>}
                {data?.results.map((poke) => (
                    <li>
                        <button value={poke.url} onClick={infoPoke}>{poke.name}</button>
                    </li>
                ))}
            </ul>
            <div>
                {info? <CardPokemon info={info}/> : ""}
            </div>
        </>
    )
}

