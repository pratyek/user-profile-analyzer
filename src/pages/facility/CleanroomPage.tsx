import React from 'react';
import FacilityLayout from '../../components/facility/FacilityLayout';
import { VenetianMask, Shield } from 'lucide-react';

const CleanroomPage: React.FC = () => {
  const equipment = [
    {
      name: "Photolithography System",
      description: "Advanced photolithography system for semiconductor device fabrication",
      specs: ["Resolution: 0.5µm", "UV exposure system", "Automated wafer handling"]
    },
    {
      name: "Plasma Etching System",
      description: "Reactive ion etching system for precise material removal",
      specs: ["Multiple gas lines", "Temperature control", "Real-time monitoring"]
    },
    {
      name: "Thin Film Deposition",
      description: "Various deposition tools for semiconductor materials",
      specs: ["Sputtering", "Thermal evaporation", "Chemical vapor deposition"]
    }
  ];

  return (
    <FacilityLayout
      title="Cleanroom Facility"
      description="ISO Class 5 (Class 100) cleanroom for semiconductor device fabrication"
    >
      <div className="space-y-8">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-gray-800">
            <Shield className="w-6 h-6 text-green-400" />
            Cleanroom Specifications
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
            <li className="flex items-center gap-2">• ISO Class 5 (Class 100)</li>
            <li className="flex items-center gap-2">• Temperature: 20±1°C</li>
            <li className="flex items-center gap-2">• Humidity: 45±5%</li>
            <li className="flex items-center gap-2">• HEPA filtration</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {equipment.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-gray-800">
                <VenetianMask className="w-5 h-5 text-green-400" />
                {item.name}
              </h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <ul className="list-disc list-inside text-gray-600">
                {item.specs.map((spec, i) => (
                  <li key={i}>{spec}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </FacilityLayout>
  );
};

export default CleanroomPage;
