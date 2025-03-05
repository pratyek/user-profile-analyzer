import React from 'react';
import FacilityLayout from '../../components/facility/FacilityLayout';
import { Calendar, Clock, Users, MapPin } from 'lucide-react';

const WorkshopsPage: React.FC = () => {
  const workshops = [
    {
      title: "Advanced TCAD Simulation",
      date: "June 15-16, 2024",
      description: "Hands-on workshop on semiconductor device simulation using Synopsys TCAD tools.",
      instructor: "Dr. Sarah Johnson",
      location: "Room 401, Engineering Building",
      capacity: 20,
      duration: "2 days",
      status: "Upcoming",
      formLink: "https://forms.gle/example1"
    },
    {
      title: "Semiconductor Device Characterization",
      date: "July 10-12, 2024",
      description: "Practical training on electrical characterization techniques and measurement tools.",
      instructor: "Prof. Michael Chen",
      location: "Device Lab, Research Center",
      capacity: 15,
      duration: "3 days",
      status: "Registration Open",
      formLink: "https://forms.gle/example2"
    }
  ];

  return (
    <FacilityLayout
      title="Research Workshops"
      description="Hands-on training sessions and specialized workshops in semiconductor research."
    >
      <div className="space-y-8">
        {workshops.map((workshop, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold text-gray-900">{workshop.title}</h3>
                <div className="flex items-center gap-2 text-blue-600 text-sm mt-1">
                  <Calendar className="w-4 h-4" />
                  <span>{workshop.date}</span>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm ${
                workshop.status === 'Upcoming' 
                  ? 'bg-blue-100 text-blue-600'
                  : 'bg-green-100 text-green-600'
              }`}>
                {workshop.status}
              </span>
            </div>

            <p className="text-gray-700">{workshop.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-gray-500" />
                <span>Instructor: {workshop.instructor}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gray-500" />
                <span>{workshop.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gray-500" />
                <span>Duration: {workshop.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-gray-500" />
                <span>Capacity: {workshop.capacity} participants</span>
              </div>
            </div>

            <a 
              href={workshop.formLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-blue-900 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors text-center"
            >
              Register Now
            </a>
          </div>
        ))}
      </div>
    </FacilityLayout>
  );
};

export default WorkshopsPage;
