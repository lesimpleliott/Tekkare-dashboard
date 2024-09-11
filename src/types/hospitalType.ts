import { clinicalTrialsType } from "./clinicalTrialsType";

export type HospitalData = {
  id: string;
  name: {
    fr: string;
    en: string;
  };
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
  clinicalTrials: Array<clinicalTrialsType>;
  hospitalDepartments: Array<{
    department: string;
    patientsPerDay: number;
    averageWaitTime: string;
  }>;
};
