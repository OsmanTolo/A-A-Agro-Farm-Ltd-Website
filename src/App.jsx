// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Impact from "./components/Impact";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopButton";

function App() {
  // Helper function for smooth scrolling, considering fixed navbar
  const smoothScrollTo = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      const navbar = document.querySelector("header"); // Assuming your navbar is a <header>
      const navbarHeight = navbar ? navbar.offsetHeight : 64; // Default to 64px (h-16) if not found

      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Pass the scroll function to Navbar and Hero or any component needing it */}
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
  );
}

export default App;
