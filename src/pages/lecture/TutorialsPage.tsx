import React, { useState } from 'react';
import FacilityLayout from '../../components/facility/FacilityLayout';
import { Play, Clock, Tag, Download, Users } from 'lucide-react';

const TutorialsPage: React.FC = () => {
  const tutorials = [
    {
      title: "Introduction to Semiconductor Physics",
      duration: "45 minutes",
      category: "Fundamentals",
      description: "Basic concepts of semiconductor materials and their properties",
      instructor: "Prof. Robert Wilson",
      thumbnail: "https://placehold.co/600x400",
      tags: ["Basics", "Theory", "Physics"],
      views: "1.2k"
    },
    {
      title: "MOSFET Device Characterization",
      duration: "60 minutes",
      category: "Advanced",
      description: "Step-by-step guide to characterizing MOSFET devices using measurement equipment",
      instructor: "Dr. Emily Parker",
      thumbnail: "https://placehold.co/600x400",
      tags: ["Practical", "Measurements", "Devices"],
      views: "856"
    },
    {
      title: "Quantum Effects in Nanodevices",
      duration: "55 minutes",
      category: "Advanced",
      description: "Understanding quantum mechanical effects in nanoscale semiconductor devices",
      instructor: "Dr. James Lee",
      thumbnail: "https://placehold.co/600x400",
      tags: ["Quantum", "Theory", "Advanced"],
      views: "943"
    }
  ];

  const [filter, setFilter] = useState("All");
  
  const filteredTutorials = filter === "All" ? tutorials : tutorials.filter(tutorial => tutorial.category === filter);
  
  return (
    <FacilityLayout
      title="Tutorial Videos"
      description="Online learning resources and recorded lectures for semiconductor research"
    >
      <div className="space-y-8">
        {/* Category Filter */}
        <div className="flex gap-2 flex-wrap">
          {["All", "Fundamentals", "Advanced"].map((category) => (
            <button 
              key={category} 
              className={`px-4 py-2 rounded-full text-sm transition-colors ${filter === category ? "bg-blue-600 text-white" : "bg-gray-300 text-gray-800 hover:bg-gray-400"}`} 
              onClick={() => setFilter(category)}
            >
              {category} Videos
            </button>
          ))}
        </div>

        {/* Tutorials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTutorials.map((tutorial, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
              {/* Thumbnail with Play Button */}
              <div className="relative aspect-video group cursor-pointer">
                <img 
                  src={tutorial.thumbnail} 
                  alt={tutorial.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="bg-red-600 hover:bg-red-700 text-white p-4 rounded-full transition-colors">
                    <Play className="w-6 h-6" />
                  </button>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-blue-400">{tutorial.category}</span>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <Clock className="w-4 h-4" />
                    {tutorial.duration}
                  </div>
                </div>

                <h3 className="text-lg font-bold mb-2">{tutorial.title}</h3>
                <p className="text-gray-700 text-sm mb-3">{tutorial.description}</p>

                {/* Instructor and Views */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {tutorial.instructor}
                  </div>
                  <span className="flex items-center gap-1">
                    <Play className="w-3 h-3" />
                    {tutorial.views} views
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {tutorial.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Download Button */}
                <button className="mt-4 w-full bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded-lg transition-colors flex items-center justify-center gap-2">
                  <Download className="w-4 h-4" />
                  Download Materials
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </FacilityLayout>
  );
};

export default TutorialsPage;
