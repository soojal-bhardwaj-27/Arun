import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Booking = () => {
  const location = useLocation();
  const packageDetails = location.state?.package;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: 1
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Booking details:', { package: packageDetails, ...formData });
  };

  return (
    <div className="pt-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Book Your Tour</h1>
        
        {packageDetails && (
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold mb-2">{packageDetails.name}</h2>
            <p className="text-gray-600">{packageDetails.duration}</p>
            <p className="text-blue-600 font-bold">{packageDetails.price}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg"
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              className="w-full p-3 border rounded-lg"
              required
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Phone</label>
            <input
              type="tel"
              className="w-full p-3 border rounded-lg"
              required
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Travel Date</label>
            <input
              type="date"
              className="w-full p-3 border rounded-lg"
              required
              value={formData.date}
              onChange={(e) => setFormData({...formData, date: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Number of Guests</label>
            <input
              type="number"
              min="1"
              className="w-full p-3 border rounded-lg"
              required
              value={formData.guests}
              onChange={(e) => setFormData({...formData, guests: e.target.value})}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default Booking;