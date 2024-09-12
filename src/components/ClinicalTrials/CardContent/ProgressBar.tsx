const ProgressBar = ({ progress }: { progress: number }) => {
  const isCompleted = progress >= 100;

  return (
    <div className="flex items-center justify-center gap-2">
      <div className="relative h-3 w-full rounded-full bg-main-100">
        <span
          className={`absolute h-full rounded-full transition-all duration-500 ${
            isCompleted ? "w-full bg-primary-500" : "bg-secondary-500"
          }`}
          style={{
            width: isCompleted ? "100%" : `${Math.min(progress, 100)}%`,
          }}
        ></span>
      </div>
      <p className="font-medium">{Math.min(progress, 100)}%</p>
    </div>
  );
};

export default ProgressBar;
