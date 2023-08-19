import React, { useState } from 'react';
import "./login.css"
function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Replace this with your actual login logic
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Username or Email:</label>
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

function login() {
  return (
    <div className="app-container">
      <LoginForm />
    </div>
  );
}

export default login
