import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient'; // Assuming this is set up correctly

const Login = () => {
  const [email, setEmail] = useState<string>(''); // Explicit typing
  const [password, setPassword] = useState<string>(''); // Explicit typing
  const [error, setError] = useState<string | null>(null); // Explicit typing
  const navigate = useNavigate(); // To navigate to home page upon success

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Sign in with email and password
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        throw new Error(error.message); // Handle Supabase error
      }

      // Redirect to home page on success
      navigate('/home');
    } catch (err) {
      // Handle unknown errors
      if (err instanceof Error) {
        setError(err.message); // Set error message
      } else {
        setError('An unknown error occurred'); // Fallback error message
      }
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p>{error}</p>} {/* Display error message if present */}
      <form onSubmit={handleLogin}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
