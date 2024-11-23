import React, { useEffect } from 'react';

function About() {
    useEffect(() => {
        document.title = "About | Gadget Heaven";
    }, []); // Empty dependency array means this effect runs once on mount

    return (
        <div className="bg-gray-100 p-4 md:p-8 lg:p-12">
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-8 lg:p-10">
               
                <h2 className="text-xl md:text-2xl font-semibold mt-4 mb-2">Our Mission</h2>
                <p className="text-gray-600 mb-4">
                    At Gadget Heaven, we believe that technology should enhance your life, not complicate it. Our mission is to provide you with the tools and devices that empower you to achieve your goals and enjoy every moment.
                </p>
                <h2 className="text-xl md:text-2xl font-semibold mt-4 mb-2">What We Offer</h2>
                <ul className="list-disc list-inside text-gray-600 mb-4">
                    <li>Smartphones & Tablets: The latest models from top brands.</li>
                    <li>Laptops & Desktops: Perfect devices for work or play.</li>
                    <li>Wearable Technology: Stay connected with smartwatches and fitness bands.</li>
                    <li>Smart Home Devices: Transform your living space with innovative solutions.</li>
                    <li>Accessories: Complete your tech setup with essential gadgets.</li>
                </ul>
                <h2 className="text-xl md:text-2xl font-semibold mt-4 mb-2">Customer Commitment</h2>
                <p className="text-gray-600 mb-4">
                    Our knowledgeable staff is passionate about technology and is always ready to help you find the perfect gadget to meet your needs. We offer expert advice, product demonstrations, and personalized recommendations to ensure you make informed decisions.
                </p>
                <h2 className="text-xl md:text-2xl font-semibold mt-4 mb-2">Join Us</h2>
                <p className="text-gray-600 mb-4">
                    At Gadget Heaven, we are committed to providing exceptional customer service, competitive pricing, and a seamless shopping experience. Join our community of tech lovers and discover the joy of innovation today!
                </p>
                <p className="text-center mt-6">
                    <a href="/" className="text-blue-500 hover:underline">Visit us in-store or shop online!</a>
                </p>
            </div>
        </div>
    );
}

export default About;