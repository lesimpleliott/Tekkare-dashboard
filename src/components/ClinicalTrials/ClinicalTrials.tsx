import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useHospitalStore } from "../../stores/datas.store";
import { clinicalTrialsType } from "../../types/clinicalTrialsType";
import { calculateProgress } from "../../utils/calculateProgress";
import TrialCard from "./TrialCard";

const ClinicalTrials = ({
  trials,
  hospitalDisplay,
}: {
  trials: clinicalTrialsType[];
  hospitalDisplay?: boolean;
}) => {
  const { t, i18n } = useTranslation();
  const [filter, setFilter] = useState("all");
  const hospitals = useHospitalStore((state) => state.hospitals);

  // Tableau des boutons de filtre
  const filterButtons = [
    { label: "all", text: "status.all" },
    { label: "completed", text: "status.completed" },
    { label: "inProgress", text: "status.inProgress" },
  ];

  // Fonction pour obtenir les essais cliniques filtrés et triés
  const filteredAndSortedTrials = trials
    .filter((trial) => {
      const progress = calculateProgress(trial.startDate, trial.endDate);
      const isCompleted = progress >= 100;

      if (filter === "completed") {
        return isCompleted;
      } else if (filter === "inProgress") {
        return !isCompleted;
      } else {
        return true;
      }
    })
    .sort(
      (a, b) => new Date(b.endDate).getTime() - new Date(a.endDate).getTime(),
    );

  return (
    <section className="mt-4">
      <div className="mt-6 flex flex-col items-start justify-center gap-x-4 gap-y-2 pb-4 sm:flex-row sm:justify-between">
        {/* Titre */}
        <h2>{t("clinicalTrials")}</h2>

        {/* Filter Buttons */}
        <div className="flex justify-end gap-2">
          {filterButtons.map((button, index) => (
            <button
              key={index}
              className={`filterButton ${filter === button.label ? "active" : ""}`}
              onClick={() => setFilter(button.label)}
            >
              {t(button.text)}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {filteredAndSortedTrials.map((trial, index) => {
          // Recherche nom de l'hopital
          const hospital = hospitals.find((hospital) =>
            hospital.clinicalTrials.some(
              (hTrial) => hTrial.trialId === trial.trialId,
            ),
          );

          // Ajout nom et de la localisation
          const hospitalNameAndLocation = hospital
            ? `${hospital.name[i18n.language as keyof typeof hospital.name]} - ${hospital.location}`
            : "Unknown Hospital";

          // Recherche ID de l'hopital
          const hospitalId = hospital ? hospital.id : "unknown";

          return (
            <TrialCard
              key={`Trial${index}`}
              trial={trial}
              hospital={
                hospitalDisplay
                  ? { hospitalNameAndLocation, hospitalId }
                  : undefined
              }
            />
          );
        })}
      </div>
    </section>
  );
};

export default ClinicalTrials;
