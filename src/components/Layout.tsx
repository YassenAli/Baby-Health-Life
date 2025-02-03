import React from 'react';
import { Link } from 'react-router-dom';
import { Baby, Milk, Home as HomeIcon, Stethoscope, School } from 'lucide-react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link to="/" className="flex items-center">
                <Baby className="h-8 w-8 text-blue-600" />
                <span className="ml-2 text-xl font-bold text-gray-800">Baby Health Life</span>
              </Link>
              <div className="ml-10 flex items-center space-x-4">
                <Link
                  to="/"
                  className="flex items-center px-3 py-2 rounded-md text-gray-700 hover:text-blue-600"
                >
                  <HomeIcon className="h-5 w-5 mr-1" />
                  Home
                </Link>
                <Link
                  to="/nebulize-service"
                  className="flex items-center px-3 py-2 rounded-md text-gray-700 hover:text-blue-600"
                >
                  <Stethoscope className="h-5 w-5 mr-1" />
                  Nebulize Service
                </Link>
                <Link
                  to="/baby-milk"
                  className="flex items-center px-3 py-2 rounded-md text-gray-700 hover:text-blue-600"
                >
                  <Milk className="h-5 w-5 mr-1" />
                  Baby Milk
                </Link>
                <Link
                  to="/nursery"
                  className="flex items-center px-3 py-2 rounded-md text-gray-700 hover:text-blue-600"
                >
                  <School className="h-5 w-5 mr-1" />
                  Nursery
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4 py-6">{children}</main>
    </div>
  );
};