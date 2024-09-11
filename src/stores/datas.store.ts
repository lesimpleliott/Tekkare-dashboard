import { create } from "zustand";
import { HospitalData } from "../types/hospitalType";

interface HospitalStore {
  hospitals: HospitalData[];
  setHospitals: (data: HospitalData[]) => void;
  trialFilter: string;
  setTrialFilter: (filter: string) => void;
}

export const useHospitalStore = create<HospitalStore>((set) => ({
  hospitals: [],
  setHospitals: (data) => set({ hospitals: data }),

  trialFilter: "all",
  setTrialFilter: (filter) => set({ trialFilter: filter }),
}));
