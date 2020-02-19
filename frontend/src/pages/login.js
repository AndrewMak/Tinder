import React, { useState } from "react";
import api from "../services/api";
import "./login.css";
import logo from "../assets/logo.png";

export default function Login({ history }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  var erro;

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      const response = await api.post("/auth/authenticate", { email: username, password });
      console.log(response, username,password)
      const { token } = response.data;
      history.push(`/home`);
    } catch (err) {
      return err;
    }
  }

  function handleCadastro(){
    history.push(`/cadastro`);
  }

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
      <img src={logo} className="logo" width="350px" height="200px" alt="tindev" />
        <input
          type="text"
          placeholder="E-mail"
          value={username}
          onChange={e => setUsername(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
        ></input>
        <button type="submit">Entrar</button>
        {erro !== "error" ? "" : <p>deu erro</p>}
      </form>
      <div className="login-link-cadastro">
        <a  onClick={() => { handleCadastro()}}>Cadastrar</a>
      </div>
    </div>
  );
}
