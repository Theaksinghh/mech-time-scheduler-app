// Schedule data for Mechanical Engineering Department
export interface ClassSchedule {
  subject: string;
  subjectCode: string;
  day: string;
  time: string;
}

export interface GroupSchedule {
  groupId: string;
  schedule: ClassSchedule[];
}

export const subjects = [
  { name: "Heat Mass Transfer", code: "L-HMT" },
  { name: "Heat Mass Transfer Lab", code: "HMT-Lab" },
  { name: "Design of Machine Elements", code: "L-DME" },
  { name: "Design of Machine Elements Lab", code: "DME-Lab" },
  { name: "Manufacturing Technology - 2", code: "L-MT2" },
  { name: "Manufacturing Technology - 2 Lab", code: "MT2-Lab" },
  { name: "Economics", code: "L-Eco" }
];

export const batches = ["M1", "M2", "M3", "M4"];
export const groups = ["G1", "G2", "G3"];

// Updated schedule data as per timetable
export const scheduleData: Record<string, ClassSchedule[]> = {
  "M1G1": [
    { subject: "Heat Mass Transfer", subjectCode: "L-HMT", day: "Mon", time: "10-12" },
    { subject: "Heat Mass Transfer", subjectCode: "L-HMT", day: "Thurs", time: "11-12" },
    { subject: "Heat Mass Transfer Lab", subjectCode: "HMT-Lab", day: "Mon", time: "14-16" },
    { subject: "Design of Machine Elements", subjectCode: "L-DME", day: "Mon", time: "12-13" },
    { subject: "Design of Machine Elements", subjectCode: "L-DME", day: "Tues", time: "11-13" },
    { subject: "Design of Machine Elements Lab", subjectCode: "DME-Lab", day: "Thurs", time: "13-15" },
    { subject: "Manufacturing Technology - 2", subjectCode: "L-MT2", day: "Tues", time: "10-11" },
    { subject: "Manufacturing Technology - 2", subjectCode: "L-MT2", day: "Fri", time: "12-14" },
    { subject: "Manufacturing Technology - 2 Lab", subjectCode: "MT2-Lab", day: "Tues", time: "14-16" },
    { subject: "Economics", subjectCode: "L-Eco", day: "Wed", time: "12-14" },
    { subject: "Economics", subjectCode: "L-Eco", day: "Thurs", time: "16-17" }
  ],
  "M1G2": [
    { subject: "Heat Mass Transfer", subjectCode: "L-HMT", day: "Mon", time: "10-12" },
    { subject: "Heat Mass Transfer", subjectCode: "L-HMT", day: "Thurs", time: "11-12" },
    { subject: "Heat Mass Transfer Lab", subjectCode: "HMT-Lab", day: "Tues", time: "14-16" },
    { subject: "Design of Machine Elements", subjectCode: "L-DME", day: "Mon", time: "12-13" },
    { subject: "Design of Machine Elements", subjectCode: "L-DME", day: "Tues", time: "11-13" },
    { subject: "Design of Machine Elements Lab", subjectCode: "DME-Lab", day: "Mon", time: "14-16" },
    { subject: "Manufacturing Technology - 2", subjectCode: "L-MT2", day: "Tues", time: "10-11" },
    { subject: "Manufacturing Technology - 2", subjectCode: "L-MT2", day: "Fri", time: "12-14" },
    { subject: "Manufacturing Technology - 2 Lab", subjectCode: "MT2-Lab", day: "Thurs", time: "13-15" },
    { subject: "Economics", subjectCode: "L-Eco", day: "Wed", time: "12-14" },
    { subject: "Economics", subjectCode: "L-Eco", day: "Thurs", time: "16-17" }
  ],
  "M1G3": [
    { subject: "Heat Mass Transfer", subjectCode: "L-HMT", day: "Mon", time: "10-12" },
    { subject: "Heat Mass Transfer", subjectCode: "L-HMT", day: "Thurs", time: "11-12" },
    { subject: "Heat Mass Transfer Lab", subjectCode: "HMT-Lab", day: "Thurs", time: "13-15" },
    { subject: "Design of Machine Elements", subjectCode: "L-DME", day: "Mon", time: "12-13" },
    { subject: "Design of Machine Elements", subjectCode: "L-DME", day: "Tues", time: "11-13" },
    { subject: "Design of Machine Elements Lab", subjectCode: "DME-Lab", day: "Tues", time: "14-16" },
    { subject: "Manufacturing Technology - 2", subjectCode: "L-MT2", day: "Tues", time: "10-11" },
    { subject: "Manufacturing Technology - 2", subjectCode: "L-MT2", day: "Fri", time: "12-14" },
    { subject: "Manufacturing Technology - 2 Lab", subjectCode: "MT2-Lab", day: "Mon", time: "14-16" },
    { subject: "Economics", subjectCode: "L-Eco", day: "Wed", time: "12-14" },
    { subject: "Economics", subjectCode: "L-Eco", day: "Thurs", time: "16-17" }
  ],
  "M2G1": [
    { subject: "Heat Mass Transfer", subjectCode: "L-HMT", day: "Tues", time: "13-14" },
    { subject: "Heat Mass Transfer", subjectCode: "L-HMT", day: "Fri", time: "12-14" },
    { subject: "Heat Mass Transfer Lab", subjectCode: "HMT-Lab", day: "Mon", time: "10-12" },
    { subject: "Design of Machine Elements", subjectCode: "L-DME", day: "Wed", time: "12-14" },
    { subject: "Design of Machine Elements", subjectCode: "L-DME", day: "Thurs", time: "13-14" },
    { subject: "Design of Machine Elements Lab", subjectCode: "DME-Lab", day: "Thurs", time: "11-13" },
    { subject: "Manufacturing Technology - 2", subjectCode: "L-MT2", day: "Mon", time: "13-14" },
    { subject: "Manufacturing Technology - 2", subjectCode: "L-MT2", day: "Tues", time: "14-16" },
    { subject: "Manufacturing Technology - 2 Lab", subjectCode: "MT2-Lab", day: "Tues", time: "10-12" },
    { subject: "Economics", subjectCode: "L-Eco", day: "Mon", time: "14-16" },
    { subject: "Economics", subjectCode: "L-Eco", day: "Tues", time: "16-17" }
  ],
  "M2G2": [
    { subject: "Heat Mass Transfer", subjectCode: "L-HMT", day: "Tues", time: "13-14" },
    { subject: "Heat Mass Transfer", subjectCode: "L-HMT", day: "Fri", time: "12-14" },
    { subject: "Heat Mass Transfer Lab", subjectCode: "HMT-Lab", day: "Tues", time: "10-12" },
    { subject: "Design of Machine Elements", subjectCode: "L-DME", day: "Wed", time: "12-14" },
    { subject: "Design of Machine Elements", subjectCode: "L-DME", day: "Thurs", time: "13-14" },
    { subject: "Design of Machine Elements Lab", subjectCode: "DME-Lab", day: "Mon", time: "10-12" },
    { subject: "Manufacturing Technology - 2", subjectCode: "L-MT2", day: "Mon", time: "13-14" },
    { subject: "Manufacturing Technology - 2", subjectCode: "L-MT2", day: "Tues", time: "14-16" },
    { subject: "Manufacturing Technology - 2 Lab", subjectCode: "MT2-Lab", day: "Thurs", time: "11-13" },
    { subject: "Economics", subjectCode: "L-Eco", day: "Mon", time: "14-16" },
    { subject: "Economics", subjectCode: "L-Eco", day: "Tues", time: "16-17" }
  ],
  "M2G3": [
    { subject: "Heat Mass Transfer", subjectCode: "L-HMT", day: "Tues", time: "13-14" },
    { subject: "Heat Mass Transfer", subjectCode: "L-HMT", day: "Fri", time: "12-14" },
    { subject: "Heat Mass Transfer Lab", subjectCode: "HMT-Lab", day: "Thurs", time: "11-13" },
    { subject: "Design of Machine Elements", subjectCode: "L-DME", day: "Wed", time: "12-14" },
    { subject: "Design of Machine Elements", subjectCode: "L-DME", day: "Thurs", time: "13-14" },
    { subject: "Design of Machine Elements Lab", subjectCode: "DME-Lab", day: "Tues", time: "10-12" },
    { subject: "Manufacturing Technology - 2", subjectCode: "L-MT2", day: "Mon", time: "13-14" },
    { subject: "Manufacturing Technology - 2", subjectCode: "L-MT2", day: "Tues", time: "14-16" },
    { subject: "Manufacturing Technology - 2 Lab", subjectCode: "MT2-Lab", day: "Mon", time: "10-12" },
    { subject: "Economics", subjectCode: "L-Eco", day: "Mon", time: "14-16" },
    { subject: "Economics", subjectCode: "L-Eco", day: "Tues", time: "16-17" }
  ],
  "M3G1": [
    { subject: "Heat Mass Transfer", subjectCode: "L-HMT", day: "Mon", time: "10-12" },
    { subject: "Heat Mass Transfer", subjectCode: "L-HMT", day: "Tues", time: "10-11" },
    { subject: "Heat Mass Transfer Lab", subjectCode: "HMT-Lab", day: "Mon", time: "12-14" },
    { subject: "Design of Machine Elements", subjectCode: "L-DME", day: "Tues", time: "16-17" },
    { subject: "Design of Machine Elements", subjectCode: "L-DME", day: "Thurs", time: "11-13" },
    { subject: "Design of Machine Elements Lab", subjectCode: "DME-Lab", day: "Fri", time: "12-14" },
    { subject: "Manufacturing Technology - 2", subjectCode: "L-MT2", day: "Mon", time: "15-16" },
    { subject: "Manufacturing Technology - 2", subjectCode: "L-MT2", day: "Tues", time: "11-13" },
    { subject: "Manufacturing Technology - 2 Lab", subjectCode: "MT2-Lab", day: "Wed", time: "12-14" },
    { subject: "Economics", subjectCode: "L-Eco", day: "Tues", time: "14-16" },
    { subject: "Economics", subjectCode: "L-Eco", day: "Thurs", time: "14-15" }
  ],
  "M3G2": [
    { subject: "Heat Mass Transfer", subjectCode: "L-HMT", day: "Mon", time: "10-12" },
    { subject: "Heat Mass Transfer", subjectCode: "L-HMT", day: "Tues", time: "10-11" },
    { subject: "Heat Mass Transfer Lab", subjectCode: "HMT-Lab", day: "Wed", time: "12-14" },
    { subject: "Design of Machine Elements", subjectCode: "L-DME", day: "Tues", time: "16-17" },
    { subject: "Design of Machine Elements", subjectCode: "L-DME", day: "Thurs", time: "11-13" },
    { subject: "Design of Machine Elements Lab", subjectCode: "DME-Lab", day: "Mon", time: "12-14" },
    { subject: "Manufacturing Technology - 2", subjectCode: "L-MT2", day: "Mon", time: "15-16" },
    { subject: "Manufacturing Technology - 2", subjectCode: "L-MT2", day: "Tues", time: "11-13" },
    { subject: "Manufacturing Technology - 2 Lab", subjectCode: "MT2-Lab", day: "Fri", time: "12-14" },
    { subject: "Economics", subjectCode: "L-Eco", day: "Tues", time: "14-16" },
    { subject: "Economics", subjectCode: "L-Eco", day: "Thurs", time: "14-15" }
  ],
  "M3G3": [
    { subject: "Heat Mass Transfer", subjectCode: "L-HMT", day: "Mon", time: "10-12" },
    { subject: "Heat Mass Transfer", subjectCode: "L-HMT", day: "Tues", time: "10-11" },
    { subject: "Heat Mass Transfer Lab", subjectCode: "HMT-Lab", day: "Fri", time: "12-14" },
    { subject: "Design of Machine Elements", subjectCode: "L-DME", day: "Tues", time: "16-17" },
    { subject: "Design of Machine Elements", subjectCode: "L-DME", day: "Thurs", time: "11-13" },
    { subject: "Design of Machine Elements Lab", subjectCode: "DME-Lab", day: "Wed", time: "12-14" },
    { subject: "Manufacturing Technology - 2", subjectCode: "L-MT2", day: "Mon", time: "15-16" },
    { subject: "Manufacturing Technology - 2", subjectCode: "L-MT2", day: "Tues", time: "11-13" },
    { subject: "Manufacturing Technology - 2 Lab", subjectCode: "MT2-Lab", day: "Mon", time: "12-14" },
    { subject: "Economics", subjectCode: "L-Eco", day: "Tues", time: "14-16" },
    { subject: "Economics", subjectCode: "L-Eco", day: "Thurs", time: "14-15" }
  ],
  "M4G1": [
    { subject: "Heat Mass Transfer", subjectCode: "L-HMT", day: "Wed", time: "12-13" },
    { subject: "Heat Mass Transfer", subjectCode: "L-HMT", day: "Thurs", time: "13-15" },
    { subject: "Heat Mass Transfer Lab", subjectCode: "HMT-Lab", day: "Tues", time: "12-14" },
    { subject: "Design of Machine Elements", subjectCode: "L-DME", day: "Mon", time: "15-16" },
    { subject: "Design of Machine Elements", subjectCode: "L-DME", day: "Tues", time: "10-12" },
    { subject: "Design of Machine Elements Lab", subjectCode: "DME-Lab", day: "Thurs", time: "16-18" },
    { subject: "Manufacturing Technology - 2", subjectCode: "L-MT2", day: "Mon", time: "10-12" },
    { subject: "Manufacturing Technology - 2", subjectCode: "L-MT2", day: "Thurs", time: "11-12" },
    { subject: "Manufacturing Technology - 2 Lab", subjectCode: "MT2-Lab", day: "Tues", time: "16-18" },
    { subject: "Economics", subjectCode: "L-Eco", day: "Mon", time: "13-15" },
    { subject: "Economics", subjectCode: "L-Eco", day: "Fri", time: "13-14" }
  ],
  "M4G2": [
    { subject: "Heat Mass Transfer", subjectCode: "L-HMT", day: "Wed", time: "12-13" },
    { subject: "Heat Mass Transfer", subjectCode: "L-HMT", day: "Thurs", time: "13-15" },
    { subject: "Heat Mass Transfer Lab", subjectCode: "HMT-Lab", day: "Tues", time: "16-18" },
    { subject: "Design of Machine Elements", subjectCode: "L-DME", day: "Mon", time: "15-16" },
    { subject: "Design of Machine Elements", subjectCode: "L-DME", day: "Tues", time: "10-12" },
    { subject: "Design of Machine Elements Lab", subjectCode: "DME-Lab", day: "Tues", time: "12-14" },
    { subject: "Manufacturing Technology - 2", subjectCode: "L-MT2", day: "Mon", time: "10-12" },
    { subject: "Manufacturing Technology - 2", subjectCode: "L-MT2", day: "Thurs", time: "11-12" },
    { subject: "Manufacturing Technology - 2 Lab", subjectCode: "MT2-Lab", day: "Thurs", time: "16-18" },
    { subject: "Economics", subjectCode: "L-Eco", day: "Mon", time: "13-15" },
    { subject: "Economics", subjectCode: "L-Eco", day: "Fri", time: "13-14" }
  ],
  "M4G3": [
    { subject: "Heat Mass Transfer", subjectCode: "L-HMT", day: "Wed", time: "12-13" },
    { subject: "Heat Mass Transfer", subjectCode: "L-HMT", day: "Thurs", time: "13-15" },
    { subject: "Heat Mass Transfer Lab", subjectCode: "HMT-Lab", day: "Thurs", time: "16-18" },
    { subject: "Design of Machine Elements", subjectCode: "L-DME", day: "Mon", time: "15-16" },
    { subject: "Design of Machine Elements", subjectCode: "L-DME", day: "Tues", time: "10-12" },
    { subject: "Design of Machine Elements Lab", subjectCode: "DME-Lab", day: "Tues", time: "16-18" },
    { subject: "Manufacturing Technology - 2", subjectCode: "L-MT2", day: "Mon", time: "10-12" },
    { subject: "Manufacturing Technology - 2", subjectCode: "L-MT2", day: "Thurs", time: "11-12" },
    { subject: "Manufacturing Technology - 2 Lab", subjectCode: "MT2-Lab", day: "Tues", time: "12-14" },
    { subject: "Economics", subjectCode: "L-Eco", day: "Mon", time: "13-15" },
    { subject: "Economics", subjectCode: "L-Eco", day: "Fri", time: "13-14" }
  ]
};

export const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
export const timeSlots = ["8-9", "9-10", "10-11", "11-12", "12-13", "13-14", "14-15", "15-16", "16-17", "17-18"];

