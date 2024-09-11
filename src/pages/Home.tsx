import { useTranslation } from "react-i18next";
import MainTitle from "../components/MainTitle";
import MonthlyHospitalizations from "../components/MonthlyHospitalizations/MonthlyHospitalizations";
import Overview from "../components/Overview/Overview";

const Home = () => {
  const { t } = useTranslation();

  return (
    <main>
      <div className="mx-auto flex max-w-5xl flex-col gap-3 lg:gap-8">
        <MainTitle title={t("welcomeMessage")} />
        <Overview />
        <MonthlyHospitalizations />
      </div>
    </main>
  );
};

export default Home;
