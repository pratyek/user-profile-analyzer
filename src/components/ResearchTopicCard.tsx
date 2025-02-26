import React from 'react';
import { Link } from 'react-router-dom';

interface ResearchTopic {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  path: string;
}

interface ResearchTopicCardProps {
  topic: ResearchTopic;
}

const ResearchTopicCard: React.FC<ResearchTopicCardProps> = ({ topic }) => {
  return (
    <Link 
      to={topic.path} 
      className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={topic.imageUrl || "/api/placeholder/400/320"} 
          alt={topic.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
        <div className="absolute bottom-0 left-0 p-4">
          <h3 className="text-white text-xl font-bold">{topic.title}</h3>
        </div>
      </div>
      <div className="p-4">
        <p className="text-gray-600 line-clamp-3">{topic.description}</p>
        <span className="inline-block mt-3 text-blue-600 font-medium group-hover:translate-x-1 transition-transform duration-300">
          Learn more →
        </span>
      </div>
    </Link>
  );
};

export default ResearchTopicCard;