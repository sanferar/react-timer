import React from "react";
import { useState, useEffect } from "react";
import '../hojas-estilo/timer2.css';
import { BsFillClockFill } from "react-icons/bs"; 


function Timer2({ tiempoInicial }) {

  const [tiempo, setTiempo] = useState(tiempoInicial);

  useEffect(() => {
    const intervaloCuentaAtras = setInterval(() => {
      setTiempo((tiempoAnterior) => tiempoAnterior - 1);
    }, 1000);

    if (tiempo === 0) {
      clearInterval(intervaloCuentaAtras);
    }
    return () => {
      clearInterval(intervaloCuentaAtras);
    };
  }, [tiempo]);

  const minutes = Math.floor(tiempo / 60);
  const seconds = tiempo % 60;

    return(
        <div className="contenedor-timer-2">
            <div className="contendor-timer-2-icono">
                <div className="contenedor-timer-2-icono--icono" >
                    <BsFillClockFill
                    className="icono-bootstrap"
                    />
                </div>
            </div>
            <div className="contendor-timer-2-reloj">
                <div className="contenedor-timer-1-reloj--live" >{`${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`}</div>
            </div>
        </div>
    )

}


export default Timer2;