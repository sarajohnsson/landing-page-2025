import { NavLink } from 'react-router-dom';
import React from 'react';
import {
    UilEstate,
    UilSuitcase,
    UilAward,
    UilUserCircle,
} from '@iconscout/react-unicons';

type NavItem = {
    path: string;
    label: string;
    icon: React.ReactNode;
};

const Navigation: React.FC = () => {
    const navItems: NavItem[] = [
        {
            path: '/',
            label: 'Home',
            icon: <UilEstate className="w-6 h-6" />,
        },
        {
            path: '/projects',
            label: 'Projects',
            icon: <UilSuitcase className="w-6 h-6" />,
        },
        {
            path: '/about',
            label: 'About',
            icon: <UilAward className="w-6 h-6" />,
        },
        {
            path: '/contact',
            label: 'Contact',
            icon: <UilUserCircle className="w-6 h-6" />,
        },
    ];

    return (
        <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 py-1 px-4 md:bottom-auto md:top-4 w-auto max-w-[90vw] md:w-80 rounded-full border border-white/20 bg-white/10 shadow-lg backdrop-filter backdrop-blur-md z-50">
            <ul className="flex justify-center gap-4 py-3 md:py-4 md:flex-col md:gap-2">
                {navItems.map((item) => (
                    <li key={item.path}>
                        <NavLink
                            to={item.path}
                            className={({ isActive }) =>
                                `flex items-center justify-center md:justify-start p-3 rounded-full md:rounded-lg md:px-4 transition-colors ${
                                    isActive
                                        ? 'text-blue-600 bg-blue-50 md:bg-blue-100/50'
                                        : 'text-gray-600 hover:bg-gray-100'
                                }`
                            }>
                            <div className="flex items-center">
                                <span className="flex-shrink-0">
                                    {item.icon}
                                </span>
                                <span className="hidden md:block ml-3 text-sm font-medium">
                                    {item.label}
                                </span>
                            </div>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;
