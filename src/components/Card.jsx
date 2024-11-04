import Image from "next/image";

const Card = ({ poke }) => {

    let pokeId = poke.id.toString();

    if (pokeId.length === 1) {
        pokeId = '000' + pokeId;
    } else if (pokeId.length === 2) {
        pokeId = '00' + pokeId;
    } else if (pokeId.length === 3) {
        pokeId = '0' + pokeId;
    }

    return (
        <div
            className={`${poke.types[0].type.name} shadow-2xl size-60 p-5 m-5 text-center !bg-opacity-30 rounded-lg relative border isolate overflow-hidden`}>
            <Image className="absolute z-10 drop-shadow-lg left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2" src={poke.sprites.other['official-artwork'].front_default} alt={poke.name} width={175} height={175}></Image>
            <h1 className="bg-opacity-40 font-black uppercase absolute shadow-xl z-20 left-0 top-0 m-3 px-3 p-1 bg-white rounded-full text-black">{poke.name}</h1>
            <h1 className="absolute text-9xl font-bold text-white opacity-20 z-0 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">{poke.id}</h1>
            <h1 className="absolute z-20 text-base right-0 top-0 m-3 drop-shadow-lg">{poke.id}</h1>
            <div className="w-full h-24 bg-white absolute bottom-0 left-0 !bg-opacity-90 rounded-lg">
                <div className="flex absolute z-20 left-0 bottom-0 ml-2 mb-3">
                    {poke.types.map(type => (
                        <h1 key={type.type.name} className={`${type.type.name} bg-black rounded-full px-3 p-1 shadow-lg`}>{type.type.name}</h1>
                    ))}
                </div>
                <div className="absolute bottom-0 right-0 m-2 z-20">
                    <h1>{(poke.height / 10)} M</h1>
                    <h1>{(poke.weight / 10)} Kg</h1>
                </div>
            </div>
        </div>
    )
}

export default Card;