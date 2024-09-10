import { useParams } from "react-router-dom";
import ClinicalTrials from "../components/ClinicalTrials";
import DoctorSpecialties from "../components/DoctorSpecialties";
import KPIStaff from "../components/KPIStaff";
import MainTitle from "../components/MainTitle";
import { useHospitalStore } from "../stores/datas.store";
import i18n from "../utils/i18n";

const Hospital = () => {
  const hospitals = useHospitalStore((state) => state.hospitals);
  const { hospitalId } = useParams<{ hospitalId: string }>();
  const hospital = hospitals.find((hospital) => hospital.id === hospitalId);

  // Si l'hôpital n'existe pas ou n'est pas trouvé
  if (!hospital) {
    return (
      <main>
        <MainTitle title="Hospital not found" />
      </main>
    );
  }

  return (
    <main>
      <div className="max-w-5xl mx-auto">
        <MainTitle
          title={hospital.name[i18n.language as keyof typeof hospital.name]}
          subtitle={hospital.location}
        />
        <section className="flex flex-col gap-4 lg:flex-row gap-x-10">
          {/* Affichage des KPIs */}
          <KPIStaff
            overview={hospital.overview}
            className="flex flex-row flex-wrap justify-center gap-2 lg:w-96 lg:flex-col lg:gap-4 "
          />
          {/* Affichage des graphiques  */}
          <DoctorSpecialties
            dataSpecialties={hospital.doctorSpecialties}
            className="h-96 w-full lg:h-80 lg:text-center lg:items-center flex flex-col"
          />
        </section>
        {/* Affichage des essais cliniques */}
        <ClinicalTrials dataTrials={hospital.clinicalTrials} />
      </div>
    </main>
  );
};

export default Hospital;
