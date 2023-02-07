import { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (  
        <nav className="navbar">
            <div className="links" style={{padding:10}}>
                <Link to="/">Home</Link>
                <Link to="/Menu">Menu</Link>
                <Link to="/Contact">Contact</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;