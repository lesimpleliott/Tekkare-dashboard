import i18n from "../../utils/i18n";

type KPICardProps = {
  icon: string;
  number: number;
  text: string;
};

const KPICard = ({ icon, number, text }: KPICardProps) => {
  return (
    <div className="KPICard flex min-w-[100px] flex-1 flex-col items-center justify-center gap-1 border p-4 md:flex-row md:gap-2">
      {/* ICON */}
      <i
        className={`${icon} flex w-14 justify-center text-4xl text-main-200 md:text-5xl`}
      ></i>

      {/* TEXTS */}
      <div className="w-fit text-center md:text-left">
        <h3 className="text-2xl font-bold md:text-3xl">
          {number.toLocaleString(i18n.language)}
        </h3>
        <p className="text-sm leading-3 text-main-200">{text}</p>
      </div>
    </div>
  );
};

export default KPICard;
