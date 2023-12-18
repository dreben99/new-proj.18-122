import '../css/Tacos.css'

import React from "react";
import { useState, useEffect } from "react";
import * as tacoService from '../services/tacoService'
import TacoListItem from "./TacoListItem";


export default function Services() {


    const [tacos, setTacos] = useState([])

    useEffect(() => {
        tacoService.getAll()
        .then(result => setTacos(result))
    }, [])

    console.log(tacos);

    return (

        <>
              <div className="imgContainers">
        <h1>MENU</h1>
        <h1>TACOS</h1>
        {tacos.length === 0 && (
            <h3 className="no-articles">no tacos</h3>
        )}

          {tacos.map(taco => (
             <TacoListItem key={taco._id} {...taco} />
             ))}
            
            </div>
        </>
    )
}