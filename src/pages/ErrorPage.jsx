import React from 'react';

const ErrorPage = () => {
  return (
    <div className="bg-[#0F1014] min-h-screen flex items-center justify-center ">
      <div className="max-w-md mx-auto p-8 bg-white border border-gray-300 shadow-md rounded-md">
        <h1 className="text-4xl font-bold mb-4">Error 404</h1>
        <p className="text-lg mb-4">Oops! The page you're looking for does not exist.</p>
        <p className="text-sm">Please check the URL or go back to the homepage.</p>
        <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600">
          Go to Homepage
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
