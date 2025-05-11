// src/components/Products.jsx
import React from 'react'
import SeasonalVegImage from '../assets/seasonal-veg.jpg'
import CashewFruitsImage from '../assets/cashew_fruit.png'
import PalmKernelImage from '../assets/palm-kernel.jpg'
import ForestryImage from '../assets/infant_forestry_trees.png'
import RiceImage from '../assets/rice-image.jpg'

// Product data - can be moved to a separate file and imported if it grows larger
const productsData = [
    {
        id: 1,
        imgSrc: SeasonalVegImage,
        altText: 'Fresh seasonal vegetables like cassava, yams, and peppers',
        name: 'Seasonal Vegetables',
        description:
            'We cultivate a variety of staple and seasonal vegetables, including cassava, yams, sweet potatoes, peppers, and leafy greens, all grown using sustainable methods.',
        availability: 'Seasonal, Inquire for details',
    },
    {
        id: 2,
        imgSrc: CashewFruitsImage,
        altText: 'Cashews growing on a tree',
        name: 'Cashews',
        description:
            'Harvesting of our quality cashews has commenced. These carefully grown nuts are perfect for direct consumption and diverse culinary applications, reflecting our commitment to excellent produce.',
        availability: 'Currently Harvesting',
    },
    {
        id: 3,
        imgSrc: PalmKernelImage,
        altText: 'Young palm trees planted in rows at A&A Agro Farm.',
        name: 'Palm Trees (Palm Oil)',
        description:
            'Our young palm plantation, established a few years ago, is currently maturing. We anticipate future harvests for palm kernels and oil, nurturing these trees for sustainable long-term yields.',
        availability: 'Future Harvest',
    },
    {
        id: 4,
        imgSrc: ForestryImage,
        altText:
            'A managed forestry area at A&A Agro Farm, showing diverse tree species.',
        name: 'Sustainable Forestry',
        description:
            'Our forestry initiatives focus on managing designated areas to enhance biodiversity and conserve local ecosystems. We are developing long-term plans for sustainable timber and non-timber forest products.',
        availability: 'Long-term Development',
    },
    {
        id: 5,
        imgSrc: RiceImage,
        altText: 'Land being prepared for rice cultivation at A&A Agro Farm.', // Update with specific alt text
        name: 'Rice Cultivation',
        description:
            'We have recently begun preparing land for rice cultivation, a staple in Sierra Leone. This new venture aims to contribute to local food security with future harvests of quality rice.',
        availability: 'Land Preparation Underway - Future Harvest',
    },
]

function ProductCard({ product }) {
    return (
        <article
            className={`bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transform hover:scale-105 transition-transform duration-300 ${product.className || ''}`}
        >
            <img
                src={product.imgSrc}
                alt={product.altText}
                className="w-full h-56 object-cover"
                loading="lazy"
            />
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold font-display text-emerald-600 mb-2">
                    {product.name}
                </h3>
                <p className="text-slate-600 mb-4 flex-grow">
                    {product.description}
                </p>
                <p className="text-sm text-amber-600 font-semibold">
                    {product.availability}
                </p>
            </div>
        </article>
    )
}

function Products() {
    return (
        <section id="products" className="py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <header className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-emerald-700 font-display">
                        Fresh From Our Fields
                    </h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                        Experience the taste of quality, grown with care at A&A
                        Agro Farm in Sierra Leone.
                    </p>
                </header>
                {/* Product Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {productsData.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Products
