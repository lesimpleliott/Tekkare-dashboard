import { useParams } from "react-router-dom";
import ClinicalTrials from "../components/ClinicalTrials/ClinicalTrials";
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
      <div className="mx-auto flex max-w-5xl flex-col gap-3 lg:gap-6">
        <MainTitle
          title={hospital.name[i18n.language as keyof typeof hospital.name]}
          subtitle={hospital.location}
        />

        <section className="mt-20 flex flex-col gap-4 gap-x-10 lg:flex-row">
          {/* Affichage des KPIs */}
          <KPIStaff
            overview={hospital.overview}
            className="flex flex-row flex-wrap justify-center gap-2 lg:w-64 lg:flex-col lg:gap-4"
          />
          {/* Affichage des graphiques  */}
          <DoctorSpecialties
            dataSpecialties={hospital.doctorSpecialties}
            className="flex h-96 w-full flex-col lg:h-[350px] lg:items-center lg:text-center"
          />
        </section>

        {/* Affichage des essais cliniques */}
        <ClinicalTrials trials={hospital.clinicalTrials} />
      </div>
    </main>
  );
};

export default Hospital;
