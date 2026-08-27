import { Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/home'
import About from './Pages/about'
import Projects from './Pages/projects'
import Contact from './Pages/contact'
import Profile from './Pages/profile'
export default function App() {
return (
<div>
<nav>
<Link to="/">Home</Link> |{' '}
<Link to="/about">About</Link> |{' '}
<Link to="/projects">Projects</Link> |{' '}
<Link to="/contact">Contact</Link> |{' '}
<Link to="/profile">Profile</Link>
</nav>
<hr />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/projects" element={<Projects />} />
<Route path="/contact" element={<Contact />} />
<Route path="/profile" element={<Profile />} />
</Routes>
</div>
)
}