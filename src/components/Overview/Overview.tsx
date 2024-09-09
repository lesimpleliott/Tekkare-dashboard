import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { useHospitalStore } from "../../stores/datas.store";
import i18n from "../../utils/i18n";
import DataColumn from "./DataColumn";

const Overview = () => {
  const hospitals = useHospitalStore((state) => state.hospitals);
  const { t } = useTranslation();

  return (
    <section className="flex flex-col flex-wrap justify-center gap-2">
      {/* Titre section */}
      <h2>{t("overview")}</h2>

      <table className="KPICard mt-2 flex flex-1 flex-col justify-center gap-2 px-4 py-1">
        <tbody>
          {hospitals.map((hospital, index) => (
            <tr
              key={hospital.id}
              className={`flex items-center ${index !== hospitals.length - 1 ? "border-main-200 border-b" : ""}`}
            >
              {/* Nom Hopital */}
              <td className="w-full py-2 leading-4">
                <NavLink
                  to={`/hospital/${hospital.id}`}
                  className="flex flex-col gap-x-2 lg:flex-row"
                >
                  <p className="font-bold">
                    {hospital.name[i18n.language as keyof typeof hospital.name]}
                  </p>
                  <em className="font-light">
                    {hospital.location.replace(/, France/, "")}
                  </em>
                </NavLink>
              </td>

              {/* Satisfaction */}
              <DataColumn
                tooltip={t("satisfactionRate")}
                text={hospital.overview.satisfactionRate}
                icon="fa-solid fa-star text-yellow-400"
              />

              {/* Docteurs */}
              <DataColumn
                tooltip={t("doctors")}
                text={hospital.overview.numberOfDoctors.toLocaleString(
                  i18n.language,
                )}
                icon="fa-solid fa-user-doctor text-primary-200"
              />

              {/* Infirmiers */}
              <DataColumn
                tooltip={t("nurses")}
                text={hospital.overview.numberOfNurses.toLocaleString(
                  i18n.language,
                )}
                icon="fa-solid fa-user-nurse text-secondary-200"
              />

              {/* Patients */}
              <DataColumn
                tooltip={t("patients")}
                text={hospital.overview.totalPatients.toLocaleString(
                  i18n.language,
                )}
                icon="fa-solid fa-hospital-user text-main-200"
              />
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Overview;
