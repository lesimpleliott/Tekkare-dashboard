import { useTranslation } from "react-i18next";
import TrialCard from "../components/ClinicalTrials/TrialCard";
import TrialsTitleFilters from "../components/ClinicalTrials/TrialsTitleFilters";
import MainTitle from "../components/MainTitle";
import MonthlyHospitalizations from "../components/MonthlyHospitalizations/MonthlyHospitalizations";
import Overview from "../components/Overview/Overview";
import { useHospitalStore } from "../stores/datas.store";
import { filterTrialProgress } from "../utils/filterTrialProgress";

const Home = () => {
  const { t, i18n } = useTranslation();
  const hospitals = useHospitalStore((state) => state.hospitals);
  const trials = hospitals.map((hospital) => hospital.clinicalTrials).flat();

  // Récupération du filtre actif de l'essai clinique (store data.store.ts)
  const [trialFilter] = useHospitalStore((state) => [state.trialFilter]);
  // Utilisation de la fonction filtrée et triée
  const filterProgress = filterTrialProgress(trials, trialFilter);

  return (
    <main>
      <div className="mx-auto flex max-w-5xl flex-col gap-3 lg:gap-8">
        <MainTitle title={t("welcomeMessage")} />
        <Overview />
        <MonthlyHospitalizations />

        <section className="mt-8 md:mt-0">
          <TrialsTitleFilters />

          {/* Cards Essais Clinique */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filterProgress.map((trial) => {
              const hospital = hospitals.find((hospital) =>
                hospital.clinicalTrials.some(
                  (clinicalTrial) => clinicalTrial.trialId === trial.trialId,
                ),
              );

              // Recherche nom de l'hopital + Ajout nom et de la localisation
              const hospitalNameAndLocation = hospital
                ? `${hospital.name[i18n.language as keyof typeof hospital.name]} - ${hospital.location}`
                : "Unknown Hospital";

              // Recherche ID de l'hopital
              const hospitalId = hospital ? hospital.id : "unknown";

              return (
                <TrialCard
                  key={trial.trialId}
                  trial={trial}
                  hospital={hospitalNameAndLocation}
                  link={`/hospital/${hospitalId}`}
                />
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
