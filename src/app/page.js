'use client'
import { useState } from "react";
import Gen from "@/components/desc/Gen";
import Bar from "@/components/desc/Bar";
import Index from "@/components/desc/Index";
import { IconButton, List } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Dex from "@/components/Dex";
import Lista from "@/components/Lista";

const Pokedex = () => {

  const [init, setInit] = useState(false)
  const [gen, setGen] = useState()

  const selGen = (id) => {
    setGen(id);
    setInit(false)
    setInit(true)
  }

  const back = () => {
    setInit(false)
  }

  return (
    <div className="w-full min-h-dvh bg-fixed bg-diagonal-three-colors">
      <Dex gen={10} />

      {/* {init ?
        <div>
          <IconButton className="!absolute z-50" onClick={back}>
            <ArrowBackIcon />
          </IconButton>
          <div className="flex w-full justify-center content-center">
            <Dex gen={gen} />
          </div>
        </div>
        :
        <Index selGen={selGen} />
      } */}
    </div>
  );
}

export default Pokedex;