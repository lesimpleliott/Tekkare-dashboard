import { useHospitalStore } from "../../stores/datas.store";
import { clinicalTrialsType } from "../../types/clinicalTrialsType";
import { filterTrialProgress } from "../../utils/filterTrialProgress";
import TrialCard from "./TrialCard";
import TrialsTitleFilters from "./TrialsTitleFilters";

const ClinicalTrials = ({ trials }: { trials: clinicalTrialsType[] }) => {
  // Récupération du filtre actif de l'essai clinique (store data.store.ts)
  const [trialFilter] = useHospitalStore((state) => [state.trialFilter]);
  // Utilisation de la fonction filtrée et triée
  const filterProgress = filterTrialProgress(trials, trialFilter);

  return (
    <section className="mt-8">
      <TrialsTitleFilters />

      {/* Cards Essais Clinique */}
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
        {filterProgress.map((trial) => {
          return <TrialCard key={trial.trialId} trial={trial} />;
        })}
      </div>
    </section>
  );
};

export default ClinicalTrials;
