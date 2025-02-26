// import React from 'react';
import { ChevronRight, Brain, Cpu, Database, Microscope, Globe2 } from 'lucide-react';

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="/api/placeholder/1920/1080"
            alt="Laboratory Background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex flex-col justify-center h-full pt-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              <span className="block">Nanoelectronic And</span>
              <span className="block">Neuromorphic Device Lab.</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              We conduct cutting-edge research on advanced semiconductor technology,
              neuromorphic computing, and future logic devices. Our work bridges the gap
              between academic innovation and industrial applications.
            </p>
          </div>
        </div>
      </div>

      {/* Research Topics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Research Topics</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ResearchCard
              icon={<Brain className="h-6 w-6" />}
              title="Neuromorphic Computing"
              description="Development of brain-inspired computing architectures and devices for efficient AI processing."
              link="/research/neuromorphic-computing"
            />
            <ResearchCard
              icon={<Cpu className="h-6 w-6" />}
              title="Future Logic Devices"
              description="Innovation in next-generation semiconductor devices and novel computing paradigms."
              link="/research/future-logic-devices"
            />
            <ResearchCard
              icon={<Database className="h-6 w-6" />}
              title="Memory Technologies"
              description="Advanced research in non-volatile memory systems and emerging storage solutions."
              link="/research/memory-technologies"
            />
            <ResearchCard
              icon={<Microscope className="h-6 w-6" />}
              title="Nano-electronics"
              description="Exploration of quantum effects and nanoscale phenomena in electronic devices."
              link="/research/nano-electronics"
            />
            <ResearchCard
              icon={<Globe2 className="h-6 w-6" />}
              title="Industry Collaboration"
              description="Partnerships with leading semiconductor companies for real-world applications."
              link="/contact/collaboration"
            />
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Latest News</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <NewsCard
              date="February 15, 2025"
              title="New Paper Published in Nature Electronics"
              description="Our research on high-efficiency neuromorphic devices has been published in Nature Electronics."
            />
            <NewsCard
              date="January 30, 2025"
              title="Research Grant Awarded"
              description="The lab has received a $2.5M grant to advance research in quantum computing applications."
            />
            <NewsCard
              date="January 10, 2025"
              title="Collaboration with Industry Partner"
              description="New partnership announced with leading semiconductor manufacturer to develop next-gen memory solutions."
            />
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Upcoming Events</h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <EventCard
              date="March 10, 2025"
              title="Neuromorphic Computing Symposium"
              location="University Conference Center"
              time="9:00 AM - 5:00 PM"
            />
            <EventCard
              date="April 15-17, 2025"
              title="Advanced Device Fabrication Workshop"
              location="SMILE Lab Cleanroom Facility"
              time="10:00 AM - 4:00 PM"
            />
            <EventCard
              date="May 5, 2025"
              title="Guest Lecture: Quantum Computing Applications"
              location="Engineering Building, Room 305"
              time="3:00 PM - 5:00 PM"
            />
          </div>
        </div>
      </section>
    </>
  );
};

// import { ChevronRight } from "lucide-react"; // Ensure this import is correct

// Define props for ResearchCard
interface ResearchCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

function ResearchCard({ icon, title, description, link }: ResearchCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="text-blue-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href={link} className="inline-flex items-center text-blue-600 hover:text-blue-700">
        Learn more <ChevronRight className="ml-1 h-4 w-4" />
      </a>
    </div>
  );
}

// Define props for NewsCard
interface NewsCardProps {
  date: string;
  title: string;
  description: string;
}

function NewsCard({ date, title, description }: NewsCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
      <div className="text-sm text-gray-500 mb-2">{date}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

// Define props for EventCard
interface EventCardProps {
  date: string;
  title: string;
  location: string;
  time: string;
}

function EventCard({ date, title, location, time }: EventCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row">
      <div className="md:w-1/4 mb-4 md:mb-0">
        <div className="text-lg font-bold text-blue-600">{date}</div>
        <div className="text-sm text-gray-500">{time}</div>
      </div>
      <div className="md:w-3/4">
        <h3 className="text-xl font-semibold mb-1">{title}</h3>
        <div className="text-gray-600">{location}</div>
      </div>
    </div>
  );
}


export default HomePage;