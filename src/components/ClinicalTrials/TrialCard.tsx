import { useTranslation } from "react-i18next";
import { clinicalTrialsType } from "../../types/clinicalTrialsType";
import { calculateProgress } from "../../utils/calculateProgress";

const TrialCard = ({ trial }: { trial: clinicalTrialsType }) => {
  const { t, i18n } = useTranslation();
  const progress = calculateProgress(trial.startDate, trial.endDate);
  const isCompleted = progress >= 100;

  return (
    <article className="KPICard flex flex-col gap-2 px-4 pb-2 pt-4">
      <div className="flex flex-1 items-center justify-between gap-2">
        {/* Titre essai */}
        <h3 className="mr-10 text-lg font-bold leading-5">
          {String(trial.name[i18n.language as keyof typeof trial.name])}
        </h3>

        {/* TAG */}
        <p
          className={`text-nowrap rounded-full border-2 px-2 text-sm font-semibold ${
            isCompleted
              ? "border-primary-500 bg-primary-100 text-primary-500"
              : "border-secondary-500 bg-secondary-100 text-secondary-500"
          }`}
        >
          {isCompleted ? t("status.completed") : t("status.inProgress")}
        </p>

        <button className="relative h-7 w-7 min-w-7 rounded-full border-2 border-main-300 bg-main-100 text-main-300">
          <i className="fa-solid fa-info absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></i>
        </button>
      </div>

      {/* Barre de progression */}
      <div className="flex items-center justify-center gap-2">
        <div className="relative h-3 w-full rounded-full bg-main-100">
          <span
            className={`absolute h-full rounded-full transition-all duration-500 ${
              isCompleted ? "w-full bg-primary-500" : "bg-secondary-500"
            }`}
            style={{
              width: isCompleted ? "100%" : `${Math.min(progress, 100)}%`,
            }}
          ></span>
        </div>
        <p className="font-medium">{Math.min(progress, 100)}%</p>
      </div>
    </article>
  );
};

export default TrialCard;
