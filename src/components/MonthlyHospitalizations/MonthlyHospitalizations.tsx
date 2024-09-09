import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useHospitalStore } from "../../stores/datas.store";
import i18n from "../../utils/i18n";
import CustomTooltip from "./CustomToolTip";

// Supprimer les erreurs liées aux defaultProps (reCharts issue)
const error = console.error;
console.error = (...args: string[]) => {
  if (/defaultProps/.test(args[0])) return;
  error(...args);
};

const MonthlyHospitalizations = () => {
  const hospitals = useHospitalStore((state) => state.hospitals);
  const [selectedYear, setSelectedYear] = useState(2022);

  const years = [
    ...new Set(
      hospitals.flatMap((hospital) =>
        hospital.monthlyHospitalizations.map((data) => data.year),
      ),
    ),
  ];

  const { t } = useTranslation();

  // Filtrer les données en fonction de l'année sélectionnée
  const filteredData = useMemo(() => {
    // Traduire les mois
    const translateMonth = (month: string) => t(`months.${month}`).slice(0, 3);

    const months = Array.from(
      new Set(
        hospitals.flatMap((hospital) =>
          hospital.monthlyHospitalizations
            .filter((m) => m.year === selectedYear)
            .map((m) => m.month),
        ),
      ),
    );

    return months.map((month) => {
      const monthData: { [key: string]: number | string } = {
        month: translateMonth(month),
      };

      hospitals.forEach((hospital) => {
        const hospitalData = hospital.monthlyHospitalizations.find(
          (m) => m.month === month && m.year === selectedYear,
        );
        monthData[hospital.name[i18n.language as keyof typeof hospital.name]] =
          hospitalData ? hospitalData.value : 0;
      });

      return monthData;
    });
  }, [hospitals, selectedYear, t]);

  // En cas d'erreur ou de données manquantes
  if (!hospitals || hospitals.length === 0) {
    return <p>Aucune donnée disponible</p>;
  }

  return (
    <section className="h-[400px]">
      <div className="mt-6 flex flex-col items-center justify-center gap-x-4 gap-y-2 pb-4 sm:flex-row sm:justify-between">
        <h2>{t("monthlyHospitalizations")}</h2>
        <div className="flex justify-end gap-2">
          {years.map((year, index) => (
            <button
              key={index}
              className={`filterButton ${selectedYear === year ? "active" : ""}`}
              onClick={() => setSelectedYear(year)}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={filteredData}>
          <CartesianGrid strokeDasharray="3 3" fill="#000" fillOpacity={0.4} />
          <XAxis
            dataKey="month"
            className="text-sm sm:text-base"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis
            hide={true}
            type="number"
            domain={["dataMin - 50", "dataMax + 50"]}
          />
          <Tooltip content={<CustomTooltip year={selectedYear} />} />
          <Legend />

          {/* Créer une ligne par hôpital */}
          {hospitals.map((hospital, index) => (
            <Line
              key={hospital.id}
              type="monotone"
              dataKey={
                hospital.name[i18n.language as keyof typeof hospital.name]
              }
              stroke={`var(--hospital${index + 1})`}
              activeDot={{ r: 8 }}
              name={hospital.location.replace(/, France/, "")}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
};

export default MonthlyHospitalizations;
