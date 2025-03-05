import React from 'react';
import { Building2, Microscope, VenetianMask, Server, Video } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FacilityCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  link: string;
}

const FacilityCard: React.FC<FacilityCardProps> = ({ title, description, icon, features, link }) => (
  <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-all duration-300">
    <div className="flex items-center gap-4 mb-4">
      <div className="p-3 bg-gray-100 rounded-lg">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
    </div>
    <p className="text-gray-600 mb-4">{description}</p>
    <ul className="space-y-2 mb-4">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center text-gray-700">
          <span className="mr-2">•</span>
          {feature}
        </li>
      ))}
    </ul>
    <Link
      to={link}
      className="inline-flex items-center text-blue-600 hover:text-blue-500 transition-colors"
    >
      Learn more
      <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </Link>
  </div>
);

const FacilityPage: React.FC = () => {
  const facilities = [
    {
      title: "Lab Equipment",
      description: "State-of-the-art research equipment for semiconductor characterization and testing.",
      icon: <Microscope className="w-8 h-8 text-blue-600" />,
      features: [
        "Atomic Force Microscope (AFM)",
        "Scanning Electron Microscope (SEM)",
        "Electrical Characterization Tools",
        "Device Testing Stations"
      ],
      link: "/facility/lab-equipment"
    },
    {
      title: "Cleanroom",
      description: "ISO Class 5 (Class 100) cleanroom facility for device fabrication.",
      icon: <VenetianMask className="w-8 h-8 text-green-600" />,
      features: [
        "Class 100 Clean Environment",
        "Photolithography Equipment",
        "Thin Film Deposition",
        "Plasma Etching Systems"
      ],
      link: "/facility/cleanroom"
    },
    {
      title: "Computation Resources",
      description: "High-performance computing infrastructure for simulation and analysis.",
      icon: <Server className="w-8 h-8 text-purple-600" />,
      features: [
        "GPU Computing Cluster",
        "TCAD Simulation Tools",
        "Data Analysis Software",
        "Neural Network Training Infrastructure"
      ],
      link: "/facility/computation-resources"
    },
    {
      title: "Virtual Tour",
      description: "Interactive virtual tour of our research facilities.",
      icon: <Video className="w-8 h-8 text-red-600" />,
      features: [
        "360° Lab Views",
        "Equipment Demonstrations",
        "Interactive Facility Map",
        "Virtual Walkthrough Experience"
      ],
      link: "/facility/virtual-tour"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl mb-6">
              Our Research Facilities
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access cutting-edge equipment and facilities for advanced semiconductor research
              and device fabrication.
            </p>
          </div>
        </div>
      </div>

      {/* Facilities Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {facilities.map((facility, index) => (
            <FacilityCard key={index} {...facility} />
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-blue-900 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Interested in Using Our Facilities?
            </h2>
            <p className="text-white mb-8 max-w-2xl mx-auto">
              We welcome collaborations with academic institutions and industry partners.
              Contact us to learn more about facility access and research opportunities.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white hover:bg-blue-700 text-blue-900 font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Get in Touch
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilityPage;
