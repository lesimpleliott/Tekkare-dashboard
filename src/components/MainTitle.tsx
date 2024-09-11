type MainTitleProps = {
  title: string;
  subtitle?: string;
};

const MainTitle = ({ title, subtitle }: MainTitleProps) => {
  return (
    <section className="fixed right-0 top-0 z-10 flex w-full justify-end bg-gradient-to-b from-main-500 from-30% to-transparent p-4 pl-14 lg:justify-center">
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
