import React from 'react';
import mainImage from '../img/main-bg.jpg';

const Home: React.FC = () => {
    return (
        <main className="home_page mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative mb-8 group">
                <img
                    src={mainImage}
                    alt="Main image"
                    className="w-full h-auto object-cover rounded-2xl shadow-lg"
                />
            </div>
        </main>
    );
};

export default Home;
