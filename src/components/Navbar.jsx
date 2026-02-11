import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './ui/Button';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'What We Do', path: '/what-we-do' },
        { name: 'Why Us', path: '/why-us' },
        { name: 'Team Members', path: '/testimonials' },
        { name: 'Contact', path: '/contact' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/95 backdrop-blur-md border-b border-dark-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="text-xl md:text-2xl font-bold"
                        >
                            <span className="gradient-text">Achievers Club</span>
                        </motion.div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`text-sm font-medium transition-colors duration-200 ${isActive(link.path)
                                    ? 'text-accent'
                                    : 'text-gray-300 hover:text-accent'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link to="/join">
                            <Button size="sm">Join With Us</Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 rounded-md text-gray-300 hover:text-accent focus:outline-none"
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isOpen ? (
                                <path d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-dark-lighter border-t border-dark-border"
                    >
                        <div className="px-4 py-4 space-y-3">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`block px-4 py-2 rounded-lg text-base font-medium transition-colors ${isActive(link.path)
                                        ? 'bg-accent/10 text-accent'
                                        : 'text-gray-300 hover:bg-dark-border hover:text-accent'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link to="/join" onClick={() => setIsOpen(false)}>
                                <Button className="w-full">Join With Us</Button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
