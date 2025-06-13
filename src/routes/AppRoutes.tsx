import { Routes, Route } from 'react-router-dom';
import Home from '../components/pages/Home';
import Projects from '../components/pages/Projects';
import About from '../components/pages/About';
import Contact from '../components/pages/Contact';
import Layout from '../components/layout/Layout';

export default function AppRoutes() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Route>
        </Routes>
    );
}
