import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';

import handleLogin from '../services/handleLogin';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {
    formState: { errors }
  } = useForm();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(email);
    console.log(password);
    console.log(await handleLogin({ email: email, password: password }));
  };
  return (
    <div>
      <div className="login-form">
        <form>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} />
          {errors.title && <p>{errors.email.message}</p>}

          <label htmlFor="password">Password</label>
          <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
          {errors.title && <p>{errors.password.message}</p>}
          <button type="submit" onClick={handleSubmit}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
