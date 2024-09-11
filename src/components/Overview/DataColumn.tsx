type DataColumnProps = {
  data: string;
  icon: string;
  tooltip: string;
};

const DataColumn = ({ data, icon, tooltip }: DataColumnProps) => {
  return (
    <td className="group relative cursor-pointer">
      <div className="flex flex-col items-center gap-x-1 pt-1 sm:flex-row">
        <i className={`${icon}`}></i>
        <p className="min-w-[50px] text-center font-medium">{data}</p>
      </div>
      <span className="toolTip hidden group-hover:block">{tooltip}</span>
    </td>
  );
};

export default DataColumn;
