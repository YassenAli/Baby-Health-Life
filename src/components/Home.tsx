import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, Milk, Phone, Users, School } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col">
      <div className="text-center mb-12 pt-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to Baby Health Life</h1>
        <p className="text-xl text-gray-600">Your trusted partner in baby healthcare</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl w-full mx-auto px-4">
        <Link
          to="/nebulize-service"
          className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
        >
          <div className="flex flex-col items-center">
            <Stethoscope className="h-16 w-16 text-blue-600 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Nebulize Service</h2>
            <p className="text-gray-600 text-center">
              Find the nearest nebulizer service and schedule appointments with ease
            </p>
          </div>
        </Link>

        <Link
          to="/baby-milk"
          className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
        >
          <div className="flex flex-col items-center">
            <Milk className="h-16 w-16 text-blue-600 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Baby Milk Service</h2>
            <p className="text-gray-600 text-center">
              Order baby milk and have it delivered to your doorstep
            </p>
          </div>
        </Link>

        <Link
          to="/nursery"
          className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
        >
          <div className="flex flex-col items-center">
            <School className="h-16 w-16 text-blue-600 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Nursery Service</h2>
            <p className="text-gray-600 text-center">
              Find and book the perfect nursery for your little one
            </p>
          </div>
        </Link>
      </div>

      <div className="max-w-4xl w-full mx-auto px-4 mt-12">
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Users className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-2xl font-semibold">About Us</h2>
          </div>
          <p className="text-gray-600 mb-4">
            Baby Health Life is dedicated to providing comprehensive healthcare solutions for your little ones. Our platform connects you with trusted medical services and essential baby products, ensuring the best care for your child.
          </p>
          <p className="text-gray-600">
            With years of experience in pediatric care, we understand the importance of reliable and accessible healthcare services. Our network of certified healthcare providers and quality products makes us your ideal partner in your baby's health journey.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center mb-6">
            <Phone className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-2xl font-semibold">Contact Us</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-lg mb-4">Get in Touch</h3>
              <div className="space-y-2">
                <p className="text-gray-600">Email: support@babyhealthlife.com</p>
                <p className="text-gray-600">Phone: +1 (555) 123-4567</p>
                <p className="text-gray-600">Hours: 24/7 Support Available</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Office Location</h3>
              <p className="text-gray-600">
                123 Healthcare Avenue<br />
                Medical District<br />
                New York, NY 10001
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};