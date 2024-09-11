import { useHospitalStore } from "../../stores/datas.store";
import { clinicalTrialsType } from "../../types/clinicalTrialsType";
import { calculateProgress } from "../../utils/calculateProgress";
import TrialCard from "./TrialCard";
import TrialsTitleFilters from "./TrialsTitleFilters";

const ClinicalTrials = ({ trials }: { trials: clinicalTrialsType[] }) => {
  // Récupération du filtre de l'essai clinique (store data.store.ts)
  const [trialFilter] = useHospitalStore((state) => [state.trialFilter]);

  // Fonction pour obtenir les essais cliniques filtrés et triés
  const filteredAndSortedTrials = trials
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

  return (
    <section className="mt-8">
      <TrialsTitleFilters />

      {/* Cards Essais Clinique */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {filteredAndSortedTrials.map((trial) => {
          return <TrialCard key={trial.trialId} trial={trial} />;
        })}
      </div>
    </section>
  );
};

export default ClinicalTrials;
