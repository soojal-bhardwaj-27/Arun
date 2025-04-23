import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: 'Destinations',
      description: 'Explore our curated tour packages',
      path: '/destination'
    },
    {
      title: 'Car Hire',
      description: 'Wide range of vehicles for your comfort',
      path: '/car-hire'
    },
    {
      title: 'Tempo Traveller',
      description: 'Perfect for group travels',
      path: '/tempo-traveller'
    },
    {
      title: 'Gallery',
      description: 'View our travel memories',
      path: '/gallery'
    },
    {
      title: 'About Us',
      description: 'Learn more about our services',
      path: '/about'
    },
    {
      title: 'Book Now',
      description: 'Plan your next adventure',
      path: '/booking'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-screen">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/w.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Arun Tour & Travel</h1>
          <p className="text-xl md:text-2xl mb-8">Your Journey, Our Responsibility</p>
          <button 
            onClick={() => navigate('/destination')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300"
          >
            Explore Now
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                onClick={() => navigate(feature.path)}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer"
              >
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;