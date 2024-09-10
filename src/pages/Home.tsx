import { useTranslation } from "react-i18next";
import MainTitle from "../components/MainTitle";
import MonthlyHospitalizations from "../components/MonthlyHospitalizations/MonthlyHospitalizations";
import Overview from "../components/Overview/Overview";

const Home = () => {
  const { t } = useTranslation();

  return (
    <main>
      <div className="mx-auto max-w-5xl">
        <MainTitle title={t("welcomeMessage")} />
        <Overview />
        <MonthlyHospitalizations />
      </div>
    </main>
  );
};

export default Home;
