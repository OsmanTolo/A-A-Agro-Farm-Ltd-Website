// src/components/BackToTopButton.jsx
import React, { useState, useEffect } from 'react'

function BackToTopButton() {
    const [isVisible, setIsVisible] = useState(false)

    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    // Scroll smoothly to the top of the page
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)

        // Cleanup function to remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', toggleVisibility)
        }
    }, []) // Empty dependency array means this effect runs once on mount and cleanup on unmount

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    title="Back to Top"
                    className="fixed bottom-5 right-5 bg-amber-500 hover:bg-amber-600 text-white p-3 rounded-full shadow-lg transition-opacity duration-300 z-50 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
                    style={{ opacity: isVisible ? 1 : 0 }} // Control opacity for fade effect
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
                            d="M5 15l7-7 7 7"
                        ></path>
                    </svg>
                </button>
            )}
        </>
    )
}

export default BackToTopButton
