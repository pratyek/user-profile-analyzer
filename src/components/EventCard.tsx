import React, { useState } from 'react';
import { Calendar, Clock, MapPin, X, User } from 'lucide-react';

interface EventSpeaker {
  name: string;
  title: string;
  imageUrl?: string;
}

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  imageUrl?: string;
  agenda?: string[];
  speakers?: EventSpeaker[];
  registrationUrl?: string;
}

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  // Parse the date
  const eventDate = new Date(event.date);
  const formattedDate = eventDate.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
  
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };
  
  return (
    <>
      <div 
        className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        onClick={handleClick}
      >
        <div className="md:flex h-full">
          {/* Left side - date display */}
          <div className="bg-blue-600 text-white text-center p-4 flex flex-col justify-center md:w-24">
            <div className="text-2xl font-bold">
              {eventDate.getDate()}
            </div>
            <div className="text-sm">
              {eventDate.toLocaleDateString('en-US', { month: 'short' })}
            </div>
            <div className="text-sm">
              {eventDate.getFullYear()}
            </div>
          </div>
          
          {/* Right side - event details */}
          <div className="p-4 md:p-6 flex-1">
            <h3 className="font-bold text-lg mb-2 text-gray-900">{event.title}</h3>
            <div className="space-y-2 text-gray-600">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{formattedDate}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>{event.location}</span>
              </div>
            </div>
            <p className="mt-3 text-gray-600 line-clamp-2">{event.description}</p>
            <div className="mt-4">
              <span className="inline-block text-blue-600 font-medium">
                View details →
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Event Details Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="relative">
              {event.imageUrl && (
                <img 
                  src={event.imageUrl} 
                  alt={event.title} 
                  className="w-full h-48 object-cover"
                />
              )}
              <button 
                onClick={() => setShowModal(false)}
                className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">{event.title}</h2>
              
              <div className="space-y-3 mb-4">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-3 text-blue-600" />
                  <span>{eventDate.toLocaleDateString('en-US', {
                    weekday: 'long',
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-3 text-blue-600" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-3 text-blue-600" />
                  <span>{event.location}</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg">Description</h3>
                  <p className="text-gray-600">{event.description}</p>
                </div>
                
                {event.agenda && (
                  <div>
                    <h3 className="font-semibold text-lg">Agenda</h3>
                    <ul className="list-disc pl-5 text-gray-600">
                      {event.agenda.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {event.speakers && (
                  <div>
                    <h3 className="font-semibold text-lg">Speakers</h3>
                    <div className="space-y-2">
                      {event.speakers.map((speaker, index) => (
                        <div key={index} className="flex items-center">
                          <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                            {speaker.imageUrl ? (
                              <img 
                                src={speaker.imageUrl} 
                                alt={speaker.name} 
                                className="h-10 w-10 rounded-full object-cover"
                              />
                            ) : (
                              <User className="h-6 w-6 text-gray-500" />
                            )}
                          </div>
                          <div>
                            <div className="font-medium">{speaker.name}</div>
                            <div className="text-sm text-gray-500">{speaker.title}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              {event.registrationUrl && (
                <div className="mt-6">
                  <a 
                    href={event.registrationUrl}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors duration-200"
                  >
                    Register for Event
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EventCard;