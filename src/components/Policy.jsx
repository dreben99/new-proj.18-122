import React from "react";
import { useState, useEffect } from "react";
import * as tacoService from '../services/tacoService'
import TacoListItem from "./TacoListItem";

export default function Policy() {

    const [tacos, setTacos] = useState([])

    useEffect(() => {
        tacoService.getAll()
        .then(result => setTacos(result))
    }, [])



    return (

        <>
        <h1>Policy Page</h1>
        {tacos.length === 0 && (
            <h3 className="no-articles">no tacos</h3>
        )}

          {tacos.map(taco => (
             <TacoListItem key={taco._id} {...taco} />
          ))}
        </>
    )
}