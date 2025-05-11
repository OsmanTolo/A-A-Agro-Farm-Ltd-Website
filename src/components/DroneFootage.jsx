// // src/components/DroneFootage.jsx
// import React from 'react'

// import droneVideo1 from '../assets/drone_footage_1.mp4'
// import dronePoster1 from '../assets/drone_poster_1.jpg'
// import droneVideo2 from '../assets/drone_footage_2.mp4'
// import dronePoster2 from '../assets/drone_poster_2.jpg'

// const videoData = [
//     {
//         id: 1,
//         videoSrc: droneVideo1,
//         posterSrc: dronePoster1,
//         title: 'Aerial View: Main Farm Operations',
//         description:
//             'Experience a breathtaking flyover of our main cultivation areas, showcasing the scale and organization of A&A Agro Farm.',
//         type: 'video/mp4',
//     },
//     {
//         id: 2,
//         videoSrc: droneVideo2,
//         posterSrc: dronePoster2,
//         title: 'Scenic Flight: Sustainable Forestry & Landscape',
//         description:
//             'Discover the natural beauty surrounding our farm as the drone flies over our sustainable forestry area, nearby waterways, and highlights our commitment to the local ecosystem.',
//         type: 'video/mp4',
//     },
// ]

// function DroneFootage() {
//     return (
//         <section
//             id="drone-footage"
//             className="py-16 md:py-24 bg-slate-50"
//             aria-labelledby="drone-footage-heading"
//         >
//             <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//                 <header className="text-center mb-12 md:mb-16">
//                     <h2
//                         id="drone-footage-heading"
//                         className="text-3xl md:text-4xl font-bold text-emerald-700 font-display"
//                     >
//                         Explore A&A Agro Farm From Above
//                     </h2>
//                     <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
//                         Take a virtual tour with our stunning drone footage,
//                         offering a unique perspective of our farm and its
//                         beautiful surroundings in Sierra Leone.
//                     </p>
//                 </header>

//                 {/* Grid for video players */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
//                     {videoData.map((video) => (
//                         <div
//                             key={video.id}
//                             className="bg-white rounded-xl shadow-lg overflow-hidden"
//                         >
//                             <div className="aspect-w-16 aspect-h-9">
//                                 <video
//                                     controls // Show default video controls
//                                     poster={video.posterSrc}
//                                     className="w-full h-full object-cover"
//                                     aria-label={video.title} // Accessibility
//                                 >
//                                     <source
//                                         src={video.videoSrc}
//                                         type={video.type}
//                                     />
//                                     {/* Add more <source> tags for different video formats if available (e.g., webm) */}
//                                     {/* <source src={video.videoSrcWebM} type="video/webm" /> */}
//                                     Your browser does not support the video tag.{' '}
//                                     {/* Fallback text */}
//                                 </video>
//                             </div>
//                             <div className="p-6">
//                                 <h3 className="text-xl font-semibold font-display text-emerald-600 mb-2">
//                                     {video.title}
//                                 </h3>
//                                 <p className="text-slate-600 text-sm">
//                                     {video.description}
//                                 </p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default DroneFootage
