'use client'
import axios from "axios";
import { useEffect, useState } from "react";
import Lista from "./Lista";
import Image from "next/image";
import { RadarChart } from '@mui/x-charts/RadarChart';

const url = 'https://pokeapi.co/api/v2/pokemon/';

const data = async (id) => {
    const data = await axios.get(url + id).then(res => { return (res.data) });
    return data;
}

const Dex = ({ gen }) => {

    const [poke, setPoke] = useState(0);
    const [infoPoke, setInfoPoke] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (poke != null && poke != 0) {
            setLoading(true);
            data(poke)
                .then(res => {
                    setInfoPoke(res);
                    setLoading(false);
                })
                .catch(error => {
                    console.error("Error fetching Pokémon:", error);
                    setLoading(false);
                    setInfoPoke(null);
                });
        } else {
            setInfoPoke(null);
        }
    }, [poke])

    const selPoke = (id) => {
        setPoke(id)
    }

    return (
        <div className="w-full h-dvh flex">
            <div className="flex flex-1 justify-center items-center p-5">
                {loading ?
                    <div className=""></div>
                    :
                    infoPoke &&
                    <div className="flex flex-col-reverse size-full relative">
                        <div className={`${infoPoke.types[0].type.name} absolute size-full rounded-lg`}></div>
                        <Image className="absolute z-10 drop-shadow-lg left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2" src={infoPoke.sprites.other['official-artwork'].front_default} alt={infoPoke.name} width={450} height={450}></Image>
                        <h1 className="absolute z-20 text-4xl right-0 top-0 m-10 drop-shadow-lg">{infoPoke.id}</h1>
                        <h1 className="text-5xl m-10 bg-opacity-40 font-black uppercase absolute shadow-xl left-0 top-0 p-3 bg-white rounded-full text-black">{infoPoke.name}</h1>
                        <h1 className="absolute text-[30rem] font-bold text-white opacity-20 z-0 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">{infoPoke.id}</h1>
                        <div className="w-full h-80 absolute bottom-0 left-0 bg-white rounded-lg">
                            <div className="flex absolute z-20 left-0 top-0 ml-2 mt-3">
                                {infoPoke.types.map(type => (
                                    <h1 key={type.type.name} className={`${type.type.name} text-4xl text-white rounded-full px-5 p-3 shadow-lg uppercase flex`}>
                                        <Image className="mr-2" src={`/icons/types/${type.type.name}.svg`} width={30} height={30} alt="iconType" />
                                        {type.type.name}
                                    </h1>
                                ))}
                            </div>
                            <div className="absolute bottom-0 right-0 m-2 z-20">
                                <h1>{(infoPoke.height / 10)} M</h1>
                                <h1>{(infoPoke.weight / 10)} Kg</h1>
                            </div>
                            <div className="absolute right-0">
                                <RadarChart height={300}
                                    series={[{
                                        fillArea: true, data: [
                                            infoPoke.stats[0].base_stat,
                                            infoPoke.stats[1].base_stat,
                                            infoPoke.stats[2].base_stat,
                                            infoPoke.stats[3].base_stat,
                                            infoPoke.stats[4].base_stat,
                                            infoPoke.stats[5].base_stat
                                        ]
                                    }]}
                                    radar={{
                                        max: 130,
                                        metrics: ['HP', 'Attack', 'Defense', 'Sp. Attack', 'Sp. Defense', 'Speed'],
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                }
            </div>
            <Lista gen={gen} selPoke={selPoke} />
        </div>
    );
}

export default Dex;