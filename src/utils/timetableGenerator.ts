import { ClassSchedule, scheduleData } from "@/data/scheduleData";
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

// Map abbreviated days to full names
const dayMapping: Record<string, string> = {
  "Mon": "Monday",
  "Tues": "Tuesday",
  "Wed": "Wednesday",
  "Thurs": "Thursday",
  "Fri": "Friday"
};

// Function to get the schedule for a specific batch and group
export function getScheduleForBatchGroup(batch: string, group: string): ClassSchedule[] {
  const key = `${batch}${group}`;
  return scheduleData[key] || [];
}

// Function to create a timetable matrix for displaying and downloading
export function createTimetableMatrix(schedule: ClassSchedule[], useOnlySubjectCodes: boolean = false): string[][] {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const hours = ["8-9", "9-10", "10-11", "11-12", "12-13", "13-14", "14-15", "15-16", "16-17", "17-18"];

  // Initialize the matrix with empty cells
  const matrix: string[][] = Array(days.length + 1).fill(null).map(() =>
    Array(hours.length + 1).fill("")
  );

  // Set the header row and column
  matrix[0][0] = "Time/Day";
  for (let i = 0; i < hours.length; i++) {
    matrix[0][i + 1] = hours[i];
  }

  for (let i = 0; i < days.length; i++) {
    matrix[i + 1][0] = days[i];
  }

  // Fill in the schedule
  schedule.forEach(item => {
    const fullDayName = dayMapping[item.day] || item.day;
    const dayIndex = days.indexOf(fullDayName);

    if (dayIndex !== -1) {
      const [startHour, endHour] = item.time.split("-").map(Number);

      for (let hour = startHour; hour < endHour; hour++) {
        const hourIndex = hours.indexOf(`${hour}-${hour + 1}`);
        if (hourIndex !== -1) {
          // Use only subject codes for CSV export if specified
          matrix[dayIndex + 1][hourIndex + 1] = useOnlySubjectCodes
            ? item.subjectCode
            : `${item.subject} (${item.subjectCode})`;
        }
      }
    }
  });

  return matrix;
}

// Function to generate and download the timetable as PDF
export function downloadTimetable(batch: string, group: string, tableElement: HTMLTableElement, studentName?: string): void {
  try {
    // Use html2canvas to capture the table exactly as it appears
    html2canvas(tableElement).then(canvas => {
      const imgData = canvas.toDataURL('image/png');

      // Calculate dimensions to fit the table on the PDF
      const imgWidth = 280; // mm
      const imgHeight = canvas.height * imgWidth / canvas.width;

      // Create new PDF document
      const doc = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4'
      });

      // Add title with student's name if provided
      doc.setFontSize(16);
      const title = studentName ? `${studentName}'s Timetable` : `${batch}${group} Timetable`;
      doc.text(title, 15, 15);

      // Add the table image
      doc.addImage(imgData, 'PNG', 10, 25, imgWidth, imgHeight);

      // Save the PDF with student's name if provided
      const filename = studentName ? 
        `${studentName.replace(/[^a-zA-Z0-9]/g, '_')}_Timetable.pdf` : 
        `${batch}${group}_Timetable.pdf`;
      doc.save(filename);
    });
  } catch (error) {
    console.error('Error generating PDF:', error);
  }
}
