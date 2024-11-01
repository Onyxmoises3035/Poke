import Card from "./Card";

const Gen = ({ pokemon }) => {

    return (
        <div className="flex w-full justify-center content-center bg-fixed bg-gradient-to-tr from-gray-400 to-gray-300">
            <div className="fixed z-30 flex p-3 bg-white rounded-full">
                <a href='/1_151'>1 generación</a>
                <a href="/152_251">2 generación</a>
                <a href="/252_386">3 generación</a>
                <a href="/387_493">4 generación</a>
                <a href="/494_649">5 generación</a>
                <a href="/650_721">6 generación</a>
                <a href="/722_809">7 generación</a>
                <a href="/810_905">8 generación</a>
                <a href="/906_1025">9 generación</a>
            </div>
            <div id="container" className="grid grid-cols-1 lg:grid-cols-5 mt-10">
                {pokemon.map(poke => (
                    <Card key={poke.id} poke={poke} />
                ))}
            </div>
        </div>
    )
}

export default Gen;