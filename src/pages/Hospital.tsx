import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import KPICard from "../components/KPICard";
import MainTitle from "../components/MainTitle";
import { useHospitalStore } from "../stores/datas.store";

const Hospital = () => {
  const hospitals = useHospitalStore((state) => state.hospitals);
  const { hospitalId } = useParams<{ hospitalId: string }>();
  const hospital = hospitals.find((hospital) => hospital.id === hospitalId);
  const { t } = useTranslation();

  if (!hospital) {
    return (
      <main>
        <MainTitle title="Hospital not found" />
      </main>
    );
  }
  return (
    <main>
      <MainTitle title={hospital.name} />

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

      <section>
        <h3>{hospital.name} - Charts space</h3>
      </section>
    </main>
  );
};

export default Hospital;
