import { NavLink } from "react-router-dom";
import { useHospitalStore } from "../../stores/datas.store";
import HospitalMenu from "./HospitalMenu";

const Hospitals = () => {
  const hospitals = useHospitalStore((state) => state.hospitals);

  return (
    <section className="flex flex-1 flex-col items-start border-y-2 border-slate-200">
      <NavLink to="/">
        <i className="fa-solid fa-hospital mt-4 flex h-10 min-w-10 items-center justify-center rounded-full px-3 text-2xl text-gray-500"></i>
      </NavLink>
      {hospitals.map((hospital) => HospitalMenu({ hospital }))}
    </section>
  );
};

export default Hospitals;
