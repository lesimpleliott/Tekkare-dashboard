type MainTitleProps = {
  title: string;
  subtitle?: string;
};

const MainTitle = ({ title, subtitle }: MainTitleProps) => {
  return (
    <section className="mb-6 ml-14 flex justify-end lg:ml-0 lg:justify-center">
      <h1 className="text-right lg:text-center">
        <span className="w-fit bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-3xl font-bold text-transparent lg:text-4xl">
          {title}
        </span>
        {subtitle && (
          <span className="block text-lg font-medium text-gray-50 lg:text-xl">
            {subtitle}
          </span>
        )}
      </h1>
    </section>
  );
};

export default MainTitle;
