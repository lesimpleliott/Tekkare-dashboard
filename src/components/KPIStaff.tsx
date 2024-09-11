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
    <section className="flex flex-col gap-4">
      <h2 className="hidden w-fit lg:block">{t("hospitalStaff")}</h2>

      <div className={className}>
        <KPICard
          icon="fa-solid fa-user-doctor"
          number={overview.numberOfDoctors}
          text={t("doctor", { count: overview.numberOfDoctors })}
        />
        <KPICard
          icon="fa-solid fa-user-nurse"
          number={overview.numberOfNurses}
          text={t("nurse", { count: overview.numberOfNurses })}
        />
        <KPICard
          icon="fa-solid fa-hospital-user"
          number={overview.totalPatients}
          text={t("patient", { count: overview.totalPatients })}
        />
      </div>
    </section>
  );
};

export default KPIStaff;
