import { useState } from "react";
import { useTranslation } from "react-i18next";
import { clinicalTrialsType } from "../../types/clinicalTrialsType";
import { calculateProgress } from "../../utils/calculateProgress";
import CollapsedContent from "./CardContent/CollapsedContent";
import ProgressBar from "./CardContent/ProgressBar";
import Tag from "./CardContent/Tag";

const TrialCard = ({
  trial,
  hospital,
}: {
  trial: clinicalTrialsType;
  hospital?: { hospitalNameAndLocation: string; hospitalId: string };
}) => {
  const { t, i18n } = useTranslation();

  const progress = calculateProgress(trial.startDate, trial.endDate);
  const [cardIsOpen, setCardIsOpen] = useState(false); // False = collapsed

  return (
    <article className="KPICard flex h-fit flex-col gap-2 px-4 pt-4">
      {/* CARD // MAIN-CONTENT */}
      <section className="flex flex-col justify-between">
        <div className="items-between flex justify-between gap-2">
          {/* Titre essai */}
          <h3 className="flex-1 pr-10 text-lg font-bold leading-5 lg:line-clamp-3 lg:h-16">
            {String(trial.name[i18n.language as keyof typeof trial.name])}
          </h3>

          {/* Toggle Info button */}
          <button
            onClick={() => setCardIsOpen(!cardIsOpen)}
            className="relative h-6 min-w-6 rounded-full border-2 border-gray-400 bg-gray-200 text-sm text-gray-400"
          >
            <i className="fa-solid fa-info absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></i>
          </button>

          {/* Status tag */}
          <Tag
            condition={progress >= 100}
            textPrimary={t("status.completed")}
            textSecondary={t("status.inProgress")}
          />
        </div>
      </section>

      {/* Barre de progression */}
      <ProgressBar progress={progress} />

      {/* CARD // COLLAPSED DATA */}
      <CollapsedContent
        hospital={hospital}
        trial={trial}
        cardIsOpen={cardIsOpen}
      />
    </article>
  );
};

export default TrialCard;
