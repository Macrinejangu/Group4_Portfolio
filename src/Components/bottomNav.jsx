import {Link} from 'react-router-dom';
import './bottomNav.css';


export default function bottomNav (){
   return (
       <footer className="bottom-nav">
           <div className="footer-brand">
               <span className="brand-name">Group 4</span>
           </div>
           <div className="footer-links">
               <Link to="/">Home</Link>
               <Link to="/profile">Profile</Link>
               <Link to="/projects">Projects</Link>
               <Link to="/about">About</Link>
               <Link to="/contact">Contact</Link>
           </div>
               <div className="footer-socials">
               <a href="#" aria-label="LinkedIn">in</a>
               <a href="#" aria-label="Github">gh</a>
               <a href="#" aria-label="X">x</a>   
               </div>
           <p className="footer-copyright">Group 4 Reserves ALL Rights</p>
       </footer>
   )
}
