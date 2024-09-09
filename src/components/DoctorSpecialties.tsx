import { useTranslation } from "react-i18next";
import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import { useHospitalStore } from "../stores/datas.store";

type SpecialtyData = {
  specialty: string;
  numberOfDoctors: number;
  satisfactionRate: string;
};

const DoctorSpecialties = ({
  dataSpecialties,
}: {
  dataSpecialties: SpecialtyData[];
}) => {
  const { t, i18n } = useTranslation();
  const hospitals = useHospitalStore((state) => state.hospitals);

  const maxDoctors = () => {
    let max = 0;
    hospitals.forEach((hospital) => {
      hospital.doctorSpecialties.forEach((specialty) => {
        if (specialty.numberOfDoctors > max) {
          max = specialty.numberOfDoctors;
        }
      });
    });
    return max;
  };

  const calculateAverageDoctorsPerSpecialty = () => {
    const specialtyTotals: { [key: string]: number } = {};
    const specialtyCounts: { [key: string]: number } = {};

    hospitals.forEach((hospital) => {
      hospital.doctorSpecialties.forEach((specialty) => {
        const specialtyKey = JSON.stringify(specialty.specialty);

        if (!specialtyTotals[specialtyKey]) {
          specialtyTotals[specialtyKey] = 0;
          specialtyCounts[specialtyKey] = 0;
        }

        specialtyTotals[specialtyKey] += specialty.numberOfDoctors;
        specialtyCounts[specialtyKey] += 1;
      });
    });

    return Object.keys(specialtyTotals).map((key) => {
      const specialty = JSON.parse(key);
      return {
        specialty,
        average: specialtyTotals[key] / specialtyCounts[key],
      };
    });
  };

  // Combine les données de base avec les données de moyenne
  const combinedData = dataSpecialties.map((item) => {
    const averageItem = calculateAverageDoctorsPerSpecialty().find(
      (avg) => JSON.stringify(avg.specialty) === JSON.stringify(item.specialty),
    );
    return {
      ...item,
      average: averageItem ? averageItem.average : 0,
    };
  });

  return (
    <section className="mt-4">
      <h2>{t("doctorSpecialties")}</h2>

      <ResponsiveContainer width="100%" height={300}>
        <RadarChart data={combinedData}>
          <PolarGrid />
          <PolarAngleAxis dataKey={`specialty.${i18n.language}`} />
          <PolarRadiusAxis angle={140} domain={[0, maxDoctors()]} />
          <Radar
            name={t("numberOfDoctors")}
            dataKey="numberOfDoctors"
            stroke="#F962E5" // secondary-500
            fill="#f9aaf2" // secondary-200
            fillOpacity={0.4}
          />
          <Radar
            name={t("averageDoctors")}
            dataKey="average"
            stroke="#5dc8ff" // primary-500
            fillOpacity={0}
          />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </section>
  );
};

export default DoctorSpecialties;
