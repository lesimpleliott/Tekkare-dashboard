import { useState } from "react";
import { useTranslation } from "react-i18next";

type TrialsProps = {
  name: string;
  startDate: string;
  endDate: string;
};

const ClinicalTrials = ({ dataTrials }: { dataTrials: TrialsProps[] }) => {
  const { t, i18n } = useTranslation();
  const [filter, setFilter] = useState("all");

  // Fonction pour formater la date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(i18n.language, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // Fonction pour calculer l'avancement de l'essai clinique
  const calculateProgress = (startDate: string, endDate: string) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const today = new Date();

    const totalDays = end.getTime() - start.getTime();
    const elapsedDays = today.getTime() - start.getTime();

    return Math.round((elapsedDays / totalDays) * 100);
  };

  // Tableau des boutons de filtre
  const filterButtons = [
    { label: "all", text: "status.all" },
    { label: "completed", text: "status.completed" },
    { label: "inProgress", text: "status.inProgress" },
  ];

  // Fonction pour obtenir les essais cliniques filtrés et triés
  const filteredAndSortedTrials = dataTrials
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
    ); // Tri par date de fin, de la plus lointaine à la plus proche

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

      <div className="grid grid-cols-1 gap-x-4 lg:grid-cols-2">
        {filteredAndSortedTrials.map((trial, index) => {
          const progress = calculateProgress(trial.startDate, trial.endDate);
          const isCompleted = progress >= 100;

          return (
            <article
              key={index}
              className="KPICard mt-4 flex flex-col gap-2 p-3.5"
            >
              <div className="flex items-center justify-between gap-10 border-b border-main-100 pb-2">
                {/* Titre essai */}
                <h3 className="text-xl font-bold leading-5">
                  {String(trial.name[i18n.language as keyof typeof trial.name])}
                </h3>
                {/* TAG */}
                <p
                  className={`text-nowrap rounded-full border-2 ${
                    isCompleted
                      ? "border-primary-500 bg-primary-100 text-primary-500"
                      : "border-secondary-500 bg-secondary-100 text-secondary-500"
                  } px-2 font-medium`}
                >
                  {isCompleted ? t("status.completed") : t("status.inProgress")}
                </p>
              </div>

              {/* Dates de début et de fin  */}
              <div className="flex items-center gap-2">
                <p>
                  <strong>{t("startDate")}</strong>{" "}
                  {formatDate(trial.startDate)}
                </p>
                <hr className="h-3 w-[2px] bg-main-200" />
                <p>
                  <strong>{t("endDate")}</strong> {formatDate(trial.endDate)}
                </p>
              </div>

              {/* Barre de progression */}
              <div className="flex items-center justify-center gap-2">
                <div className="relative h-3 w-full rounded-full bg-main-100">
                  <span
                    className={`absolute h-full rounded-full transition-all duration-500 ${
                      isCompleted ? "w-full bg-primary-500" : "bg-secondary-500"
                    }`}
                    style={{
                      width: isCompleted
                        ? "100%"
                        : `${Math.min(progress, 100)}%`,
                    }}
                  ></span>
                </div>
                <p className="font-medium">{Math.min(progress, 100)}%</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default ClinicalTrials;
