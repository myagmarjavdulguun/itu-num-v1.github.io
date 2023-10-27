import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

function Home() {
    const router = useRouter();
    const [name, setName] = useState('');
    var loggedUser;
    useEffect(() => {
        loggedUser = Cookies.get('loggedUser');
        if (!loggedUser) {
            router.push('/login');
        } else {
            setName(loggedUser.charAt(0).toUpperCase() + loggedUser.slice(1).toLowerCase());
        }
    }, [router]);

    const handleLogout = () => {
        Cookies.remove('loggedUser');
        router.push('/login');
    };

    return (
        <div>
            {Cookies.get('loggedUser') ? <div>
                <h1>Home</h1>
                {<p>Welcome to the home page, {name}!</p>}
                <button onClick={handleLogout}>Logout</button>
            </div> : null}
        <style jsx global>{`
            html, body {
                padding: 0;
                margin: 0;
                font-family: Segoe UI;
                display: flex;
                justify-content: center;
                font-size: 30px;
            }
            button {
            height: 30px;
            font-size: 20px;
            margin: 10px 10px;
            width: 130px;
            }
        `}</style>
        </div>
    );
}

export default Home;
