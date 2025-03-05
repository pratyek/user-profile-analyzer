import React from 'react';
import FacilityLayout from '../../components/facility/FacilityLayout';
import { MapPin, Clock, Phone, Train } from 'lucide-react';

const LocationPage: React.FC = () => {
  return (
    <FacilityLayout
      title="Our Location"
      description="Visit our research facilities and offices"
    >
      <div className="space-y-8">
        {/* Map Placeholder - Replace with actual map component */}
        <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Address Information */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-300">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-gray-800">
              <MapPin className="w-5 h-5 text-blue-900" />
              Main Office
            </h3>
            <p className="text-gray-600 mb-4">
              Department of Electronic Engineering<br />
              University Campus Building 3, Room 401<br />
              123 Science Street<br />
              Seoul, South Korea
            </p>
            <div className="space-y-2 text-gray-600">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gray-500" />
                <span>+82-2-123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gray-500" />
                <span>9:00 AM - 6:00 PM (Mon-Fri)</span>
              </div>
            </div>
          </div>

          {/* Transportation */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-300">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-gray-800">
              <Train className="w-5 h-5 text-green-500" />
              Getting Here
            </h3>
            <div className="space-y-4 text-gray-600">
              <div>
                <h4 className="font-semibold mb-2">By Subway</h4>
                <p>Line 2, University Station (Exit 3)<br />5 minutes walk</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">By Bus</h4>
                <p>Bus numbers: 123, 456, 789<br />Stop: University Main Gate</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">By Car</h4>
                <p>Parking available at Building 3<br />Visitor parking requires registration</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FacilityLayout>
  );
};

export default LocationPage;