import { Routes, Route, Link } from 'react-router-dom';
import Layout from './Components/layout';
import Home from './Pages/home'
import About from './Pages/about'
import Projects from './Pages/projects'
import Contact from './Pages/contact'
import Profile from './Pages/profile'
export default function App() {
return (
<Layout>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/projects" element={<Projects />} />
<Route path="/contact" element={<Contact />} />
<Route path="/profile" element={<Profile />} />
</Routes>
</Layout>
)
}