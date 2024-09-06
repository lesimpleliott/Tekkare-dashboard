import { useTranslation } from "react-i18next";

const languages = [
  { id: "fr", name: "Français", flag: "./fr.svg" },
  { id: "en", name: "English", flag: "./en.svg" },
];

const App = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <section className="flex flex-col p-6">
      <h1 className="w-fit bg-gradient-to-r from-primary to-secondary bg-clip-text text-6xl font-bold text-transparent">
        {t("welcomeMessage")}
      </h1>

      <div className="mt-4 flex gap-2">
        {languages.map((lang) => (
          <button
            className="cta flex items-center justify-center gap-2"
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
