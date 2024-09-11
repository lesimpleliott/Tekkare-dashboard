export const calculateProgress = (startDate: string, endDate: string) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const today = new Date();

  const totalDays = end.getTime() - start.getTime();
  const elapsedDays = today.getTime() - start.getTime();

  return Math.round((elapsedDays / totalDays) * 100);
};
