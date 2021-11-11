import React, { useState, useEffect } from "react";
import ListaTareas from "./ListaTareas";

const FormTareas = () => {
  let tareasLocalStorage = JSON.parse(localStorage.getItem("listaTareas"))  || [];
  // aqui va la logica
  // crear los state necesarios
  const [tareaIndividual, setTareaIndividual] = useState("");
  const [tareas, setTareas] = useState(tareasLocalStorage);

  //aqui uso el ciclo de vida de un componente
  useEffect(()=>{
    // esto funciona en montaje y actualizacion
    // console.log("Ejecutando el ciclo de vida de un componente");
    localStorage.setItem("listaTareas", JSON.stringify(tareas));
  }, [tareas])




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
