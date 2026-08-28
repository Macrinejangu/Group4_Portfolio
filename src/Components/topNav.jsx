import { NavLink, Link } from "react-router-dom";
import './topNav.css';

export default function topNav(){
    return (
     <nav className="top-nav">
<div className="brand">
<span className="logo-mark"></span>
<span className="brand-name">Group 4</span>
</div>
<div className="nav-links">
<NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
<NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
<NavLink to="/profile" className={({ isActive }) => isActive ? 'active' : ''}>Profile</NavLink>
<NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>Projects</NavLink>
<NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink>
</div>
<Link to="/contact" className="cta-button">Let's Talk</Link>
</nav>   
    )
}