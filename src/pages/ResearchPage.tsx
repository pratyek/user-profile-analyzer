import React from 'react';
import { useParams } from 'react-router-dom';
import ResearchTopicCard from '../components/ResearchTopicCard';

// Sample research topics data
const researchTopics = [
  {
    id: 1,
    title: "Neuromorphic Computing",
    description: "Developing brain-inspired computing architectures to enable more efficient AI processing and learning capabilities at the edge.",
    longDescription: "Our neuromorphic computing research focuses on creating hardware that mimics the structure and function of the human brain. By designing specialized circuits and architectures that process information in a brain-like manner, we aim to create computing systems that are highly efficient for AI tasks while consuming orders of magnitude less power than traditional approaches. Current projects include spiking neural networks, memristive synapse devices, and neuromorphic algorithms for edge computing.",
    imageUrl: "/api/placeholder/400/320",
    path: "/research/neuromorphic-computing"
  },
  {
    id: 2,
    title: "Nano-electronics",
    description: "Exploring electronic properties and applications at nanoscale dimensions for next-generation devices.",
    longDescription: "In our nano-electronics research, we investigate quantum phenomena that emerge at extremely small scales and how these can be harnessed for novel electronic devices. We're developing transistors with channel lengths below 5nm, exploring 2D materials like graphene and transition metal dichalcogenides, and creating nano-scale sensors with unprecedented sensitivity. Our work combines fundamental physics with practical engineering to push the boundaries of what's possible in electronic devices.",
    imageUrl: "/api/placeholder/400/320",
    path: "/research/nano-electronics"
  },
  {
    id: 3,
    title: "Future Logic Devices",
    description: "Investigating novel materials and device concepts to overcome limitations of traditional CMOS technology.",
    longDescription: "As conventional CMOS technology approaches its physical limits, our research explores alternative computational paradigms and devices. We investigate tunnel FETs, negative capacitance devices, spintronic logic, and quantum computing elements. Our approach integrates materials science, device physics, and circuit design to create logic devices that offer advantages in terms of energy efficiency, speed, or novel functionality beyond what's possible with silicon CMOS.",
    imageUrl: "/api/placeholder/400/320",
    path: "/research/future-logic-devices"
  },
  {
    id: 4,
    title: "Memory Technologies",
    description: "Developing non-volatile memory solutions with higher density, lower power, and better reliability.",
    longDescription: "Our memory technology research addresses the growing gap between processor and memory performance in modern computing systems. We explore resistive RAM, phase-change memory, ferroelectric devices, and other emerging non-volatile memory technologies. These offer the potential for high-density storage, extreme energy efficiency, and novel capabilities like in-memory computing. We address challenges from materials properties to array architecture to ensure these technologies can be successfully integrated into future computing systems.",
    imageUrl: "/api/placeholder/400/320",
    path: "/research/memory-technologies"
  }
];

const ResearchPage: React.FC = () => {
  const { subpage } = useParams<{ subpage?: string }>();
  
  // If a specific research area is requested, display detailed info
  if (subpage) {
    const topic = researchTopics.find(t => {
      const topicPath = t.path.split('/').pop();
      return topicPath === subpage;
    });
    
    if (topic) {
      return (
        <div className="min-h-screen pt-20 bg-gray-50">
          <div className="px-4 py-16 mx-auto max-w-7xl">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900">{topic.title}</h1>
                <div className="mt-8 bg-white shadow-lg rounded-lg overflow-hidden">
                  <div className="h-64 relative">
                    <img 
                      src={topic.imageUrl} 
                      alt={topic.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {topic.longDescription}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">Current Projects</h2>
                <div className="bg-white shadow-md rounded-lg p-6">
                  <p className="text-gray-600 mb-4">
                    Our research in {topic.title.toLowerCase()} encompasses several ongoing projects:
                  </p>
                  <ul className="list-disc pl-5 space-y-3 text-gray-700">
                    <li>Project 1 description would go here...</li>
                    <li>Project 2 description would go here...</li>
                    <li>Project 3 description would go here...</li>
                  </ul>
                </div>
              </div>

              <div className="mt-12">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">Research Team</h2>
                <div className="bg-white shadow-md rounded-lg p-6">
                  <p className="text-gray-600 mb-4">
                    This research area is led by Professor [Name] and includes the following team members:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    {/* Team member cards would go here */}
                    <div className="p-4 border rounded-lg flex items-center">
                      <div className="w-16 h-16 bg-gray-200 rounded-full mr-4"></div>
                      <div>
                        <h3 className="font-medium">Professor Name</h3>
                        <p className="text-sm text-gray-500">Principal Investigator</p>
                      </div>
                    </div>
                    <div className="p-4 border rounded-lg flex items-center">
                      <div className="w-16 h-16 bg-gray-200 rounded-full mr-4"></div>
                      <div>
                        <h3 className="font-medium">Researcher Name</h3>
                        <p className="text-sm text-gray-500">Postdoctoral Researcher</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">Recent Publications</h2>
                <div className="bg-white shadow-md rounded-lg p-6">
                  <ul className="space-y-4">
                    <li className="pb-4 border-b">
                      <p className="font-medium">Publication Title Would Go Here</p>
                      <p className="text-sm text-gray-600">Authors et al.</p>
                      <p className="text-sm text-gray-600">Journal Name, 2025</p>
                    </li>
                    <li className="pb-4 border-b">
                      <p className="font-medium">Another Publication Title</p>
                      <p className="text-sm text-gray-600">Authors et al.</p>
                      <p className="text-sm text-gray-600">Conference Name, 2024</p>
                    </li>
                    <li>
                      <p className="font-medium">Third Publication Title</p>
                      <p className="text-sm text-gray-600">Authors et al.</p>
                      <p className="text-sm text-gray-600">Journal Name, 2024</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    
    // If subpage doesn't match any topic, could add error handling here
  }
  
  // Main research page showing all areas
  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="px-4 py-16 mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Our Research
          </h1>
          <p className="max-w-2xl mx-auto mt-4 text-xl text-gray-600">
            Innovating at the intersection of materials science, semiconductor physics, and computing architectures
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 mt-12">
          {researchTopics.map((topic) => (
            <ResearchTopicCard key={topic.id} topic={topic} />
          ))}
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">
            Research Facilities
          </h2>
          <div className="bg-white shadow-md rounded-lg p-6">
            <p className="text-gray-700 mb-6">
              Our lab is equipped with state-of-the-art facilities for semiconductor research, nanofabrication, and device characterization:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border rounded-lg overflow-hidden">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">Cleanroom Facility</h3>
                  <p className="text-sm text-gray-600">
                    Class 100 cleanroom with lithography, deposition, and etching equipment.
                  </p>
                </div>
              </div>
              <div className="border rounded-lg overflow-hidden">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">Device Characterization Lab</h3>
                  <p className="text-sm text-gray-600">
                    Advanced electrical testing and material analysis instruments.
                  </p>
                </div>
              </div>
              <div className="border rounded-lg overflow-hidden">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">Computing Infrastructure</h3>
                  <p className="text-sm text-gray-600">
                    High-performance computing cluster for simulation and data analysis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchPage;