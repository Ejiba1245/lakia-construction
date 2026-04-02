import React, { useState } from 'react';
import './App.css';

const App = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={`min-h-screen ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} transition-all duration-300`}>  
            {/* Hero Section */}
            <section className="hero flex items-center justify-between p-10">
                <div>
                    <h1 className="text-5xl font-bold">Welcome to Lakia Construction</h1>
                    <p>Your trusted partner for all construction needs.</p>
                    <button className="btn mt-5 bg-blue-500 text-white p-3 rounded">Get Started</button>
                </div>
                <button onClick={toggleDarkMode} className="dark-mode-toggle p-3 border rounded">Toggle Dark Mode</button>
            </section>

            {/* About Section */}
            <section className="about p-10">
                <h2 className="text-3xl font-bold">About Us</h2>
                <p>Lakia Construction has been building quality structures for years. Our commitment to excellence is evident in every project.</p>
            </section>

            {/* Services Section */}
            <section className="services p-10">
                <h2 className="text-3xl font-bold">Our Services</h2>
                <ul className="list-disc pl-5">
                    <li>Residential Construction</li>
                    <li>Commercial Construction</li>
                    <li>Renovations and Remodels</li>
                    <li>Project Management</li>
                </ul>
            </section>

            {/* Featured Projects Section */}
            <section className="featured-projects p-10">
                <h2 className="text-3xl font-bold">Featured Projects</h2>
                <div className="grid grid-cols-3 gap-4">
                    <div className="project bg-gray-200 p-4 rounded">Project 1</div>
                    <div className="project bg-gray-200 p-4 rounded">Project 2</div>
                    <div className="project bg-gray-200 p-4 rounded">Project 3</div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials p-10">
                <h2 className="text-3xl font-bold">Testimonials</h2>
                <blockquote className="border-l-4 pl-4">
                    <p>"Lakia Construction transformed our dream into reality!"</p>
                    <footer>- Happy Client</footer>
                </blockquote>
            </section>

            {/* Contact Section */}
            <section className="contact p-10">
                <h2 className="text-3xl font-bold">Contact Us</h2>
                <form className="mt-5">
                    <input type="text" placeholder="Your Name" className="border p-2 mb-4 w-full"/>
                    <input type="email" placeholder="Your Email" className="border p-2 mb-4 w-full"/>
                    <textarea placeholder="Your Message" className="border p-2 mb-4 w-full"></textarea>
                    <button type="submit" className="btn bg-blue-500 text-white p-3 rounded">Send Message</button>
                </form>
            </section>

            {/* Footer Section */}
            <footer className="p-10 border-t">
                <p>&copy; 2026 Lakia Construction. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default App;