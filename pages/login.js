import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    try {
      const loggedIn = Cookies.get('loggedIn');
      if (loggedIn === 'true') {
        setIsLoggedIn(true);
        router.push('/home');
      }
    } catch (error) {
      console.error('Error checking login status:', error);
    }
  }, [router]);

  function handleLogin(e) {
    e.preventDefault();

    try {
      const users = JSON.parse(Cookies.get('users'));

      if (users) {
        for (let i = 0; i < users.length; i++) {
          const user = users[i];
          if (user.email === email && user.password === password) {
            setIsLoggedIn(true);
            Cookies.set('loggedIn', true);
            Cookies.set('loggedUser', user.name);
            router.push('/home');
            return;
          }
        }
      }

      setError('Invalid email or password.');
    } catch (error) {
      console.error('Error parsing user cookie:', error);
      setError('An error occurred. Please try again.');
    }
  }

  function handleSignUp() {
    router.push('/register');
  }

  return (
    <div>
      <h1>Login</h1>
      {(
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          /><br></br>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /><br></br>
          <button type="submit">Login</button>
          <button type="button" onClick={handleSignUp}>
            Sign Up
          </button>
          {error && <p>{error}</p>}
        </form>
      )}
      <style jsx global>{`
        html, body {
          padding: 0;
          margin: 0;
          font-family: Segoe UI;
          display: flex;
          justify-content: center;
        }
        input, button {
          margin: 10px 0px;
          width: 300px;
          height: 30px;
          font-size: 20px;
        }
        button {
          margin: 10px 10px;
          width: 130px;
        }
      `}</style>
    </div>
  );
}

export default Login;
