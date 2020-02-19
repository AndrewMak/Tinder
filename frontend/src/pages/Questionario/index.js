import React, { useState } from "react";
//import api from "../services/api";
import "./questionario.css";
import logo from "../../assets/logo.png";

export default function Questionario({ history }) {
  const [valor, setValor] = useState("");
  const [tempo, setTempo] = useState(0);


  var erro;

  async function handleSubmit() { 

    history.push("/home");
  }

  return (
    <div className="questionario-container">
        <img src={logo} className="logo" width="350px" height="200px" alt="tindev" />

      <h2>Conclua o seu Questionario em menos de 5 minutos e aguarda o match.</h2>

      <form onSubmit={handleSubmit}>
        <h2>De quanto você precisa?</h2>
        <input
          type="text"
          placeholder="R$1000,00"
          value={valor}
          onChange={e => setValor(e.target.value)}
        ></input>
        
        <h2>Em quantas vezes você quer pagar?</h2>
        { tempo > 0 ? (<input
          type="text"
          placeholder="100"
          value={tempo}
          onChange={e => setTempo(e.target.value)}
        ></input> ) : ( 
           <select onChange={e => setTempo(e.target.value)}>
          <option value="9">9x</option>
          <option value="12">12x</option>
          <option value="18">18x</option>
          <option value="24">24x</option>
          <option value="0">Outro Valor</option>
        </select>
        ) }
        <button type="submit">Continuar </button>

        {erro !== "error" ? "" : <p>deu erro</p>}
      </form>
    </div>
  );
}
