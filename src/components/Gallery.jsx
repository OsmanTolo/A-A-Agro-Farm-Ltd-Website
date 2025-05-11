// src/components/Gallery.jsx
import React from 'react'

const galleryImages = [
    {
        id: 1,
        src: 'https://placehold.co/400x400/6EE7B7/333333?text=Farm+Landscape',
        alt: 'Expansive view of A&A Agro Farm fields',
    },
    {
        id: 2,
        src: 'https://placehold.co/400x400/34D399/333333?text=Close-up+Produce',
        alt: 'Close-up of freshly harvested produce',
    },
    {
        id: 3,
        src: 'https://placehold.co/400x400/10B981/333333?text=Farm+Workers',
        alt: 'Team members of A&A Agro Farm working',
    },
    {
        id: 4,
        src: 'https://placehold.co/400x400/059669/333333?text=Livestock',
        alt: 'Livestock at A&A Agro Farm',
    },
    {
        id: 5,
        src: 'https://placehold.co/400x400/047857/333333?text=Sunrise+on+Farm',
        alt: 'Sunrise over A&A Agro Farm',
        className: 'hidden sm:block',
    },
    {
        id: 6,
        src: 'https://placehold.co/400x400/065F46/333333?text=Community+Interaction',
        alt: 'A&A Agro Farm interacting with community',
        className: 'hidden md:block',
    },
    {
        id: 7,
        src: 'https://placehold.co/400x400/064E3B/333333?text=Irrigation+System',
        alt: 'Irrigation system at A&A Agro Farm',
        className: 'hidden lg:block',
    },
    {
        id: 8,
        src: 'https://placehold.co/400x400/134E4A/333333?text=Farm+Equipment',
        alt: 'Farm equipment used at A&A Agro Farm',
        className: 'hidden lg:block',
    },
]

function Gallery() {
    return (
        <section id="gallery" className="py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <header className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-emerald-700 font-display">
                        A Glimpse of Life at A&A Agro Farm
                    </h2>
                    <p className="mt-4 text-lg text-slate-600">
                        Images capturing the beauty and hard work on our farm in
                        Sierra Leone.
                    </p>
                </header>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {galleryImages.map((image) => (
                        <div
                            key={image.id}
                            className={`aspect-w-1 aspect-h-1 ${image.className || ''}`}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Gallery
