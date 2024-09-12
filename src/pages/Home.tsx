import { useTranslation } from "react-i18next";
import ClinicalTrials from "../components/ClinicalTrials/ClinicalTrials";
import MainTitle from "../components/MainTitle";
import MonthlyHospitalizations from "../components/MonthlyHospitalizations/MonthlyHospitalizations";
import Overview from "../components/Overview/Overview";
import { useHospitalStore } from "../stores/datas.store";
import { filterTrialProgress } from "../utils/filterTrialProgress";

const Home = () => {
  const { t } = useTranslation();
  const hospitals = useHospitalStore((state) => state.hospitals);
  const trials = hospitals.map((hospital) => hospital.clinicalTrials).flat();

  // Récupération du filtre actif de l'essai clinique (store data.store.ts)
  const [trialFilter] = useHospitalStore((state) => [state.trialFilter]);
  // Utilisation de la fonction filtrée et triée
  const filterProgress = filterTrialProgress(trials, trialFilter);

  return (
    <main>
      <MainTitle title={t("welcomeMessage")} />

      <div className="mx-auto mt-16 flex max-w-5xl flex-col gap-3 lg:gap-8">
        <Overview />
        <MonthlyHospitalizations />
        <ClinicalTrials trials={filterProgress} hospitalDisplay={true} />
      </div>
    </main>
  );
};

export default Home;
