import { useState } from "react";
import Timetable from "./components/Timetable";
import { scheduleData } from "./data/scheduleData";
import { electiveCourses } from "./data/electiveData";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function App() {
  const [selectedBatch, setSelectedBatch] = useState("");
  const [selectedGroup, setSelectedGroup] = useState("");
  const [selectedElectives, setSelectedElectives] = useState<string[]>([]);
  const [showTimetable, setShowTimetable] = useState(false);
  const [studentName, setStudentName] = useState("");

  const handleSelect = (name: string, batch: string, group: string, electives: string[]) => {
    setStudentName(name);
    setSelectedBatch(batch);
    setSelectedGroup(group);
    setSelectedElectives(electives);
    setShowTimetable(true);
  };

  const handleBack = () => {
    setShowTimetable(false);
  };

  const getScheduleWithElectives = () => {
    const baseSchedule = scheduleData[`${selectedBatch}${selectedGroup}`] || [];
    
    // Get elective time slots from the timetable
    const electiveSlots = selectedElectives.map(code => {
      const course = electiveCourses.find(c => c.code === code);
      if (!course) return null;
      
      // Find the corresponding time slots for this elective group from the central timetable
      const slot = course.slot;
      const slotSchedule = [];
      
      // Add slots based on the central timetable image
      switch (slot) {
        case "E1":
          slotSchedule.push(
            { day: "Monday", time: "8-10", subjectCode: code },
            { day: "Friday", time: "8-10", subjectCode: code }
          );
          break;
        case "E2":
          slotSchedule.push(
            { day: "Monday", time: "16-18", subjectCode: code },
            { day: "Friday", time: "16-18", subjectCode: code }
          );
          break;
        case "E3":
          slotSchedule.push(
            { day: "Wednesday", time: "14-16", subjectCode: code },
            { day: "Friday", time: "14-16", subjectCode: code }
          );
          break;
        case "E4":
          slotSchedule.push(
            { day: "Wednesday", time: "10-12", subjectCode: code },
            { day: "Friday", time: "10-12", subjectCode: code }
          );
          break;
        case "E5":
          slotSchedule.push(
            { day: "Tuesday", time: "8-10", subjectCode: code },
            { day: "Thursday", time: "8-10", subjectCode: code }
          );
          break;
        case "E6":
          slotSchedule.push(
            { day: "Tuesday", time: "16-18", subjectCode: code },
            { day: "Thursday", time: "16-18", subjectCode: code }
          );
          break;
        case "E7":
          slotSchedule.push(
            { day: "Monday", time: "14-16", subjectCode: code },
            { day: "Tuesday", time: "14-16", subjectCode: code }
          );
          break;
        case "E8":
          slotSchedule.push(
            { day: "Monday", time: "10-12", subjectCode: code },
            { day: "Tuesday", time: "10-12", subjectCode: code }
          );
          break;
        case "E9":
          slotSchedule.push(
            { day: "Monday", time: "12-14", subjectCode: code },
            { day: "Thursday", time: "12-14", subjectCode: code }
          );
          break;
        case "E10":
          slotSchedule.push(
            { day: "Tuesday", time: "12-14", subjectCode: code },
            { day: "Friday", time: "12-14", subjectCode: code }
          );
          break;
      }

      return slotSchedule;
    }).filter(Boolean).flat();

    return [...baseSchedule, ...electiveSlots];
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={
              <Index
                onSelect={handleSelect}
                showTimetable={showTimetable}
                timetableComponent={
                  <Timetable
                    batch={selectedBatch}
                    group={selectedGroup}
                    schedule={getScheduleWithElectives()}
                    onBack={handleBack}
                    name={studentName}
                  />
                }
              />
            } />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
