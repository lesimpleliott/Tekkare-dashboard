export type clinicalTrialsType = {
  trialId: string;
  name: {
    fr: string;
    en: string;
  };
  startDate: string;
  endDate: string;
  investigator: string | string[];
  participants: number;
};
