import React from "react";
import BatchSelector from "@/components/BatchSelector";

interface IndexProps {
  onSelect: (name: string, batch: string, group: string, electives: string[]) => void;
  showTimetable: boolean;
  timetableComponent: React.ReactNode;
}

const Index: React.FC<IndexProps> = ({ onSelect, showTimetable, timetableComponent }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-900 text-center mb-2">
          Mechanical Engineering Scheduler
        </h1>
        <p className="text-gray-600 text-center mb-12">
          Access your personalized class schedule with an intuitive interface
        </p>

        {!showTimetable ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <BatchSelector onSelect={onSelect} />
            </div>

            <div className="space-y-8">
            <div className="bg-white rounded-3xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">
                About This Application
              </h2>
              <p className="text-gray-600 mb-6">
                This application helps Mechanical Engineering students access their class
                timetable quickly and efficiently. With an intuitive interface, you can view
                and download your schedule in just a few clicks.
              </p>

              <div className="bg-blue-50 rounded-2xl p-6">
                <h3 className="font-bold text-blue-900 mb-3">How to Use</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Select your batch (M1, M2, M3, or M4)</li>
                  <li>• Choose your group (G1, G2, or G3)</li>
                  <li>• Select your electives (up to 4)</li>
                  <li>• Click "View Timetable" to see your schedule</li>
                  <li>• Use the download button to save as PDF</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">
                Available Subjects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div>
                    <h3 className="font-bold text-blue-900">Heat Mass Transfer</h3>
                    <p className="text-gray-600 text-sm">Theory & Lab</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-900">Design of Machine Elements</h3>
                    <p className="text-gray-600 text-sm">Theory & Lab</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <h3 className="font-bold text-blue-900">Manufacturing Technology - 2</h3>
                    <p className="text-gray-600 text-sm">Theory & Lab</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-900">Economics</h3>
                    <p className="text-gray-600 text-sm">Theory</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        ) : (
          <div>
            {timetableComponent}
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
