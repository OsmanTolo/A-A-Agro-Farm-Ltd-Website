import React, { useState } from 'react'

// Updated data for navigation links
const navLinksData = [
    { href: 'home', label: 'Home' },
    { href: 'about', label: 'About Us' },
    { href: 'products', label: 'Our Products' },
    { href: 'impact', label: 'Our Impact' },
    { href: 'farm-highlights', label: 'Highlights' },
    { href: 'contact', label: 'Contact Us' },
]

function Navbar({ smoothScrollTo }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const handleNavLinkClick = (elementId) => {
        smoothScrollTo(elementId)
        if (isMobileMenuOpen) {
            setIsMobileMenuOpen(false)
        }
    }

    return (
        <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50 h-16">
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-full">
                <a
                    href="#home"
                    onClick={(e) => {
                        e.preventDefault()
                        handleNavLinkClick('home')
                    }}
                    className="text-xl font-bold text-emerald-700 font-display hover:text-emerald-600 transition-colors"
                >
                    A&A Agro Farm Limited
                </a>

                <div className="hidden md:flex space-x-6 items-center">
                    {navLinksData.map((link) => (
                        <a
                            key={link.href}
                            href={`#${link.href}`}
                            onClick={(e) => {
                                e.preventDefault()
                                handleNavLinkClick(link.href)
                            }}
                            className="text-slate-700 hover:text-amber-500 transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                <div className="md:hidden">
                    <button
                        id="mobile-menu-button"
                        aria-label="Open navigation menu"
                        aria-expanded={isMobileMenuOpen}
                        aria-controls="mobile-menu"
                        onClick={toggleMobileMenu}
                        className="text-slate-700 hover:text-amber-500 focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            ></path>
                        </svg>
                    </button>
                </div>
            </nav>

            {isMobileMenuOpen && (
                <div
                    id="mobile-menu"
                    className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg py-2 z-40"
                >
                    {navLinksData.map((link) => (
                        <a
                            key={link.href}
                            href={`#${link.href}`}
                            onClick={(e) => {
                                e.preventDefault()
                                handleNavLinkClick(link.href)
                            }}
                            className="block px-4 py-2 text-slate-700 hover:bg-emerald-50 hover:text-amber-600 transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            )}
        </header>
    )
}

export default Navbar
