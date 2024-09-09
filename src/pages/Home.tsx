import { useTranslation } from "react-i18next";
import MainTitle from "../components/MainTitle";
import MonthlyHospitalizations from "../components/MonthlyHospitalizations/MonthlyHospitalizations";
import { useHospitalStore } from "../stores/datas.store";

const Home = () => {
  const { t } = useTranslation();
  const hospitals = useHospitalStore((state) => state.hospitals);

  return (
    <main>
      {/* TITRE PAGE */}
      <MainTitle title={t("welcomeMessage")} />

      {/* INTRO-CARD */}
      <section className="flex flex-row flex-wrap justify-center gap-2">
        <ul className="KPICard flex-1">
          {hospitals.map((hospital) => (
            <li key={hospital.id} className="flex items-center gap-2">
              <i className="fa-solid fa-hospital text-main-200"></i>
              <p className="font-medium">
                {hospital.name} -{" "}
                <em className="font-light">
                  {hospital.location.replace(/, France/, "")}
                </em>
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* CHARTS */}
      <MonthlyHospitalizations />
    </main>
  );
};

export default Home;
