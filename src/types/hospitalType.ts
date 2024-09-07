export type HospitalData = {
  id: string;
  name: string;
  location: string;
  overview: {
    totalPatients: number;
    satisfactionRate: string;
    totalTreatments: number;
    numberOfDoctors: number;
    numberOfNurses: number;
  };
  monthlyHospitalizations: Array<{
    month: string;
    year: number;
    value: number;
  }>;
  doctorSpecialties: Array<{
    specialty: string;
    numberOfDoctors: number;
    satisfactionRate: string;
  }>;
  clinicalTrials: Array<{
    name: string;
    status: string;
    startDate: string; // ISO 8601 date format
    endDate: string; // ISO 8601 date format
    totalPatients: number;
  }>;
  hospitalDepartments: Array<{
    department: string;
    patientsPerDay: number;
    averageWaitTime: string;
  }>;
};
