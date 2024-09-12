import { useTranslation } from "react-i18next";
import { capitalize } from "../../../utils/capitalize";

const InfoText = ({
  children,
  text,
  icon,
}: {
  children: React.ReactNode;
  text: string;
  icon: string;
}) => {
  const { i18n } = useTranslation();

  return (
    <p>
      <strong>
        <i className={`${icon} min-w-4 text-center text-main-200`}></i>{" "}
        {capitalize(text)}
        {i18n.language === "fr" ? " : " : ": "}
      </strong>
      {children}
    </p>
  );
};

export default InfoText;
