import { Link } from 'react-router-dom';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'What We Do', path: '/what-we-do' },
        { name: 'Why Us', path: '/why-us' },
        { name: 'Team Members', path: '/testimonials' },
        { name: 'Join With Us', path: '/join' },
        { name: 'Contact', path: '/contact' },
    ];

    const locations = [
        { city: 'Guntur', country: 'India' },
        { city: 'Hyderabad', country: 'India' },
        { city: 'Mumbai', country: 'India' },
    ];

    return (
        <footer className="bg-dark-lighter border-t border-dark-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold gradient-text">Achievers Club</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Building Forever Achievers through digital and network marketing excellence.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-accent font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="text-gray-400 hover:text-accent text-sm transition-colors duration-200"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Locations */}
                    <div>
                        <h4 className="text-accent font-semibold mb-4">Our Locations</h4>
                        <ul className="space-y-2">
                            {locations.map((location, index) => (
                                <li key={index} className="text-gray-400 text-sm">
                                    {location.city}, {location.country}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-accent font-semibold mb-4">Connect With Us</h4>
                        <p className="text-gray-400 text-sm mb-4">
                            Ready to start your journey to becoming a forever achiever?
                        </p>
                        <Link
                            to="/join"
                            className="inline-block px-6 py-2 bg-accent text-dark font-semibold rounded-full hover:bg-accent-light transition-colors duration-200"
                        >
                            Join Now
                        </Link>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-dark-border">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-gray-500 text-sm">
                            © {currentYear} Achievers Club. All rights reserved.
                        </p>
                        <div className="flex space-x-6">
                            <a href="#" className="text-gray-500 hover:text-accent text-sm transition-colors">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-gray-500 hover:text-accent text-sm transition-colors">
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
