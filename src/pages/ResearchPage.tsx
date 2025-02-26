import  { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Brain, Cpu, Microscope, Database } from 'lucide-react';

const ResearchPage = () => {
  const { subpage } = useParams();
  const [activeTab, setActiveTab] = useState(subpage || 'neuromorphic-computing');

  useEffect(() => {
    if (subpage) {
      setActiveTab(subpage);
    }
  }, [subpage]);

  const researchAreas = {
    'neuromorphic-computing': {
      title: 'Neuromorphic Computing',
      icon: <Brain className="h-12 w-12 text-blue-600 mb-4" />,
      intro: 'Our research in neuromorphic computing focuses on developing hardware systems that mimic the architecture and functionality of the human brain to enable more efficient AI processing.',
      content: [
        {
          heading: 'Brain-Inspired Computing',
          description: 'We develop computing architectures that replicate neural structures found in biological brains, enabling more efficient and parallel information processing.'
        },
        {
          heading: 'Spike-Based Neural Networks',
          description: 'Our team is pioneering spiking neural networks (SNNs) that process information in a more biologically realistic manner than traditional artificial neural networks.'
        },
        {
          heading: 'Memristive Devices for Neural Networks',
          description: 'We are exploring novel memristive devices that can serve as artificial synapses in neuromorphic systems, providing efficient, analog-like computation.'
        }
      ],
      projects: [
        'Energy-efficient neuromorphic processors for edge AI',
        'Hardware implementation of bio-inspired learning algorithms',
        'Integration of sensing and computing for smart IoT devices',
        'Fault-tolerant neuromorphic architectures'
      ]
    },
    'nano-electronics': {
      title: 'Nano-electronics',
      icon: <Microscope className="h-12 w-12 text-blue-600 mb-4" />,
      intro: 'Our nano-electronics research explores quantum effects and nanoscale phenomena to develop next-generation electronic devices with superior performance and functionality.',
      content: [
        {
          heading: 'Quantum Electronic Devices',
          description: 'We investigate quantum transport and confinement effects in nanoscale electronic devices to enable new functionalities and improved performance.'
        },
        {
          heading: '2D Materials and Heterostructures',
          description: 'Our lab is at the forefront of research on two-dimensional materials like graphene, TMDs, and their heterostructures for novel electronic applications.'
        },
        {
          heading: 'Nanoscale Characterization',
          description: 'We develop and utilize advanced characterization techniques to understand the physics and behavior of electronic devices at the nanoscale.'
        }
      ],
      projects: [
        'Tunneling field-effect transistors based on 2D heterostructures',
        'Quantum confinement effects in nanowire transistors',
        'Spin transport in low-dimensional systems',
        'Nanoscale thermal management in electronic devices'
      ]
    },
    'future-logic-devices': {
      title: 'Future Logic Devices',
      icon: <Cpu className="h-12 w-12 text-blue-600 mb-4" />,
      intro: 'Our research on future logic devices aims to overcome the limitations of conventional CMOS technology by exploring novel materials, device architectures, and computing paradigms.',
      content: [
        {
          heading: 'Beyond-CMOS Logic',
          description: 'We explore alternative switching mechanisms and device concepts that can overcome the fundamental limitations of traditional CMOS technology.'
        },
        {
          heading: 'Steep-Slope Devices',
          description: 'Our team is developing devices with sub-thermionic switching characteristics to enable ultra-low power operation in digital circuits.'
        },
        {
          heading: 'Novel Computing Paradigms',
          description: 'We investigate non-Boolean computing approaches, including probabilistic, approximate, and reversible computing, for specific application domains.'
        }
      ],
      projects: [
        'Ferroelectric FETs for ultra-low power logic',
        'Negative capacitance devices and circuits',
        'Spin-based logic devices',
        'Reconfigurable computing architectures'
      ]
    },
    'memory-technologies': {
      title: 'Memory Technologies',
      icon: <Database className="h-12 w-12 text-blue-600 mb-4" />,
      intro: 'Our memory technologies research focuses on developing advanced non-volatile memory systems and emerging storage solutions to address the growing demands of data-intensive applications.',
      content: [
        {
          heading: 'Non-Volatile Memory Devices',
          description: 'We develop advanced non-volatile memory technologies, including resistive RAM, phase-change memory, and ferroelectric RAM, for next-generation storage applications.'
        },
        {
          heading: 'In-Memory Computing',
          description: 'Our research explores novel memory architectures that can perform computation within the memory array, reducing data movement and improving energy efficiency.'
        },
        {
          heading: '3D Memory Integration',
          description: 'We investigate three-dimensional integration techniques to increase memory density, bandwidth, and energy efficiency in modern computing systems.'
        }
      ],
      projects: [
        'Multi-level cell resistive RAM for high-density storage',
        'Processing-in-memory architectures for AI acceleration',
        'Reliability enhancement in emerging non-volatile memories',
        'Hybrid memory systems for optimized performance'
      ]
    }
  };

  const tabItems = [
    { id: 'neuromorphic-computing', label: 'Neuromorphic Computing', icon: <Brain className="h-4 w-4" /> },
    { id: 'nano-electronics', label: 'Nano-electronics', icon: <Microscope className="h-4 w-4" /> },
    { id: 'future-logic-devices', label: 'Future Logic Devices', icon: <Cpu className="h-4 w-4" /> },
    { id: 'memory-technologies', label: 'Memory Technologies', icon: <Database className="h-4 w-4" /> }
  ];
  const activeResearch = researchAreas[activeTab as keyof typeof researchAreas];


  

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Research Areas</h1>
        
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center space-x-1 md:space-x-4 mb-8 border-b">
          {tabItems.map(tab => (
            <Link 
              key={tab.id}
              to={`/research/${tab.id}`}
              className={`px-4 py-2 font-medium text-sm md:text-base mb-1 flex items-center gap-2 ${activeTab === tab.id ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
            >
              {tab.icon}
              {tab.label}
            </Link>
          ))}
        </div>
        
        {/* Content based on active tab */}
        {activeResearch && (
          <div className="mt-8">
            <div className="text-center mb-12">
              {activeResearch.icon}
              <h2 className="text-3xl font-bold mb-4">{activeResearch.title}</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">{activeResearch.intro}</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {activeResearch.content.map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">{item.heading}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-blue-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Current Projects</h3>
              <ul className="space-y-2">
                {activeResearch.projects.map((project, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-600 text-white mr-3 flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-gray-800">{project}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResearchPage;