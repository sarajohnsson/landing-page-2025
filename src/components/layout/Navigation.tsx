import { NavLink } from 'react-router-dom';
import { useState } from 'react';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    type NavLink = {
        path: string;
        label: string;
    };

    const links: NavLink[] = [
        { path: '/', label: 'Home' },
        { path: '/projects', label: 'Projects' },
        { path: '/about', label: 'About' },
        { path: '/contact', label: 'Contact' },
    ];

    return (
        <nav>
            <button></button>
        </nav>
    );
}
