import React, { Fragment, useState } from "react";
import Error from "./Error";
import PropTypes from "prop-types";

const Pregunta = ({ guardarPresupuesto, guardarRestante, actualizarPregunta }) => {
  //definir el state
  const [cantidad, guardarCantidad] = useState(0);
  const [error, setError] = useState(false);

  //funcion que lee el presupuesto

  const definirPresupuesto = (e) => {
    guardarCantidad(parseInt(e.target.value, 10));
  };

  //Submit para definir el presupuesto
  const agregarPresupuesto = (e) => {
    e.preventDefault();

    //validar

    if (cantidad < 1 || isNaN(cantidad)) {
      setError(true);
      return;
    }

    //si se pasa la validacion

    setError(false);
    guardarPresupuesto(cantidad);
    guardarRestante(cantidad);
    actualizarPregunta(false);



  };

  return (
    <Fragment>
      <h2>coloca tu presupuesto</h2>

      {error ? <Error mensaje="El Presupuesto es incorrecto" /> : null}

      <form onSubmit={agregarPresupuesto}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
          onChange={definirPresupuesto}
        />

        <input
          type="submit"
          className="button-primary u-full-width"
          value="definir presupuesto"
        ></input>
      </form>
    </Fragment>
  );
};

Pregunta.propTypes = {
  guardarPresupuesto: PropTypes.func.isRequired,
  guardarRestante: PropTypes.func.isRequired,
  actualizarPregunta: PropTypes.func.isRequired,
}



export default Pregunta;
