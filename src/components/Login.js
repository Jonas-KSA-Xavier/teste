import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/success');
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Conecte-se</h2>
        <div className="form-group">
          <input type="text" id="username" name="username" placeholder="Usuário" required />
        </div>
        <div className="form-group">
          <input type="password" id="password" name="password" placeholder="Senha" required />
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;