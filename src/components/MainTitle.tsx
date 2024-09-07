const MainTitle = ({ title }: { title: string }) => {
  return (
    <section className="mb-6 flex justify-end">
      <h1 className="w-fit bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-right text-3xl font-bold text-transparent">
        {title}
      </h1>
    </section>
  );
};

export default MainTitle;
