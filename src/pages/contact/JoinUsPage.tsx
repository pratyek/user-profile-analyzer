import React from 'react';
import FacilityLayout from '../../components/facility/FacilityLayout';
import { UserPlus, FileText } from 'lucide-react';

const JoinUsPage: React.FC = () => {
  const positions = [
    {
      title: "PhD Positions",
      description: "Looking for motivated PhD candidates in semiconductor devices and nanoelectronics",
      requirements: [
        "Master's degree in Electronics, Physics, or related field",
        "Strong background in semiconductor physics",
        "Experience with device characterization (preferred)",
      ],
      deadline: "Rolling admission"
    },
    {
      title: "Postdoctoral Researchers",
      description: "Seeking postdoctoral researchers for advanced semiconductor device research",
      requirements: [
        "PhD in Electronics, Physics, or related field",
        "Publication record in relevant journals",
        "Experience with device fabrication and characterization",
      ],
      deadline: "Open until filled"
    }
  ];

  const applicationSteps = [
    { title: "Review Requirements", description: "Check if your background matches our requirements" },
    { title: "Prepare Documents", description: "CV, research statement, and academic records" },
    { title: "Submit Application", description: "Send your application package via email" },
    { title: "Interview Process", description: "Selected candidates will be invited for interviews" }
  ];

  return (
    <FacilityLayout title="Join Our Team" description="Opportunities in semiconductor technology">
      <div className="space-y-8">
        {/* Open Positions */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <UserPlus className="w-5 h-5 text-blue-900" /> Open Positions
          </h2>
          {positions.map((position, index) => (
            <div key={index} className="bg-white shadow-lg p-4 rounded-xl">
              <h3 className="text-lg font-semibold">{position.title}</h3>
              <p className="text-gray-600 mt-1">{position.description}</p>
              <div className="mt-3">
                <h4 className="font-medium">Requirements:</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {position.requirements.map((req, idx) => (
                    <li key={idx}>{req}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 text-sm text-gray-500">Deadline: {position.deadline}</div>
              <button className="mt-3 bg-blue-900 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition">
                Apply Now
              </button>
            </div>
          ))}
        </div>

        {/* Application Process */}
        <div className="bg-white shadow-lg p-4 rounded-xl">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-900" /> Application Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {applicationSteps.map((step, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-blue-900 text-white w-6 h-6 rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <h3 className="font-medium">{step.title}</h3>
                </div>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white shadow-lg p-4 rounded-xl">
          <h2 className="text-lg font-bold mb-2">Questions?</h2>
          <p className="text-gray-600">
            For any questions about the application process, please contact:
            <br />
            <a href="mailto:recruitment@smilelab.edu" className="text-blue-900 hover:text-blue-700">
              recruitment@smilelab.edu
            </a>
          </p>
        </div>
      </div>
    </FacilityLayout>
  );
};

export default JoinUsPage;
