import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import ClinicalTrials from "../components/ClinicalTrials";
import DoctorSpecialties from "../components/DoctorSpecialties";
import KPICard from "../components/KPICard";
import MainTitle from "../components/MainTitle";
import { useHospitalStore } from "../stores/datas.store";
import i18n from "../utils/i18n";

const Hospital = () => {
  const hospitals = useHospitalStore((state) => state.hospitals);
  const { hospitalId } = useParams<{ hospitalId: string }>();
  const hospital = hospitals.find((hospital) => hospital.id === hospitalId);
  const { t } = useTranslation();

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
      <MainTitle
        title={hospital.name[i18n.language as keyof typeof hospital.name]}
        subtitle={hospital.location}
      />

      {/* Affichage des KPIs */}
      <section className="flex flex-row flex-wrap justify-center gap-2">
        <KPICard
          icon="fa-solid fa-user-doctor"
          number={hospital.overview.numberOfDoctors}
          text={t("doctors")}
        />
        <KPICard
          icon="fa-solid fa-user-nurse"
          number={hospital.overview.numberOfNurses}
          text={t("nurses")}
        />
        <KPICard
          icon="fa-solid fa-hospital-user"
          number={hospital.overview.totalPatients}
          text={t("patients")}
        />
      </section>

      {/* Affichage des graphiques  */}
      <DoctorSpecialties dataSpecialties={hospital.doctorSpecialties} />
      <ClinicalTrials dataTrials={hospital.clinicalTrials}/>
    </main>
  );
};

export default Hospital;
