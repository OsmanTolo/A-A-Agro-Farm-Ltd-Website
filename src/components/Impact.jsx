// src/components/Impact.jsx
import React from 'react'
import GalaWomenImage from '../assets/gala_women_dance.png'
import GalaMenImage from '../assets/gala_men_football.png'

function Impact() {
    return (
        <section id="impact" className="py-16 md:py-24 bg-emerald-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <header className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-emerald-700 font-display">
                        Growing Together
                    </h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                        Our commitment extends beyond our fields to the heart of
                        our Sierra Leonean community and the health of our
                        planet.
                    </p>
                </header>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 text-slate-700 text-lg leading-relaxed">
                        <p>
                            At A&A Agro Farm Limited, we believe that true
                            success is shared. We actively work to empower local
                            individuals and families by providing fair
                            employment opportunities, skills training in
                            sustainable agriculture, and by sourcing materials
                            locally whenever possible.
                        </p>
                        <p>
                            Sustainability is not just a buzzword for us; it's a
                            practice. We implement eco-friendly farming
                            techniques such as crop rotation, natural pest
                            control, and water conservation to minimize our
                            environmental footprint and preserve the rich
                            biodiversity of Sierra Leone for future generations.
                        </p>
                        <p>
                            We are proud to contribute to local food security by
                            making fresh, nutritious food accessible. A portion
                            of our harvest often supports local schools and
                            community initiatives.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <img
                            src={GalaWomenImage}
                            alt="A&A Agro Farm team working with community members"
                            className="rounded-lg shadow-xl w-full h-auto object-cover"
                            loading="lazy"
                        />
                        <img
                            src={GalaMenImage}
                            alt="Sustainable farming practice like composting or intercropping at A&A Agro Farm"
                            className="rounded-lg shadow-xl w-full h-auto object-cover sm:mt-8"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Impact
