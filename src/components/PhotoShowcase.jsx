// src/components/PhotoShowcase.jsx
// New component for a broader showcase of farm life, events, and scenery.
import React from 'react'

// 1. Import your showcase images
// REPLACE these with your actual image paths and filenames
import bridgeEventImage from '../assets/showcase-bridge-event.jpg'
import footballTournamentImage from '../assets/showcase-football-tournament.jpg'
import culturalDanceImage from '../assets/showcase-cultural-dance.jpg'
import farmLandscapeImage from '../assets/showcase-farm-landscape.jpg'
import riceCultivationAreaImage from '../assets/showcase-rice-area.jpg'
import forestryManagementImage from '../assets/showcase-forestry-management.jpg'
import communityGatheringImage from '../assets/showcase-community-gathering.jpg'
import harvestTimeImage from '../assets/showcase-harvest-time.jpg'
// Add more imports as needed

const showcasePhotos = [
    {
        id: 1,
        src: bridgeEventImage,
        alt: 'Community members and A&A Agro Farm team at the bridge opening ceremony.',
        category: 'Community Events',
    },
    {
        id: 2,
        src: footballTournamentImage,
        alt: "Exciting moment from the men's football tournament organized by A&A Agro Farm.",
        category: 'Community Events',
    },
    {
        id: 3,
        src: culturalDanceImage,
        alt: 'Women participating in a vibrant cultural dance competition.',
        category: 'Community Events',
    },
    {
        id: 4,
        src: farmLandscapeImage,
        alt: "Panoramic view of A&A Agro Farm's diverse cultivation areas.",
        category: 'Farm Scenery',
    },
    {
        id: 5,
        src: riceCultivationAreaImage,
        alt: "Land prepared for rice cultivation, showing the farm's expansion.",
        category: 'Farm Operations',
    },
    {
        id: 6,
        src: forestryManagementImage,
        alt: 'A well-managed sustainable forestry section of A&A Agro Farm.',
        category: 'Sustainability',
    },
    {
        id: 7,
        src: communityGatheringImage,
        alt: 'A joyful community gathering supported by A&A Agro Farm.',
        category: 'Community Events',
    },
    {
        id: 8,
        src: harvestTimeImage,
        alt: 'Close-up of a bountiful harvest at the farm.',
        category: 'Farm Operations',
    },
    // Add more photos here
]

function PhotoShowcase() {
    return (
        <section
            id="photo-showcase"
            className="py-16 md:py-24 bg-emerald-50"
            aria-labelledby="photo-showcase-heading"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <header className="text-center mb-12 md:mb-16">
                    <h2
                        id="photo-showcase-heading"
                        className="text-3xl md:text-4xl font-bold text-emerald-700 font-display"
                    >
                        Life & Impact at A&A Agro Farm
                    </h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                        A visual journey through our farm operations, community
                        initiatives, and the beautiful landscapes we nurture.
                    </p>
                </header>

                {/* Responsive grid for photos - similar to the Gallery but can be styled differently or have more items */}
                {/* For a "scrollable collage" effect with just Tailwind, a simple overflow-x-auto on a flex container can work for horizontal scroll,
            but a grid is often more manageable for varied content. This uses a standard responsive grid.
        */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
                    {showcasePhotos.map((photo) => (
                        <div
                            key={photo.id}
                            className="aspect-w-1 aspect-h-1 group relative overflow-hidden rounded-lg shadow-md"
                        >
                            <img
                                src={photo.src}
                                alt={photo.alt}
                                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                            <div className="absolute bottom-0 left-0 p-2 md:p-3">
                                <p className="text-white text-xs md:text-sm font-semibold bg-black/50 px-2 py-1 rounded">
                                    {photo.category}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                {/* If you want a truly scrollable collage (horizontal), you might do something like:
        <div className="flex overflow-x-auto space-x-4 py-4 scrollbar-thin scrollbar-thumb-emerald-600 scrollbar-track-emerald-100">
          {showcasePhotos.map((photo) => (
            <div key={photo.id} className="flex-shrink-0 w-64 h-48 md:w-80 md:h-60 rounded-lg shadow-md overflow-hidden">
              <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
        You'd need to install and configure a scrollbar plugin for Tailwind if you use `scrollbar-thin` etc. or style it manually.
        */}
            </div>
        </section>
    )
}

export default PhotoShowcase
