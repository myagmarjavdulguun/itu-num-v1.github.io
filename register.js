import { useState } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    function validateEmail(email) {
        if (email.includes(' ') || !email.includes('@')) {
            return false;
        }
        const emailParts = email.split('@');
        if (emailParts.length !== 2) {
            return false;
        }
        const localPart = emailParts[0];
        const domainPart = emailParts[1];
        const domainParts = domainPart.split('.');
        if (domainParts.length < 2 || domainParts[0].length === 0 || domainParts[1].length === 0 || localPart.length === 0) {
            return false;
        }
        console.log('localPart: ' + localPart + ' ' + localPart.length);
        console.log('domainPart1: ' + domainParts[0] + ' ' + domainParts[0].length);
        console.log('domainPart2: ' + domainParts[1] + ' ' + domainParts[1].length);
        return true;
    }

    function validatePassword(password) {
        const specialCharacters = "!@#$%^&*()_+[]{};:'\"<>,.?~\\/-";
        const numbers = "0123456789";
        const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        return containsCharacter(password, specialCharacters) && containsCharacter(password, numbers) && containsCharacter(password, uppercaseLetters) && password.length >= 8;
    }

    function containsCharacter(password, characters) {
        for (var i = 0; i < characters.length; i++) {
            if (password.includes(characters[i])) {
                return true;
            }
        }
        return false;
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (validateEmail(email) && validatePassword(password)) {
            const existingUserDataString = Cookies.get('users');
            const existingUserData = existingUserDataString ? JSON.parse(existingUserDataString) : [];

            const newUser = { name, email, password };
            existingUserData.push(newUser);

            Cookies.set('users', JSON.stringify(existingUserData));
            router.push('/login');
        } else {
            setError('Please check your email and password.');
        }
    }

    return (
        <div>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder='User name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            /><br></br>
            <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            /><br></br>
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            /><br></br>
            <button type="submit">Register</button>
        </form>
        {error ? <p>{error}</p> : ''}
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
            margin: 10px 50px;
            width: 200px;
        }
      `}</style>
        </div>
    );
}

export default Register;