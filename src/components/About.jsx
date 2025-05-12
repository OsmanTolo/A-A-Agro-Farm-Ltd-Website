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
                            The story of A&A Agro Farm Limited begins with Abu,
                            a son of Robaang village, where our farm now
                            flourishes. Though he moved to the UK in 2000, his
                            heart remained tethered to the community that raised
                            him. For years, he carried a dream: to one day
                            return and make a significant contribution to his
                            homeland.
                        </p>
                        <p>
                            In early 2016, this dream began to take shape. Abu
                            envisioned a small farm, a seed of opportunity for
                            Robaang. He shared this vision with his darling and
                            supportive wife, Assanatu, and their family, who
                            embraced it wholeheartedly. Journeying back to his
                            village, Abu approached the chiefdom leaders to
                            acquire land. In a testament to community spirit and
                            shared hope, they generously offered acres,
                            recognizing his deep connection to the chiefdom.
                        </p>
                        <p>
                            From that pivotal moment, A&A Agro Farm – named in
                            honor of Abu and Assanatu – was born. Fueled by the
                            unwavering support of their children in the UK, Abu,
                            Assanatu, and their loved ones began investing not
                            just financially, but in every possible way to
                            uplift the community and its people. Our farm is
                            more than just land and crops; it's a promise kept,
                            a legacy of giving back, and a commitment to
                            sustainable, ethical practices that nurture both the
                            earth and the community in Sierra Leone.
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
