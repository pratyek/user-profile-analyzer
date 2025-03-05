import React from 'react';
import FacilityLayout from '../../components/facility/FacilityLayout';
import { Handshake, Building, Globe, FlaskConical } from 'lucide-react';

const CollaborationPage: React.FC = () => {
  const collaborationTypes = [
    {
      title: "Industry Partnerships",
      description: "Research collaborations with semiconductor companies",
      icon: <Building className="w-6 h-6 text-blue-900" />,
      benefits: [
        "Access to state-of-the-art facilities",
        "Joint research projects",
        "Technology transfer opportunities",
        "Student internship programs"
      ]
    },
    {
      title: "Academic Collaboration",
      description: "Joint research with universities and institutes",
      icon: <Globe className="w-6 h-6 text-green-600" />,
      benefits: [
        "Joint publications",
        "Student exchange programs",
        "Shared research resources",
        "Collaborative grant proposals"
      ]
    },
    {
      title: "Research Projects",
      description: "Specific research and development initiatives",
      icon: <FlaskConical className="w-6 h-6 text-purple-600" />,
      benefits: [
        "Custom research solutions",
        "Proof-of-concept studies",
        "Technical consulting",
        "Prototype development"
      ]
    }
  ];

  return (
    <FacilityLayout
      title="Collaboration Opportunities"
      description="Partner with us for innovative semiconductor research"
    >
      <div className="space-y-12 max-w-6xl mx-auto">
        {/* Intro Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Partner With Us</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We welcome collaborations across industry, academia, and government sectors to advance 
            semiconductor research and accelerate innovation in the field.
          </p>
        </div>

        {/* Collaboration Types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collaborationTypes.map((type, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-full bg-gray-50">
                  {type.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800">{type.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{type.description}</p>
              <ul className="space-y-2">
                {type.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-700">
                    <div className="w-1.5 h-1.5 bg-blue-900 rounded-full" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 mt-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
            <Handshake className="w-6 h-6 text-blue-900" />
            Start a Collaboration
          </h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">Organization Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:ring-2 focus:ring-blue-900 focus:border-blue-900 outline-none transition-all"
                  placeholder="Your organization"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">Contact Person</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:ring-2 focus:ring-blue-900 focus:border-blue-900 outline-none transition-all"
                  placeholder="Your name"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:ring-2 focus:ring-blue-900 focus:border-blue-900 outline-none transition-all"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">Collaboration Interest</label>
              <textarea
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 h-32 focus:ring-2 focus:ring-blue-900 focus:border-blue-900 outline-none transition-all resize-none"
                placeholder="Describe your collaboration interests..."
              />
            </div>
            <div className="flex items-center justify-end">
              <button className="bg-blue-900 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors font-medium flex items-center gap-2">
                <Handshake className="w-4 h-4" />
                Submit Inquiry
              </button>
            </div>
          </form>
        </div>
        
        {/* Additional Information */}
        <div className="mt-12 text-center p-8 bg-gray-50 rounded-lg">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Need More Information?</h3>
          <p className="text-gray-600 mb-4">
            Contact our research coordination office directly to discuss specific collaboration opportunities
            or to schedule a meeting with our research team.
          </p>
          <a href="mailto:collaborations@lab.edu" className="text-blue-900 hover:text-blue-700 font-medium">
            collaborations@lab.edu
          </a>
        </div>
      </div>
    </FacilityLayout>
  );
};

export default CollaborationPage;