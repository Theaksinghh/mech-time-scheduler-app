import React, { useState } from "react";
import { electiveCourses, MAX_ELECTIVES } from "@/data/electiveData";
import { ChevronDown } from "lucide-react";

interface BatchSelectorProps {
  onSelect: (name: string, batch: string, group: string, electives: string[]) => void;
}

const BatchSelector: React.FC<BatchSelectorProps> = ({ onSelect }) => {
  const [selectedBatch, setSelectedBatch] = useState<string>("");
  const [selectedGroup, setSelectedGroup] = useState<string>("");
  const [selectedElectives, setSelectedElectives] = useState<string[]>([]);
  const [name, setName] = useState<string>("");
  const [showElectives, setShowElectives] = useState(true);

  const batches = ["M1", "M2", "M3", "M4"];
  const groups = ["G1", "G2", "G3"];

  const handleAddElective = () => {
    if (selectedElectives.length < MAX_ELECTIVES) {
      setSelectedElectives([...selectedElectives, ""]);
      setShowElectives(true);
    }
  };

  // Add a default empty elective when batch and group are selected
  React.useEffect(() => {
    if (selectedBatch && selectedGroup && selectedElectives.length === 0) {
      handleAddElective();
    }
  }, [selectedBatch, selectedGroup]);

  const handleElectiveChange = (value: string, index: number) => {
    const newElectives = [...selectedElectives];
    newElectives[index] = value;
    setSelectedElectives(newElectives);
  };

  const handleRemoveElective = (index: number) => {
    const newElectives = selectedElectives.filter((_, i) => i !== index);
    setSelectedElectives(newElectives);
  };

  const isElectiveSlotTaken = (slot: string) => {
    return selectedElectives.some(code =>
      electiveCourses.find(course => course.code === code)?.slot === slot
    );
  };

  const getAvailableElectives = (index: number) => {
    return electiveCourses
      .filter(course => {
        const isAlreadySelected = selectedElectives.includes(course.code);
        const isSlotTaken = isElectiveSlotTaken(course.slot);
        // Include if either not selected by others, or is the current selection for this index
        return (!isAlreadySelected || selectedElectives[index] === course.code) && 
               (!isSlotTaken || selectedElectives[index] === course.code || 
                !selectedElectives.some((e, i) => i !== index && electiveCourses.find(c => c.code === e)?.slot === course.slot));
      })
      .sort((a, b) => {
        // Extract slot numbers and compare them
        const slotA = parseInt(a.slot.replace('E', ''));
        const slotB = parseInt(b.slot.replace('E', ''));
        return slotA - slotB;
      });
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-3xl shadow-sm p-8">
      <h1 className="text-2xl font-bold text-blue-900 mb-6">Select Your Schedule</h1>

      <div className="space-y-6">
        <div className="space-y-2">
          <label className="text-gray-700">Enter Your Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full p-3 bg-white border border-gray-200 rounded-2xl appearance-none focus:outline-none focus:border-blue-300 text-gray-600"
          />
        </div>

        <div className="space-y-2">
          <label className="text-gray-700">Select Batch</label>
          <div className="relative">
            <select
              value={selectedBatch}
              onChange={(e) => setSelectedBatch(e.target.value)}
              className="w-full p-3 bg-white border border-gray-200 rounded-2xl appearance-none cursor-pointer pr-10 focus:outline-none text-gray-600 hover:border-gray-300"
            >
              <option value="">Choose your batch</option>
              {batches.map((batch) => (
                <option key={batch} value={batch}>
                  {batch}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none h-5 w-5" />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-gray-700">Select Group</label>
          <div className="relative">
            <select
              value={selectedGroup}
              onChange={(e) => setSelectedGroup(e.target.value)}
              className="w-full p-3 bg-white border border-gray-200 rounded-2xl appearance-none cursor-pointer pr-10 focus:outline-none text-gray-600 hover:border-gray-300"
            >
              <option value="">Choose your group</option>
              {groups.map((group) => (
                <option key={group} value={group}>
                  {group}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none h-5 w-5" />
          </div>
        </div>

        {selectedBatch && selectedGroup && (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-gray-700 font-medium">Select Electives (Optional)</h3>
              <button
                onClick={() => setShowElectives(!showElectives)}
                className="text-blue-600 hover:text-blue-700 flex items-center gap-1 text-sm"
              >
                {showElectives ? 'Hide' : 'Show'}
                <ChevronDown className={`h-4 w-4 transform transition-transform ${showElectives ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {showElectives && (
              <div className="space-y-3">
                {selectedElectives.length < MAX_ELECTIVES && (
                  <button
                    onClick={handleAddElective}
                    className="text-blue-600 hover:text-blue-700 text-sm"
                  >
                    + Add Elective ({selectedElectives.length}/4)
                  </button>
                )}

                {selectedElectives.map((elective, index) => (
                  <div key={index} className="flex gap-2">
                    <div className="relative flex-1">
                      <select
                        value={elective}
                        onChange={(e) => handleElectiveChange(e.target.value, index)}
                        className="w-full p-3 bg-white border border-gray-200 rounded-2xl appearance-none cursor-pointer pr-10 focus:outline-none text-gray-600 hover:border-gray-300"
                      >
                        <option value="">Select Elective {index + 1} (Optional)</option>
                        {getAvailableElectives(index).map((course) => (
                          <option key={course.code} value={course.code}>
                            {course.slot} - {course.code} - {course.name}
                          </option>
                        ))}
                        {/* Show selected elective if it exists but isn't in available list */}
                        {elective && !getAvailableElectives(index).some(course => course.code === elective) && (
                          <option key={elective} value={elective}>
                            {electiveCourses.find(course => course.code === elective)?.slot} - {elective} - {electiveCourses.find(course => course.code === elective)?.name}
                          </option>
                        )}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none h-5 w-5" />
                    </div>
                    <button
                      onClick={() => handleRemoveElective(index)}
                      className="text-gray-400 hover:text-gray-600 px-2"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        <button
          onClick={() => onSelect(name, selectedBatch, selectedGroup, selectedElectives)}
          disabled={!name || !selectedBatch || !selectedGroup}
          className="w-full py-3 px-4 bg-blue-500 text-white font-medium rounded-xl hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed mt-2"
        >
          View Timetable
        </button>

        {(!name || !selectedBatch || !selectedGroup) && (
          <p className="text-center text-gray-500 text-sm">
            Please enter your name and select both batch and group to continue
          </p>
        )}
      </div>
    </div>
  );
};

export default BatchSelector;