'use client'
import { useState } from "react";
import Gen from "@/components/Gen";
import Bar from "@/components/Bar";
import Index from "@/components/Index";

const Pokedex = () => {

  const [init, setInit] = useState(false)
  const [gen, setGen] = useState()

  const selGen = (e) => {
    setGen(e.target.id);
    setInit(false)
    setInit(true)
  }

  return (
    <div className="w-full min-h-dvh bg-fixed bg-gradient-to-bl from-red-400 to-gray-300">
      {init ?
        <div className="flex w-full justify-center content-center">
          <Bar selGen={selGen} />
          <Gen gen={gen} />
        </div>
        :
        <Index selGen={selGen} />
      }
    </div>
  );
}

export default Pokedex;