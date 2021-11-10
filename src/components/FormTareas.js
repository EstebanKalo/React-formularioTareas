import React, { useState } from "react";
import ListaTareas from "./ListaTareas";

const FormTareas = () => {
  // aqui va la logica
  // crear los state necesarios
  const [tareaIndividual, setTareaIndividual] = useState("");
  const [tareas, setTareas] = useState([]);

  // const guardarTarea = (e) => {
  //   // console.log(e.target.value)
  //   setTareaIndividual(e.target.value)
  // }

  const handleSubmit = (e) =>{
    e.preventDefault();
    // console.log("Desde handleSubmit")
    setTareas([...tareas, tareaIndividual]);
    //limpiar el input
    setTareaIndividual("");
  };

  const borrarTarea = (nombre) =>{
      let arregloModificado = tareas.filter((tarea)=>{return tarea !== nombre});
      console.log(arregloModificado); 
      setTareas(arregloModificado);
  }


  return (
    // aqui va el maquetado y muy poca logica
    <>
      <form className="container my-5" onSubmit={handleSubmit}>
        <div className="mb-3 d-flex">
          <input
            type="text"
            placeholder="Ingrese una tarea"
            className="form-control"
            onChange = { e => setTareaIndividual(e.target.value)}
            value= {tareaIndividual}/>
          <button type="submit" className="btn btn-outline-light">
            Agregar
          </button>
        </div>
      </form>
      <section className="container">
        <ListaTareas arregloTareas={tareas} borrarTarea={borrarTarea}/>
      </section>
    </>
  );
};

export default FormTareas;
