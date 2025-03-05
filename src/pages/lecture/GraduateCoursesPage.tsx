import React from 'react';
import FacilityLayout from '../../components/facility/FacilityLayout';
import { GraduationCap, BookOpen, Clock, Users } from 'lucide-react';

const GraduateCoursesPage: React.FC = () => {
  const courses = [
    {
      code: "EE501",
      title: "Advanced Semiconductor Physics",
      credits: 4,
      description: "In-depth study of semiconductor material properties and quantum effects.",
      instructor: "Prof. Smith",
      schedule: "Mon/Wed 14:00-15:30"
    },
    {
      code: "EE502",
      title: "Nanoelectronic Devices",
      credits: 4,
      description: "Advanced topics in modern semiconductor devices and fabrication.",
      instructor: "Prof. Johnson",
      schedule: "Tue/Thu 10:00-11:30"
    },
    {
      code: "EE503",
      title: "Quantum Computing",
      credits: 3,
      description: "Fundamentals of quantum computation and information theory.",
      instructor: "Prof. Williams",
      schedule: "Fri 13:00-15:00"
    }
  ];

  return (
    <FacilityLayout
      title="Graduate Courses"
      description="Advanced courses for graduate students specializing in semiconductor devices and nanoelectronics."
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
                <Users className="w-4 h-4 text-gray-500" />
                <span>Instructor: {course.instructor}</span>
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

export default GraduateCoursesPage;
