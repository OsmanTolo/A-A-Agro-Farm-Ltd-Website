// src/components/Team.jsx
// New component to display key staff members.
import React from 'react'

// Using placeholder images from the web (placehold.co) for team members
// No local image imports needed for placeholders.
// When you have actual images, you'll switch back to importing them from src/assets/

const teamMembers = [
    {
        id: 1,
        name: 'Abu T. (Founder)',
        role: 'Visionary & Community Lead',
        bio: "Raised in Robaang village, Abu's lifelong dream was to give back to his community. He initiated A&A Agro Farm with a vision for sustainable development and local empowerment.",
        imgSrc: 'https://placehold.co/300x300/22C55E/FFFFFF?text=Abu+T.', // Placeholder image
        altText: 'Placeholder photo of Abu T., Founder of A&A Agro Farm',
    },
    {
        id: 2,
        name: 'Assanatu K. (Co-Founder)',
        role: 'Operations & Family Support',
        bio: "Assanatu shares Abu's passion and has been instrumental in the farm's journey, providing unwavering support and contributing to the operational success and family-driven ethos.",
        imgSrc: 'https://placehold.co/300x300/16A34A/FFFFFF?text=Assanatu+K.', // Placeholder image
        altText:
            'Placeholder photo of Assanatu K., Co-Founder of A&A Agro Farm',
    },
    {
        id: 3,
        name: '[Farm Manager Name]', // REPLACE
        role: 'Farm Operations Manager',
        bio: 'With extensive experience in [mention relevant experience], [Farm Manager Name] oversees the day-to-day operations, ensuring efficiency and sustainable practices on the ground.', // REPLACE
        imgSrc: 'https://placehold.co/300x300/F59E0B/333333?text=Farm+Manager', // Placeholder image
        altText:
            'Placeholder photo of [Farm Manager Name], Farm Operations Manager', // REPLACE
    },
    // Add more team members here following the same structure
    // {
    //   id: 4,
    //   name: "[Another Staff Name]",
    //   role: "Key Role",
    //   bio: "Brief description of their role and contribution.",
    //   imgSrc: "https://placehold.co/300x300/D97706/FFFFFF?text=Staff+Member", // Placeholder image
    //   altText: "Placeholder photo of [Another Staff Name]",
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
                                loading="lazy" // Added lazy loading
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
