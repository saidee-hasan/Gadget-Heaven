import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-9xl font-bold text-red-600">404</h1>
      <h2 className="mt-4 text-2xl font-semibold text-gray-800">Oops! Page Not Found</h2>
      <p className="mt-2 text-lg text-gray-600">We're sorry, but the page you were looking for doesn't exist.</p>
      <Link to="/" className="mt-6 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 transition">
        Go Back to Home
      </Link>
      <img src="/path/to/your/image.png" alt="Not Found" className="mt-10 w-1/2 max-w-xs" />
    </div>
  );
}

export default NotFound;