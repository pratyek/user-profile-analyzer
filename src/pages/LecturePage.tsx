import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, BookOpen, Users, Video } from 'lucide-react';

const LecturePage: React.FC = () => {
  const lectures = [
    {
      title: "Undergraduate Courses",
      description: "Core semiconductor and electronics engineering courses for undergraduate students",
      icon: <Users className="w-8 h-8 text-blue-600" />,
      link: "/lecture/undergraduate"
    },
    {
      title: "Graduate Courses",
      description: "Advanced courses in nanoelectronics and device physics for graduate students",
      icon: <GraduationCap className="w-8 h-8 text-green-600" />,
      link: "/lecture/graduate"
    },
    {
      title: "Workshops",
      description: "Hands-on training sessions and specialized workshops",
      icon: <BookOpen className="w-8 h-8 text-purple-600" />,
      link: "/lecture/workshops"
    },
    {
      title: "Tutorial Videos",
      description: "Online learning resources and recorded lectures",
      icon: <Video className="w-8 h-8 text-red-600" />,
      link: "/lecture/tutorials"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Educational Resources</h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Comprehensive learning materials and courses in semiconductor devices and nanoelectronics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {lectures.map((item, index) => (
            <Link 
              key={index}
              to={item.link}
              className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-200"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gray-100 rounded-lg">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800">{item.title}</h3>
              </div>
              <p className="text-gray-600">{item.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LecturePage;
