import React, { useState } from "react";
//import api from "../services/api";
import "./cadastro.css";
import logo from "../../assets/logo.svg";

export default function Cadastro({ history }) {
  const [cpf, setCPF] = useState("");
  const [nome, setNome] = useState("");
  const [celular, setCel] = useState("");
  const [end, setEnd] = useState("");
  const [cep, setCep] = useState("");

  var erro;

  async function handleSubmit() {}

  return (
    <div className="cadastro-container">
      <img src={logo} className="logo" alt="tindev" />

      <h2>Conclua o seu cadastro em menos de 5 minutos e aguarda o match.</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="CPF"
          value={cpf}
          onChange={e => setCPF(e.target.value)}
        ></input>

        <input
          type="text"
          placeholder="Nome Completo"
          value={nome}
          onChange={e => setNome(e.target.value)}
        ></input>

        <input
          type="number"
          placeholder="Celular"
          value={celular}
          onChange={e => setCel(e.target.value)}
        ></input>

        <input
          type="text"
          placeholder="Endereço"
          value={end}
          onChange={e => setEnd(e.target.value)}
        ></input>

        <input
          type="number"
          placeholder="Cep"
          value={cep}
          onChange={e => setCep(e.target.value)}
        ></input>

        <select>
          <option value="M">Masculino</option>
          <option value="F">Feminino</option>
        </select>

        <div class="cadastro-termos">
          <input type="radio" value="AC" id="AC" ></input>
          <label for="AC">Li e concordo com os Termos e com a Politíca de privacidade, e disponibilizo meus dados para análise de crédito.</label>
        </div>

        <button type="submit">Cadastrar</button>
        {erro !== "error" ? "" : <p>deu erro</p>}
      </form>
    </div>
  );
}
