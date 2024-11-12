import Image from "next/image";

const Index = ({ selGen }) => {

    const generations = [
        { id: 1, title: 'Primera Generación', image: '/icons/G1.svg', banner: '/banners/G1.png' },
        { id: 2, title: 'Segunda Generación', image: '/icons/G2.svg', banner: '/banners/G2.png' },
        { id: 3, title: 'Tercera Generación', image: '/icons/G3.svg', banner: '/banners/G3.png' },
        { id: 4, title: 'Cuarta Generación', image: '/icons/G4.svg', banner: '/banners/G4.png' },
        { id: 5, title: 'Quinta Generación', image: '/icons/G5.svg', banner: '/banners/G5.png' },
        { id: 6, title: 'Sexta Generación', image: '/icons/G6.svg', banner: '/banners/G6.png' },
        { id: 7, title: 'Séptima Generación', image: '/icons/G7.svg', banner: '/banners/G7.png' },
        { id: 8, title: 'Octava Generación', image: '/icons/G8.svg', banner: '/banners/G8.png' },
        { id: 9, title: 'Novena Generación', image: '/icons/G9.svg', banner: '/banners/G9.png' },
      ]

    return (
        <div className="flex items-center h-screen flex-col">
            <Image className="mt-5" src='/logo.webp' height={200} width={200} alt="logo" />
            <div className="grid grid-cols-3">
                {generations.map(generation => (
                    <div key={generation.id} className="group m-5 p-5 flex flex-col items-center hover:scale-150 transition-all duration-200 bg-black bg-opacity-40 rounded-2xl">
                        <button
                            id={generation.id}
                            onClick={selGen}
                        >
                            <Image className="group-hover:hidden" src={generation.image} width={200} height={200} alt={generation.title} />
                            <Image className="hidden group-hover:block" id={generation.id} src={generation.banner} width={150} height={150} alt={generation.title} />
                        </button>
                        <h1 className="hidden group-hover:block">
                            {generation.title}
                        </h1>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Index;