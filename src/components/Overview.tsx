import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { useHospitalStore } from "../stores/datas.store";
import i18n from "../utils/i18n";

const DataColumn = ({
  text,
  icon,
  tooltip,
}: {
  text: string;
  icon: string;
  tooltip: string;
}) => {
  return (
    <td className="group relative cursor-pointer">
      <div className="flex flex-col items-center gap-x-1 px-1 pt-1 sm:flex-row">
        <i className={`${icon} `}></i>
        <p className="min-w-[50px] text-center font-medium">{text}</p>
      </div>
      <span className="toolTip hidden group-hover:block">{tooltip}</span>
    </td>
  );
};

const Overview = () => {
  const hospitals = useHospitalStore((state) => state.hospitals);
  const { t } = useTranslation();

  return (
    <section className="flex flex-col flex-wrap justify-center gap-2">
      <h2 className="flex flex-row items-center justify-center gap-2 pb-2 sm:flex-row sm:justify-start">
        <i className="fa-solid fa-hospital text-main-300"></i> {t("overview")}
      </h2>

      <table className="KPICard flex flex-1 flex-col justify-center gap-2 px-4 py-1">
        <tbody>
          {hospitals.map((hospital, index) => (
            <tr
              key={hospital.id}
              className={`flex items-center ${index !== hospitals.length - 1 ? "border-main-200 border-b" : ""}`}
            >
              {/* Hopital */}
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

              {/* Satisfaction */}
              <DataColumn
                tooltip={t("satisfactionRate")}
                text={hospital.overview.satisfactionRate}
                icon="fa-solid fa-star text-yellow-400"
              />
            </tr>
          ))}
        </tbody>
      </table>

      {/* <ul className="KPICard flex flex-1 flex-col justify-center gap-2">
        {hospitals.map((hospital, index) => (
          <li
            key={hospital.id}
            className={`flex items-center ${index !== hospitals.length - 1 ? "border-main-200 border-b pb-2" : ""}`}
          >
            <p className="flex-1 font-medium">
              {hospital.name[i18n.language as keyof typeof hospital.name]} -{" "}
              <em className="font-light">
                {hospital.location.replace(/, France/, "")}
              </em>
            </p>

            <div className="flex items-center justify-end gap-2">
              <span className="flex items-center justify-end gap-1 border">
                <i className="text-secondary-200 fa-solid fa-user-doctor"></i>
                <p>
                  {hospital.overview.numberOfDoctors.toLocaleString(
                    i18n.language,
                  )}
                </p>
              </span>
              <span
                className="flex items-center justify-end gap-1 border"
                title=""
              >
                <i className="text-secondary-200 fa-solid fa-user-nurse"></i>
                <p>
                  {hospital.overview.numberOfNurses.toLocaleString(
                    i18n.language,
                  )}
                </p>
              </span>
              <span
                className="flex items-center justify-end gap-1 border"
                title=""
              >
                <i className="text-secondary-200 fa-solid fa-hospital-user"></i>
                <p>
                  {hospital.overview.totalPatients.toLocaleString(
                    i18n.language,
                  )}
                </p>
              </span>
            </div>
          </li>
        ))}
      </ul> */}
    </section>
  );
};

export default Overview;
