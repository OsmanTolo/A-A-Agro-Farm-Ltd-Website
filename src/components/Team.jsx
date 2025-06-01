// src/components/Team.jsx
// New component to display key staff members.
import React, { useState } from 'react'
import AbuImage from '../assets/images/abu-image.webp'
import AssanatuImage from '../assets/images/assanatu_2-image.webp'
import SulaimanKoromaImage from '../assets/images/sulaiman_koroma-image.webp'
import AbdulaiKoromaImage from '../assets/images/abdulai_koroma-image.webp'
import AdamsayThullahImage from '../assets/images/adamsay_thullah-image.webp'
import AbuSankohImage from '../assets/images/abu_sankoh-image.webp'
import AdamaSankohImage from '../assets/images/adama_sankoh-image.webp'

const teamMembers = [
    {
        id: 1,
        name: 'Abu Dumbuya. (Founder)',
        role: 'CEO',
        bio: "Raised in Robaang village, Abu's lifelong dream was to give back to his community. He initiated A&A Agro Farm with a vision for sustainable development and local empowerment.",
        imgSrc: AbuImage,
        altText: 'Placeholder photo of Abu T., Founder of A&A Agro Farm',
    },
    {
        id: 2,
        name: 'Assanatu Dumbuya. (Co-Founder)',
        role: 'Operations & Family Support',
        bio: "Assanatu shares Abu's passion and has been instrumental in the farm's journey, providing unwavering support and contributing to the operational success and family-driven ethos.",
        imgSrc: AssanatuImage,
        altText:
            'Placeholder photo of Assanatu K., Co-Founder of A&A Agro Farm',
    },
    {
        id: 3,
        name: 'Sulaiman Koroma',
        role: 'Farm Operations Manager',
        bio: 'With extensive experience in agro farming, Sulaiman oversees the day-to-day operations, ensuring efficiency and sustainable practices on the ground.',
        imgSrc: SulaimanKoromaImage, // Placeholder image
        altText: 'Photo of Sulaiman Koroma, Farm Operations Manager',
    },
    {
        id: 4,
        name: 'Abdulai Koroma', // REPLACE
        role: 'Farm Worker',
        bio: 'A dedicated member of our team, Abdulai Koroma plays a vital role in the daily cultivation and maintenance tasks across our diverse crops.',
        imgSrc: AbdulaiKoromaImage, // Placeholder image
        altText: 'Placeholder photo of Abdulai Koroma, Farm Worker', // REPLACE
    },
    {
        id: 5,
        name: 'Adamsay Thullah', // REPLACE
        role: 'Farm Worker',
        bio: 'Adamsay Thullah brings skill and hard work to our fields, contributing to the successful growth and harvesting of our produce.',
        imgSrc: AdamsayThullahImage, // Placeholder image
        altText: 'Placeholder photo of Adamsay Thullah, Farm Worker', // REPLACE
    },
    {
        id: 6,
        name: 'Abu Sankoh', // REPLACE
        role: 'Farm Worker',
        bio: "Essential to our farm's operations, Abu Sankoh assists with various agricultural activities, from planting to tending our crops.",
        imgSrc: AbuSankohImage, // Placeholder image
        altText: 'Placeholder photo of Abu Sankoh, Farm Worker', // REPLACE
    },
    {
        id: 7,
        name: 'Adama Sankoh', // REPLACE
        role: 'Farm Worker',
        bio: 'With a strong work ethic, Adama Sankoh supports all aspects of farm work, ensuring our commitment to quality and sustainability is met.',
        imgSrc: AdamaSankohImage, // Placeholder image
        altText: 'Placeholder photo of Adama Sankoh, Farm Worker', // REPLACE
    },
]

function Team() {
    const [showAllTeamMembers, setShowAllTeamMembers] = useState(false)

    const toggleShowAll = () => {
        setShowAllTeamMembers(!showAllTeamMembers)
    }

    const displayedMembers = showAllTeamMembers
        ? teamMembers
        : teamMembers.slice(0, 3)

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
                    {displayedMembers.map((member) => (
                        <div
                            key={member.id}
                            className="bg-stone-50 rounded-xl shadow-lg overflow-hidden text-center p-6 flex flex-col items-center transform transition-all duration-300 hover:shadow-2xl hover:scale-105"
                        >
                            <img
                                src={member.imgSrc}
                                alt={member.altText}
                                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover mb-4 shadow-md border-4 border-emerald-200"
                                loading="lazy"
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

                {/* Toggle Button */}
                {teamMembers.length > 3 && ( // Only show button if there are more than 3 members
                    <div className="text-center mt-12">
                        <button
                            type="button"
                            onClick={toggleShowAll}
                            className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold py-3 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
                        >
                            {showAllTeamMembers
                                ? 'Show Less'
                                : 'Show All Team Members'}
                        </button>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Team
