// src/components/Contact.jsx
// Contact Us section component with contact details and embedded map.
import React from 'react'

// SVG Icon components for contact details (can be further modularized if needed)
const LocationIcon = () => (
    <svg
        className="w-6 h-6 text-amber-500 mr-3 mt-1 flex-shrink-0"
        fill="currentColor"
        viewBox="0 0 20 20"
    >
        <path
            fillRule="evenodd"
            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
            clipRule="evenodd"
        ></path>
    </svg>
)
const PhoneIcon = () => (
    <svg
        className="w-6 h-6 text-amber-500 mr-3 mt-1 flex-shrink-0"
        fill="currentColor"
        viewBox="0 0 20 20"
    >
        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
    </svg>
)
const EmailIcon = () => (
    <svg
        className="w-6 h-6 text-amber-500 mr-3 mt-1 flex-shrink-0"
        fill="currentColor"
        viewBox="0 0 20 20"
    >
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
    </svg>
)
const ClockIcon = () => (
    <svg
        className="w-6 h-6 text-amber-500 mr-3 mt-1 flex-shrink-0"
        fill="currentColor"
        viewBox="0 0 20 20"
    >
        <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
            clipRule="evenodd"
        ></path>
    </svg>
)

function Contact() {
    // Replace this with the actual iframe code from Google Maps
    const googleMapsEmbedCode = `
    <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d19859.193603797077!2d-12.404508131308575!3d8.380622433702909!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwMjInNDkuNiJOIDEywrAyNCcyMS4yIlc!5e1!3m2!1sen!2suk!4v1746928722302!5m2!1sen!2suk" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Location of A&A Agro Farm Limited (Example Map)"></iframe>
  `
    // IMPORTANT: The src URL above is a generic placeholder for Sierra Leone.
    // You MUST replace it with the specific embed URL for A&A Agro Farm.

    return (
        <section
            id="contact"
            className="py-16 md:py-24 bg-stone-100"
            aria-labelledby="contact-heading"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <header className="text-center mb-12 md:mb-16">
                    <h2
                        id="contact-heading"
                        className="text-3xl md:text-4xl font-bold text-emerald-700 font-display"
                    >
                        Get In Touch With Us
                    </h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                        We'd love to hear from you! Visit us or contact A&A Agro
                        Farm in Sierra Leone.
                    </p>
                </header>
                {/* Grid layout for contact details and map */}
                <div className="md:grid md:grid-cols-2 md:gap-12 items-start">
                    {/* Contact information and message block */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-semibold text-emerald-600 font-display mb-3">
                                Contact Details
                            </h3>
                            {/* Unordered list for contact items */}
                            <ul className="space-y-3 text-slate-700">
                                <li className="flex items-start">
                                    <LocationIcon />
                                    <span>
                                        <strong>Address:</strong> A&A Agro Farm
                                        Ltd., Robang Village, Yoni Mabanta
                                        Chiefdom, Tonkolili District, Sierra
                                        Leone.
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <PhoneIcon />
                                    <span>
                                        <strong>Phone:</strong>{' '}
                                        <a
                                            href="tel:+23200000000"
                                            className="hover:text-amber-600"
                                            rel="noopener noreferrer"
                                        >
                                            +232 75 147563
                                        </a>
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <EmailIcon />
                                    <span>
                                        <strong>Email:</strong>{' '}
                                        <a
                                            href="mailto:dumbuyaabubakarr@yahoo.com"
                                            className="hover:text-amber-600"
                                            rel="noopener noreferrer"
                                        >
                                            dumbuyaabubakarr@yahoo.com
                                        </a>
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <ClockIcon />
                                    <span>
                                        <strong>Operating Hours:</strong> Monday
                                        - Saturday, 8:00 AM - 5:00 PM
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold text-emerald-600 font-display mb-3">
                                Visit Us
                            </h3>
                            <p className="text-slate-700 leading-relaxed">
                                We welcome visitors by appointment. Please
                                contact us in advance to arrange a tour or
                                discuss your needs. Experience the freshness of
                                Sierra Leonean agriculture firsthand at A&A Agro
                                Farm.
                            </p>
                        </div>
                    </div>

                    {/* Map Embed Block */}
                    <div className="mt-10 md:mt-0">
                        {/* Aspect ratio container for the map iframe to maintain its shape */}
                        {/* Added w-full to ensure it takes the full width of its parent column */}
                        <div className="w-full aspect-w-16 aspect-h-9 rounded-lg shadow-xl overflow-hidden bg-slate-200">
                            {/* The dangerouslySetInnerHTML prop is used here because Google Maps provides an iframe as a string.
                Ensure the iframe code you get from Google Maps is trusted.
              */}
                            <div
                                className="w-full h-full"
                                dangerouslySetInnerHTML={{
                                    __html: googleMapsEmbedCode,
                                }}
                            ></div>
                        </div>
                        <p className="text-sm text-slate-500 mt-2 text-center md:text-left">
                            Find our farm location on the map above.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
