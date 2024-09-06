import { useTranslation } from "react-i18next";

const languages = [
  { id: "fr", name: "Français", flag: "./flags/fr.svg" },
  { id: "en", name: "English", flag: "./flags/en.svg" },
];

const App = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const root = document.getElementById("root");
  root!.className = "flex min-h-dvh relative";

  return (
    <section className="flex w-full flex-col p-6">
      <h1 className="w-fit bg-gradient-to-r from-primary to-secondary bg-clip-text text-xl font-bold text-transparent">
        {t("welcomeMessage")}
      </h1>

      <div className="mt-4 flex flex-col gap-2">
        {languages.map((lang) => (
          <button
            className="cta shadow-cta-blue flex w-fit min-w-[150px] items-center justify-center gap-2 px-6 py-2 text-white"
            key={lang.id}
            onClick={() => handleLanguageChange(lang.id)}
          >
            <img
              className="h-6 w-6 drop-shadow-md"
              src={lang.flag}
              alt={lang.name}
            />
            <p className="font-medium">{lang.name}</p>
          </button>
        ))}
      </div>
    </section>
  );
};

export default App;
