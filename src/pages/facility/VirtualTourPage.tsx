import React from 'react';
import FacilityLayout from '../../components/facility/FacilityLayout';
import { Video, Camera, Map, Image } from 'lucide-react';

const VirtualTourPage: React.FC = () => {
  const tourSections = [
    {
      title: "Laboratory Overview",
      description: "360° virtual tour of main research areas",
      imageSrc: "https://source.unsplash.com/600x400/?laboratory,technology",
      link: "#lab-overview"
    },
    {
      title: "Cleanroom Facilities",
      description: "Interactive walkthrough of cleanroom spaces",
      imageSrc: "https://source.unsplash.com/600x400/?cleanroom,science",
      link: "#cleanroom"
    },
    {
      title: "Equipment Showcase",
      description: "Detailed view of major research equipment",
      imageSrc: "https://source.unsplash.com/600x400/?equipment,research",
      link: "#equipment"
    }
  ];

  return (
    <FacilityLayout
      title="Virtual Tour"
      description="Experience our research facilities through an interactive virtual tour"
    >
      <div className="space-y-8">
        {/* Tour Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tourSections.map((section, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-video relative">
                <img 
                  src={section.imageSrc} 
                  alt={section.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <Video className="w-12 h-12 text-white" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{section.title}</h3>
                <p className="text-gray-600">{section.description}</p>
                <a 
                  href={section.link}
                  className="inline-flex items-center text-blue-900 mt-3 hover:text-blue-700"
                >
                  Start Tour
                  <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Map */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-gray-800">
            <Map className="w-6 h-6 text-red-500" />
            Facility Map
          </h2>
          <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
            <img 
              src="https://source.unsplash.com/600x400/?map,facility" 
              alt="Facility Map"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </FacilityLayout>
  );
};

export default VirtualTourPage;
