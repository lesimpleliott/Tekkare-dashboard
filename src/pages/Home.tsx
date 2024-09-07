import { useTranslation } from "react-i18next";
import KPICard from "../components/KPICard";
import MainTitle from "../components/MainTitle";
import { useHospitalStore } from "../stores/datas.store";

const Home = () => {
  const { t } = useTranslation();
  const hospitals = useHospitalStore((state) => state.hospitals);

  const totalPatients = hospitals.reduce(
    (total, hospital) => total + hospital.overview.totalPatients,
    0,
  );
  const totalDoctors = hospitals.reduce(
    (total, hospital) => total + hospital.overview.numberOfDoctors,
    0,
  );
  const totalNurses = hospitals.reduce(
    (total, hospital) => total + hospital.overview.numberOfNurses,
    0,
  );

  return (
    <main>
      {/* TITRE PAGE */}
      <MainTitle title={t("welcomeMessage")} />

      {/* KPIs */}
      <section className="flex flex-row flex-wrap justify-center gap-2">
        <KPICard
          icon="fa-solid fa-user-doctor"
          number={totalDoctors}
          text={t("doctors")}
        />
        <KPICard
          icon="fa-solid fa-user-nurse"
          number={totalNurses}
          text={t("nurses")}
        />
        <KPICard
          icon="fa-solid fa-hospital-user"
          number={totalPatients}
          text={t("patients")}
        />
      </section>
    </main>
  );
};

export default Home;
