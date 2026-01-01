'use client'
import { useEffect, useState } from "react";
import Lista from "./Lista";
import Image from "next/image";
import CircularProgress from '@mui/material/CircularProgress';
import Pokeball from "./Pokeball";
import Variants from "./Variants";
import Stats from "./Stats";
import {pokemon, species} from "@/app/api/pokeApi";

const Dex = ({ gen }) => {

    const [poke, setPoke] = useState(0);
    const [infoPoke, setInfoPoke] = useState(null);
    const [descrip, setDescrip] = useState();
    const [variante, setVariante] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (poke != null && poke != 0) {
            setLoading(true);

            pokemon(poke).then(res => {setInfoPoke(res)}).catch(error => {
                console.error("Error al obtener al Pokemon:", error);
                setInfoPoke(null);
                throw error;
            });

            species(poke).then(res => {
                setDescrip(res.description);
                setVariante(res.variants);
            }).catch(error => {
                console.error("Error al obtener la info del Pokemon:", error);
                throw error;
            });

            setLoading(false)
        } else {
            setInfoPoke(null);
            setVariante([])
            setDescrip('');
        }
    }, [poke])

    const selPoke = (id) => setPoke(id)

    return (
        <div className="w-full h-dvh flex">
            <Pokeball />

            <div className="flex flex-1 justify-center items-center p-5">
                {loading ?
                    <CircularProgress color="inherit" size={150} />
                    :
                    infoPoke &&
                    <div className="flex flex-col-reverse size-full relative">
                        <div className={`${infoPoke.color} absolute size-full rounded-lg`}></div>

                        <Image className="absolute z-10 drop-shadow-lg left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2" src={infoPoke.sprite} alt={infoPoke.name} width={450} height={450}></Image>

                        <h1 className="absolute z-20 text-4xl right-0 top-0 m-10 drop-shadow-lg">{infoPoke.id}</h1>

                        <h1 className="text-5xl m-10 font-black uppercase absolute shadow-xl left-0 top-0 p-3 bg-white/40 rounded-full text-black">{infoPoke.name}</h1>

                        <h1 className="absolute text-[30rem] font-bold text-white opacity-20 z-0 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">{infoPoke.id}</h1>

                        <div className="w-full h-80 absolute bottom-0 left-0 bg-white rounded-lg">
                            <div className="flex w-1/3 h-full absolute z-20 left-0 top-0 m-5 flex-col">
                                <h1 className="h-1/3">{descrip}</h1>

                                <div className="m-2 z-20 h-1/4">
                                    <h1 className="text-2xl">Height: {infoPoke.height} M</h1>
                                    <h1 className="text-2xl">Weight: {infoPoke.weight} Kg</h1>
                                </div>

                                <div className="flex">
                                    {infoPoke.types.map(type => (
                                        <h1 key={type.name} className={`${type.name} text-4xl text-white rounded-full px-5 p-3 shadow-lg uppercase flex`}>
                                            <Image className="mr-2" src={`/icons/types/${type.name}.svg`} width={30} height={30} alt="iconType" />
                                            {type.name}
                                        </h1>
                                    ))}
                                </div>
                            </div>

                            <div className="absolute w-1/3 m-3 right-0">
                                <Stats stats={infoPoke.stats}/>
                            </div>

                            {variante.length != 0 &&
                                <div className="absolute right-0 top-0 z-20 m-2">
                                    <Variants listVari={variante} color={infoPoke.color} />
                                </div>
                            }
                        </div>
                    </div>
                }
            </div>

            <Lista gen={gen} selPoke={selPoke} />
        </div>
    );
}

export default Dex;