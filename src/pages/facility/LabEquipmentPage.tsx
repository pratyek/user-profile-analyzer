import React from 'react';
import FacilityLayout from '../../components/facility/FacilityLayout';
import { Microscope } from 'lucide-react';

const LabEquipmentPage: React.FC = () => {
  const equipment = [
    {
      name: "Atomic Force Microscope",
      description: "High-resolution scanning probe microscopy for surface characterization",
      specs: ["Resolution: 0.1nm", "Scan size: 100µm × 100µm", "Multiple scanning modes"]
    },
    {
      name: "Semiconductor Parameter Analyzer",
      description: "Precise electrical characterization of semiconductor devices",
      specs: ["DC/AC analysis", "Pulse measurements", "Temperature control"]
    },
    // Add more equipment as needed
  ];

  return (
    <FacilityLayout
      title="Laboratory Equipment"
      description="State-of-the-art equipment for semiconductor research and characterization"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {equipment.map((item, index) => (
          <div key={index} className="bg-white shadow-lg p-6 rounded-xl hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
              <Microscope className="w-5 h-5 text-blue-900" />
              {item.name}
            </h3>
            <p className="text-gray-600 mb-4">{item.description}</p>
            <ul className="list-disc list-inside text-gray-700">
              {item.specs.map((spec, i) => (
                <li key={i}>{spec}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </FacilityLayout>
  );
};

export default LabEquipmentPage;
