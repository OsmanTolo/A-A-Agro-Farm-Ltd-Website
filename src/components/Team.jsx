// src/components/Team.jsx
// New component to display key staff members.
import React from 'react'

// 1. Import images for your team members from the assets folder
// REPLACE these with your actual image paths and filenames
import abuImage from '../assets/team-abu.jpg'
import assanatuImage from '../assets/team-assanatu.jpg'
import farmManagerImage from '../assets/team-farm-manager.jpg'
// Add more imports as needed

const teamMembers = [
    {
        id: 1,
        name: 'Abu T. (Founder)',
        role: 'Visionary & Community Lead',
        bio: "Raised in Robaang village, Abu's lifelong dream was to give back to his community. He initiated A&A Agro Farm with a vision for sustainable development and local empowerment.",
        imgSrc: abuImage,
        altText: 'Photo of Abu T., Founder of A&A Agro Farm',
    },
    {
        id: 2,
        name: 'Assanatu K. (Co-Founder)',
        role: 'Operations & Family Support',
        bio: "Assanatu shares Abu's passion and has been instrumental in the farm's journey, providing unwavering support and contributing to the operational success and family-driven ethos.",
        imgSrc: assanatuImage,
        altText: 'Photo of Assanatu K., Co-Founder of A&A Agro Farm',
    },
    {
        id: 3,
        name: '[Farm Manager Name]', // REPLACE
        role: 'Farm Operations Manager',
        bio: 'With extensive experience in [mention relevant experience], [Farm Manager Name] oversees the day-to-day operations, ensuring efficiency and sustainable practices on the ground.', // REPLACE
        imgSrc: farmManagerImage, // REPLACE if you have a specific image
        altText: 'Photo of [Farm Manager Name], Farm Operations Manager', // REPLACE
    },
    // Add more team members here following the same structure
    // {
    //   id: 4,
    //   name: "[Another Staff Name]",
    //   role: "Key Role",
    //   bio: "Brief description of their role and contribution.",
    //   imgSrc: anotherStaffImage, // Import this image
    //   altText: "Photo of [Another Staff Name]",
    // },
]

function Team() {
    return (
        <section
            id="team"
            className="py-16 md:py-24 bg-white"
            aria-labelledby="team-heading"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <header className="text-center mb-12 md:mb-16">
                    <h2
                        id="team-heading"
                        className="text-3xl md:text-4xl font-bold text-emerald-700 font-display"
                    >
                        Meet Our Core Team
                    </h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                        The dedicated individuals driving the vision of A&A Agro
                        Farm.
                    </p>
                </header>

                {/* Grid for team members */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    {teamMembers.map((member) => (
                        <div
                            key={member.id}
                            className="bg-stone-50 rounded-xl shadow-lg overflow-hidden text-center p-6 flex flex-col items-center transform transition-all duration-300 hover:shadow-2xl hover:scale-105"
                        >
                            <img
                                src={member.imgSrc}
                                alt={member.altText}
                                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover mb-4 shadow-md border-4 border-emerald-200"
                            />
                            <h3 className="text-xl font-semibold font-display text-emerald-600 mb-1">
                                {member.name}
                            </h3>
                            <p className="text-amber-600 font-medium text-sm mb-2">
                                {member.role}
                            </p>
                            <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                                {member.bio}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Team
