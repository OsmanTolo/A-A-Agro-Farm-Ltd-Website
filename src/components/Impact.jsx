// src/components/Impact.jsx
import React from 'react'
import GalaWomenImage from '../assets/gala_women_dance.png'
import GalaMenImage from '../assets/gala_men_football.png'
import BridgeImage from '../assets/bridge.jpeg'

function Impact() {
    return (
        <section
            id="impact"
            className="py-16 md:py-24 bg-emerald-50"
            aria-labelledby="impact-heading"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <header className="text-center mb-12 md:mb-16">
                    <h2
                        id="impact-heading"
                        className="text-3xl md:text-4xl font-bold text-emerald-700 font-display"
                    >
                        Growing Together, Giving Back
                    </h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                        Our commitment extends beyond our fields to the heart of
                        our Sierra Leonean community and the health of our
                        planet.
                    </p>
                </header>
                {/* Main grid for text and images */}
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Text content describing community impact and sustainability */}
                    <div className="space-y-6 text-slate-700 text-lg leading-relaxed">
                        <p>
                            A&A Agro Farm empowers the local community by
                            providing fair employment, agricultural training,
                            and sourcing materials locally. We believe shared
                            success uplifts everyone.
                        </p>
                        <p>
                            Our commitment to direct community development
                            includes constructing a vital bridge, funded by
                            family, relatives, friends, and volunteers. This
                            bridge now ensures children's safe passage to
                            school, especially during heavy rains.
                        </p>
                        <p>
                            We further support our village by offering financial
                            aid during hardships, contributing to the local
                            mosque's construction, and fostering community
                            spirit through events like last year's gala with
                            sports and cultural competitions.
                        </p>
                        <p>
                            Environmental sustainability is central to our
                            operations. We use eco-friendly farming techniques
                            like crop rotation and water conservation to
                            minimize our footprint and preserve Sierra Leone's
                            rich biodiversity.
                        </p>
                    </div>

                    {/* Container for impact images - changed to a 2x2 grid */}
                    <div className="grid grid-cols-2 gap-4 md:gap-6 items-start">
                        {/* Each image is wrapped in a div that could control aspect ratio if needed, but here just for grid placement */}
                        <div className="w-full">
                            <img
                                src={GalaWomenImage}
                                alt="A&A Agro Farm team engaging with local community members in Sierra Leone during a meeting or event."
                                className="rounded-lg shadow-xl w-full h-auto object-cover aspect-[4/3]" // Added aspect ratio
                                loading="lazy"
                            />
                        </div>
                        <div className="w-full">
                            <img
                                src={BridgeImage}
                                alt="The newly constructed community bridge, enabling children to cross safely to school, funded by A&A Agro Farm and supporters."
                                className="rounded-lg shadow-xl w-full h-auto object-cover aspect-[4/3]" // Added aspect ratio
                                loading="lazy"
                            />
                        </div>
                        <div className="w-full">
                            <img
                                src={BridgeImage}
                                alt="Progress of the mosque construction in the village, supported by A&A Agro Farm."
                                className="rounded-lg shadow-xl w-full h-auto object-cover aspect-[4/3]" // Added aspect ratio
                                loading="lazy"
                            />
                        </div>
                        <div className="w-full">
                            <img
                                src={GalaMenImage}
                                alt="Example of sustainable farming practices like composting or water conservation efforts at A&A Agro Farm."
                                className="rounded-lg shadow-xl w-full h-auto object-cover aspect-[4/3]" // Added aspect ratio
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Impact
