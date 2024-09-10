import { useTranslation } from "react-i18next";
import KPICard from "./KPICard";

type KPIStaffProps = {
  numberOfDoctors: number;
  numberOfNurses: number;
  totalPatients: number;
};

const KPIStaff = ({
  overview,
  className = "",
}: {
  overview: KPIStaffProps;
  className: string;
}) => {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col gap-4 lg:items-center">
      <h2 className="hidden w-fit lg:block">{t("hospitalStaff")}</h2>

      <div className={className}>
        <KPICard
          icon="fa-solid fa-user-doctor"
          number={overview.numberOfDoctors}
          text={t("doctors")}
        />
        <KPICard
          icon="fa-solid fa-user-nurse"
          number={overview.numberOfNurses}
          text={t("nurses")}
        />
        <KPICard
          icon="fa-solid fa-hospital-user"
          number={overview.totalPatients}
          text={t("patients")}
        />
      </div>
    </section>
  );
};

export default KPIStaff;
