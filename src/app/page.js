'use client'
import { useState } from "react";
import Gen from "@/components/Gen";
import Bar from "@/components/Bar";
import Index from "@/components/Index";
import { IconButton } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Dex from "@/components/Dex";

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
      {init ?
        <div>
          <IconButton className="!absolute z-50" onClick={back}>
            <ArrowBackIcon />
          </IconButton>
          <div className="flex w-full justify-center content-center">
            {/* <Bar selGen={selGen} />
            <Gen gen={gen} /> */}
            <Dex gen={gen} />
          </div>
        </div>
        :
        <Index selGen={selGen} />
      }
    </div>
  );
}

export default Pokedex;