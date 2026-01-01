import { useState, useEffect } from "react";
import HiveIcon from '@mui/icons-material/Hive';
import { IconButton, Modal } from "@mui/material";
import Image from "next/image";
import { variants } from "@/app/api/pokeApi";
// import axios from "axios";

// const pokemon = 'https://pokeapi.co/api/v2/pokemon/';

// const data = async (lista) => {
//     try {
//         const promises = lista.map(p => {
//             const id = p.pokemon.url.split('/').filter(Boolean).pop();
//             return axios.get(pokemon + id).then(res => res.data);
//         });
//         return await Promise.all(promises);
//     } catch (error) {
//         console.error("Error fetching variants:", error);
//         return [];
//     }
// }

const Variants = ({ listVari, color }) => {

    const [modalVari, setModalVari] = useState(false);
    const [variantes, setVariantes] = useState([]);
    const [fetch, setFetch] = useState(false)

    useEffect(() => {
        setVariantes([])
        setFetch(false)
    }, [listVari])

    const openModalVari = async () => {
        if (listVari.length != 0 && !fetch) {
            setVariantes(await variants(listVari));
            setFetch(true);
        }
        setModalVari(!modalVari);
    }

    return (
        <div>
            <IconButton onClick={openModalVari} className="bg-linear-to-tr from-fuchsia-500 to-cyan-500 hover:opacity-85 transition-all duration-500">
                <HiveIcon fontSize="large" className="text-white shadow-2xl" />
            </IconButton>
            <Modal open={modalVari} onClose={openModalVari} closeAfterTransition>
                <div className={`absolute ${color} p-5 rounded-xl justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center`}>
                    <h1 className="text-3xl">Variants</h1>
                    <div className={`grid columna_${variantes.length >= 4 ? 4 : variantes.length} gap-5`} >
                        {variantes.map(pokeVariant => (
                            <div key={pokeVariant.id} >
                                <Image src={pokeVariant.sprite || "/icons/pokeball.svg"} alt={pokeVariant.name} width={150} height={150}></Image>
                                <h1 className="text-sm text-center">{pokeVariant.name}</h1>
                            </div>
                        ))}
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default Variants;