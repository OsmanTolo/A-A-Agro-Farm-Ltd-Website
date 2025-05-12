// src/components/About.jsx
import React from 'react'
import BBForestryImage from '../assets/BB_forestry.webp'

function About() {
    return (
        <section id="about" className="py-16 md:py-24 bg-stone-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <header className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-emerald-700 font-display">
                        Welcome to A&A Agro Farm
                    </h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                        Our roots run deep in the fertile soil of Sierra Leone.
                    </p>
                </header>
                <div className="md:flex md:items-center md:space-x-12">
                    {/* Text Content */}
                    <div className="md:w-1/2 space-y-6 text-slate-700 text-lg leading-relaxed">
                        <p>
                            A&A Agro Farm Limited began as a humble family
                            endeavor, born from a passion for the land and a
                            dream to cultivate not just crops, but a thriving
                            future for our community in Sierra Leone. For
                            generations, our family has understood the rhythm of
                            the seasons and the bounty that respectful farming
                            can yield.
                        </p>
                        <p>
                            Our core values are woven into every aspect of our
                            farm. We believe in hard work, integrity, and the
                            profound connection between healthy land, healthy
                            food, and healthy people. This philosophy guides our
                            daily operations, from seed to harvest.
                        </p>
                        <p>
                            We are deeply committed to sustainable and ethical
                            farming practices. Our approach prioritizes soil
                            health, water conservation, and biodiversity,
                            ensuring that A&A Agro Farm contributes positively
                            to Sierra Leone's environment and provides
                            nourishing food for our local communities and
                            beyond.
                        </p>
                    </div>
                    {/* Image Placeholder */}
                    <div className="md:w-1/2 mt-10 md:mt-0">
                        <img
                            src={BBForestryImage}
                            alt="Family member posing with a stick in her hand whilst touring the farm."
                            className="rounded-lg shadow-xl w-full h-auto object-cover"
                            loading="lazy"
                        />
                        {/* Image Suggestion: Photo of the farm landscape, family members, or traditional farming tools. Optimal size: 600x450px, WebP or optimized JPEG. */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
