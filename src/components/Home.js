import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>Welcome to React Lazy</h1>
            <Link to="/about">
                <button>About</button>
            </Link>
        </div>
    )
}

export default Home;