import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import Impact from './components/Impact'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTopButton from './components/BackToTopButton'

// Main App component
function App() {
    // Smooth scroll utility function
    const smoothScrollTo = (elementId) => {
        const element = document.getElementById(elementId)
        if (element) {
            const navbar = document.querySelector('header.fixed')
            const navbarHeight = navbar ? navbar.offsetHeight : 64

            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition =
                elementPosition + window.pageYOffset - navbarHeight

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            })
        } else {
            console.warn(
                `Smooth scroll target element with ID '${elementId}' not found.`
            )
        }
    }

    return (
        <>
            <Navbar smoothScrollTo={smoothScrollTo} />
            <main>
                <Hero smoothScrollTo={smoothScrollTo} />
                <About />
                <Products />
                <Impact />
                <Gallery />
                <Contact />
            </main>
            <Footer />
            <BackToTopButton />
        </>
    )
}

export default App
