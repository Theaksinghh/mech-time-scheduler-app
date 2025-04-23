import React, { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { downloadTimetable } from "@/utils/timetableGenerator";
import { ClassSchedule, timeSlots, weekDays } from "@/data/scheduleData";
import { electiveCourses } from "@/data/electiveData";
import { Download, ArrowLeft } from "lucide-react";

interface TimetableProps {
  batch: string;
  group: string;
  schedule: ClassSchedule[];
  onBack: () => void;
  name: string;
}

// Helper to get the slot indices for a specific time range
const getTimeSlotIndices = (timeRange: string): number[] => {
  const [start, end] = timeRange.split("-").map(Number);
  const indices: number[] = [];
  for (let i = start; i < end; i++) {
    const slotIndex = timeSlots.indexOf(`${i}-${i + 1}`);
    if (slotIndex !== -1) {
      indices.push(slotIndex);
    }
  }
  return indices;
};

// Map short day names to full day names for consistency
const dayMapping: Record<string, string> = {
  Mon: "Monday",
  Tues: "Tuesday",
  Wed: "Wednesday",
  Thurs: "Thursday",
  Fri: "Friday",
};

interface CellData {
  code: string | null;
  span: number;
  isVisible: boolean;
}

// Color mapping for subjects
const subjectColors: Record<string, { bg: string, text: string }> = {
  'L-HMT': { bg: 'bg-rose-200', text: 'text-rose-900' },
  'HMT-Lab': { bg: 'bg-rose-300', text: 'text-rose-900' },
  'L-DME': { bg: 'bg-sky-200', text: 'text-sky-900' },
  'DME-Lab': { bg: 'bg-sky-300', text: 'text-sky-900' },
  'L-MT2': { bg: 'bg-violet-200', text: 'text-violet-900' },
  'MT2-Lab': { bg: 'bg-violet-300', text: 'text-violet-900' },
  'L-Eco': { bg: 'bg-emerald-200', text: 'text-emerald-900' }
};

// Helper function to get color for elective subjects
const getSubjectColor = (code: string) => {
  if (!code) return null;
  
  // First check if it's a regular subject
  if (subjectColors[code]) return subjectColors[code];
  
  // Check if it's an elective subject (has a course code pattern)
  const isElective = /^[A-Z]{2,4}\d{3}[a-z]?$/.test(code);
  if (!isElective) return null;

  // Return a moderately light color for electives
  return { bg: 'bg-amber-100', text: 'text-amber-800' };
};

// Helper function to get display text for a subject
const getSubjectDisplayText = (code: string) => {
  if (!code) return '';
  
  // Check if it's an elective
  const isElective = /^[A-Z]{2,4}\d{3}[a-z]?$/.test(code);
  if (isElective) {
    // Find the elective course and return its name
    const elective = electiveCourses.find(course => course.code === code);
    if (elective) {
      // Split the name into words and find a good breaking point
      const words = elective.name.split(' ');
      const midPoint = Math.ceil(words.length / 2);
      const firstLine = words.slice(0, midPoint).join(' ');
      const secondLine = words.slice(midPoint).join(' ');
      return `${firstLine}\n${secondLine}`;
    }
    return code;
  }
  
  // Return regular subject code as is
  return code;
};

const Timetable: React.FC<TimetableProps> = ({ batch, group, schedule, onBack, name }) => {
  const tableRef = useRef<HTMLTableElement>(null);

  // Build a 2D timetable of CellData objects
  const timetableMatrix: CellData[][] = Array(weekDays.length)
    .fill(null)
    .map(() =>
      Array(timeSlots.length)
        .fill(null)
        .map(() => ({
          code: null,
          span: 1,
          isVisible: true,
        }))
    );

  // Map to place lectures in the matrix
  schedule.forEach((slot) => {
    const fullDayName = dayMapping[slot.day] || slot.day;
    const dayIndex = weekDays.indexOf(fullDayName);
    if (dayIndex !== -1) {
      const slotIndices = getTimeSlotIndices(slot.time);
      if (slotIndices.length) {
        // Set colSpan for start slot, hide rest
        timetableMatrix[dayIndex][slotIndices[0]] = {
          code: slot.subjectCode,
          span: slotIndices.length,
          isVisible: true,
        };
        for (let i = 1; i < slotIndices.length; i++) {
          timetableMatrix[dayIndex][slotIndices[i]] = {
            code: null,
            span: 1,
            isVisible: false,
          };
        }
      }
    }
  });

  const handleDownload = () => {
    if (tableRef.current) {
      downloadTimetable(batch, group, tableRef.current, name);
    }
  };

  return (
    <Card className="w-full shadow-xl bg-white/80 backdrop-blur-sm border border-blue-100 rounded-2xl overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-blue-900 to-blue-700 py-6">
        <div className="flex justify-between items-center">
          <CardTitle className="text-2xl md:text-3xl font-bold text-white">
            {name}'s Timetable
          </CardTitle>
          <div className="flex gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={onBack}
              className="bg-white/10 text-white border-white/20 hover:bg-white/20 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4 mr-2" /> Back
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleDownload}
              className="bg-white/10 text-white border-white/20 hover:bg-white/20 hover:text-white"
            >
              <Download className="h-4 w-4 mr-2" /> Download
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="overflow-auto rounded-xl border border-blue-100">
          <table ref={tableRef} className="w-full min-w-[800px] border-collapse bg-white">
            <thead>
              <tr className="bg-gradient-to-r from-blue-50 to-blue-100">
                <th className="border border-blue-200 p-3 font-semibold text-blue-900">
                  Day
                </th>
                {timeSlots.map((slot) => (
                  <th
                    key={slot}
                    className="border border-blue-200 p-3 font-semibold text-blue-900 whitespace-nowrap"
                  >
                    {slot}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {weekDays.map((day, dayIndex) => (
                <tr key={day} className="hover:bg-blue-50/30 transition-colors">
                  <td className="border border-blue-200 p-3 font-semibold text-blue-900 bg-gradient-to-r from-blue-50 to-blue-100">
                    {day}
                  </td>
                  {(() => {
                    const cells = [];
                    let timeIndex = 0;
                    while (timeIndex < timeSlots.length) {
                      const cell = timetableMatrix[dayIndex][timeIndex];
                      if (cell.isVisible) {
                        const colors = getSubjectColor(cell.code);
                        const isElective = cell.code && /^[A-Z]{2,4}\d{3}[a-z]?$/.test(cell.code);
                        cells.push(
                          <td
                            key={`${day}-${timeIndex}`}
                            colSpan={cell.span}
                            className={`border border-blue-200 p-2 text-center transition-colors ${
                              colors ? `${colors.bg} ${colors.text}` : ''
                            } ${isElective ? 'text-xs leading-tight whitespace-pre-line h-16' : 'text-sm'} font-medium`}
                          >
                            {getSubjectDisplayText(cell.code)}
                          </td>
                        );
                      }
                      timeIndex += cell.span;
                    }
                    return cells;
                  })()}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default Timetable;
