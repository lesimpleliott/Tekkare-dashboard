type MainTitleProps = {
  title: string;
  subtitle?: string;
};

const MainTitle = ({ title, subtitle }: MainTitleProps) => {
  return (
    <section className="mb-6 ml-14 flex justify-end">
      <h1 className="from-primary-500 to-secondary-500 w-fit bg-gradient-to-r bg-clip-text text-right text-3xl font-bold text-transparent">
        <span className="">{title}</span>
        {subtitle && (
          <span className="block text-lg font-medium text-gray-50">
            {subtitle}
          </span>
        )}
      </h1>
    </section>
  );
};

export default MainTitle;
