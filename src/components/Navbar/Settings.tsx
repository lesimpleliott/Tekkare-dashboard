import { useTranslation } from "react-i18next";

const Settings = () => {
  const { t } = useTranslation();
  const i18n = useTranslation();

  const toggleLanguageChange = () => {
    const lang = i18n.i18n.language === "fr" ? "en" : "fr";
    i18n.i18n.changeLanguage(lang);
  };

  return (
    <section className="flex flex-col items-center justify-center gap-3">
      <a
        href="https://elegarage.fr/CV_LesimpleEliott.pdf"
        target="_blank"
        className="flex w-full items-center justify-start gap-2 rounded-md px-2"
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

      <a
        href="https://elegarage.fr"
        target="_blank"
        className="flex w-full items-center justify-start gap-2 rounded-md px-2"
      >
        <img
          src="./eliott.webp"
          alt="Photo Eliott Lesimple"
          className="h-10 w-10 min-w-10 rounded-full object-cover shadow-lg"
        />
        <p className="hidden overflow-hidden truncate whitespace-nowrap md:block">
          Lesimple Eliott
        </p>
      </a>

      <div className="flex w-full items-center justify-start">
        <div className="flex items-center gap-2 rounded-md px-2">
          <img
            onClick={() => toggleLanguageChange()}
            src={`./flags/${i18n.i18n.language}.svg`}
            alt={t("language")}
            className="h-10 min-w-10 cursor-pointer rounded-full object-cover shadow-lg"
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
