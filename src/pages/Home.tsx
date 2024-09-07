import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <main className="flex-1 overflow-y-scroll p-4">
      <h1 className="mt-6 w-fit bg-gradient-to-r from-primary to-secondary bg-clip-text text-3xl font-bold text-transparent">
        {t("welcomeMessage")}
      </h1>
    </main>
  );
};

export default Home;
