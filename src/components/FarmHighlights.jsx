// src/components/FarmHighlights.jsx
// Component for two rows of images with continuous sliding animation and manual controls.
import React, { useState, useEffect, useRef, useCallback } from 'react'

// Using placeholder images from the web (placehold.co)
const topRowImagesData = [
    {
        id: 't1',
        src: 'https://placehold.co/600x400/22C55E/FFFFFF?text=Bridge+Event',
        alt: 'Placeholder for Community Bridge Inauguration event.',
    },
    {
        id: 't2',
        src: 'https://placehold.co/600x400/16A34A/FFFFFF?text=Farm+View',
        alt: 'Placeholder for Lush Farm Landscapes.',
    },
    {
        id: 't3',
        src: 'https://placehold.co/600x400/F59E0B/333333?text=Football+Game',
        alt: 'Placeholder for Annual Football Tournament.',
    },
    {
        id: 't4',
        src: 'https://placehold.co/600x400/D97706/FFFFFF?text=Harvesting',
        alt: 'Placeholder for Bountiful Harvests.',
    },
    {
        id: 't5',
        src: 'https://placehold.co/600x400/10B981/FFFFFF?text=Cultural+Event',
        alt: 'Placeholder for Cultural Dance Celebrations.',
    },
    {
        id: 't6',
        src: 'https://placehold.co/600x400/059669/FFFFFF?text=Rice+Fields',
        alt: 'Placeholder for Expanding Rice Cultivation.',
    },
]

const bottomRowImagesData = [
    {
        id: 'b1',
        src: 'https://placehold.co/600x400/047857/FFFFFF?text=Community+Talk',
        alt: 'Placeholder for Engaging with Our Community.',
    },
    {
        id: 'b2',
        src: 'https://placehold.co/600x400/065F46/FFFFFF?text=Forest+Area',
        alt: 'Placeholder for Sustainable Forestry Practices.',
    },
    {
        id: 'b3',
        src: 'https://placehold.co/600x400/064E3B/FFFFFF?text=Team+Working',
        alt: 'Placeholder for Team at Work on the farm.',
    },
    {
        id: 'b4',
        src: 'https://placehold.co/600x400/134E4A/FFFFFF?text=Fresh+Produce',
        alt: 'Placeholder for Showcasing Local Produce.',
    },
    {
        id: 'b5',
        src: 'https://placehold.co/600x400/3B82F6/FFFFFF?text=Training',
        alt: 'Placeholder for Agricultural Training Session.',
    },
    {
        id: 'b6',
        src: 'https://placehold.co/600x400/6366F1/FFFFFF?text=Livestock',
        alt: 'Placeholder for Farm Animals or Livestock.',
    },
]

// Duplicate images for seamless marquee effect
const doubledTopRowImages = [...topRowImagesData, ...topRowImagesData]
const doubledBottomRowImages = [...bottomRowImagesData, ...bottomRowImagesData]

// SVG Icons for Carousel Controls
const ChevronLeftIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5 md:w-6 md:h-6"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
        />
    </svg>
)

const ChevronRightIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5 md:w-6 md:h-6"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
    </svg>
)

function FarmHighlights() {
    const [isVisible, setIsVisible] = useState(false)
    const [isTopRowPaused, setIsTopRowPaused] = useState(false)
    const [isBottomRowPaused, setIsBottomRowPaused] = useState(false)

    const sectionRef = useRef(null)
    const topRowRef = useRef(null) // Ref for the scrollable container of the top row
    const bottomRowRef = useRef(null) // Ref for the scrollable container of the bottom row

    // Intersection Observer to trigger animations when section is visible
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0]
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.unobserve(entry.target)
                }
            },
            { threshold: 0.1 }
        )
        const currentRef = sectionRef.current
        if (currentRef) observer.observe(currentRef)
        return () => {
            if (currentRef) observer.unobserve(currentRef)
        }
    }, [])

    const handleManualScroll = (rowRef, direction) => {
        if (rowRef.current) {
            const scrollAmount = rowRef.current.offsetWidth * 0.75 // Scroll by 75% of visible width
            rowRef.current.scrollBy({
                left: direction === 'next' ? scrollAmount : -scrollAmount,
                behavior: 'smooth',
            })
        }
    }

    // Pause animation on interaction
    const pauseTopRow = useCallback(() => setIsTopRowPaused(true), [])
    const pauseBottomRow = useCallback(() => setIsBottomRowPaused(true), [])

    if (topRowImagesData.length === 0 && bottomRowImagesData.length === 0) {
        return (
            <section
                id="farm-highlights"
                className="py-16 md:py-24 bg-emerald-50"
            >
                <div className="container mx-auto px-4 text-center">
                    <h2
                        id="farm-highlights-heading-empty"
                        className="text-3xl md:text-4xl font-bold text-emerald-700 font-display mb-4"
                    >
                        Farm Highlights & Community Moments
                    </h2>
                    <p className="text-lg text-slate-600">
                        No highlights to display at the moment.
                    </p>
                </div>
            </section>
        )
    }

    return (
        <section
            id="farm-highlights"
            ref={sectionRef}
            className="py-16 md:py-24 bg-emerald-50"
            aria-labelledby="farm-highlights-heading"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <header className="text-center mb-12 md:mb-16">
                    <h2
                        id="farm-highlights-heading"
                        className="text-3xl md:text-4xl font-bold text-emerald-700 font-display"
                    >
                        Farm Highlights & Community Moments
                    </h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                        A glimpse into life at A&A Agro Farm, our community
                        engagements, and the beautiful landscapes we nurture.
                    </p>
                </header>

                {/* Top Row */}
                <div
                    className="relative mb-8"
                    onMouseEnter={pauseTopRow}
                    onFocus={pauseTopRow} // For keyboard navigation accessibility
                    onTouchStart={pauseTopRow} // For touch devices
                >
                    <div
                        ref={topRowRef}
                        className="flex overflow-x-auto scroll-smooth scrollbar-hide" // scroll-smooth for button clicks, scrollbar-hide for aesthetics
                    >
                        <div
                            className="flex flex-nowrap"
                            style={{
                                animation:
                                    isVisible && !isTopRowPaused
                                        ? `marqueeLeftToRight 60s linear infinite`
                                        : 'none',
                            }}
                        >
                            {doubledTopRowImages.map((image, index) => (
                                <div
                                    key={`top-double-${image.id}-${index}`}
                                    className="flex-shrink-0 w-64 h-40 md:w-80 md:h-52 rounded-lg shadow-lg overflow-hidden group mx-2"
                                >
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    {isTopRowPaused && (
                        <>
                            <button
                                type="button"
                                onClick={() =>
                                    handleManualScroll(topRowRef, 'prev')
                                }
                                className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 md:-translate-x-1/2 z-10 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500"
                                aria-label="Previous images in top row"
                            >
                                <ChevronLeftIcon />
                            </button>
                            <button
                                type="button"
                                onClick={() =>
                                    handleManualScroll(topRowRef, 'next')
                                }
                                className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 md:translate-x-1/2 z-10 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500"
                                aria-label="Next images in top row"
                            >
                                <ChevronRightIcon />
                            </button>
                        </>
                    )}
                </div>

                {/* Bottom Row */}
                <div
                    className="relative"
                    onMouseEnter={pauseBottomRow}
                    onFocus={pauseBottomRow}
                    onTouchStart={pauseBottomRow}
                >
                    <div
                        ref={bottomRowRef}
                        className="flex overflow-x-auto scroll-smooth scrollbar-hide"
                    >
                        <div
                            className="flex flex-nowrap"
                            style={{
                                animation:
                                    isVisible && !isBottomRowPaused
                                        ? `marqueeRightToLeft 70s linear infinite`
                                        : 'none',
                            }}
                        >
                            {doubledBottomRowImages.map((image, index) => (
                                <div
                                    key={`bottom-double-${image.id}-${index}`}
                                    className="flex-shrink-0 w-64 h-40 md:w-80 md:h-52 rounded-lg shadow-lg overflow-hidden group mx-2"
                                >
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    {isBottomRowPaused && (
                        <>
                            <button
                                type="button"
                                onClick={() =>
                                    handleManualScroll(bottomRowRef, 'prev')
                                }
                                className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 md:-translate-x-1/2 z-10 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500"
                                aria-label="Previous images in bottom row"
                            >
                                <ChevronLeftIcon />
                            </button>
                            <button
                                type="button"
                                onClick={() =>
                                    handleManualScroll(bottomRowRef, 'next')
                                }
                                className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 md:translate-x-1/2 z-10 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500"
                                aria-label="Next images in bottom row"
                            >
                                <ChevronRightIcon />
                            </button>
                        </>
                    )}
                </div>
            </div>
            {/* Add Keyframes for Marquee Animation in your global CSS or a style tag if necessary */}
            {/* Example: (Ideally in your main CSS file like src/index.css)
        @keyframes marqueeLeftToRight {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); } // Moves one full set of original images
        }
        @keyframes marqueeRightToLeft {
          0% { transform: translateX(-50%); } // Starts from the end of the first set
          100% { transform: translateX(0%); }
        }
      */}
        </section>
    )
}

export default FarmHighlights
