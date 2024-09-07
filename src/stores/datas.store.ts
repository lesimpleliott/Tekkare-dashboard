import { create } from "zustand";
import { HospitalData } from "../types/hospitalType";

interface HospitalStore {
  hospitals: HospitalData[];
  setHospitals: (data: HospitalData[]) => void;
}

export const useHospitalStore = create<HospitalStore>((set) => ({
  hospitals: [],
  setHospitals: (data) => set({ hospitals: data }),
}));
