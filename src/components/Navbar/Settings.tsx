import { useTranslation } from "react-i18next";

const Settings = () => {
  const { t } = useTranslation();
  const i18n = useTranslation();

  const toggleLanguageChange = () => {
    const lang = i18n.i18n.language === "fr" ? "en" : "fr";
    i18n.i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  return (
    <section className="flex flex-col items-center justify-center">
      {/* NOTIFICATIONS */}
      <a
        href="https://elegarage.fr/CV_LesimpleEliott.pdf"
        target="_blank"
        className="flex w-full items-center justify-start gap-2 rounded-md p-2 hover:bg-gray-200"
      >
        <i className="fa-regular fa-bell relative flex h-10 min-w-10 items-center justify-center rounded-full text-4xl text-gray-500">
          <span className="absolute right-0 top-0 flex h-4 w-4 animate-bounce items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
            1
          </span>
        </i>
        <p className="text-bold overflow-hidden truncate whitespace-nowrap font-bold italic md:block">
          {t("resume")}
        </p>
      </a>

      {/* USER PROFIL */}
      <a
        href="https://elegarage.fr"
        target="_blank"
        className="flex w-full items-center justify-start gap-2 rounded-md p-2 hover:bg-gray-200"
      >
        <img
          src="/eliott.webp"
          alt="Photo Eliott Lesimple"
          className="h-10 w-10 min-w-10 rounded-full object-cover shadow-lg"
        />
        <p className="hidden overflow-hidden truncate whitespace-nowrap md:block">
          Lesimple Eliott
        </p>
      </a>

      {/* LANGUAGE */}
      <div
        onClick={() => toggleLanguageChange()}
        className="flex w-full cursor-pointer items-center justify-start hover:bg-gray-200"
      >
        <div className="flex items-center gap-2 rounded-md p-2">
          <img
            src={`/flags/${i18n.i18n.language}.svg`}
            alt={t("language")}
            className="h-10 min-w-10 rounded-full object-cover shadow-lg"
          />

          <p className="hidden overflow-hidden truncate whitespace-nowrap md:block">
            {t("language")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Settings;
