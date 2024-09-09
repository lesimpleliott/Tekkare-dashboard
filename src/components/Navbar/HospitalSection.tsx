import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { useHospitalStore } from "../../stores/datas.store";
import HospitalMenuTitle from "./HospitalMenuTitle";

const Hospitals = () => {
  const hospitals = useHospitalStore((state) => state.hospitals);
  const { t } = useTranslation();

  return (
    <section className="flex flex-1 flex-col items-start border-y-2 border-slate-200 pt-6">
      <NavLink
        to="/"
        className="hospitalLink relative flex w-full items-center gap-2 hover:bg-gray-200"
      >
        {/* ICONE */}
        <i className="fa-solid fa-hospital ml-2 flex h-10 w-10 min-w-10 items-center justify-center text-2xl text-gray-500"></i>

        {/* TEXTE */}
        <p className="hidden overflow-hidden truncate whitespace-nowrap font-bold text-gray-600 md:block">
          {t("overview")}
        </p>
      </NavLink>

      {hospitals.map((hospital) => (
        <HospitalMenuTitle key={hospital.id} hospital={hospital} />
      ))}
    </section>
  );
};

export default Hospitals;
