import { useTranslation } from "react-i18next";
import { useHospitalStore } from "../../stores/datas.store";

const TrialsTitleFilters = () => {
  const { t } = useTranslation();

  // Récupération du filtre de l'essai clinique (store  data.store.ts)
  const [trialFilter, setTrialFilter] = useHospitalStore((state) => [
    state.trialFilter,
    state.setTrialFilter,
  ]);

  // Tableau des boutons de filtre
  const filterButtons = [
    { label: "all", text: "status.all" },
    { label: "inProgress", text: "status.inProgress" },
    { label: "completed", text: "status.completed" },
  ];

  return (
    <div className="mt-6 flex flex-col items-start justify-center gap-x-4 gap-y-2 pb-4 sm:flex-row sm:justify-between">
      {/* Titre */}
      <h2>{t("clinicalTrials")}</h2>

      {/* Filter Buttons */}
      <div className="flex justify-end gap-2">
        {filterButtons.map((button, index) => (
          <button
            key={index}
            className={`filterButton ${trialFilter === button.label ? "active" : ""}`}
            onClick={() => setTrialFilter(button.label)}
          >
            {t(button.text)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TrialsTitleFilters;
