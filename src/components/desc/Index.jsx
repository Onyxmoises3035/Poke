import Image from "next/image";

const Index = ({ selGen }) => {

    const generations = [
        { id: 1, title: 'Kanto', image: '/icons/G1.svg', banner: '/banners/G1.png', numero: 151, bg: 'to-red-600' },
        { id: 2, title: 'Johto', image: '/icons/G2.svg', banner: '/banners/G2.png', numero: 100, bg: 'to-yellow-400' },
        { id: 3, title: 'Hoenn', image: '/icons/G3.svg', banner: '/banners/G3.png', numero: 135, bg: 'to-lime-600' },
        { id: 4, title: 'Sinnoh', image: '/icons/G4.svg', banner: '/banners/G4.png', numero: 107, bg: 'to-blue-600' },
        { id: 5, title: 'Teselia', image: '/icons/G5.svg', banner: '/banners/G5.png', numero: 156, bg: 'to-fuchsia-600' },
        { id: 6, title: 'Kalos', image: '/icons/G6.svg', banner: '/banners/G6.png', numero: 72, bg: 'to-gray-600' },
        { id: 7, title: 'Alola', image: '/icons/G7.svg', banner: '/banners/G7.png', numero: 88, bg: 'to-orange-600' },
        { id: 8, title: 'Galar', image: '/icons/G8.svg', banner: '/banners/G8.png', numero: 96, bg: 'to-cyan-600' },
        { id: 9, title: 'Paldea', image: '/icons/G9.svg', banner: '/banners/G9.png', numero: 120, bg: 'to-pink-600' },
        { id: 10, title: 'Todos', image: '/icons/G1.svg', banner: '/banners/G1.png', numero: 151, bg: 'to-red-600' },
    ]

    return (
        <div className="flex items-center h-screen flex-col justify-evenly">
            <Image className="mt-5 pngSahdow" src='/logo.webp' height={200} width={200} alt="logo" />
            <div className="grid grid-cols-3">
                {generations.map(generation => (
                    <div key={generation.id} onClick={() => selGen(generation.id)} className={`size-auto rounded-3xl bg-gradient-to-tr from-stone-50 ${generation.bg} shadow-2xl m-4 transform transition-all duration-300 hover:scale-110 cursor-pointer`}>
                        <div className={`bg-gradient-to-bl from-stone-50 ${generation.bg} rounded-3xl w-96 h-40 flex justify-around flex-wrap content-center m-2 shadow-2xl`}>
                            <div className="flex flex-col justify-center items-center">
                                <h1 className="text-3xl text-indigo-600 textShadow">{generation.title}</h1>
                                <h1 className="text-lg textShadow">{generation.numero}</h1>
                                <Image className="mt-1" src={generation.image} width={50} height={50} alt="genIcon" />
                            </div>
                            <div>
                                <Image className="pngSahdow" src={generation.banner} width={200} height={200} alt="G1" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Index;