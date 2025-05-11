// src/components/Hero.jsx
import React from 'react'
import cashewTressDroneViewImage from '../assets/cashew_trees_drone_view.png'

function Hero({ smoothScrollTo }) {
    const handleCTAClick = (e) => {
        e.preventDefault()
        smoothScrollTo('about')
    }

    return (
        // Hero Section with a placeholder background image
        // The 'pt-16' accounts for the fixed navbar height (h-16 or 4rem)
        // 'min-h-screen-minus-navbar' uses the custom min-height from tailwind.config.js
        <section
            id="home"
            className="relative pt-16 min-h-screen-minus-navbar flex items-center justify-center bg-cover bg-center text-white"
            style={{
                backgroundImage: `url(${cashewTressDroneViewImage})`,
            }}
        >
            {/* Background Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Hero Content */}
            <div className="relative z-10 text-center p-6 md:p-12">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display mb-4 leading-tight">
                    A&A Agro Farm Limited
                </h1>
                <p className="text-xl sm:text-2xl font-display mb-6 text-slate-200">
                    Cultivating Freshness, Empowering Communities in Sierra
                    Leone
                </p>
                <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
                    Discover the heart of Sierra Leonean agriculture. We are
                    dedicated to growing quality produce while nurturing our
                    land and supporting our local community.
                </p>
                <a
                    href="#about"
                    onClick={handleCTAClick}
                    className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-3 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-black/50"
                >
                    Learn More About Us
                </a>
            </div>
        </section>
    )
}

export default Hero
