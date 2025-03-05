import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, UserPlus, Handshake, ArrowRight } from 'lucide-react';

const ContactPage: React.FC = () => {
  const contactOptions = [
    {
      title: "Location",
      description: "Find our research lab and office locations",
      icon: <MapPin className="w-8 h-8 text-blue-600" />,
      link: "/contact/location",
      color: "bg-blue-50"
    },
    {
      title: "Email",
      description: "Contact our team members and administrators",
      icon: <Mail className="w-8 h-8 text-green-600" />,
      link: "/contact/email",
      color: "bg-green-50"
    },
    {
      title: "Join Us",
      description: "Opportunities for students and researchers",
      icon: <UserPlus className="w-8 h-8 text-purple-600" />,
      link: "/contact/join-us",
      color: "bg-purple-50"
    },
    {
      title: "Collaboration Inquiries",
      description: "Partner with us on research projects",
      icon: <Handshake className="w-8 h-8 text-red-600" />,
      link: "/contact/collaboration",
      color: "bg-red-50"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Get in touch with the SMILE Lab team for inquiries, collaborations, and opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-5xl mx-auto">
          {contactOptions.map((option, index) => (
            <Link 
              key={index}
              to={option.link}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-4 ${option.color} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                  {option.icon}
                </div>
                <h3 className="text-2xl font-bold">{option.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{option.description}</p>
              <div className="flex justify-end">
                <span className="text-blue-900 font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Additional Contact Information */}
        <div className="max-w-4xl mx-auto mt-16 bg-blue-900 rounded-xl p-8 text-center">
          <h2 className="text-2xl text-white font-bold mb-4">Have a General Question?</h2>
          <p className="text-white mb-6">
            For general inquiries about our research, facilities, or programs, 
            feel free to reach out to our main office.
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <a href="tel:+11234567890" className="flex items-center gap-2 text-white hover:text-gray-500 font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              (123) 456-7890
            </a>
            <a href="mailto:info@smilelab.edu" className="flex items-center gap-2 text-white hover:text-gray-500 font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              info@smilelab.edu
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;