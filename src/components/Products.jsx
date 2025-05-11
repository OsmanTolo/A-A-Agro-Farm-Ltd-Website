// src/components/Products.jsx
import React from 'react'

// Product data - can be moved to a separate file and imported if it grows larger
const productsData = [
    {
        id: 1,
        imgSrc: 'https://placehold.co/400x300/84CC16/FFFFFF?text=Vegetables',
        altText: 'Fresh seasonal vegetables like cassava, yams, and peppers',
        name: 'Seasonal Vegetables',
        description:
            'We cultivate a variety of staple and seasonal vegetables, including cassava, yams, sweet potatoes, peppers, and leafy greens, all grown using sustainable methods.',
        availability: 'Seasonal, Inquire for details',
    },
    {
        id: 2,
        imgSrc: 'https://placehold.co/400x300/F59E0B/FFFFFF?text=Tropical+Fruits',
        altText: 'Juicy tropical fruits like mangoes, pineapples, and bananas',
        name: 'Tropical Fruits',
        description:
            'Our orchards yield delicious and nutritious tropical fruits such as mangoes, pineapples, bananas, and papayas, bursting with natural sweetness.',
        availability: 'Seasonal, Check with us',
    },
    {
        id: 3,
        imgSrc: 'https://placehold.co/400x300/D97706/FFFFFF?text=Poultry+%26+Eggs',
        altText: 'Free-range poultry and fresh eggs',
        name: 'Free-Range Poultry & Eggs',
        description:
            'Our happy, free-range chickens provide high-quality meat and fresh, nutritious eggs. We prioritize animal welfare and natural rearing conditions.',
        availability: 'Regular Supply',
    },
    {
        id: 4,
        imgSrc: 'https://placehold.co/400x300/78350F/FFFFFF?text=Palm+Oil',
        altText: 'Artisanal Palm Oil',
        name: 'Artisanal Palm Oil',
        description:
            'Sustainably harvested and traditionally processed, our artisanal palm oil is a staple in Sierra Leonean cuisine, rich in flavor and nutrients.',
        availability: 'Contact for bulk orders',
        className: 'sm:col-span-2 lg:col-span-1', // Example of individual card spanning
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
