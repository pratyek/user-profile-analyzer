import React from 'react';
import FacilityLayout from '../../components/facility/FacilityLayout';
import { BookOpen, Clock, Users2Icon, Trophy } from 'lucide-react';

const UndergraduateCoursesPage: React.FC = () => {
  const courses = [
    {
      code: "EE301",
      title: "Semiconductor Devices",
      credits: 3,
      description: "Introduction to semiconductor physics and device operations.",
      prerequisites: "Basic Electronics",
      schedule: "Mon/Wed 10:00-11:30"
    },
    {
      code: "EE302",
      title: "Digital Electronics",
      credits: 3,
      description: "Digital circuit design and analysis.",
      prerequisites: "None",
      schedule: "Tue/Thu 14:00-15:30"
    },
    {
      code: "EE303",
      title: "Microprocessors & Microcontrollers",
      credits: 4,
      description: "Architecture and programming of microprocessors and microcontrollers.",
      prerequisites: "Digital Electronics",
      schedule: "Fri 09:00-11:00"
    }
  ];

  return (
    <FacilityLayout
      title="Undergraduate Courses"
      description="Core courses for undergraduate students in electronics and semiconductor engineering."
    >
      <div className="space-y-6">
        {courses.map((course, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-800">{course.title}</h3>
                <p className="text-blue-600">{course.code}</p>
              </div>
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                {course.credits} Credits
              </span>
            </div>
            <p className="text-gray-600 mb-4">{course.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-gray-500" />
                <span>Prerequisites: {course.prerequisites}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gray-500" />
                <span>{course.schedule}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </FacilityLayout>
  );
};

export default UndergraduateCoursesPage;
