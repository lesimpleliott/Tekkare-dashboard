import { useTranslation } from "react-i18next";
import i18n from "../../utils/i18n";

type CustomTooltipProps = {
  active?: boolean;
  payload?: {
    value: number;
    stroke: string;
    name: string;
  }[];
  label?: string;
  year: number;
};

const CustomTooltip = ({
  active,
  payload,
  label,
  year,
}: CustomTooltipProps) => {
  const { t } = useTranslation();

  if (active && payload && payload.length) {
    const translatedMonth = t(`${label}`);

    return (
      <div className="bg-white p-2 shadow-lg">
        <p className="font-medium">
          {`${translatedMonth}`} {year}
        </p>
        {payload.map((entry, index) => (
          <p
            key={index}
            style={{ color: entry.stroke }}
          >{`${entry.name} : ${entry.value.toLocaleString(i18n.language)}`}</p>
        ))}
      </div>
    );
  }

  return null;
};

export default CustomTooltip;
