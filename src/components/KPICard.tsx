import i18n from "../utils/i18n";

type KPICardProps = {
  icon: string;
  number: number;
  text: string;
};

const KPICard = ({ icon, number, text }: KPICardProps) => {
  return (
    <div className="flex min-w-[100px] flex-1 flex-col items-center justify-center gap-1 rounded-md bg-gray-50 px-4 py-4 text-background shadow-lg md:flex-row md:gap-2">
      {/* ICON */}
      <i
        className={`${icon} flex w-14 justify-center text-4xl text-background/30 md:text-5xl`}
      ></i>

      {/* TEXTS */}
      <div className="w-28 text-center md:text-left">
        <h2 className="text-2xl font-bold md:text-3xl">
          {number.toLocaleString(i18n.language)}
        </h2>
        <p className="text-sm leading-3">{text}</p>
      </div>
    </div>
  );
};

export default KPICard;
