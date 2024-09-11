import { useState } from "react";
import { useTranslation } from "react-i18next";
import { clinicalTrialsType } from "../../types/clinicalTrialsType";
import { calculateProgress } from "../../utils/calculateProgress";

const TrialCard = ({ trial }: { trial: clinicalTrialsType }) => {
  const { t, i18n } = useTranslation();
  const progress = calculateProgress(trial.startDate, trial.endDate);
  const isCompleted = progress >= 100;
  const [cardIsOpen, setCardIsOpen] = useState(true);
  const capitalize = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <article className="KPICard flex flex-col gap-2 px-4 pt-4">
      <div className="items-between flex justify-between gap-2">
        {/* Titre essai */}
        <h3 className="mr-10 text-lg font-bold leading-5">
          {String(trial.name[i18n.language as keyof typeof trial.name])}
        </h3>

        {/* Toggle Info button */}
        <button
          onClick={() => setCardIsOpen(!cardIsOpen)}
          className="relative h-6 min-w-6 rounded-full border-2 border-gray-400 bg-gray-200 text-sm text-gray-400"
        >
          <i className="fa-solid fa-info absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></i>
        </button>

        {/* TAG */}
        <p
          className={`h-6 text-nowrap rounded-full border-2 px-2 text-sm font-semibold ${
            isCompleted
              ? "border-primary-500 bg-primary-100 text-primary-500"
              : "border-secondary-500 bg-secondary-100 text-secondary-500"
          }`}
        >
          {isCompleted ? t("status.completed") : t("status.inProgress")}
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
              width: isCompleted ? "100%" : `${Math.min(progress, 100)}%`,
            }}
          ></span>
        </div>
        <p className="font-medium">{Math.min(progress, 100)}%</p>
      </div>

      {/* Infos */}
      <section
        className={`flex flex-col overflow-hidden text-sm transition-all duration-300 ease-out ${cardIsOpen ? "h-0" : "h-fit border-t border-main-200 pb-3 pt-2"}`}
      >
        {/* Trial ID */}
        <div className="">
          <strong>
            <i className="fa-solid fa-hashtag text-main-200"></i> {t("trialID")}
            {i18n.language === "fr" ? " : " : ": "}
          </strong>
          {trial.trialId}
        </div>

        {/* Dates */}
        <p>
          <strong>
            <i className="fa-solid fa-calendar text-main-200"></i>{" "}
            {capitalize(t("date"))}
            {i18n.language === "fr" ? " : " : ": "}
          </strong>
          {new Date(trial.startDate).toLocaleDateString()} -{"  "}
          {new Date(trial.endDate).toLocaleDateString()}
        </p>

        {/* Docteur(s) */}
        <div className="">
          <strong>
            <i className="fa-solid fa-user-doctor text-main-200"></i>{" "}
            {capitalize(
              t("doctor", {
                count: Array.isArray(trial.investigator)
                  ? trial.investigator.length
                  : 1,
              }),
            )}
            {i18n.language === "fr" ? " : " : ": "}
          </strong>
          {Array.isArray(trial.investigator)
            ? trial.investigator.join(", ")
            : trial.investigator}
        </div>

        {/* Patient */}
        <div className="">
          <strong>
            <i className="fa-solid fa-user-doctor text-main-200"></i>{" "}
            {capitalize(t("patient", { count: trial.participants }))}
            {i18n.language === "fr" ? " : " : ": "}
          </strong>
          {trial.participants}
        </div>
      </section>
    </article>
  );
};

export default TrialCard;
