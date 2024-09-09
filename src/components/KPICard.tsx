import i18n from "../utils/i18n";

type KPICardProps = {
  icon: string;
  number: number;
  text: string;
};

const KPICard = ({ icon, number, text }: KPICardProps) => {
  return (
    <div className="KPICard p-4 flex min-w-[100px] flex-1 flex-col items-center justify-center gap-1 md:flex-row md:gap-2">
      {/* ICON */}
      <i
        className={`${icon} text-main-200 flex w-14 justify-center text-4xl md:text-5xl`}
      ></i>

      {/* TEXTS */}
      <div className="w-28 text-center md:text-left">
        <h3 className="text-2xl font-bold md:text-3xl">
          {number.toLocaleString(i18n.language)}
        </h3>
        <p className="text-main-200 text-sm leading-3">{text}</p>
      </div>
    </div>
  );
};

export default KPICard;
