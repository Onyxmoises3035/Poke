import { useEffect, useState } from "react";

const Pokeball = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(true)
    }, [])

    const openDex = () => {
        setOpen(!open)
    }

    return (
        <div>
            <div className={`w-full h-1/2 bg-red-700 z-50 fixed top-0 transition-transform duration-1000 ease-in-out ${open ? '-translate-y-full' : 'translate-y-0'}`}>
                <div className="fixed bottom-0 bg-black w-full h-6"></div>
                <div onClick={openDex}>
                    <div className="absolute z-30 bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-black size-32 rounded-full shadow-2xl"></div>
                    <div className="absolute z-40 bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white size-24 rounded-full"></div>
                    <div className="absolute z-50 bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white size-14 rounded-full shadow-2xl border-2 border-gray-400"></div>
                </div>
            </div>
            <div className={`w-full h-1/2 bg-white z-30 fixed bottom-0 transition-transform duration-1000 ease-in-out ${open ? 'translate-y-full' : 'translate-y-0'}`}>
                <div className="absolute z-40 size-32 rounded-full top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="absolute w-full h-1/2 z-40 bg-black bottom-0 rounded-ee-full rounded-es-full"></div>
                </div>
            </div>
        </div>
    )
}

export default Pokeball;