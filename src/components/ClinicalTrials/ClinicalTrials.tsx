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
  const [filterStatut, setFilterStatut] = useState("all");
  const [filterHospital, setFilterHospital] = useState("all");
  const hospitals = useHospitalStore((state) => state.hospitals);

  // Tableau des boutons de filtre
  const filterButtons = [
    { label: "all", text: "status.all" },
    { label: "inProgress", text: "status.inProgress" },
    { label: "completed", text: "status.completed" },
  ];

  const filteredAndSortedTrials = trials.filter((trial) => {
    const progress = calculateProgress(trial.startDate, trial.endDate);
    const isCompleted = progress >= 100;

    // Filtre par statut
    if (filterStatut === "completed" && !isCompleted) {
      return false;
    } else if (filterStatut === "inProgress" && isCompleted) {
      return false;
    }

    // Filtre par hôpital
    if (filterHospital !== "all") {
      const hospital = hospitals.find((hospital) =>
        hospital.clinicalTrials.some(
          (hTrial) => hTrial.trialId === trial.trialId,
        ),
      );
      return hospital && hospital.id === filterHospital;
    }

    return true;
  });

  return (
    <section className="mt-4 space-y-4">
      <div className="mt-6 flex flex-col items-start justify-center gap-x-4 gap-y-2 sm:flex-row sm:justify-between">
        {/* Titre */}
        <h2>{t("clinicalTrials")}</h2>

        {/* Filter Progress Statut */}
        <div className="flex flex-wrap justify-end gap-2">
          {filterButtons.map((button, index) => (
            <button
              key={index}
              className={`filterButton ${filterStatut === button.label ? "active" : ""}`}
              onClick={() => setFilterStatut(button.label)}
            >
              {t(button.text)}
            </button>
          ))}
        </div>
      </div>

      {/* Filter Hospital */}
      {hospitalDisplay && (
        <div className="flex flex-wrap gap-2 border-t border-main-200 pt-4 sm:justify-center">
          <button
            className={`filterButton ${filterHospital === "all" ? "active" : ""}`}
            onClick={() => setFilterHospital("all")}
          >
            {t("status.all")}
          </button>
          {hospitals.map((hospital) => (
            <button
              key={hospital.id}
              className={`filterButton ${filterHospital === hospital.id ? "active" : ""}`}
              onClick={() => setFilterHospital(hospital.id)}
            >
              {t(hospital.name[i18n.language as keyof typeof hospital.name])}
            </button>
          ))}
        </div>
      )}

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
