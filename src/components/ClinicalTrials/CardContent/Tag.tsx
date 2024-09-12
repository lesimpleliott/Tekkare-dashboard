const Tag = ({
  condition,
  textPrimary,
  textSecondary,
}: {
  condition: boolean;
  textPrimary: string;
  textSecondary: string;
}) => {
  return (
    <p
      className={`h-6 text-nowrap rounded-full border-2 px-2 text-sm font-semibold ${
        condition
          ? "border-primary-500 bg-primary-100 text-primary-500"
          : "border-secondary-500 bg-secondary-100 text-secondary-500"
      }`}
    >
      {condition ? textPrimary : textSecondary}
    </p>
  );
};

export default Tag;
