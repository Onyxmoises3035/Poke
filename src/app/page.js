'use client'
import { useState } from "react";
import Gen from "@/components/Gen";

const Pokedex = () => {

  const [init, setInit] = useState(false)
  const [gen, setGen] = useState()

  const selGen = (e) => {
    setGen(e.target.id);
    setInit(false)
    setInit(true)
  }

  return (
    <div className="flex w-full justify-center content-center bg-fixed bg-gradient-to-tr from-gray-400 to-gray-300">
      <div className="mt-2 fixed z-30 flex bg-white rounded-full bg-opacity-30">
        <button id="1" onClick={selGen} className="genButton">1° Gen</button>
        <button id="2" onClick={selGen} className="genButton">2° Gen</button>
        <button id="3" onClick={selGen} className="genButton">3° Gen</button>
        <button id="4" onClick={selGen} className="genButton">4° Gen</button>
        <button id="5" onClick={selGen} className="genButton">5° Gen</button>
        <button id="6" onClick={selGen} className="genButton">6° Gen</button>
        <button id="7" onClick={selGen} className="genButton">7° Gen</button>
        <button id="8" onClick={selGen} className="genButton">8° Gen</button>
        <button id="9" onClick={selGen} className="genButton">9° Gen</button>
      </div>
      {init ?
        <Gen gen={gen} />
        :
        <h1>Pokedex</h1>
      }

    </div>
  );
}

export default Pokedex;