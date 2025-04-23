import React from "react";
import { batches, groups } from "@/data/scheduleData";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface BatchGroupSelectorProps {
  selectedBatch: string;
  selectedGroup: string;
  onBatchChange: (batch: string) => void;
  onGroupChange: (group: string) => void;
  onSubmit: () => void;
}

const BatchGroupSelector: React.FC<BatchGroupSelectorProps> = ({
  selectedBatch,
  selectedGroup,
  onBatchChange,
  onGroupChange,
  onSubmit,
}) => {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-semibold text-blue-900 mb-6">Select Your Schedule</h2>
      <div className="space-y-6">
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">Select Batch</label>
          <Select value={selectedBatch} onValueChange={onBatchChange}>
            <SelectTrigger className="w-full bg-white border-blue-200 hover:border-blue-300 transition-colors">
              <SelectValue placeholder="Choose your batch" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {batches.map((batch) => (
                  <SelectItem
                    key={batch}
                    value={batch}
                    className="cursor-pointer hover:bg-blue-50 transition-colors"
                  >
                    {batch}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">Select Group</label>
          <Select
            value={selectedGroup}
            onValueChange={onGroupChange}
            disabled={!selectedBatch}
          >
            <SelectTrigger className="w-full bg-white border-blue-200 hover:border-blue-300 transition-colors">
              <SelectValue placeholder="Choose your group" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {groups.map((group) => (
                  <SelectItem
                    key={group}
                    value={group}
                    className="cursor-pointer hover:bg-blue-50 transition-colors"
                  >
                    {group}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <Button
          className="w-full bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-200 py-6 text-lg font-medium"
          onClick={onSubmit}
          disabled={!selectedBatch || !selectedGroup}
        >
          View Timetable
        </Button>

        {(!selectedBatch || !selectedGroup) && (
          <p className="text-sm text-gray-500 text-center mt-2">
            Please select both batch and group to continue
          </p>
        )}
      </div>
    </div>
  );
};

export default BatchGroupSelector;
