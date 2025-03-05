import React from 'react';

interface FacilityLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const FacilityLayout: React.FC<FacilityLayoutProps> = ({ title, description, children }) => {
  return (
    <div className="min-h-screen bg-white text-black pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-black-300 text-lg">{description}</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-8 backdrop-blur-sm">
          {children}
        </div>
      </div>
    </div>
  );
};

export default FacilityLayout;
