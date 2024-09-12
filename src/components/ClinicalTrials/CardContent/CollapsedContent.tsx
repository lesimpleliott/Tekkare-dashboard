import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { clinicalTrialsType } from "../../../types/clinicalTrialsType";
import InfoText from "./InfoText";

const CollapsedContent = ({
  trial,
  hospital,
  cardIsOpen,
}: {
  trial: clinicalTrialsType;
  hospital?: { hospitalNameAndLocation: string; hospitalId: string };
  cardIsOpen: boolean;
}) => {
  const { t, i18n } = useTranslation();

  // Simplification pour les investigateurs
  const investigatorCount = Array.isArray(trial.investigator)
    ? trial.investigator.length
    : 1;
  const investigatorNames = Array.isArray(trial.investigator)
    ? trial.investigator.join(", ")
    : trial.investigator;

  // Simplification pour les hôpitaux
  const hospitalCount = Array.isArray(hospital) ? hospital.length : 1;

  return (
    <section
      className={`flex flex-col overflow-hidden text-sm transition-all duration-500 ease-out ${cardIsOpen ? "h-fit border-t border-main-200 pb-3 pt-2" : "h-0"}`}
    >
      {/* Trial ID */}
      <InfoText text={t("trialID")} icon="fa-solid fa-hashtag">
        {trial.trialId}
      </InfoText>

      {/* Dates */}
      <InfoText text={t("date")} icon="fa-solid fa-calendar">
        {new Date(trial.startDate).toLocaleDateString(i18n.language)} -{"  "}
        {new Date(trial.endDate).toLocaleDateString(i18n.language)}
      </InfoText>

      {/* Hôpital */}
      {hospital && (
        <NavLink to={`/hospital/${hospital.hospitalId}`}>
          <InfoText
            text={t("hospital", { count: hospitalCount })}
            icon="fa-solid fa-hospital"
          >
            {hospital?.hospitalNameAndLocation}
          </InfoText>
        </NavLink>
      )}

      {/* Docteur(s) */}
      <InfoText
        text={t("doctor", { count: investigatorCount })}
        icon="fa-solid fa-user-doctor"
      >
        {investigatorNames}
      </InfoText>

      {/* Patient */}
      <InfoText
        text={t("patient", { count: trial.participants })}
        icon="fa-solid fa-hospital-user"
      >
        {trial.participants}
      </InfoText>
    </section>
  );
};

export default CollapsedContent;
