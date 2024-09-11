import { clinicalTrialsType } from "../types/clinicalTrialsType";
import { calculateProgress } from "./calculateProgress";

export const filterTrialProgress = (
  trials: clinicalTrialsType[],
  trialFilter: string,
): clinicalTrialsType[] => {
  return trials
    .filter((trial) => {
      const progress = calculateProgress(trial.startDate, trial.endDate);
      const isCompleted = progress >= 100;

      if (trialFilter === "completed") {
        return isCompleted;
      } else if (trialFilter === "inProgress") {
        return !isCompleted;
      } else {
        return true;
      }
    })
    .sort(
      (a, b) => new Date(b.endDate).getTime() - new Date(a.endDate).getTime(),
    );
};
