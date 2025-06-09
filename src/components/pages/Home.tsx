import React from 'react';
import mainImage from '../img/main-bg.jpg';
import Button from '../ui/Button/Button';

const Home: React.FC = () => {
    return (
        <main className="home_page max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative mb-8 group">
                <img
                    src={mainImage}
                    alt="Main image"
                    className="w-full h-auto object-cover rounded-2xl shadow-lg"
                />
                <Button className="text-primary">Hello</Button>
            </div>
        </main>
    );
};

export default Home;
