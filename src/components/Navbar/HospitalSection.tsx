import { NavLink } from "react-router-dom";
import { useHospitalStore } from "../../stores/datas.store";
import HospitalMenuTitle from "./HospitalMenuTitle";

const Hospitals = () => {
  const hospitals = useHospitalStore((state) => state.hospitals);

  return (
    <section className="flex flex-1 flex-col items-start border-y-2 border-slate-200 pt-6">
      <NavLink to="/" className="hospitalLink relative">
        <i className="fa-solid fa-hospital flex h-10 w-10 min-w-10 items-center justify-start rounded-full px-3 text-2xl text-gray-500"></i>
      </NavLink>
      {hospitals.map((hospital) => (
        <HospitalMenuTitle key={hospital.id} hospital={hospital} />
      ))}
    </section>
  );
};

export default Hospitals;
