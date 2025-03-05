import React from 'react';
import FacilityLayout from '../../components/facility/FacilityLayout';
import { Mail, Users, Copy, Check } from 'lucide-react';

const EmailPage: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = React.useState<string | null>(null);

  const contacts = [
    { title: "Principal Investigator", name: "Prof. John Smith", email: "john.smith@university.edu", type: "Research Inquiries" },
    { title: "Lab Administrator", name: "Sarah Johnson", email: "admin@smilelab.edu", type: "Administrative Matters" },
    { title: "Graduate Program", name: "Dr. Michael Chen", email: "gradprogram@smilelab.edu", type: "Student Applications" }
  ];

  const copyToClipboard = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  return (
    <FacilityLayout title="Contact Information" description="Reach out to our team members">
      <div className="space-y-6">
        {contacts.map((contact, index) => (
          <div key={index} className="bg-white p-4 rounded-2xl shadow-md">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Users className="w-5 h-5 text-gray-600" />
                {contact.title}
              </h3>
              <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                {contact.type}
              </span>
            </div>
            <p className="text-gray-700 mb-3">{contact.name}</p>
            <div className="flex items-center justify-between p-3 bg-gray-100 rounded-lg">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gray-500" />
                <span className="text-gray-700">{contact.email}</span>
              </div>
              <button
                onClick={() => copyToClipboard(contact.email)}
                className="p-2 hover:bg-gray-200 rounded-full transition"
              >
                {copiedEmail === contact.email ? (
                  <Check className="w-4 h-4 text-green-500" />
                ) : (
                  <Copy className="w-4 h-4 text-gray-500" />
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </FacilityLayout>
  );
};

export default EmailPage;
