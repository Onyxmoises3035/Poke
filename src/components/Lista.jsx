import { Autocomplete, TextField } from "@mui/material";
import { useEffect, useState, useRef } from "react";
import { listPokemon } from "@/app/api/pokeApi";
import Image from "next/image";

const Lista = ({ gen, selPoke }) => {

    const [pokemon, setPokemon] = useState([]);
    const [pokeSel, setPokeSel] = useState();
    const lista = useRef(null);

    useEffect(() => {
        const inicio = 0;
        const total = 1025;
        listPokemon(total, inicio).then(res => { setPokemon(res) })
    }, [gen])

    const scroll = (Id) => {
        if (!lista.current) return;

        const child = document.getElementById(Id);

        if (!child) return;

        lista.current.scrollTo({
            top: child.offsetTop - lista.current.offsetTop - 10,
            behavior: 'smooth'
        });
    };

    const setId = (id) => {
        selPoke(id)
        setPokeSel(id)
        scroll(id)
    }

    return (
        <div className="flex flex-col items-end h-full w-1/4 ml-5">
            <div className="w-full m-5 mb-0 py-3 px-5 bg-white/40 rounded-lg">
                <Autocomplete
                    options={pokemon}
                    groupBy={(option) => option.generation}
                    getOptionLabel={(option) => `${option.id} ${option.name}`}
                    renderInput={(params) => <TextField {...params} label="Buscar" />}
                    onChange={(e, value) => {
                        if (value != null) {
                            setId(value.id);
                        }
                    }}
                    renderGroup={(params) => {
                        const samplePokemon = pokemon.find(p => p.generation === params.group);
                        const className = samplePokemon?.generationColor || 'default-generation';
                        const icon = samplePokemon?.generationIcon || 'default-generation';

                        return (
                            <li key={params.key}>
                                <div className={`${className} flex rounded-4xl p-2 justify-between`}>
                                    <Image src={icon} alt="icon" width={50} height={50}/>
                                    {params.group}
                                </div>
                                <ul>{params.children}</ul>
                            </li>
                        );
                    }}
                />
            </div>

            <div ref={lista} className="w-full overflow-y-auto overflow-x-hidden bg-white/40 m-5 mt-1 px-5 py-3 rounded-lg no-scrollbar">
                {pokemon.map(poke => (
                    <div className={`group rounded-full m-1 px-1 w-full cursor-pointer justify-between flex items-center 
                                ${(poke.id === pokeSel) ? 'bg-[linear-gradient(60deg,#f97316_0%,#f97316_40%,#ea580c_40%,#ea580c_50%,#000000_50%,#000000_100%)]' : 'hover:bg-[linear-gradient(60deg,#f97316_0%,#f97316_40%,#ea580c_40%,#ea580c_50%,#000000_50%,#000000_100%)]'}`}
                        onClick={() => setId(poke.id)}
                        key={poke.id}
                        id={poke.id}>

                        <div className="flex justify-center items-center">
                            <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}.png`} alt="icon" width={60} height={60}/>
                            <h1 className={`text-3xl ml-1 truncate flex-1 ${(poke.id === pokeSel) ? 'text-white' : 'group-hover:text-white'}`}>
                                N.º {poke.id}
                            </h1>
                        </div>

                        <div className="text-center text-black mr-2 overflow-hidden relative w-1/2">
                            <h1 className={`text-3xl whitespace-nowrap ${(poke.id === pokeSel) ? 'text-white' : 'group-hover:text-white'} ${poke.name.length > 15 ? 'marquee-text' : ''}`}>
                                {poke.name}
                            </h1>
                        </div>

                        {/* <div className="mr-1">
                            <svg className={`${(poke.id === pokeSel) ? 'fill-white' : 'group-hover:fill-white'}`} xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 32 32">
                                <path d="M20.9 17a5 5 0 0 1-9.8 0H2.051a13.984 13.984 0 0 0 27.9 0zm-9.8-2a5 5 0 0 1 9.8 0h9.05a13.984 13.984 0 0 0-27.9 0z" className="svgShape color000000-1 selectable" />
                                <circle cx="16" cy="16" r="3" className="svgShape color000000-2 selectable" />
                            </svg>
                        </div> */}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Lista;