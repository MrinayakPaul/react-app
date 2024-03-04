import React from "react";
import './Header.css';
import { Link, useNavigate } from "react-router-dom";

const Header = () => {

    const navigate = useNavigate()

    const handleLogout=()=>{
        localStorage.removeItem('token');
        navigate('/login');
    }
    return (
    <div>
        <div className="header">
            <Link to="/">HOME</Link>
            <span className='mt-3'>Sell and Purchase Online On Your City...</span>
            {!localStorage.getItem('token') ?
            <Link to="/login"> LOGIN </Link>:
            <button onClick={handleLogout}>LOGOUT</button>}
        </div>
    </div>
    )
    
}

export default Header