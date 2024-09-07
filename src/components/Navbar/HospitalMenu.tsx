import { NavLink } from "react-router-dom";
import { HospitalData } from "../../types/hospitalType";

const HospitalMenu = ({ hospital }: { hospital: HospitalData }) => {
  return (
    <NavLink
      to={`/hospital/${hospital.id}`}
      key={hospital.id}
      className="hospitalLink relative flex w-full items-center gap-2 p-2 hover:bg-gray-200"
    >
      {/* ICONE */}
      <div className="flex h-10 w-10 min-w-10 items-center justify-center rounded-full border border-blue-200 bg-blue-50 p-2 shadow-lg">
        <p className="text-lg font-bold text-blue-900/30">
          {hospital.location.slice(0, 2)}
        </p>
      </div>

      {/* TEXTE */}
      <div className="flex h-full w-full flex-col justify-end leading-4">
        <p className="hidden overflow-hidden truncate whitespace-nowrap font-bold text-gray-600 md:block">
          {hospital.name}
        </p>
        <p className="hidden overflow-hidden truncate whitespace-nowrap text-sm text-gray-400 md:block">
          {hospital.location}
        </p>
      </div>
    </NavLink>
  );
};

export default HospitalMenu;
